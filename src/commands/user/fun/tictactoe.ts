
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')

export default class utility extends BotCommand {
    constructor() {
        super('tictactoe', {
            aliases: ['tictactoe'],
            description: 'tic tac toe',
            usage: '$tictactoe',
			cooldown: 10000,

        })
    }

    async exec(message) {

        simplydjs.tictactoe(message, {
            xEmoji: '<:ticx:873280900358606908>', //default: ❌
            oEmoji: '<:tico:873280900115365908>', //default: ⭕
            idleEmoji: '<:tic:873280900052418570>', //default: ➖
            embedColor: '#075FFF', //default: #075FFF
            embedFoot: 'GL HF' //default: 'Make sure to win ;)' 
        })}}    