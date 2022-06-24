var guildInfoService = require('../services/guildInfoService')

async function infosGuild() {
  return guildInfoService.listGuilds()
}

module.exports = {
  infosGuild
}