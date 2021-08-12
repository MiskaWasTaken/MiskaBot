import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const moment = require("moment")


export default class userinfo extends BotCommand {
    constructor() {
        super('userinfo', {
            aliases: ['userinfo'],
            description: 'Fetch information about a user',
            usage: '$userinfo',
            cooldown: 1000,
            args: [
                {
                    id: 'user',
                    type: 'member',
                    match: 'restContent'
                }
            ],
            slash:true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'THe user you would like to display information about',
                    type:'USER',  
                    required: true
                }
            ]
        })
    }
    async exec(message, args) {
      let user
        
      if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
      else user = message.author
    

        //OPTIONS FOR STATUS
    
  
    
        const embed = new MessageEmbed()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    
          //EMBED COLOR BASED ON member
          embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
    
          //OTHER STUFF 
          embed.setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))

            const userEmbed = new MessageEmbed()
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')
            .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: `Account Created At:`, value: `${moment(user.createdAt).format("LLLL")}`, inline: true },
                { name: `Joined At:`, value: `${moment(user.joinedAt).format("LLLL")}`, inline: true },
                { name: 'Common Information:', value: `ID: \`${user.id}\`\n\nDiscriminator: ${user.discriminator}\n\nBot: ${user.bot}`, inline: true },
                { name: 'Avatar:', value: `[Click here to view Avatar](${user.displayAvatarURL({ dynamic: true})})`, inline: true}
            )
    
          return message.reply({ embeds: [userEmbed] }).catch(err => {
            return message.channel.send("Error : " + err)
          })}}






