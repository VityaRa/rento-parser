import { writeFile } from 'fs';
import Logger from 'js-logger';
import { default as _path } from 'node:path';
const baseDir = _path.resolve(__dirname, '../../output');
const logger = Logger.get('Files');

logger.info(`Dir path for files: ${baseDir}`)

export class Files {
  static gen(fileName: string, data: any) {
    const jsonFile = `${fileName}.json`;
    logger.info(`Starting file '${jsonFile}' saving`);
    writeFile(jsonFile, JSON.stringify(data), function (error) {
      if (error) {
        logger.error(`File 'jsonFile' saving error: ${error}`);
        throw error;
      }
      logger.info(`File '${jsonFile}' saved`);
    });
  }
}
