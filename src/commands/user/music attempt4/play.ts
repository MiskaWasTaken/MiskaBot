const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')


const DisTube = require("distube")
const distube = new DisTube.default(this.client, {
	searchSongs: 1,
	searchCooldown: 5,
	leaveOnEmpty: true,
	emptyCooldown: 5,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(), new SpotifyPlugin()],
});