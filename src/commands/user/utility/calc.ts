<<<<<<< HEAD
<<<<<<< HEAD
import { MessageEmbed } from 'discord.js'
const simplydjs = require('simply-djs-v13')
import { BotCommand } from '@extensions/BotCommand';

export default class botinfo extends BotCommand {
    constructor() {
        super('calc', {
            aliases: ['calc'],
            description: 'calculator',
            usage: '$calc',
            cooldown: 20000
        })
    }

 async exec(message) {

    simplydjs.calculator(message, {
        embedColor: '#075FFF', //default: #075FFF
=======
import { MessageEmbed } from 'discord.js'
=======

>>>>>>> 74b153700e636a8f014b9da90bc52e857b1774c0
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
>>>>>>> 597d1bfa728b3314838e5880462da3a68beda7df
    })}}