import { useState } from 'react';
import { ClipboardList, Settings, Database, Upload, Download, Share2 } from 'lucide-react';

type HeaderProps = {
  activeTab: 'builder' | 'responses' | 'settings';
  setActiveTab: (tab: 'builder' | 'responses' | 'settings') => void;
};

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [formId, setFormId] = useState<string>('');
  const [showShareModal, setShowShareModal] = useState(false);

  const handleExportToExcel = () => {
    // Excel export logic will be implemented here
    alert('Exporting to Excel...');
  };

  const handleImportFromExcel = () => {
    // Excel import logic will be implemented here
    alert('Importing from Excel...');
  };

  const handleShareForm = () => {
    setShowShareModal(true);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="bg-primary-600 p-2 rounded mr-2">
              <ClipboardList size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">FormCraft</h1>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleImportFromExcel}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
            >
              <Upload size={16} />
              <span>Import</span>
            </button>
            <button
              onClick={handleExportToExcel}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
            >
              <Download size={16} />
              <span>Export</span>
            </button>
            <button
              onClick={handleShareForm}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="flex mt-4 border-b">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'builder'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => setActiveTab('builder')}
          >
            <span className="flex items-center gap-1">
              <ClipboardList size={18} />
              Form Builder
            </span>
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'responses'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => setActiveTab('responses')}
          >
            <span className="flex items-center gap-1">
              <Database size={18} />
              Responses
            </span>
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'settings'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="flex items-center gap-1">
              <Settings size={18} />
              Settings
            </span>
          </button>
        </div>
      </div>

      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Share Your Form</h3>
            <p className="text-gray-600 mb-4">Your form is available at:</p>
            <div className="flex mb-4">
              <input
                type="text"
                value={`https://formcraft.app/form/${formId || 'ABC123'}`}
                readOnly
                className="flex-grow p-2 border rounded-l-md"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md">Copy</button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}