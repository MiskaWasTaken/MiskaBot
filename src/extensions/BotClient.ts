import utils from "@functions/utils"
import chalk from "chalk"
import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler, TaskHandler } from "discord-akairo"
import { Intents, MessageEmbed, TextChannel } from "discord.js"
import { Assistant, AssistantLanguage, } from "nodejs-assistant";
import { join } from "path"
const DisTube = require("distube");
import config from '../extensions/config/config'
//import {BotClientUtils} from '@extensions/BotClientUtils'
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')

class BotClient extends AkairoClient {
	public commandHandler: CommandHandler = new CommandHandler(this, {
		prefx: 'hahahafunnynumberis696969696969696996969696996969696969alsomiskaismaybeafemboywedontknowalsoits744amon1152021',
		commandUtil: true,
		handleEdits: true,
		directory: join(__dirname, "..", "commands"),
		allowMention: true,
		automateCategories: true,
		autoRegisterSlashCommands: true,
		autoDefer: false,
	})

	public distube = new DisTube.default(this, {
		searchSongs: 1,
		searchCooldown: 5,
		leaveOnEmpty: true,
		emptyCooldown: 5,
		leaveOnFinish: false,
		leaveOnStop: false,
		plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
	})

	public assistant = new Assistant( {
		type: 'authorized_user',
		client_id: config.client_id,
		client_secret: config.client_secret, 
		refresh_token: config.refresh_token,
	}, {
		locale: AssistantLanguage.ENGLISH, 
		deviceId: '287698408855044097',  
		deviceModelId: '444871677176709141', 
	})



	public listenerHandler: ListenerHandler = new ListenerHandler(this, {
		directory: join(__dirname, "..", "listeners"),
		automateCategories: true
	})

	public inhibitorHandler: InhibitorHandler = new InhibitorHandler(this, {
		directory: join(__dirname, "..", "inhibitors")
	})

	public taskHandler: TaskHandler = new TaskHandler(this, {
		directory: join(__dirname, "..", "tasks")
	})


	public error = async (error: Error, type?: string) => {
		const errorChannel = await this.channels.cache.get('868575406331158548') as TextChannel

		const errorCode = utils.getRandomInt(69696969696969)

		let errorStack = error.stack

		if (errorStack.length > 1000) {
			errorStack = errorStack.substring(0, 1000)
		}

		const errorEmbed = new MessageEmbed()
		if (!type) { errorEmbed.setTitle('An error occured!') }
		else { errorEmbed.setTitle(`A${type} error occured!`) }
		errorEmbed.addField('Error code', `\`${errorCode}\``)
		errorEmbed.setDescription(`\`\`\`js\n${errorStack}\`\`\``)
		errorEmbed.setColor('DARK_RED')

		errorChannel.send({ /*content: `\`\`\`js\n${errorStack}\`\`\``,*/ embeds: [errorEmbed] })
		// console.log(errorChannel)

		const returnErrorEmbed = new MessageEmbed()
			.setTitle('An error occured!')
			.setDescription(`Please give my developer code \`${errorCode}\``)
			.setColor('DARK_RED')

		return returnErrorEmbed
	}


	public notNsfwEmbed = new MessageEmbed()
		.setColor('#ff0000')
		.setTitle('You can\'t use this command here.')
		.setDescription('This channel isn\'t NSFW, so you cannot use this command here.')
		.setImage('https://i.imgur.com/oe4iK5i.gif')

	public constructor() {
		super({
			ownerID: [
				'492488074442309642',
				'545277690303741962',
				'665916893579706416'
			],
			intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES]
		},
			{
				allowedMentions: {
					parse: ["users"]
				},
				intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES]
			})
	}

	private async _init(): Promise<void> {
		this.commandHandler.useListenerHandler(this.listenerHandler)
		this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
		this.listenerHandler.setEmitters({
			commandHandler: this.commandHandler,
			listenerHandler: this.listenerHandler,
			process
		})
		// loads all the stuff
		const loaders = {
			commands: this.commandHandler,
			listeners: this.listenerHandler,
			inhibitors: this.inhibitorHandler,
			tasks: this.taskHandler,
		}
		for (const loader of Object.keys(loaders)) {
			try {
				loaders[loader].loadAll()
				if (loader == 'tasks') { loaders[loader].startAll() }
				console.log(chalk.blueBright(`Successfully loaded ${loader}.`))
			} catch (e) {
				console.error(`Unable to load ${loader} with error ${e}.`)
			}
		}
	}

	public async start(): Promise<string> {
		await this._init()
		return this.login(config.token)
	}
}

export default BotClient
