var mongoose = require('mongoose')

function save(data) {
  mongoose.connect('mongodb://root:root@localhost:27017/guilds?authSource=admin')
  var db = mongoose.connection
  
  db.on('error', console.error.bind(console, "ERROR CONNECTION"))
  db.once('open', function () {
    console.log("Conected")
  })

  db.collection("GuildInfo").insertOne(data, function(err, res) {
    if (err) 'ERROR';
    console.log("1 document inserted");
    console.log(res)
    
  });

}

async function findOneGuild(guildName) {

  mongoose.connect('mongodb://root:root@localhost:27017/guilds?authSource=admin')
  var db = mongoose.connection
  
  db.on('error', console.error.bind(console, "ERROR CONNECTION"))
  db.once('open', function () {
    console.log("Conected")
  })

 return db.collection("GuildInfo").findOne({name: guildName});
}

function updateGuild(guildInfos) {

  mongoose.connect('mongodb://root:root@localhost:27017/guilds?authSource=admin')
  var db = mongoose.connection
  
  db.on('error', console.error.bind(console, "ERROR CONNECTION"))
  db.once('open', function () {
    console.log("Conected")
  })

  db.collection("GuildInfo").updateOne({name: guildInfos.name}, {$set: guildInfos}, function(err) {
    if (err) 'ERROR';
    console.log("1 document updated");
    
  });

}

async function listGuilds() {

  const Conn = mongoose.createConnection();

await Conn.openUri('mongodb://root:root@localhost:27017/guilds?authSource=admin');
 
const registers = Conn.collection('GuildInfo').find().sort({ "raid_progression.sepulcher-of-the-first-ones.mythic_bosses_killed": 'desc',   })

return registers.toArray()

}

module.exports = {
  save,
  findOneGuild,
  updateGuild,
  listGuilds
}