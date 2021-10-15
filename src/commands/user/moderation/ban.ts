import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

// pls make if no perm for bot = actually send a message instead of showing the defualt error thing


export default class ban extends BotCommand {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            description: 'Ban a user',
            usage: '$ban @user',
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

            slash: true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'The user you would like to ban',
                    type:'USER',
                    required: true
                },
                {
                  name: 'reason',
                  description: 'Reason for ban',
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
        .setFooter('Permission Error BAN_MEMBERS')
      
          // the permission a member needs to ban
          if(!message.member.permissions.has(['BAN_MEMBERS'])){
              message.reply({ embeds: [permEmbed] })
              return;
          }

          if(!message.guild.me.permissions.toArray().includes('BAN_MEMBERS')){ 
            return message.reply("I do not have permission to ban members (BAN_MEMBERS).") 
          }
    
          else {

            let user
        
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author

            if (!message.guild) return;
        
              if (user) {

                const reason = args.reason
        
                user

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
                .setDescription(`<a:xmark:869969568301477929> ${user} is not in this guild!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);
      
                message.reply({ embeds: [notEmbed] })
              }
              
        }
      }
    }
