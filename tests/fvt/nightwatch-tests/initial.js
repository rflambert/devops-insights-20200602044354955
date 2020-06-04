

module.exports = {
    '@disabled': false,  // This will prevent the test module from running.
  
    after: (browser, done) => {
        console.log('After called')
      browser
        .closeWindow()
        .end(done);
    },

    'Navigate to the NZ Weather - valid city name': async (browser) => {
        const nzweather = browser.page.nzweather();
        const { cityName } = nzweather.section;
    
        await nzweather.navigate().waitForElementVisible('@inputText');

        await nzweather.setValue('@inputText', [
            'Auckland',
            browser.Keys.ENTER
          ]);
    
        await nzweather.waitForElementVisible('@table');

        cityName.expect.element('@firstApp').text.to.equal('Auckland');
    },

    'Navigate to the nzweather - invalid city name': async (browser) => {
        const nzweather = browser.page.nzweather();
    
        await nzweather.navigate().waitForElementVisible('@inputText');

        await nzweather.setValue('@inputText', [
            'London',
            browser.Keys.ENTER
          ]);
    
        await nzweather.waitForElementNotPresent('@table');

        nzweather.expect.element('@cityNotFound').text.to.equal('city not found');
    },

    'Navigate to NZ Weather - click city marker': async (browser) => {
      const nzweather = browser.page.nzweather();
      const { cityName } = nzweather.section;

      await nzweather.waitForElementVisible('marker').moveToElement('marker', undefined, undefined).click('marker');

      await nzweather.waitForElementVisible('@table');

      cityName.expect.element('@firstApp').text.to.equal('Auckland');
    }
};