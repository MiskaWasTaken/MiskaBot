import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
// pls make if no perm for bot = actually send a message instead of showing the defualt error thing


export default class unban extends BotCommand {
    constructor() {
        super('unban', {
            aliases: ['unban'],
            description: 'Unban a banned user',
            usage: '$unban @user',
            cooldown: 2000,
            args: [
                {
                    id: 'userid',
                    type: 'string',
                    match: 'restContent'
                },
            ],

            slash:true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'The user you would like to unban',
                    type:'STRING',
                    required: true
                },
            ]
        })
    }
    async exec(message, args) {


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

            let user
        
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author

            if (user) {
      
        
              if (user) {
        
                user

                // banning code 

                const sucEmbed = new MessageEmbed()
                .setColor('#7303fc')
                .setDescription(`<a:check:869968688793681921> ${user} has been successfully unbanned!`)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`);
              

                await message.guild.members.unban(user); {message.reply({ embeds: [sucEmbed] })}
                await  message.reply({ embeds: [sucEmbed] })
                  
                } else {
                 
          
                 const invalidEmbed = new MessageEmbed()
                 .setColor('#fc036f')
                 .setDescription('<a:xmark:869969568301477929> You did not provide the user ID of banned user!')
                 .setTimestamp()
                 .setFooter(`Requested by: ${message.author.username}`);
          
                 message.reply({ embeds: [invalidEmbed] })
                }

                } else {
             
      // btw this only works if user id is invalid
                  const invalidEmbed = new MessageEmbed()
                  .setColor('#fc036f')
                  .setDescription('<a:xmark:869969568301477929> You did not provide a valid ID!')
                  .setTimestamp()
                  .setFooter(`Requested by: ${message.author.username}`);
           
                  message.reply({ embeds: [invalidEmbed] })}}}}
