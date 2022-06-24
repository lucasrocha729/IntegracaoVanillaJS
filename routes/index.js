var express = require('express');
var router = express.Router();

var controller = require('../src/controllers/guildController')

/* GET home page. */
router.get('/guilds', async function(req, res, next) {
  let infos = await controller.infosGuild()
  res.status(200).send(infos);
});

module.exports = router;
