import { MongoClient } from 'mongodb'
import formidable from 'formidable';
const process = require('config')

export const config = {
    api: {
        bodyParser: false,
    }
};

async function handler(req, res) {
    const client = await MongoClient.connect(process.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    if (req.method === 'POST') {

        const form = new formidable.IncomingForm();
        form.parse(req, async function (err, fields, files) {
            res.status(201).json({ message: 'file was sent' })
        });
    }

    if (req.method === 'GET') {
        const db = client.db()

        const links = await db
            .collection('links')
            .find()
            .toArray()

        res.status(200).json({ message: 'success', links: links })
    }
    client.close()
}

export default handler
