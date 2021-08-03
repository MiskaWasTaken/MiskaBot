import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const moment = require("moment")


export default class userinfo extends BotCommand {
    constructor() {
        super('userinfo', {
            aliases: ['userinfo'],
            description: 'userinfo',
            usage: '$userinfo',
            args: [
                {
                    id: 'user',
                    type: 'member',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
        const user = args.user.user || message.author
    

        //OPTIONS FOR STATUS
    
    
        //NOW BADGES
        let badges = await user.user.flags
        badges = await badges.toArray();
    
        const newbadges = [];
        badges.forEach(m => {
          newbadges.push(m.replace("_", " "))
        })
    
        const embed = new MessageEmbed()
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    
          //EMBED COLOR BASED ON member
          embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
    
          //OTHER STUFF 
          embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))
    
          //CHECK IF USER HAVE NICKNAME
          if (user.nickname !== null) embed.addField("Nickname", user.nickname)
          embed.addField("Joined At", moment(user.user.joinedAt).format("LLLL"))
            .addField("Account Created At", moment(user.user.createdAt).format("LLLL"))
            .addField("Common Information", `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
            .addField("Badges", newbadges.join(", ").toLowerCase() || "None")
            .addField(`**Avatar: **`, `[Click here to view Avatar](${user.displayAvatarURL({ dynamic: true})})`)

            const userEmbed = new MessageEmbed()
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)
            .setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: `Account Created At:`, value: `${moment(user.user.createdAt).format("LLLL")}`, inline: true },
                { name: 'Common Information:', value: `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`, inline: true },
                { name: 'Badges:', value: `${newbadges.join(", ").toLowerCase() || "None"}`, inline: true },
                { name: 'Avatar:', value: `[Click here to view Avatar](${user.displayAvatarURL({ dynamic: true})})`, inline: true}
            )
    
          return message.reply({ embeds: [userEmbed] }).catch(err => {
            return message.channel.send("Error : " + err)
          })}}






