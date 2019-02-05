import * as Log4js from 'log4js';

import * as walk8243Logger from 'walk8243-logger';

export const logger: Log4js.Logger = walk8243Logger.nocolor(process.env.NODE_ENV || 'development');
