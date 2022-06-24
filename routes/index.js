var express = require('express');
var router = express.Router();

var controller = require('../src/controllers/guildController')

/**
* @api {get} Guilds Get guild infos
* @apiName Guilds
* @apiGroup Guilds
**
* @apiSuccessExample {json} Success example.
* HTTP/1.1 201 OK
*[
*  {
*    "_id": "62b511dc156e16ca6cd965e8",
*    "name": "Liquid",
*    "faction": "horde",
*    "region": "us",
*    "realm": "Illidan",
*    "last_crawled_at": "2022-06-24T00:00:49.000Z",
*    "profile_url": "https://raider.io/guilds/us/illidan/Liquid",
*    "raid_progression": {
*      "castle-nathria": {
*        "summary": "10/10 M",
*        "total_bosses": 10,
*        "normal_bosses_killed": 10,
*        "heroic_bosses_killed": 10,
*        "mythic_bosses_killed": 10
*      },
*      "sanctum-of-domination": {
*        "summary": "10/10 M",
*        "total_bosses": 10,
*        "normal_bosses_killed": 10,
*        "heroic_bosses_killed": 10,
*        "mythic_bosses_killed": 10
*      },
*      "sepulcher-of-the-first-ones": {
*        "summary": "11/11 M",
*        "total_bosses": 11,
*        "normal_bosses_killed": 11,
*        "heroic_bosses_killed": 11,
*        "mythic_bosses_killed": 11
*      }
*    }
*  }
*]
*
*/
router.get('/guilds', async function(req, res, next) {
  let infos = await controller.infosGuild()
  res.status(200).send(infos);
});

module.exports = router;
