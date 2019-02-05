import * as http from 'http';
import { app } from './app';
import { logger } from './lib/logger';

const server = http.createServer(app);

const port = Number(process.env.PORT) || 3000;
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListen);

function onError(error) {
  logger.error(error);
}

function onListen() {
  const addr = server.address();
  const bind = typeof addr === 'string'
                ? `pipe ${addr}`
                : `port ${addr['port']}`;
  logger.debug(`Listening on ${bind}`);
}
