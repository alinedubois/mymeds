const scope = require('../steps_definitions/support/scope');

const ouvrir = async (pageObject) => {

    async function openNewPage() {
        scope.context.currentPage = await scope.browser.newPage();
        scope.context.currentPage.setViewport({width: 920, height: 900});
        return await scope.context.currentPage.goto(`https://mymeds-dev.surge.sh${pageObject.adresse}`);
    }

    if (!scope.browser) {
        scope.browser = await scope.driver.launch();
        return await openNewPage();
    }
    if (scope.browser && !scope.context.currentPage) {
        return await openNewPage();
    }
};

module.exports = ouvrir;
