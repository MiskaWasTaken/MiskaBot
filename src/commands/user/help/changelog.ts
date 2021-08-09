import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')





export default class utility extends BotCommand {
    constructor() {
        super('changelog', {
            aliases: ['changelog'],
            description: 'Change logs for Miska Bot',
            usage: '$changelog',
			cooldown: 10000,
            slash: true,
            slashOptions: [
    
            ]
        })
    }

    async exec(message) {
        

const embed1 = new MessageEmbed()
.setTitle('All Change Logs of Miska Bot are found here, have a look around!');

 const embed2 = new MessageEmbed()
 .setColor('RANDOM')
.setTitle('RW0.2')
.setDescription('Bug fixes and new commands, with some slight changes.')
.addFields(
    { name: 'Bug Fixes:', value: `1. Image commands ran without a mention will no longer return an error. \n \n 2. Purge now works with MANAGE_MESSAGES permission \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'New Commands:', value: `1. $tictactoe => A nice tictactoe game :) \n \n 2. $calc => Changed to a button calculator \n \n 3. $rpc => Rock Paper Scissors game \n \n 4. $changelogs => What your seeing right now! I will be posting change logs here. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'Improvements:', value: `1. Cooldowns have been added to every command. \n \n 2. SFW commands have been merged with NSFW commands. \n \n 3. I have updated to discord.js V13! \n \n 4. Commands have been properly added in help commands. \n \n 5. Most spelling mistakes have been fixed. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`})



const embed3 = new MessageEmbed()
.setTitle('You reached the end! Keep checking frequently for more updates!');

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