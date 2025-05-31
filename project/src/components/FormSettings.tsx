import { useState } from 'react';

export function FormSettings() {
  const [formSettings, setFormSettings] = useState({
    submitButtonText: 'Submit',
    showProgressBar: true,
    enableFormValidation: true,
    redirectUrl: '',
    showThankYouMessage: true,
    thankYouMessage: 'Thank you for your submission!',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormSettings({
      ...formSettings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-bold mb-4">Form Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Submit Button Text</label>
          <input
            type="text"
            name="submitButtonText"
            value={formSettings.submitButtonText}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showProgressBar"
            name="showProgressBar"
            checked={formSettings.showProgressBar}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="showProgressBar" className="ml-2 block text-sm text-gray-700">
            Show Progress Bar (for multi-step forms)
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableFormValidation"
            name="enableFormValidation"
            checked={formSettings.enableFormValidation}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="enableFormValidation" className="ml-2 block text-sm text-gray-700">
            Enable Form Validation
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Redirect URL After Submit</label>
          <input
            type="text"
            name="redirectUrl"
            value={formSettings.redirectUrl}
            onChange={handleChange}
            placeholder="https://example.com/thank-you"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="mt-1 text-xs text-gray-500">Leave empty to show thank you message instead</p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showThankYouMessage"
            name="showThankYouMessage"
            checked={formSettings.showThankYouMessage}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="showThankYouMessage" className="ml-2 block text-sm text-gray-700">
            Show Thank You Message
          </label>
        </div>

        {formSettings.showThankYouMessage && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Thank You Message</label>
            <textarea
              name="thankYouMessage"
              value={formSettings.thankYouMessage}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}