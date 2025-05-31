export interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  helpText?: string;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: string;
  };
}

export interface FormTemplate {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
}

export interface FormStep {
  title: string;
  fields: FormField[];
}

export interface FormData {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
  steps?: FormStep[];
  settings?: {
    submitButtonText: string;
    showProgressBar: boolean;
    enableFormValidation: boolean;
    redirectUrl: string;
    showThankYouMessage: boolean;
    thankYouMessage: string;
  };
}

export interface FormResponse {
  formId: string;
  responseId: string;
  submittedAt: string;
  data: Record<string, any>;
}