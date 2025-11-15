import React from 'react';

interface DebugLogProps {
  logs: Array<{
    type: 'error' | 'info' | 'success';
    message: string;
    timestamp: string;
  }>;
}

export function DebugLog({ logs }: DebugLogProps) {
  if (logs.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold mb-2">Debug Log</h3>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              log.type === 'error' ? 'bg-red-50 text-red-700' :
              log.type === 'success' ? 'bg-green-50 text-green-700' :
              'bg-blue-50 text-blue-700'
            }`}
          >
            <div className="text-sm font-medium">{log.message}</div>
            <div className="text-xs opacity-75">{log.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}