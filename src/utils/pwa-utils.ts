import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('New content is available! Click OK to refresh.')) {
          window.location.reload();
        }
      }
    });

    wb.addEventListener('activated', () => {
      console.log('Service worker activated');
    });

    wb.register().catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  }
}

export function checkConnectivity() {
  const updateOnlineStatus = () => {
    const condition = navigator.onLine ? 'online' : 'offline';
    document.body.dataset.connectionStatus = condition;
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}