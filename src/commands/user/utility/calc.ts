
const simplydjs = require('simply-djs-v13')
import { BotCommand } from '@extensions/BotCommand';

export default class botinfo extends BotCommand {
    constructor() {
        super('calculator', {
            aliases: ['calculator'],
            description: 'Did you break your calculator again?',
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