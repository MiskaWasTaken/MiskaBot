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
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }



    async exec(message, args) {

        const purge = args.purge

        const upermEmbed = new MessageEmbed()
        .setColor('#fc036f')
        .setDescription(`<a:xmark:869969568301477929> You do not have permission to do this command!`)
        .setFooter('Permission Error MANAGE_MESSAGES')
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`);


        if (!message.member.permissions.has("MANAGE_MESSAGES", "ADMINSTRATOR")) return message.reply({ embeds: [upermEmbed] });
   
    const valueEmbed = new MessageEmbed()
    .setColor('#fc036f')
    .setDescription('Please enter a value from 1 - 100')
    .setFooter('Invalid Syntax Error')
    .setFooter(`Requested by: ${message.author.username}`);
   
    const sucessEmbed = new MessageEmbed()
    .setColor('#0fdb46')
    .setDescription(`Successful Deletion! :+1:`)
    .setFooter('Purge Command Sucess')
    .setFooter(`Requested by: ${message.author.username}`);
   
   
   
    if (!purge) {
        return message.reply({ embeds: [valueEmbed] }) 
    }
    
   
    let deleteAmount;
    
    
    if (parseInt(purge) > 100 ) {
        deleteAmount = 100;
   
   
    } else {
   
   
      
        if(isNaN(purge)) return message.channel.send({ embeds: [valueEmbed] })
       
       
        deleteAmount = parseInt(purge[0]);
    }
    
   
    message.channel.bulkDelete(deleteAmount, true);
   
   
    message.reply({ embeds: [sucessEmbed] })
    }
    

}   