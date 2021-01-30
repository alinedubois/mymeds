const scope = require('../steps_definitions/support/scope');

const ouvrir = async (pageObject) => {
    if (!scope.browser) {
        scope.browser = await scope.driver.launch();
        scope.context.currentPage = await scope.browser.newPage();
        scope.context.currentPage.setViewport({ width: 1280, height: 1024 });
        return await scope.context.currentPage.goto(`https://mymeds-dev.surge.sh${pageObject.adresse}`);
    }
};

module.exports = ouvrir;
