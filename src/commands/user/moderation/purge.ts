import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class purge extends BotCommand {
    constructor() {
        super('purge', {
            aliases: ['purge'],
            description: 'mass delete messages',
            usage: '$purge <amount',
            args: [
                {
                    id: 'amount',
                    type: 'number',
                    match: 'restContent'
                }
            ]
        })
    }



    async exec(message, args) {

        let purge = args.amount
        purge += 1

        const upermEmbed = new MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Purge Command')
        .setDescription('You do not have permission to do execute this command!')
        .setTimestamp()
        .setFooter('Permission Error MANAGE_MESSAGES')

        if(!message.member.permissions.has(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) 
        message.reply({ embeds: [upermEmbed] });

        else {
   
        const sucEmbed = new MessageEmbed()
        .setColor('#7303fc')
        .setDescription(`${purge} messages have been purged`)
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`);
   
    await message.channel.bulkDelete(args.amount); 
    await message.reply({ embeds: [sucEmbed] })
       

    }
  }
}   