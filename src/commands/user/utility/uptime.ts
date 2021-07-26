import { BotCommand } from '@extensions/BotCommand';
const prettyMilliseconds = require("pretty-ms");


export default class uptime extends BotCommand {
    constructor() {
        super('uptime', {
            aliases: ['uptime'],
            description: 'uptime',
            usage: '$uptime'
        })
    }
    async exec(message) {

        message.channel.send(`Uptime: ${prettyMilliseconds(this.client.uptime)}`)
        

    }
}