import { X, PlusCircle, MinusCircle } from 'lucide-react';
import { FormField } from '../types';

type FormFieldEditorProps = {
  field: FormField;
  onUpdateField: (field: FormField) => void;
  onClose: () => void;
};

export function FormFieldEditor({ field, onUpdateField, onClose }: FormFieldEditorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    onUpdateField({
      ...field,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddOption = () => {
    const options = [...(field.options || []), `Option ${(field.options?.length || 0) + 1}`];
    onUpdateField({ ...field, options });
  };

  const handleRemoveOption = (index: number) => {
    const options = [...(field.options || [])];
    options.splice(index, 1);
    onUpdateField({ ...field, options });
  };

  const handleUpdateOption = (index: number, value: string) => {
    const options = [...(field.options || [])];
    options[index] = value;
    onUpdateField({ ...field, options });
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Edit Field</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Field Type</label>
          <select
            name="type"
            value={field.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="dropdown">Dropdown</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="date">Date</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="number">Number</option>
            <option value="file">File Upload</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
          <input
            type="text"
            name="label"
            value={field.label}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {field.type !== 'checkbox' && field.type !== 'radio' && field.type !== 'file' && field.type !== 'rating' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Placeholder</label>
            <input
              type="text"
              name="placeholder"
              value={field.placeholder}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Help Text</label>
          <textarea
            name="helpText"
            value={field.helpText}
            onChange={handleChange}
            rows={2}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="required"
            name="required"
            checked={field.required}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="required" className="ml-2 block text-sm text-gray-700">
            Required Field
          </label>
        </div>

        {(field.type === 'dropdown' || field.type === 'radio' || field.type === 'checkbox') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
            <div className="space-y-2">
              {field.options?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleUpdateOption(index, e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <MinusCircle size={18} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddOption}
                className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
              >
                <PlusCircle size={18} className="mr-1" />
                Add Option
              </button>
            </div>
          </div>
        )}

        {/* Validation settings will go here in a future implementation */}
      </div>
    </div>
  );
}