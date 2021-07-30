import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

export default class avatar extends BotCommand {
    constructor() {
        super('avatar', {
            aliases: ['avatar'],
            description: 'Show someones avatar',
            usage: '$avatar',

            args: [
                {
                    id: 'pain',
                    type: 'user',
                    match: 'restContent'
                }
            ]
        })
    }

    async exec(message, args) {

        const pain = args.pain

        //const user = message.mentions.users.first() || message.author;

        const avatar = pain.displayAvatarURL({ size: 4096, dynamic: true })

        const embed = new MessageEmbed()
            .setTitle(`${pain}'s Avatar`)
            .setURL(avatar)
            .setImage(avatar)
            .setColor('RANDOM')
        message.reply({ embeds: [embed] });
    }
}
