import { BotCommand } from '@extensions/BotCommand';

export default class templateCommand extends BotCommand {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: 'display latency',
            usage: '$ping'

        })
    }
    async exec(message) {
        
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(this.client.ws.ping)}ms`)

    }
}