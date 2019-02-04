import * as http from 'http';
import { app } from './app';

const server = http.createServer(app);

const port = Number(process.env.PORT) || 3000;
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListen);

function onError(error) {
  console.error(error);
}

function onListen() {
  const addr = server.address();
  const bind = typeof addr === 'string'
                ? `pipe ${addr}`
                : `${addr['address']}:${addr['port']}`;
  console.debug(`Listening on ${bind}`);
}
