import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';


export default class creampie extends BotCommand {
    constructor() {
        super('5', {
            aliases: ['5'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '-creampie',
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

        message.reply({ embeds: [await utils.hentai('creampie')]})
    }
}