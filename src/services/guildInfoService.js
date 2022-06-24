const axios = require('axios').default;
const db = require('../repositories/guildRepository');

async function getGuildInfos(data) {
  const { region, realm, guildName } = data;
  const params = {
    region,
    realm,
    name: guildName,
    fields: 'raid_progression'

  };

  const guildinfos = await axios.get('https://raider.io/api/v1/guilds/profile', { params: params }).then((res) => res.data)
  const guildRegistred = await db.findOneGuild(guildinfos.name)
 
  if(!guildRegistred) {
     db.save(guildinfos)
  } else {
    db.updateGuild(guildinfos)
  }
 }

async function listGuilds() {
  return db.listGuilds()
}

module.exports = {
  listGuilds,
  getGuildInfos
}