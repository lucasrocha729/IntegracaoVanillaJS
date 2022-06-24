const { Kafka } = require("kafkajs");
const guildService = require("../services/guildInfoService")

const kafka = new Kafka({
  clientId: 'KAFKA_CLIENT_ID',
  brokers: ['localhost:29092'],
})

const consumer = kafka.consumer({ groupId: 'GROUP_ID' })

const run = async () => {
  await consumer.connect()
 await consumer.subscribe({ topic: 'GuildInfosTopic', fromBeginning: true })
 
 await consumer.run({
   eachMessage: async ({ message }) => {
     const jsonParse = JSON.parse(message.value.toString())

    guildService.getGuildInfos(jsonParse.data)
  
    }
 })
  
}

run()