
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13');


export default class ttt extends BotCommand {
    constructor() {
        super('tictactoe', {
            aliases: ['tictactoe'],
            description: 'Challenge someone to a tic tac toe match',
            usage: '$hug @user',
            cooldown: 5000,
            prefix: '$',
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                },

        ],

        slash: true,
        slashGuilds: ['868532678318780496'],
        slashOptions: [
            {
                name: 'user',
                description: 'Your opponent',
                type:'USER',  
                required: true
            }
        ]

        })
    }
    async exec(message) {
        const prefix = "$"

        if (!message.content.startsWith(prefix)) return

        simplydjs.tictactoe(message, {
            xEmoji: '<:ticx:873280900358606908>', //default: ❌
            oEmoji: '<:tico:873280900115365908>', //default: ⭕
            idleEmoji: '<:tic:873280900052418570>', //default: ➖
            embedColor: '#075FFF', //default: #075FFF
            embedFoot: 'GL HF' //default: 'Make sure to win ;)' 
        })}}    