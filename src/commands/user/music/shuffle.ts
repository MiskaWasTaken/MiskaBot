import { BotCommand } from '@extensions/BotCommand';

export default class shuffle extends BotCommand {
    constructor() {
        super('shuffle', {
            aliases: ['shuffle'],
            description: 'Shuffle the queue',
            usage: '$play <song>',
            cooldown: 2000,
            args: [

            ],
            slash:true,
            slashOptions: [


            ]

        })
    }
    async exec(message, args) {

        
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        if(!message.member.voice.channel) {
            message.reply("You must be in a voice channel to use this command.")
            return;
        }
    
    
        const queue = this.client.distube.getQueue(message)
        if (!queue) {
            message.reply(`Nothing playing is currently playing. Executor: ${user}`)
            return;
        } 
    
    
        this.client.distube.shuffle(message);
        message.reply(`Queue has been shuffled by: ${user}`)


    }}