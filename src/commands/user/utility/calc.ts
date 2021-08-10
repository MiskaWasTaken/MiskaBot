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
>>>>>>> 597d1bfa728b3314838e5880462da3a68beda7df
    })}}