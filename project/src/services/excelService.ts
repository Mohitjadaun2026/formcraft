import { FormField, FormResponse } from '../types';

export const excelService = {
  // Generate Excel file from form responses
  exportResponsesToExcel: (formTitle: string, responses: FormResponse[]): void => {
    if (responses.length === 0) {
      alert('No responses to export');
      return;
    }

    // In a real implementation, we would use a library like exceljs or xlsx
    // For this demo, we'll simulate the Excel export by creating a CSV
    const headers = Object.keys(responses[0].data);
    const csvContent = [
      headers.join(','),
      ...responses.map(response => 
        headers.map(header => JSON.stringify(response.data[header] || '')).join(',')
      )
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${formTitle.replace(/\s+/g, '-')}-responses.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // Import form fields from Excel
  importFieldsFromExcel: (file: File): Promise<FormField[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          // In a real implementation, we would parse Excel file
          // For this demo, we'll assume a CSV format
          const content = e.target?.result as string;
          const rows = content.split('\n');
          
          // Assume first row is headers
          const headers = rows[0].split(',');
          
          // Convert headers to form fields
          const fields: FormField[] = headers.map(header => ({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
            type: 'text', // Default to text
            label: header.trim().replace(/["']/g, ''),
            placeholder: `Enter ${header.trim().replace(/["']/g, '')}`,
            required: false,
          }));
          
          resolve(fields);
        } catch (error) {
          reject(new Error('Failed to parse Excel file'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read Excel file'));
      };
      
      reader.readAsText(file);
    });
  },
  
  // Import form responses from Excel
  importResponsesFromExcel: (file: File, formId: string): Promise<FormResponse[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          // In a real implementation, we would parse Excel file
          // For this demo, we'll assume a CSV format
          const content = e.target?.result as string;
          const rows = content.split('\n');
          
          // Assume first row is headers
          const headers = rows[0].split(',').map(h => h.trim().replace(/["']/g, ''));
          
          // Convert rows to form responses
          const responses: FormResponse[] = rows.slice(1).map((row, index) => {
            const values = row.split(',').map(v => v.trim().replace(/["']/g, ''));
            
            // Create data object from headers and values
            const data: Record<string, any> = {};
            headers.forEach((header, i) => {
              data[header] = values[i] || '';
            });
            
            return {
              formId,
              responseId: `imported-${index}-${Date.now()}`,
              submittedAt: new Date().toISOString(),
              data,
            };
          });
          
          resolve(responses);
        } catch (error) {
          reject(new Error('Failed to parse Excel file'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read Excel file'));
      };
      
      reader.readAsText(file);
    });
  }
};