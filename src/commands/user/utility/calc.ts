import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const math = require('mathjs')

export default class calc extends BotCommand {
    constructor() {
        super('calc', {
            aliases: ['calc'],
            description: 'When you forgot to install the calculator app moment',
            usage: '$calc',
            args: [
                {
                    id: 'equation',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
// if an incorrect math statment is provided say "please provide a correct math statment"
        if (message.content.includes(':')) {
            return message.channel.send('That question is too powerful for me!')
        }

        const sum = args.equation

        if (!sum) return message.channel.send('please provide a maths equation')


        const result = JSON.stringify(math.evaluate(sum))

        const calc = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**${args.equation} = ${result}**`)
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg')


        message.reply({ embeds: [calc] })
    }
}