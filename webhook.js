var request = require('request');
var headers = {
  "Content-Type": "application/json"
}

var options = {
  url: "https://discordapp.com/api/webhooks/445641954290827265/iWG72cf-8ovjZPzg14nVfJs0wkiYB30O-Svk23KwV6r6ieW49gHiqCceDppKH-cLV7oz",
  method:  "POST",
  headers: headers,
  form: {"content": "@everyone Dyno was here.",
         "username": "Dyno",
         "avatar_url": "https://images.discordapp.net/avatars/155149108183695360/5aeb68c29b56b3d92eddb6f46df5051c.png"}
}

var interval = 10 * 35; // setting interval at .35 seconds so we dont get ratelimited
for (var x = 0; x < 10000; x+=1) { // change '100' to howmany messages u wanna send
  setTimeout( function (x) {
    request(options, function(error, body){
      if (error) console.log("Webhook is invalid"); // if we cant connect webhook = invalid
    })
  }, interval * x, x);
}
