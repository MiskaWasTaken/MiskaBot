import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
// pls set max limit to 100
// pls make if no perm for bot = actually send a message instead of showing the defualt error thing


export default class purge extends BotCommand {
    constructor() {
        super('purge', {
            aliases: ['purge'],
            description: 'Mass delete messages',
            usage: '$purge <amount>',
            cooldown: 2000,
            args: [
                {
                    id: 'amount',
                    type: 'number',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [
            {
                name: 'amount',
                description: 'Amount to purge',
                type: 'NUMBER',
                required: true
            }
        ]
        })
    }



    async exec(message, args) {
//nothing to do here
        const purge = args.amount

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
            .setColor('#03dbfc')
            .setTitle('Purge Command')
            .setDescription(`<a:check:869968688793681921> ${purge} Messages have been deleted.`)
            .setTimestamp()
            .setFooter(`Performed by: ${message.author.username}`);
   
    message.channel.bulkDelete(purge); 
    await message.reply({ embeds: [sucEmbed] });
       

    }
  }
}   