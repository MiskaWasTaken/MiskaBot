import { BotCommand } from '@extensions/BotCommand';

export default class filter extends BotCommand {
    constructor() {
        super('filter', {
            aliases: ['filter'],
            description: 'Set a filter for music',
            usage: '$play <song>',
            cooldown: 2000,
            args: [
                {
                    id: 'filter',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'filter',
                    description: "use /filters to see filters",
                    type:'STRING',
                    required: true
                }

            ]

        })
    }
    async exec(message, args) {

        const command = args.filter


        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        {

            if(!message.member.voice.channel) {
                message.reply("You must be in a voice channel to use this command.")
                return;
            }
        
    
            const queue = this.client.distube.getQueue(message)
            if (!queue) {
                message.reply(`Nothing playing right now! Executor: ${user}`)
                return;
            } 
            const filter = this.client.distube.setFilter(message, command)
            message.reply(
                `Current queue filter: ${filter.join(', ') || 'Off'} Executor: ${user}`,
            )
        } 
    }  
 }