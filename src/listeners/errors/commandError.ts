import { BotListener } from '@extensions/BotListener';

export default class commandErrorListener extends BotListener {
    constructor() {
        super('commandErrorListener', {
            emitter: 'commandHandler',
            event: 'error'
        })
    }
    async exec(error, message) {
        //if (error == 'Error: Request failed with status code 451') { return message.reply('For whatever stupid reason, the government blocked me from accessing this when I\'m hosted in this location.') }

        if (this.client.ownerID.includes(message.author.id)) { message.reply(`An error occured!\n\`\`\`js\n${error.stack}\`\`\``) }
        if(message.author.id){
            message.reply({ embeds: [this.client.error(error, ' command')] })
            message.reply("Something went wrong, please make sure you use the command with with correct syntax, usage and limitations. Error has been automatically reported to my devs.")
        }
        else { message.reply({ embeds: [this.client.error(error, ' command')] }) }
    }
}