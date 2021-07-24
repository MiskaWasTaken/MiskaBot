import chalk from 'chalk'
import { BotListener } from '@extensions/BotListener'

class ReadyListener extends BotListener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
        console.log(chalk`{magenta Logged in as} {magentaBright.bold ${this.client.user.tag}}`)
        console.log(`\n`)
        console.log(chalk.magentaBright(`---Bot Output---\n`))

        // const logChannel = this.client.channels.cache.get('839215645715595316') as TextChannel
        // logChannel.send(`Logged in as **${this.client.user.tag}**`)

        //this.client.user.setActivity('Zordlan create me', { type: 'WATCHING' })
    }
}

module.exports = ReadyListener