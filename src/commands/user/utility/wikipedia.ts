import { BotCommand } from '@extensions/BotCommand';
const  ultrax = require('ultrax') 

export default class wikipedia extends BotCommand {
    constructor() {
        super('wikipedia', {
            aliases: ['wikipedia'],
            description: 'When your browser breaks moment',
            usage: '$wikipedia <query>',
            cooldown: 5000,
            args: [
                {
                    id: 'query',
                    type: 'string',
                    match: 'restContent'
                }
            ],
            slash:true,
            slashOptions: [
                {
                    name: 'query',
                    description: 'Search query',
                    type:'STRING',  
                    required: true
                }]
        })
    }
    async exec(message, args) {

        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }


        const query = args.query


    const  res = new ultrax.Wikipedia({ 
	message:  message, // The message
	color:  "RED", // Color of embed that will be sent
	query:  query  // what the search query is
})

res.fetch() 
    
    }}