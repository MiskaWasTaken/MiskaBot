import { BotCommand } from '@extensions/BotCommand';
const prettyMilliseconds = require("pretty-ms");


export default class uptime extends BotCommand {
    constructor() {
        super('uptime', {
            aliases: ['uptime'],
            description: 'uptime',
            usage: '$uptime',
            cooldown: 10000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {

        message.reply(`Uptime: ${prettyMilliseconds(this.client.uptime)}`)
        

    }
}