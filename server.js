import app from './server/express.js'
import config from './config/config.js'
import mongoose from 'mongoose';

app.get("/", (req, res) => {
    res.json({ message: "Welcome to User application." });
});

app.listen(config.port, (err) => { 
    if (err) {
        console.log(err) 
    }
    console.info('Server started on port %s.', config.port) 
})