// For the demo purpose doing all the functionality in one file
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT ?? 3000;
const Env = {
    app_id: 'app_id',
    secretKey: 'password', // secret key must be same as on the jitsi server
    domain: 'jistinew.meest4bharat.net'
};

app.get('/', (req, res) => res.send('Welcome to the Homepage !'))

app.get('/api/call/room', (req, res) => {
    const { host, userId } = req.query;
    if(!host || !userId) return res.status(404).json({error: 'Required data not found!'})
    // Note: UserId will be parsed from authToken instead of Req.Body
    const payload = {
        context: {
          user: { // userdata from DB in dev
            avatar: "https:/gravatar.com/avatar/abc123",
            name: "Test User",
            email: "test@example.com"
          }
        },
        aud: Env.app_id,
        iss: Env.app_id,
        sub: Env.domain,
        room: userId,
    };
    jwt.sign(payload, Env.secretKey, (err, jitsiToken) => {
        if(err) return res.status(500).json({error: 'Something went wrong'});
        res.set('jitsiToken', jitsiToken);
        res.json({room: userId});
        // using iframe/sdk, frontend will handle this Token to initialize call
    });
})

app.listen(PORT, () => console.log(`Server Running at port: ${PORT}`));