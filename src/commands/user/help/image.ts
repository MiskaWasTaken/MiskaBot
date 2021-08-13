
import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const simplydjs = require('simply-djs-v13')




export default class utility extends BotCommand {
    constructor() {
        super('helpimage', {
            aliases: ['helpimage'],
            description: 'change log',
            usage: '$helpimage',
			cooldown: 10000,
			slash: true,
			slashOptions: [
	
			]
        })
    }

    async exec(message) {

const embed1 = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Image Effects')
.setDescription('Image effects for your profile picture')
.addFields(
	{ name: 'Update:', value: `Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
	{ name: '<user>:', value: `Mentioning a user in most image commands are optional. If you have not mentioned a user the effect will take place on your avatar. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'Blur', value: `/blur <user>`},
    { name: 'Delete', value: `/delete <user>`},
    { name: 'Grey', value: `/grey <user>`},
	{ name: 'Invert', value: `/invert <user>`},
	{ name: 'Pride', value: `/pride <user>`},

)

const embed2 = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Image Effects')
.setDescription('Gif effects for your profile picture')
.addFields(
	{ name: 'Update:', value: `Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
	{ name: '<user>:', value: `Mentioning a user in most image commands are optional. If you have not mentioned a user the effect will take place on your avatar. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
    { name: 'Trigger', value: `$trigger @user`},
)


const embed3 = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Image Effects')
.setDescription('Meme effects')
.addFields(
	{ name: 'Update:', value: `Please keep in mind the / represents a slash command. This is not a prefix. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
	{ name: '<user>:', value: `Mentioning a user in most image commands are optional. If you have not mentioned a user the effect will take place on your avatar. \n \n <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570> <:tic:873280900052418570>`},
	{ name: 'Advert', value: "`/ad <user>`", inline: true },
	{ name: 'Affect', value: "`/affect <user>`", inline: true },
	{ name: 'Pride', value: "`/pride <user>`", inline: true },
	{ name: 'Slap', value: "`/slap <user>`", inline: true },
	{ name: 'Pretty', value: "`/pretty <user>`", inline: true },
	{ name: 'Bed', value: "`/bed <user>`", inline: true },
	{ name: 'Bobross', value: "`/bobross <user>`", inline: true },
	{ name: 'Confused Stonk', value: "`/confusedstonk <user>`", inline: true },
	{ name: 'Discord Black', value: "`/disblack <user>`", inline: true },
	{ name: 'Discord', value: "`/discord <user>`", inline: true },
	{ name: 'Double Stonks', value: "`/doublestonks <user>`", inline: true },
	{ name: 'Facepalm', value: "`/facepalm <user>`", inline: true },
	{ name: 'Jail', value: "`/jail <user>`", inline: true },
	{ name: 'Kiss', value: "`/kiss <user>`", inline: true },
	{ name: 'Present', value: "`/present <text>`", inline: true },
	{ name: 'Not Stonk', value: "`/notstonks <user>`", inline: true },
	{ name: 'RIP/Funeral', value: "`/rip <user>`", inline: true },
	{ name: 'Spank', value: "`/spank <user>`", inline: true },
	{ name: 'Stonks', value: "`/stonks <user>`", inline: true },
	{ name: 'Trash', value: "`/trash <user>`"},	
)


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