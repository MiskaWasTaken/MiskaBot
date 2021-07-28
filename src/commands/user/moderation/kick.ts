import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class ban extends BotCommand {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            description: 'kick a user',
            usage: '$kick @user',
            args: [
                {
                    id: 'userid',
                    type: 'user',
                    match: 'restContent'
                },
                {
                    id: 'reasons',
                    type: 'string',
                    match: 'restContent'
                }
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
        .setFooter('Permission Error KICK_MEMBERS, ADMINISTRATOR')
      
          // the permission a member needs to ban
          if(!message.member.permissions.has(['KICK_MEMBERS', 'ADMINISTRATOR']))
          // if someone doesnt have perms send this
          message.reply({ embeds: [permEmbed] })
      
          else {
            if (!message.guild) return;
        
            
            const reason = args.reasons

            const invalidEmbed = new MessageEmbed()
            .setColor('#fc036f')
            .setDescription('<a:xmark:869969568301477929> You did not mention the user to kick!')
            .setTimestamp()
            .setFooter('Moderation Error')
     
            if (!args.userid) {return message.reply({ embeds: [invalidEmbed] })}

            if (user) {
         
              const member= message.mentions.members.first() || message.guild.members.cache.get(user[0])
        
              if (member) {
        
                member
                // banning code 
                await message.guild.members.kick(user, { reason });

      
                  const sucEmbed = new MessageEmbed()
                  .setColor('#7303fc')
                  .setDescription(`<a:check:869968688793681921> ${user} has been successfully kicked!`)
                  .setTimestamp()
                  .setFooter(`Requested by: ${message.author.username}`);
      
                    message.reply({ embeds: [sucEmbed] })
                  
                  // log err in the console
                  .catch(err => {
                    
                    const errorEmbed = new MessageEmbed()
                    .setColor('#fc036f')
                    .setDescription(`<a:xmark:869969568301477929> Unable to Kick ${user}!`)
                    .setTimestamp()
                    .setFooter(`Requested by: ${message.author.username}`);
      
                    message.reply({ embeds: [errorEmbed] })
        
                    console.error(err);
                  });
              } else {
                
      
                const notEmbed = new MessageEmbed()
                .setColor('#fc036f')
                .setDescription(`<a:xmark:869969568301477929> ${user} is not in this guild!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);
      
                message.reply({ embeds: [notEmbed] })
              }
            } else {
             
      
             const invalidEmbed = new MessageEmbed()
             .setColor('#fc036f')
             .setDescription('<a:xmark:869969568301477929> You did not mention the user to kick!')
             .setTimestamp()
             .setFooter('Moderation Error')
      
             message.reply({ embeds: [invalidEmbed] })
            }
        }
      }
    }
