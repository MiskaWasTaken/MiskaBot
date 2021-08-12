import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

// pls make if no perm for bot = actually send a message instead of showing the defualt error thing


export default class kick extends BotCommand {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            description: 'Kick a user',
            usage: '$kick @user',
            cooldown: 2000,
            args: [
                {
                    id: 'userid',
                    type: 'user',
                    match: 'restContent'
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'The user you would like to kick',
                    type:'USER',
                    required: true
                },
                {
                  name: 'reason',
                  description: 'Reason for kick',
                  type:'STRING'
                }
            ]
        })
    }
    async exec(message, args) {
// if role mentioned say "Please mention a user not a role"


        const permEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You do not have permission to use this command!')
        .setDescription('If you think this is a mistake please contact the server moderators')
        .setTimestamp()
        .setFooter('Permission Error KICK_MEMBERS, ADMINISTRATOR')
      
          // the permission a member needs to ban
          if(!message.member.permissions.has(['KICK_MEMBERS']))
          // if someone doesnt have perms send this
          message.reply({ embeds: [permEmbed] })

          if(!message.guild.me.permissions.toArray().includes('KICK_MEMBERS')) return message.reply("I do not have permission to kick members (KICK_MEMBERS).")
      
          else {
            if (!message.guild) return;

            let user
        
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author
     
            if (user) {
         
              const reason = args.reason

        
              if (user) {
        
                user
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
