import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';

export default class ahegao extends BotCommand {
    constructor() {
        super('1', {
            aliases: ['1'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '-ahegao',
            cooldown: 2000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }
    async exec(message) {

        if (!message.channel.nsfw){
            message.reply({ embeds: [this.client.notNsfwEmbed] }).then(ms => {
                setTimeout(() => ms.delete(), 5000)
                
                return;
        })}

        message.reply({ embeds: [await utils.hentai('ahegao')]})

    
}}