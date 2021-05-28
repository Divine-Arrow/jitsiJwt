Install
```sh
npm i
```

Run
```sh
npm run start
```
```sh
npm run dev
```

Open browser
```
https://arrow-jitsi.herokuapp.com
http://localhost:3000
```


API cURL :
curl --location --request GET '{{URL}}/api/call/room?host=1&userId=5063114bd386d8fadbd6b004';


URL = https://arrow-jitsi.herokuapp.com || http://localhost:3000

In order to check this do below steps

so after getting JitsiToken and Room name just open up the browser and enter this url
```
https://jistinew.meest4bharat.net/<roomname>?jwt=<jitsiToken>
```
After hiting above API the call shall start and open the above same URL in new tab to join that call
