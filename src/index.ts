import { BotClient } from './lib/extensions/BotClient';
import * as config from './config/options';

const client = new BotClient(config);
client.start();
