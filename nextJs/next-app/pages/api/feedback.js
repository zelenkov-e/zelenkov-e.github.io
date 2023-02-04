import { MongoClient } from 'mongodb'
const config = require('config')

async function haandler(req, res) {
    if (req.method === 'POST') {
        const link = req.body.link;
        const newFeedBack = { id: new Date().toISOString(), link: link }
        const client = await MongoClient.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const db = client.db()
        await db.collection('links').insertOne(newFeedBack)
        client.close()

        res.status(201).json({ message: 'success', feedback: newFeedBack })
    }
}

export default haandler