import { BotCommand } from '@extensions/BotCommand';

export default class ping extends BotCommand {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: 'Display latency',
            usage: '$ping',
            cooldown: 5000,
            slash: true,
            slashOptions: [
    
            ]

        })
    }
    async exec(message) {
        

        message.reply(`🏓Latency is ${message.createdTimestamp - Date.now()}ms. API Latency is ${Math.round(this.client.ws.ping)}ms`)
    }
}