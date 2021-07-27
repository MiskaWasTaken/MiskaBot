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

        const users = args.userid

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
        
            const user = message.mentions.members.first() || message.guild.members.cache.get(users[0]);
            const reason = args.reasons

            if (user) {
         
              const member= message.mentions.members.first() || message.guild.members.cache.get(user[0])
        
              if (member) {
        
                member
      
                if (!user) return message.channel.send('please provide a member to ban!')
                if (!users) return message.channel.send('please provide a member to ban!')
                if (!reason) return message.channel.send('please provide a reason for the ban!')
                if (!member) return message.channel.send('please provide a member to ban!')

                // banning code 
                await message.guild.members.ban(user, { reason });

      
                  const sucEmbed = new MessageEmbed()
                  .setColor('#7303fc')
                  .setTitle('Ban Command')
                  .setDescription('User has been successfully banned!')
                  .setTimestamp()
                  .setFooter('Moderation')
      
                    message.reply({ embeds: [sucEmbed] })
                  
                  // log err in the console
                  .catch(err => {
                    
                    const errorEmbed = new MessageEmbed()
                    .setColor('#fc036f')
                    .setTitle('Ban Command')
                    .setDescription('Unable to ban user!')
                    .setTimestamp()
                    .setFooter('Moderation Error')
      
                    message.reply({ embeds: [errorEmbed] })
        
                    console.error(err);
                  });
              } else {
                
      
                const notEmbed = new MessageEmbed()
                .setColor('#fc036f')
                .setTitle('Ban Command')
                .setDescription('That user is not in this guild!')
                .setTimestamp()
                .setFooter('Moderation Error')
      
                message.reply({ embeds: [notEmbed] })
              }
            } else {
             
      
             const invalidEmbed = new MessageEmbed()
             .setColor('#fc036f')
             .setTitle('Ban Command')
             .setDescription('You did not mention the user to ban!')
             .setTimestamp()
             .setFooter('Moderation Error')
      
             message.reply({ embeds: [invalidEmbed] })
            }
        }
      }
    }
