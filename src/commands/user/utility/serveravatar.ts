import { MessageEmbed } from "discord.js";
import { BotCommand } from "@extensions/BotCommand";

export default class servericon extends BotCommand {
	constructor() {
		super("servericon", {
			aliases: ["servericon"],
			description: "display server's icon",
			usage: "$serveravatar",
			cooldown: 2000,
			args: [

			],

			slash:true,
			slashOptions: [

			]
		});
	}

	async exec(message) {

        const { guild } = message
        
        const { name } = guild

		const embed = new MessageEmbed()
            .setDescription(`**${name}'s server icon**`)
            .setImage(message.guild.iconURL())
            .setColor("RANDOM");
		await message.reply({ embeds: [embed] });
	}
}
