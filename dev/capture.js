import captureWebsite from 'capture-website';
// this could probably be automated with gh actions somehow
const devHost = 'http://localhost:5173/#/'
await captureWebsite.file(devHost, 'public/portfolio.png', {overwrite: true});