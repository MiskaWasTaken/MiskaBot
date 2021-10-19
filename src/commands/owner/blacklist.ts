import { BotCommand } from "@extensions/BotCommand"
const db = require('quick.db')
const ms = require('ms')

export default class blacklist extends BotCommand {
    constructor() {
        super('blacklist', {
            aliases: ['blacklist'],
            description: 'Dev only :) | Blacklist someone',
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

        const user = args.user
        const time = args.time


        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 

        if(user == '@'){
            message.reply('an id you smoothbrain not a ping')
            return;
        }

        if(user.length > 18){
            message.reply('look you smooth brain thats not a discord id')
        }


        if(time){
            db.push('list', user)
            setTimeout(function(){ 
                const list = db.get('list')

                const filter = list.filter(e => e !== user)
        
                db.set('list', filter)
                message.reply(`Unblacklisted <@${user}> after duration of ${time}`)
             }, ms(time));
        }

        //  db.set('list', ['600875620808785941'])
         db.push('list', user)
         message.reply(`Blacklisted <@${user}>`)



    }
}

