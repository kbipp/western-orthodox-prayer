if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/western-orthodox-prayer/sw.js', { scope: '/western-orthodox-prayer/' })})}