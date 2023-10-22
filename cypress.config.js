const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //chromeWebSecurity: false,
  //defaultCommandTimeout: 20000,
  //pageLoadTimeout: 30000,
  //video: false,  
  e2e: {
    baseUrl: 'https://google.com/',
    //slowTestThreshold: 1000,
  },
});