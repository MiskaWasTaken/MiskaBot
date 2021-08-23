import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')

export default class changelog  extends BotCommand {
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
.setTitle('All Change Logs of Miska Bot are found here, have a look around! (RW3.0 update!)');

 const embed2 = new MessageEmbed()
 .setColor('RANDOM')
.setTitle('RW0.2')
.setDescription('Bug fixes and new commands, with some slight changes.')
.addFields(
    { name: 'Bug Fixes:', value: `1. Image commands ran without a mention will no longer return an error. \n \n 2. Purge now works with MANAGE_MESSAGES permission \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'New Commands:', value: `1. $tictactoe => A nice tictactoe game :) \n \n 2. $calc => Changed to a button calculator \n \n 3. $rpc => Rock Paper Scissors game \n \n 4. $changelogs => What your seeing right now! I will be posting change logs here. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'Improvements:', value: `1. Cooldowns have been added to every command. \n \n 2. SFW commands have been merged with NSFW commands. \n \n 3. I have updated to discord.js V13! \n \n 4. Commands have been properly added in help commands. \n \n 5. Most spelling mistakes have been fixed. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`})

    const embed3 = new MessageEmbed()
    .setColor('RANDOM')
   .setTitle('RW2.0')
   .setDescription('Bug fixes and new commands, with some slight changes.')
   .addFields(
       { name: 'Bug Fixes:', value: `1. Practicaly or if not. Almost all known bugs have been fixed. \n \n Fixed spamming play commands \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
       { name: 'New Commands:', value: `1. /8ball => Ask me a question \n \n 2. /howgay => Check how gay you are \n \n 3. /wikipedia => fetch a topic from Wikipedia. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
       { name: 'Improvements:', value: `1. Cooldowns have been optimized. \n \n 2. I have completly transitioned to slash commands. My previous prefix will no longer work (with an execption of tictactoe and rps command). \n \n 3. I cleaned up my internal framework \n \n 4. non-nsfw flah errors will now automatically delete itself \n \n 5. a few spelling mistakes have been fixed. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`})
   
       const embed4 = new MessageEmbed()
       .setColor('RANDOM')
      .setTitle('RW3.0')
      .setDescription('New commands, and changes')
      .addFields(
          { name: 'New Commands', value: `1. /suggest => Suggest me features. Troll suggestions will result in that user being blacklisted <:happyboi:879191831261360138> \n \n 2. /dm => Developers Only! | Allows me to dm users \n \n 3. /blacklist => Developers Only! | Allows me to blacklist users temporarily or permanently  \n \n 4. /unblacklist => Developers Only! | Allows me to users unblacklist temporarily or permanently \n \n /google => (previous google command is changed to /search) Allows you to search something with Google Assistant \n \n /translate => Translate text to any language! (supported by Google) \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
          { name: 'Improvements:', value: `1. Previous chat bot has been replaced with Google Assistant <a:gload:878279436661850112> \n \n 2. I have switch the /google command with /search, doing /search will show google results. Doing /google will allow you to speak with Google Assistant \n \n 3. I have removed join date in /userinfo until I fix it. \n \n 4. /wikipedia command is now independent of a package \n \n 5. A database has been setup. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`})
      

const embed5 = new MessageEmbed()
.setTitle('You reached the end! Keep checking frequently for more updates!');

const pages = [embed1, embed2, embed3, embed4, embed5] // REQUIRED

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