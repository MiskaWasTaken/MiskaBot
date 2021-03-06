import { MessageEmbed } from "discord.js"
import { BotCommand } from '@extensions/BotCommand'
import utils from "@functions/utils"

export default class pronouns extends BotCommand {
    constructor() {
        super('pronouns', {
            aliases: ['pronouns'],
            args: [{ id: 'person', type: 'member', match: 'rest'}],
            cooldown: 10000,

            description: 'Shows the pronouns of a user, if they have them set on https://pronoundb.org',
            usage: '-pronouns <user>',
            slash:true,
            slashOptions:[
                {
                    name:'person',
                    description:'person',
                    type:'USER',
                    required: true
                }
            ]
        })
    }
    async exec(message, args) {
        let person
        
        if (args.person) {person = this.client.util.resolveUser(args.person, this.client.users.cache)}
        else person = message.author

        const pronouns = await utils.getPronouns(person, 'details')
        const pronounsEmbed = new MessageEmbed()

        if(!person) message.reply('Please mention a user')

        if (person.id == message.author.id) { pronounsEmbed.setTitle('Your pronouns') }
        else { pronounsEmbed.setTitle(`${person.username}'s pronouns`) }

        pronounsEmbed.setDescription(pronouns)
        pronounsEmbed.setFooter('Data from https://pronoundb.org')

        message.reply({ embeds: [pronounsEmbed] })
    }
}