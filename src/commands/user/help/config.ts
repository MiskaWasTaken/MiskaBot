import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')

export default class config extends BotCommand {
    constructor() {
        super('config', {
            aliases: ['config'],
            description: 'Configuration for Miska Bot',
            usage: '$config',
			cooldown: 10000,
		slash: true,
		slashOptions: [

		]


        })
    }

    async exec(message) {



		
const embed1 = new MessageEmbed()
.setTitle('These are the configuration/permissions required to run Miska Bot to its fullest potential');

 const embed2 = new MessageEmbed()
 .setColor('RANDOM')
.setTitle('Miscellaneous features')
.setDescription('Features that stand out')
.addFields(
    { name: 'AI Chat Bot', value: `Create a channel specifically called 'chat-bot'. Make sure I have permission to talk in the channel. Thats it!`})

const embed3 = new MessageEmbed()
.setColor('RANDOM')
.setTitle('You reached the end! Keep checking frequently for more updates!')
.setDescription('Permissions I need for every command.')
.addFields(
    { name: 'Ban | Unban', value: `BAN MEMBERS`},
	{ name: 'Kick', value: `KICK MEMBERS`},
	{ name: 'Lock | Unlock', value: `MANAGE CHANNELS`},
	{ name: 'Purge', value: `MANAGE MESSAGES`},
	{ name: 'Nuke', value: `I must have: MANAGE CHANNELS | The executer must have: ADMINISTRATOR`})


const pages = [embed1, embed2, embed3] // REQUIRED

// its still possible without embed
// let pages = ['page1', 'page2', 'page3']

simplydjs.embedPages(this.client, message, pages, {
  firstEmoji: '⏪', // default: ⏪
  backEmoji: '◀️', // default: ◀️
  delEmoji: '🗑️', // default: 🗑️
  forwardEmoji: '▶️', // default: ▶️
  lastEmoji: '⏩', // default: ⏩
  
  btncolor: 'SUCCESS', // default: SUCCESS
  delcolor: 'DANGER', // default: DANGER
  skipcolor: 'PRIMARY', // default: PRIMARY
   // Colors that discord.js support (PRIMARY/SECONDARY/SUCCESS/DANGER)
   
  skipBtn: true,
})}}


