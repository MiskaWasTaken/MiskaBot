import { BotCommand } from '@extensions/BotCommand';
import { Message, MessageEmbed, TextChannel } from 'discord.js';
import { CollectorUtils } from 'discord.js-collector-utils';

export default class suggest extends BotCommand {
    constructor() {
        super('suggest', {
            aliases: ['suggest'],
            description: 'Want to have a feature added here? Just suggest me it!',
            usage: '$present <text>',
            cooldown: 5000,
            args: [
                {
                    id: 'text',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash: true,
            slashOptions: [

                {
                    name: 'suggestion',
                    description: "Your suggestion",
                    type:'STRING',
                    required: true
                }

            ]

        })
    }
 


    async exec(message, args) {


        const suggestion = args.text

        const suggestionChannel = await this.client.channels.cache.get('878917528313819148') as TextChannel


        if(suggestion.length > 20){
            message.reply('Suggestions must be atleast 20 characters long')
            return;
        }
	
        const warnEmbed = new MessageEmbed()
        .setColor('RED')
        .setTitle('WARNING!')
        .setDescription('Please only run this command if you would like to genuinely suggest something. You will be permanently or temporarily blacklisted if you have sent a troll suggestion. type "I ACCEPT" to continue. To cancel type "STOP". You have 15 seconds.')
        .setTimestamp()


        message.reply({ embeds: [warnEmbed] }).then(ms => {
            setTimeout(() => ms.delete(), 8000)
            
            return;
    })


        const suggestEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Suggestion from ${message.author}: ${suggestion}`)
        .setImage(message.author.displayAvatarURL())
        .addFields(
            { name: "`Suggestor`", value: `${message.author}`},
            { name: "`Suggestor ID`", value: `${message.author.id}`},
            { name: "`Suggestor's Tag:`", value: `${message.author.discriminator}`},
            { name: "`Suggestor's Avatar`", value: `${message.author.displayAvatarURL({ dynamic: true})}`},
            { name: "**Confirmation**", value: "`This is a copy of what will be sent to my devs. This message will be deleted in 15 seconds to unclog the channel. If you are ok with this, type:`** I AGREE** ` If you are not ok with sharing this information, or you would like to change your suggestion please type:`** CANCEL**",},
        )
        .setTimestamp()

        const devEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Suggestion from ${message.author}: ${suggestion}`)
        .setImage(message.author.displayAvatarURL())
        .addFields(
            { name: "`Suggestor`", value: `${message.author}`},
            { name: "`Suggestor ID`", value: `${message.author.id}`},
            { name: "`Suggestor's Tag:`", value: `${message.author.discriminator}`},
            { name: "`Suggestor's Avatar`", value: `${message.author.displayAvatarURL({ dynamic: true})}`})
        .setTimestamp()

        const msg = message

                const favoriteColor: string = await CollectorUtils.collectByMessage(
                    msg.channel,
                    // Collect Filter
                    (nextMsg: Message) => nextMsg.author.id === msg.author.id,
                    // Stop Filter
                    (nextMsg: Message) =>
                        nextMsg.author.id === msg.author.id && nextMsg.content.toLowerCase() === 'stop',
                    // Retrieve Result
                    async (nextMsg: Message) => {
                        const colorOptions = ['i agree', 'cancel', 'i accept'];
    
                        const favoriteColor = colorOptions.find(
                            colorOption => colorOption === nextMsg.content.toLowerCase()
                        );
    
                        if (!favoriteColor) {
                            return;
                        }
    
                        if (favoriteColor === 'i accept') {
                            await nextMsg.reply({ embeds: [suggestEmbed] }).then(ms => {
                                setTimeout(() => ms.delete(), 15000)
                                
                                return;
                        })
                            return;
                        }

                        if (favoriteColor === 'i agree') {
                            suggestionChannel.send({ embeds: [devEmbed] })
                            await nextMsg.reply(`Suggestion Sent. Thank you for trying to improve Miska Bot ${message.author} <a:happy:878919297290887238>. You will recive a DM if your suggestion has been accepted or not.`);
                            return;
                        }

                        if (favoriteColor === 'cancel') {
                            await nextMsg.reply(`${message.author}  Not ready yet? No problem, once your ready just re-run this command. Just to tell you, my developer wont judge you <a:happyswing:878922045021376552>`);
                            return;
                        }
    
                        return favoriteColor;
                    },
                    // Expire Function
                    async () => {
                        await msg.channel.send(`Timed out.`).then(ms => {
                            setTimeout(() => ms.delete(), 8000)
                            
                            return;
                    })
                    },
                    // Options
                    { time: 30000, reset: true }
                );
    
                if (favoriteColor === undefined) {
                    return;
                }
                return;
            }


        }

    
