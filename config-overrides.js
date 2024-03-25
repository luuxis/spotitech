const paths = require('react-scripts/config/paths')
const path = require('path')

paths.appSrc = path.resolve(__dirname, 'client', 'src')
paths.appIndexJs = path.resolve(__dirname, 'client', 'src', 'index.js')
paths.appHtml = path.resolve(__dirname, 'client', 'public', 'index.html')
paths.appPublic = path.resolve(__dirname, 'client', 'public')