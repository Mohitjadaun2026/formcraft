import { 
  Type, 
  AlignLeft, 
  List, 
  CheckSquare, 
  Calendar, 
  Mail, 
  Phone, 
  Hash, 
  Radio,
  File, 
  Upload, 
  Star, 
  LayoutGrid
} from 'lucide-react';

type BuilderSidebarProps = {
  onAddField: (fieldType: string) => void;
  onShowTemplates: () => void;
};

export function BuilderSidebar({ onAddField, onShowTemplates }: BuilderSidebarProps) {
  const fieldTypes = [
    { type: 'text', icon: <Type size={18} />, label: 'Text' },
    { type: 'textarea', icon: <AlignLeft size={18} />, label: 'Textarea' },
    { type: 'dropdown', icon: <List size={18} />, label: 'Dropdown' },
    { type: 'checkbox', icon: <CheckSquare size={18} />, label: 'Checkbox' },
    { type: 'radio', icon: <Radio size={18} />, label: 'Radio' },
    { type: 'date', icon: <Calendar size={18} />, label: 'Date' },
    { type: 'email', icon: <Mail size={18} />, label: 'Email' },
    { type: 'phone', icon: <Phone size={18} />, label: 'Phone' },
    { type: 'number', icon: <Hash size={18} />, label: 'Number' },
    { type: 'file', icon: <Upload size={18} />, label: 'File Upload' },
    { type: 'rating', icon: <Star size={18} />, label: 'Rating' }
  ];

  return (
    <div className="w-64 bg-white border-r h-full overflow-y-auto">
      <div className="p-4">
        <button 
          onClick={onShowTemplates}
          className="w-full bg-primary-100 text-primary-700 font-medium p-3 rounded-lg mb-4 flex items-center justify-center gap-2 hover:bg-primary-200 transition-colors"
        >
          <LayoutGrid size={18} />
          <span>Load Template</span>
        </button>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Form Fields
          </h3>
          <div className="space-y-1">
            {fieldTypes.map((field) => (
              <button
                key={field.type}
                onClick={() => onAddField(field.type)}
                className="w-full text-left p-2 rounded-md hover:bg-primary-50 flex items-center gap-2 text-gray-700 hover:text-primary-700 transition-colors"
              >
                <span className="text-gray-500">{field.icon}</span>
                <span>{field.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}