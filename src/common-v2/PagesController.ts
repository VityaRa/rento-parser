import Logger from "log4js";
import { PagesMap } from "../types";
import { WebsiteConfig } from "../types/config";
import { CustomPage } from "./Page";

export class PagesController {
  map: PagesMap;
  logger = Logger.getLogger('PagesController');

  constructor() {
    this.map = {};
    this.logger.level = 'debug'
  }

  async add(cfg: WebsiteConfig) {
    this.logger.log('page opened')
    this.map[cfg.name] = new CustomPage(cfg);
    return this.map[cfg.name];
  }

  async delete(key: string) {
    delete this.map[key];
  }

  async clear() {
    for (const key in this.map) {
      await this.delete(key);
    }
  }
}