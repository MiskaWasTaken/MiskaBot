import { BotCommand } from "@extensions/BotCommand"
const db = require('quick.db')
const ms = require('ms')


export default class unblacklist extends BotCommand {
    constructor() {
        super('unblacklist', {
            aliases: ['unblacklist'],
            description: 'Dev only :) | Unblack list a user',
            cooldown: 10000,
            slash: true,
            args: [
                {
                    id: 'user',
                    type: 'string',
                    match: 'restContent'
                }
            ],
            slashOptions: [

                {
                    name: 'user',
                    description: 'user id',
                    type:'STRING',  
                    required: true
                },

                {
                    name: 'time',
                    description: 'optional time setting',
                    type:'STRING',  
                    required: false
                }
                

            ],

        });
    }


    async exec(message, args) {

        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 

        

        const user = args.user
        const time = args.time

        
        if(user == '@'){
            message.reply('an id you smoothbrain not a ping')
            return;
        }

        if(user.length > 18){
            message.reply('look you smooth brain thats not a discord id')
        }


        if(time){
            const list = db.get('list')

            const filter = list.filter(e => e !== user)
    
            db.set('list', filter)
            message.reply(`Unblacklisted <@${user}> for ${time}`)

            setTimeout(function(){ 
                db.push('list', user)
                message.reply(`Re-blacklisted <@${user}> after duration of: ${time}`)
                const log = db.get('list')
                console.log(log)
             }, ms(time));
        }


        const list = await db.get('list')

        const filter = list.filter(e => e !== user)

        db.set('list', filter)

        message.reply(`Unblacklisted <@${user}>`)

    }}