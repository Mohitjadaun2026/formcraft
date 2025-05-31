import { useState } from 'react';
import { FormBuilder } from './components/FormBuilder';
import { Header } from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState<'builder' | 'responses' | 'settings'>('builder');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {activeTab === 'builder' && <FormBuilder />}
        {activeTab === 'responses' && (
          <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Form Responses</h2>
            <p className="text-gray-600">This is where form responses will be displayed and can be exported to Excel.</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Form Settings</h2>
            <p className="text-gray-600">This is where you can configure global form settings.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;