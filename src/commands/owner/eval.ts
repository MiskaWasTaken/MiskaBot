/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk'
import { exec } from 'child_process'
import { MessageEmbed } from 'discord.js'
import { promisify, inspect } from 'util'
import { BotCommand } from '@extensions/BotCommand'

import importUtils from '@functions/utils'
const utils = importUtils

import importHMfull from 'hmfull'
const HMfull = importHMfull

import importCommandManager from '@functions/commandManager'
const commandManager = importCommandManager

const ms = require('ms')

const sh = promisify(exec);

const fs = require('fs')

export default class evaluate extends BotCommand {
    constructor() {
        super('eval', {
            aliases: ['eval'],
            description: 'Dev only :) | Evaluate code',
            cooldown: 10000,
            args: [
                { id: 'codetoeval', type: 'string', match: 'rest' },
                { id: 'silent', match: 'flag', flag: '--silent', },
                { id: 'sudo', match: 'flag', flag: '--sudo' }
            ],
            slash: true,
            slashOptions: [
                {
					name: 'codetoeval',
					description: 'Dev only :)',
					type:'STRING',
                    required: true  
				}
            ],
        })
    }

    async exec(message, args) {  


        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 

        if(!args.codetoeval){
            return message.reply("Actually provide me something to evaluate you smoothbrain")
        }

        if (args.codetoeval.includes('token')) { return (message.util.send('no token')) }
        if (args.codetoeval.includes('env')) { return message.util.send('no env') }

        if (args.codetoeval.includes('channel.delete')) { return message.util.send('Are you IRONM00N?') }
        if (args.codetoeval.includes('message.guild.delete')) { return message.util.send('You\'re like IRONM00N but infinitely more stupid!') }
        if (args.codetoeval.includes('delete') && !args.sudo) { return message.util.send('This would be blocked by smooth brain protection, but BushBot has a license') }

        const guild = message.guild
        const client = this.client
        const channel = message.channel
        const embed = new MessageEmbed()
        const user = message.author
        const member = message.member
        const botUser = this.client.user
        const botMember = message.guild.me

        let output

        try {
            output = await eval(`(async () => {${args.codetoeval}})()`)
            output = inspect(output, { depth: 0 })
        }
        catch (err) {
            const errorStack = err.stack.substring(0, 1000)

            output = errorStack
        }

        if (inspect(output).includes(this.client.token)) { return message.util.send('Message containing token wasn\'t sent.') }



        const evalEmbedDisabledGuilds = [
            '794610828317032458'
        ]
        const evalDisabledGuildChannelBypass = [
            '834878498941829181'
        ]

        if (evalEmbedDisabledGuilds.includes(message.guild.id) && !evalDisabledGuildChannelBypass.includes(message.channel.id)) {
            if (args.codetoeval.includes('message.delete')) { return }
            else { return message.react('<:success:838816341007269908>') }
        }

        if (!args.silent && !args.codetoeval.includes('message.channel.delete()')) {
            const evalOutputEmbed = new MessageEmbed()
                .setTitle('Evaluated Code')
                .addField(':inbox_tray: **Input**', `\`\`\`js\n${args.codetoeval}\`\`\``)
                .setColor(message.member.displayColor)

            if (output.length >= 1000) { output = await utils.haste(output) }
            else { output = `\`\`\`js\n${output}\`\`\`` }
            evalOutputEmbed.addField(':outbox_tray: **Output**', output)

            await message.util.reply({ embeds: [evalOutputEmbed] })
        }
        if (args.silent) {
            if (args.codetoeval.includes('message.delete')) { return }
        }
    }
}

