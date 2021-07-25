import { MessageEmbed } from 'discord.js';
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
                    id: '1',
                    type: 'number',
                    default: 0
                },
                {
                    id: '2',
                    type: 'number',
                    default: 0
                }
            ]
        })
    }
    async exec(message, args) {
        const crash = [':'];

if(message.content.includes(':')){

  return message.channel.send('That question is too powerful for me!'); return;
} 

console.log(args)
    //const question = args.calc(' ') 
    const sum =  args.numOne + args.numTwo + args.numThree;

    if(!sum) return message.channel.send('please provide a maths equation')

    let result;
    try {
        result = math.evaluate(sum);


    } catch (e) {
        return message.channel.send('please provide a valid equation') 
    }


    return message.channel.send(`${sum} = ${result}`)

}}