import { FormData, FormResponse } from '../types';

// Prefix for all localStorage keys to avoid conflicts
const STORAGE_PREFIX = 'formcraft_';

export const storageService = {
  // Form Data Storage
  saveForm: (form: FormData): void => {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}form_${form.id}`, JSON.stringify(form));
      
      // Update form list
      const formList = storageService.getFormList();
      if (!formList.includes(form.id)) {
        formList.push(form.id);
        localStorage.setItem(`${STORAGE_PREFIX}form_list`, JSON.stringify(formList));
      }
    } catch (error) {
      console.error('Error saving form:', error);
    }
  },
  
  getForm: (formId: string): FormData | null => {
    try {
      const formData = localStorage.getItem(`${STORAGE_PREFIX}form_${formId}`);
      return formData ? JSON.parse(formData) : null;
    } catch (error) {
      console.error('Error retrieving form:', error);
      return null;
    }
  },
  
  deleteForm: (formId: string): void => {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}form_${formId}`);
      
      // Update form list
      const formList = storageService.getFormList().filter(id => id !== formId);
      localStorage.setItem(`${STORAGE_PREFIX}form_list`, JSON.stringify(formList));
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  },
  
  getFormList: (): string[] => {
    try {
      const formList = localStorage.getItem(`${STORAGE_PREFIX}form_list`);
      return formList ? JSON.parse(formList) : [];
    } catch (error) {
      console.error('Error retrieving form list:', error);
      return [];
    }
  },
  
  // Form Response Storage
  saveResponse: (response: FormResponse): void => {
    try {
      // Get existing responses for this form
      const responses = storageService.getResponses(response.formId);
      responses.push(response);
      
      localStorage.setItem(
        `${STORAGE_PREFIX}responses_${response.formId}`,
        JSON.stringify(responses)
      );
    } catch (error) {
      console.error('Error saving response:', error);
    }
  },
  
  getResponses: (formId: string): FormResponse[] => {
    try {
      const responses = localStorage.getItem(`${STORAGE_PREFIX}responses_${formId}`);
      return responses ? JSON.parse(responses) : [];
    } catch (error) {
      console.error('Error retrieving responses:', error);
      return [];
    }
  },
  
  deleteResponse: (formId: string, responseId: string): void => {
    try {
      const responses = storageService.getResponses(formId).filter(
        response => response.responseId !== responseId
      );
      
      localStorage.setItem(
        `${STORAGE_PREFIX}responses_${formId}`,
        JSON.stringify(responses)
      );
    } catch (error) {
      console.error('Error deleting response:', error);
    }
  },
  
  clearAllResponses: (formId: string): void => {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}responses_${formId}`);
    } catch (error) {
      console.error('Error clearing responses:', error);
    }
  }
};