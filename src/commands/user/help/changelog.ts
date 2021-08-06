import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')




export default class utility extends BotCommand {
    constructor() {
        super('changelog', {
            aliases: ['changelog'],
            description: 'change log',
            usage: '$changelog',
			cooldown: 10000,

        })
    }

    async exec(message) {

const embed1 = new MessageEmbed()
.setTitle('All Change Logs of Miska Bot are found here, have a look around!');

 const embed2 = new MessageEmbed()
.setTitle('RW0.2')
.setDescription('Bug fixes and new commands, with some slight changes.')
.addFields(
    { name: 'Bug Fixes:', value: `1. Image commands ran without a mention will no longer return an error. \n \n Purge now works with MANAGE_MESSAGES permission`},
    { name: 'New Commands:', value: `1. $tictactoe => A nice tictactoe game :) \n \n $calc => Changed to a button calculator \n \n $rpc => Rock Paper Scissors game \n \n $changelogs => What your seeing right now! I will be posting change logs here.`},
    { name: 'Improvements:', value: `1. Cooldowns have been added to every command. \n \n I will no longer respond to music commands if we are in different vcs \n \n SFW commands have been merged with NSFW commands. \n \n I have updated to discord.js V13! \n \n Commands have been properly added in help commands. \n \n Most spelling mistakes have been fixed.`})



const embed3 = new MessageEmbed()
.setTitle('You reached the end! Keep checking for more updates!');

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