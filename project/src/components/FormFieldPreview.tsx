import { FormField } from '../types';

type FormFieldPreviewProps = {
  field: FormField;
};

export function FormFieldPreview({ field }: FormFieldPreviewProps) {
  const renderFieldInput = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'number':
        return (
          <input
            type={field.type === 'number' ? 'number' : field.type === 'email' ? 'email' : 'text'}
            placeholder={field.placeholder}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled
          />
        );
      
      case 'textarea':
        return (
          <textarea
            placeholder={field.placeholder}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled
          />
        );
      
      case 'dropdown':
        return (
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled
          >
            <option value="" disabled selected>
              {field.placeholder || 'Select an option'}
            </option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.length ? (
              field.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${field.id}-${index}`}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    disabled
                  />
                  <label htmlFor={`${field.id}-${index}`} className="ml-2 block text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))
            ) : (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={field.id}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  disabled
                />
                <label htmlFor={field.id} className="ml-2 block text-sm text-gray-700">
                  {field.label}
                </label>
              </div>
            )}
          </div>
        );
      
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.id}-${index}`}
                  name={field.id}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  disabled
                />
                <label htmlFor={`${field.id}-${index}`} className="ml-2 block text-sm text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      
      case 'date':
        return (
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled
          />
        );
      
      case 'file':
        return (
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
          </div>
        );
      
      case 'rating':
        return (
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="text-gray-300 hover:text-yellow-400 text-2xl">★</button>
            ))}
          </div>
        );
      
      default:
        return <div>Unsupported field type</div>;
    }
  };

  return (
    <div>
      <div className="mb-1 flex items-center">
        <label className="block text-sm font-medium text-gray-700">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      {renderFieldInput()}
      {field.helpText && (
        <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>
      )}
    </div>
  );
}