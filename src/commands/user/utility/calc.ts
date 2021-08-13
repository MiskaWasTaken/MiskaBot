
const simplydjs = require('simply-djs-v13')
import { BotCommand } from '@extensions/BotCommand';

export default class botinfo extends BotCommand {
    constructor() {
        super('calc', {
            aliases: ['calc'],
            description: 'calculator',
            usage: '$calc',
            cooldown: 5000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }

 async exec(message) {

    simplydjs.calculator(message, {
        embedColor: '#075FFF', //default: #075FFF
    })}}