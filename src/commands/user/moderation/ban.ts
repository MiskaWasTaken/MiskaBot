import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class ban extends BotCommand {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            description: 'rekt',
            usage: '$ban @user',
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
// if role mentioned say "Please mention a user not a role"

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
        
            const reason = args.reasons

            if (user) {
         
              const member= message.mentions.members.first() || message.guild.members.cache.get(user[0])

              if (!args.userid) {return message.reply(`<a:xmark:869969568301477929> user not provided!`)}
        
              if (member) {
        
                member

                // banning code 

                const sucEmbed = new MessageEmbed()
                .setColor('#7303fc')
                .setDescription(`<a:check:869968688793681921> ${user} has been successfully banned!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);

                await message.guild.members.ban(user, { reason });
                await  message.reply({ embeds: [sucEmbed] })
                  
                  // log err in the console
                  .catch(err => {
                    
                    const errorEmbed = new MessageEmbed()
                    .setColor('#fc036f')
                    .setDescription(`<a:xmark:869969568301477929> Unable to ban ${user}!`)
                    .setTimestamp()
                    .setFooter(`Requested by: ${message.author.username}`);
      
                    message.reply({ embeds: [errorEmbed] })
        
                    console.error(err);
                  });
              } else {
                
      
                const notEmbed = new MessageEmbed()
                .setColor('#fc036f')
                .setDescription(`<a:xmark:869969568301477929> That ${user} is not in this guild!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);
      
                message.reply({ embeds: [notEmbed] })
              }
            } else {
             
      
             const invalidEmbed = new MessageEmbed()
             .setColor('#fc036f')
             .setDescription('<a:xmark:869969568301477929> You did not mention the user to ban!')
             .setTimestamp()
             .setFooter(`Requested by: ${message.author.username}`);
      
             message.reply({ embeds: [invalidEmbed] })
            }
        }
      }
    }
