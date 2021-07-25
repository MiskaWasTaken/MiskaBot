import { BotCommand } from '@extensions/BotCommand';
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

        if (message.content.includes(':')) {
            return message.channel.send('That question is too powerful for me!')
        }

        const sum = args.equation

        if (!sum) return message.channel.send('please provide a maths equation')

        const result = JSON.stringify(math.evaluate(sum))

        message.reply(`${args.equation} = ${result}`)
    }
}