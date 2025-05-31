import { useState } from 'react';
import { BuilderSidebar } from './BuilderSidebar';
import { FormPreview } from './FormPreview';
import { FormSettings } from './FormSettings';
import { templates } from '../data/templates';
import { FormField, FormTemplate } from '../types';
import { LampDesk as Desktop, Smartphone, Tablet } from 'lucide-react';
import { FormFieldEditor } from './FormFieldEditor';

export function FormBuilder() {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedField, setSelectedField] = useState<FormField | null>(null);
  const [formTitle, setFormTitle] = useState('Untitled Form');
  const [formDescription, setFormDescription] = useState('Form description');
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([{ title: 'Step 1', fields: [] as FormField[] }]);
  const [showTemplates, setShowTemplates] = useState(false);

  const handleAddField = (fieldType: string) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type: fieldType,
      label: `New ${fieldType} Field`,
      placeholder: `Enter ${fieldType}...`,
      required: false,
      options: fieldType === 'dropdown' || fieldType === 'radio' ? ['Option 1', 'Option 2'] : [],
      helpText: '',
    };
    
    setFormFields([...formFields, newField]);
    setSelectedField(newField);
  };

  const handleSelectField = (field: FormField) => {
    setSelectedField(field);
  };

  const handleUpdateField = (updatedField: FormField) => {
    setFormFields(
      formFields.map((field) => (field.id === updatedField.id ? updatedField : field))
    );
    setSelectedField(updatedField);
  };

  const handleDeleteField = (fieldId: string) => {
    setFormFields(formFields.filter((field) => field.id !== fieldId));
    if (selectedField && selectedField.id === fieldId) {
      setSelectedField(null);
    }
  };

  const handleReorderFields = (reorderedFields: FormField[]) => {
    setFormFields(reorderedFields);
  };

  const handleLoadTemplate = (template: FormTemplate) => {
    setFormTitle(template.title);
    setFormDescription(template.description);
    setFormFields(template.fields);
    setShowTemplates(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-144px)]">
      <BuilderSidebar 
        onAddField={handleAddField} 
        onShowTemplates={() => setShowTemplates(true)} 
      />
      
      <div className="flex-grow flex flex-col">
        <div className="bg-white p-4 border-b flex justify-between items-center">
          <div>
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="text-xl font-bold border-none focus:outline-none focus:ring-1 focus:ring-primary-500 px-2 py-1 rounded"
              placeholder="Form Title"
            />
          </div>
          <div className="flex space-x-2">
            <button
              className={`p-2 rounded ${viewMode === 'desktop' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setViewMode('desktop')}
              title="Desktop View"
            >
              <Desktop size={20} />
            </button>
            <button
              className={`p-2 rounded ${viewMode === 'tablet' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setViewMode('tablet')}
              title="Tablet View"
            >
              <Tablet size={20} />
            </button>
            <button
              className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-100'}`}
              onClick={() => setViewMode('mobile')}
              title="Mobile View"
            >
              <Smartphone size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-grow">
          <div className={`flex-grow overflow-auto p-4 ${
            viewMode === 'desktop' ? 'max-w-full' :
            viewMode === 'tablet' ? 'max-w-[768px] mx-auto' : 
            'max-w-[375px] mx-auto'
          }`}>
            <FormPreview
              title={formTitle}
              description={formDescription}
              fields={formFields}
              onSelectField={handleSelectField}
              onReorderFields={handleReorderFields}
              selectedFieldId={selectedField?.id}
              onDeleteField={handleDeleteField}
            />
          </div>
          
          {selectedField && (
            <div className="w-full md:w-80 bg-gray-50 border-l p-4 overflow-y-auto">
              <FormFieldEditor
                field={selectedField}
                onUpdateField={handleUpdateField}
                onClose={() => setSelectedField(null)}
              />
            </div>
          )}
        </div>
      </div>

      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Choose a Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className="border rounded-lg p-4 cursor-pointer hover:border-primary-400 hover:bg-primary-50"
                  onClick={() => handleLoadTemplate(template)}
                >
                  <h4 className="font-bold text-lg">{template.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{template.description}</p>
                  <div className="text-xs text-gray-500">{template.fields.length} fields</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowTemplates(false)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}