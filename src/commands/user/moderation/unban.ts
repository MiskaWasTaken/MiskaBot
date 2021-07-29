import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class ban extends BotCommand {
    constructor() {
        super('unban', {
            aliases: ['unban'],
            description: 'rekt',
            usage: '$unban @user',
            args: [
                {
                    id: 'userid',
                    type: 'string',
                    match: 'restContent'
                },
            ]
        })
    }
    async exec(message, args) {

        const user = args.userid


        const permEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You do not have permission to use this command!')
        .setDescription('If you think this is a mistake please contact the server moderators')
        .setTimestamp()
        .setFooter('Permission Error BAN_MEMBERS, ADMINISTRATOR')
      
          // the permission a member needs to ban
          if(!message.member.permissions.has(['BAN_MEMBERS', 'ADMINISTRATOR']))
          // if someone doesnt have perms send this
          message.reply({ embeds: [permEmbed] })
      
          else {
            if (!message.guild) return;

            if (user) {
         
              const member= this.client.users.fetch(user[0])
              

              if (!user) {return message.reply(`<a:xmark:869969568301477929> user ID not provided!`)}
        
              if (member) {
        
                member

                // banning code 

                const sucEmbed = new MessageEmbed()
                .setColor('#7303fc')
                .setDescription(`<a:check:869968688793681921> ${user} has been successfully unbanned!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);
              

                await message.guild.members.unban(user); {message.reply({ embeds: [sucEmbed] })}
                await  message.reply({ embeds: [sucEmbed] })
                  
                  // log err in the console
                  .catch(err => {
                    
                    const errorEmbed = new MessageEmbed()
                    .setColor('#fc036f')
                    .setDescription(`<a:xmark:869969568301477929> Unable to unban ${user}!`)
                    .setTimestamp()
                    .setFooter(`Requested by: ${message.author.username}`);
      
                    message.reply({ embeds: [errorEmbed] })
        
                    console.error(err);
                  });
                } else {
                 
          
                 const invalidEmbed = new MessageEmbed()
                 .setColor('#fc036f')
                 .setDescription('<a:xmark:869969568301477929> You did not provide the user ID of banned user!')
                 .setTimestamp()
                 .setFooter(`Requested by: ${message.author.username}`);
          
                 message.reply({ embeds: [invalidEmbed] })
             }  
         }  
     }
}  }
