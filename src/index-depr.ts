import { PagesController } from './common-v2/PagesController';
import CIAN_CONFIG from './sites/cian';
const websites = [CIAN_CONFIG];

const start = async () => {
  // const browser = new CustomBrowser();
  // const pagesController = new PagesController();
  // websites.map(async(website) => {
  //   const page = await pagesController.add(website);
  //   await page.parse();
  // })

};

(async () => {
  await start();
})();