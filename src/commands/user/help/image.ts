import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';





export default class image extends BotCommand {
    constructor() {
        super('helpimage', {
            aliases: ['helpimage'],
            description: 'Help for Image manipulation',
            usage: '$helpimage',

        })
    }

    async exec(message) {


const helpimgEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Help Command')
	.setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
	.setAuthor('Miska Bot', 'https://i.imgur.com/I8qSDdc.jpg', 'https://discordbotlist.com/bots/miska-bot')
	.setDescription('These are the Image Manipulation commands for Miska Bot')
	.addFields(
		{ name: `Instructions`, value: "`You can @user to give the effect to mentioned user. Or you can do the command without a mention to get the effect for yourself`", inline: true },
		{ name: `Blur`, value: "`$blur @user`", inline: true },
		{ name: 'Delete', value: "`$delete @user`", inline: true },
		{ name: 'Grey', value: "`$grey @user`", inline: true },
		{ name: 'Pride', value: "`$pride @user`", inline: true },
		{ name: 'Invert', value: "`$invert @user`", inline: true },
		{ name: 'Blink', value: "`$blink @user`", inline: true },
		{ name: 'Trigger', value: "`$trigger @user`", inline: true },
		{ name: 'Advert', value: "`$ad @user`", inline: true },
		{ name: 'Smoking', value: "`$smoking @user`", inline: true },
		{ name: 'Pride', value: "`$pride @user`", inline: true },
		{ name: 'Slap', value: "`$slap @user`", inline: true },
		{ name: 'Pretty', value: "`$pretty @user`", inline: true },
		{ name: 'Bed', value: "`$bed @user`", inline: true },
		{ name: 'Bobross', value: "`$bobross @user`", inline: true },
		{ name: 'Confused Stonk', value: "`$confusedstonk @user`", inline: true },
		{ name: 'Discord Black', value: "`$disblack @user`", inline: true },
		{ name: 'Discord', value: "`$discord @user`", inline: true },
		{ name: 'Double Stonks', value: "`$doublestonks @user`", inline: true },
		{ name: 'Facepalm', value: "`$facepalm @user`", inline: true },
		{ name: 'Jail', value: "`$jail @user`", inline: true },
		{ name: 'Kiss', value: "`$kiss @user`", inline: true },
		{ name: 'Present', value: "`$present <text>`", inline: true },
		{ name: 'Not Stonk', value: "`$notstonks @user`", inline: true },
		{ name: 'RIP/Funeral', value: "`$rip @user`", inline: true },
		{ name: 'Spank', value: "`$spank @user`", inline: true },
		{ name: 'Stonks', value: "`$stonks @user`", inline: true },
		{ name: 'Trash', value: "`$trash @user`", inline: true },	
	)
	.setTimestamp()
	.setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg');

message.reply({ embeds: [helpimgEmbed] });

}}