import { useState, useEffect } from 'react';
import { Download, Trash2, Users, Building, Eye, EyeOff } from 'lucide-react';
import { getSubmissions, exportToCSV, clearSubmissions } from '../utils/dataManager';
import { Submission } from '../types';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    setSubmissions(getSubmissions());
  };

  const handleExport = () => {
    exportToCSV();
  };

  const handleClear = () => {
    clearSubmissions();
    setSubmissions([]);
    setShowConfirmClear(false);
  };

  const creatorSubmissions = submissions.filter(s => s.type === 'creator');
  const brandSubmissions = submissions.filter(s => s.type === 'brand');

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all"
          title="Show Admin Panel"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <EyeOff className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Creators</span>
              </div>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mt-1">
                {creatorSubmissions.length}
              </div>
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Building className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Brands</span>
              </div>
              <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-100 mt-1">
                {brandSubmissions.length}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Total</span>
              </div>
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mt-1">
                {submissions.length}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleExport}
              disabled={submissions.length === 0}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={loadSubmissions}
              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <span>Refresh</span>
            </button>

            <button
              onClick={() => setShowConfirmClear(true)}
              disabled={submissions.length === 0}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear All</span>
            </button>
          </div>

          {/* Submissions Table */}
          <div className="overflow-auto max-h-96">
            {submissions.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No submissions yet
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Type</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Name</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Email</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Niche/Category</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          submission.type === 'creator' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
                        }`}>
                          {submission.type}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-900 dark:text-white">{submission.name}</td>
                      <td className="px-4 py-2 text-gray-900 dark:text-white">{submission.email}</td>
                      <td className="px-4 py-2 text-gray-900 dark:text-white">
                        {submission.type === 'creator' 
                          ? (submission as any).niche 
                          : (submission as any).category}
                      </td>
                      <td className="px-4 py-2 text-gray-500 dark:text-gray-400">
                        {new Date(submission.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Confirm Clear Modal */}
        {showConfirmClear && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Clear All Submissions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This action cannot be undone. All submission data will be permanently deleted.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleClear}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Yes, Clear All
                </button>
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;