import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

const ms = require('ms');

export default class avatar extends BotCommand {
    constructor() {
        super('giveaway', {
            aliases: ['giveaway'],
            description: 'Start a giveaway',
            usage: '$giveaway 1/h/m/s <winner amount> <item>',
            args: [
                {
                    id: 'time',
                    type: 'string'
                },
                {
                    id: 'item',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }

    async exec(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.reply("You don't have permission to use this command!");


        // !giveaway {time s/m/d} {item}
        if (!message.member.permissions.has(["ADMINISTRATOR"])) return message.channel.send("You don't have enough permissions to start a giveaway !")
        let item = args.item
        
        const time = args.time
        if (!time) {
            return message.channel.send(`Invalid duration provided`);
        }
        if (!item) {
            item = "No title"
        }
        const embed = new MessageEmbed()
            .setColor(0x3333ff)
            .setTitle("New Giveaway!")
            .setDescription(`**${item}**`)
            .addField(`Duration : `, ms(ms(time), {
                long: true
            }), true)
            .setFooter("React to this message with 🎉 to participate!")
        const embedSent = await message.channel.send({ embeds: [embed] })
        embedSent.react("🎉")

        let peopleReacted
        setTimeout(async () => {
            try {
                const peopleReactedBot = await embedSent.reactions.cache.get("🎉").users.fetch();
                peopleReacted = peopleReactedBot.array().filter(u => u.id !== this.client.user.id);
            } catch (e) {
                return message.channel.send(`An unknown error happened during the draw of the giveaway **${item}** : ` + "`" + e + "`")
            }
            let winner;

            if (peopleReacted.length <= 0) {
                return message.channel.send(`Not enough participants to execute the draw of the giveaway **${item}** :(`);
            } else {
                const index = Math.floor(Math.random() * peopleReacted.length);
                winner = peopleReacted[index];
            }
            if (!winner) {
                message.channel.send(`An unknown error happened during the draw of the giveaway **${item}**`);
            } else {
                console.log(`Giveaway ${item} won by ${winner.toString()}`)
                message.channel.send(`🎉 **${winner.toString()}** has won the giveaway **${item}** ! Congratulations ! 🎉`);
            }
        }, ms(time))
    }
}
