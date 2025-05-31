import { useState } from 'react';
import { FormField } from '../types';
import { Grip, Trash2 } from 'lucide-react';
import { FormFieldPreview } from './FormFieldPreview';

type FormPreviewProps = {
  title: string;
  description: string;
  fields: FormField[];
  onSelectField: (field: FormField) => void;
  onReorderFields: (fields: FormField[]) => void;
  selectedFieldId: string | undefined;
  onDeleteField: (fieldId: string) => void;
};

export function FormPreview({
  title,
  description,
  fields,
  onSelectField,
  onReorderFields,
  selectedFieldId,
  onDeleteField,
}: FormPreviewProps) {
  const [draggedFieldId, setDraggedFieldId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, fieldId: string) => {
    setDraggedFieldId(fieldId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetFieldId: string) => {
    e.preventDefault();
    
    if (draggedFieldId && draggedFieldId !== targetFieldId) {
      const reorderedFields = [...fields];
      const draggedIndex = fields.findIndex((field) => field.id === draggedFieldId);
      const targetIndex = fields.findIndex((field) => field.id === targetFieldId);
      
      const [draggedField] = reorderedFields.splice(draggedIndex, 1);
      reorderedFields.splice(targetIndex, 0, draggedField);
      
      onReorderFields(reorderedFields);
    }
    
    setDraggedFieldId(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 min-h-[500px]">
      {fields.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Your form is empty</p>
          <p className="text-sm">Add form fields from the sidebar</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="space-y-4">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`border rounded-lg transition-all ${
                  selectedFieldId === field.id
                    ? 'border-primary-400 bg-primary-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => onSelectField(field)}
                draggable
                onDragStart={(e) => handleDragStart(e, field.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, field.id)}
              >
                <div className="flex items-start">
                  <div className="p-4 cursor-grab text-gray-400 hover:text-gray-600">
                    <Grip size={20} />
                  </div>
                  <div className="flex-grow py-4 pr-4">
                    <FormFieldPreview field={field} />
                  </div>
                  <button
                    className="p-4 text-gray-400 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteField(field.id);
                    }}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition-colors">
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}