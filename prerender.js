const plugins = [];
const PrerenderSPAPlugin = require('./prerender-spa-plugin.js');
const Renderer = require('./render.config.js');
const renderchrome = new Renderer(
  {
    headless: true,
    timeout: 60000,
    renderAfterTime: 5000,
    maxConcurrentRoutes: 1,
    renderAfterElementExists: '#render-finish',
    outputDir: join(__dirname, 'dist'),
  },
  publicPath,
);
plugins.push(
  new PrerenderSPAPlugin({
    staticDir: join(__dirname, 'dist'),
    outputDir: join(__dirname, 'dist'),
    routes: ['/index.html', '/termad.html'],
    renderer: renderchrome,
  }),
);
module.exports = plugins;