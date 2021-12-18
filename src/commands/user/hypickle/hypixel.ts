import { Message, MessageActionRow, MessageEmbed, MessageSelectMenu, SelectMenuInteraction } from "discord.js";
import { BotCommand } from "@extensions/BotCommand";
import Hypixel from "hypixel-api-reborn";
import config from "../../../extensions/config/config";
import { AkairoMessage } from "discord-akairo";
import simplydjs from "../../../../custom modules/simply-djs-v13";
import fetch from "node-fetch"
const hypixel = new Hypixel.Client(config.hypixel_key);

export default class hyplayer extends BotCommand {
	constructor() {
		super("hypixel", {
			aliases: ["hypixel"],
			description: "Show hypixel statistics on a player",
			usage: "$changelog",
			cooldown: 10000,
			args: [
				{
					id: "player",
					type: "string",
					match: "restContent",
				},
			],
			slash: true,
			slashOptions: [
				{
					name: "player",
					description: "The player to look up",
					type: "STRING",
					required: true,
				},
			],
		});
	}

	skyblockProfiles: Hypixel.SkyblockProfile[];

	async exec(message: Message | AkairoMessage, args: { player: string }) {
		const user = args.player;

		const choice = new MessageSelectMenu()
			.addOptions(
				{
					label: "General Information",
					value: "GI",
					description: "Fetch general information",
					emoji: "📃",
				},
				{
					label: "Skyblock",
					value: "SB",
					description: "Fetch Skyblock statistics and information",
					emoji: "🪂",
				},
				{
					label: "Skywars",
					value: "SW",
					description: "Fetch Skywars statistics",
					emoji: "🌌",
				}
			)
			.setCustomId("hypixel-select-type")
			.setMaxValues(1)
			.setMinValues(1)
			.setPlaceholder("Select an option");

		const msg = (await message.reply({
			content: "Select an option from the menu below. Menu will be timed out in 5 minutes. If the interacton fails, double check that you have provided a valid username",
			components: [new MessageActionRow().addComponents(choice)],
		})) as Message;

		const collector = msg.createMessageComponentCollector({
			filter: (interaction: SelectMenuInteraction) =>
				interaction.channel.id === message.channel.id && ["sb-profile", "hypixel-select-type"].includes(interaction.customId) && interaction.message.id === message.id,
			componentType: "SELECT_MENU",
			time: 300_000,
		});

		this.client.on('interactionCreate', async interaction => {
    if (!interaction.isSelectMenu()) return;
			if (interaction.customId === "hypixel-select-type") {
				switch (interaction.values[0]) {
					case "GI": {
						const embed = await this.generateGeneralInfo(message as Message, args.player);
						await interaction.reply({ content: null, embeds: [embed] });
						break;
					}
					case "SB": {
						const info = await this.getSkyblockInfo(user);
						const profileSel = new MessageSelectMenu()
							.addOptions(
								info.map((val, index) => ({
									label: val.profileName,
									value: `P${index}`,
									description: `Show stats about ${val.profileName}.`,
									emoji: index % 2 ? "❔" : "❓",
								}))
							)
							.setMaxValues(1)
							.setMinValues(1)
							.setCustomId("sb-profile")
							.setPlaceholder("Select a profile");
						await interaction.reply({
							content: "Choose a profile to view",
							components: [new MessageActionRow().addComponents(profileSel)],
						});
						break;
					} 
					case "SW": {
						interaction.reply("Work in progress")
						break;
					}
				}
			} else {
			const player = await hypixel.getPlayer(user); 
			const uuid = player.uuid
			if(interaction.customId === "sb-profile"){
				switch (interaction.values[0]) {
					case "P0": {
					

				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P0Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[0].profileId}` },
                    { name: "Profile Name", value: `${profiles[0].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[0].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[0].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[0].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[0].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[0].members[0].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[0].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[0].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[0].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P01Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[0].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P02Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P0Embed, P01Embed, P02Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})
						break;
					}



					case "P1": {

				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P1Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[1].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[1].profileId}` },
                    { name: "Profile Name", value: `${profiles[1].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[1].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[1].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[1].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[1].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[1].members[0].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[1].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[1].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[1].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P11Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[1].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[1].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P12Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P1Embed, P11Embed, P12Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})
						break;
					}



					case "P2": {
				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P21Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[1].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[2].profileId}` },
                    { name: "Profile Name", value: `${profiles[2].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[2].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[2].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[2].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[2].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[2].members[0].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[2].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[2].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[2].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P22Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[2].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[2].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P23Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[2].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P21Embed, P22Embed, P23Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})

						break;
					}



					case "P3": {
				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P31Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[3].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[3].profileId}` },
                    { name: "Profile Name", value: `${profiles[3].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[3].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[3].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[3].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[3].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[3].members[0].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[3].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[3].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[3].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P32Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[3].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P33Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P31Embed, P32Embed, P33Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})
						break;
					}



					case "P4": {
				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P41Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[4].profileId}` },
                    { name: "Profile Name", value: `${profiles[4].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[4].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[4].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[4].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[4].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[0].members[4].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[4].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[4].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[4].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P42Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[4].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[4].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P43Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P41Embed, P42Embed, P43Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})

						break;
					}



					case "P5": {
				hypixel.getSkyblockProfiles(user).then( async profiles => {

				const P51Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock General Player Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`General Skyblock information about: ${user} on profile ${profiles[5].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "Profile ID:", value: `${profiles[5].profileId}` },
                    { name: "Profile Name", value: `${profiles[5].members[0].profileName}` },
                    { name: "Fairy Souls:", value: `${profiles[5].members[0].fairySouls}` },
                    { name: "Fairy Souls Exchanges:", value: `${profiles[5].members[0].fairyExchanges}` },
                    { name: "First Joined Skyblock At: ", value: `${profiles[5].members[0].firstJoinAt}` },
                    { name: "First Joined Skyblock Hub At", value: `${profiles[5].members[0].firstJoinHubAt}` },
                    { name: "Most Recent Death:", value: `${profiles[0].members[5].lastDeathAt}` },
                    { name: "Most Recent Date Of Profile Creation", value: `${profiles[5].members[0].lastSaveAt}` },
                    { name: "Purse Balance:", value: `${profiles[5].members[0].purse}` },
                )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const slayerObject = profiles[5].members[0].slayer

				const zombie = (({ zombie }) => ({ zombie }))(slayerObject);

				const spider = (({ spider }) => ({ spider }))(slayerObject);

				const wolf = (({ wolf }) => ({ wolf }))(slayerObject);

				const P52Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Slayer Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Slayer information about: ${user} on profile ${profiles[5].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "<:RevHorror:888694417769254932>`Revenant Horror:`", value: `Total XP: ${zombie.zombie.xp} \n \n Level: ${zombie.zombie.level} \n \n Number of **tier 1** slain: ${zombie.zombie.tier1} \n \n Number of **tier 2** slain: ${zombie.zombie.tier2} \n \n Number of **tier 3** slain: ${zombie.zombie.tier3} \n \n Number of **tier 4** slain: ${zombie.zombie.tier4} \n \n` },
                    { name: "<:TaraBroodfather:888695418911862804>`Tarantula Broodfather:`", value: `Total XP: ${spider.spider.xp} \n \n Level: ${spider.spider.level} \n \n Number of **tier 1** slain: ${spider.spider.tier1} \n \n Number of **tier 2** slain: ${spider.spider.tier2} \n \n Number of **tier 3** slain: ${spider.spider.tier3} \n \n Number of **tier 4** slain: ${spider.spider.tier4} \n \n` },
					{ name: "<:SvenPackmaster:888695028854161438>`Sven Packmaster:`", value: `Total XP: ${wolf.wolf.xp} \n \n Level: ${wolf.wolf.level} \n \n Number of **tier 1** slain: ${wolf.wolf.tier1} \n \n Number of **tier 2** slain: ${wolf.wolf.tier2} \n \n Number of **tier 3** slain: ${wolf.wolf.tier3} \n \n Number of **tier 4** slain: ${wolf.wolf.tier4} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

				const jacobObject = profiles[5].members[0].jacob

				const medals = (({ medals }) => ({ medals }))(jacobObject);

				const perks = (({ perks }) => ({ perks }))(jacobObject);
				
				const P53Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Hypixel Skyblock Jacob Information")
                .setURL("https://hypixel.net/")
                .setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
                .setDescription(`Jacob information about: ${user} on profile ${profiles[0].members[0].profileName}`)
                .setThumbnail(`https://crafatar.com/avatars/${uuid}`)
                .addFields(
					{ name: "`🏅Medals:`", value: `🥉Bronze medals: ${medals.medals.bronze} \n \n 🥈Silver medals: ${medals.medals.silver} \n \n 🥇Gold medals: ${medals.medals.gold} \n \n` },
                    { name: "\n \n `✨Perks:`", value: `2️⃣Double Drops: ${perks.perks.doubleDrops} \n \n 🧢 Farming level cap: ${perks.perks.farmingLevelCap} \n \n` },
               )
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");


				const pages = [P51Embed, P52Embed, P53Embed];

						simplydjs.embedPages(this.client, message, pages, {
						firstEmoji: "⏪", // default: ⏪
						backEmoji: "◀️", // default: ◀️
						delEmoji: "🗑️", // default: 🗑️
						forwardEmoji: "▶️", // default: ▶️
						lastEmoji: "⏩", // default: ⏩

						btncolor: "SUCCESS", // default: SUCCESS
						delcolor: "DANGER", // default: DANGER
						skipcolor: "PRIMARY", // default: PRIMARY
	
						skipBtn: true,
					});
						}).catch(e => {
						console.log(e);
						})
						break;
					}
				}

			}
			
			}
		});
	}


	async generateGeneralInfo(message: Message, user: string): Promise<MessageEmbed> {
		try {
			const player = await hypixel.getPlayer(user);

			const object = player.ranksPurchaseTime;

			const getDate = (obj) =>
				Object.entries(obj)
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					.find(([_, v]) => v)
					?.join(": ") ?? "`Unknown or rank was gifted`";

			const uuid = player.uuid;

			const playerinfo = new MessageEmbed()
				.setColor("RANDOM")
				.setTitle("Hypixel Player Information")
				.setURL("https://hypixel.net/")
				.setAuthor("Miska Bot", "https://i.imgur.com/I8qSDdc.jpg", "https://discordbotlist.com/bots/miska-bot")
				.setDescription(`General information about: ${user}`)
				.setThumbnail(`https://crafatar.com/avatars/${uuid}`)
				.addFields(
					{ name: `UUID Of ${player}:`, value: `${player.uuid}` },
					{ name: "Level:", value: `${player.level}` },
					{ name: "Achievement Points:", value: `${player.achievementPoints}` },
					{ name: "Current Chat Channel:", value: `${player.channel}` },
					{ name: "First Login:", value: `${player.firstLogin}` },
					{ name: "Last Logout:", value: `${player.lastLogout}` },
					{ name: "Currently Online:", value: `${player.isOnline}` },
					{ name: "Minecraft Version", value: `${player.mcVersion ?? "`Unknown`"}` },
					{ name: "Nickname", value: `${player.nickname}` },
					{ name: "Rank:", value: `${player.rank}` },
					{ name: "User Language:", value: `${player.userLanguage}` },
					{ name: "Time Of Rank Purchase:", value: `${getDate(object)}` }
				)
				.setTimestamp()
				.setFooter(`Requested by: ${message.author.username}`, "https://i.imgur.com/I8qSDdc.jpg");

			return playerinfo;
		} catch (e) {
			console.error(e);
		}
	}

	async getSkyblockInfo(user: string) {
		return this.skyblockProfiles ?? (await hypixel.getSkyblockProfiles(user));
	}
}
