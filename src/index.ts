import { CustomBrowser } from './common/Browser';
import { CustomPage } from './common/Page';
import CIAN_CONFIG from './sites/cian';

const start = async () => {
  const browser = new CustomBrowser();
  await browser.startBrowser();
  const page = await browser.openPage(CIAN_CONFIG.name);
  const cianPage = new CustomPage(CIAN_CONFIG, page);
  await cianPage.scrapRentInfo();
  await browser.stop();
};

(async () => {
  await start();
})();