function getRandomGreeting() {
  var greetings = [
    "max aura",
    "baby u got somethin' in your nose",
    "english or spanish?",
    "bbl drizzy",
    "hi",
    "♪ I ain't never rep a set, baby ♪",
    "oi oi oi baka",
    "say worcestershire",
    "look at my eyes, tell me a tale",
    "best website honestly",
    "moana make way, make way",
    "wop wop wop wop wop, dot fuck 'em up",
    "gotta make a move to a town thats right for me",
    "time to get 𝓯𝓻𝓮𝓪𝓴𝔂",
    "what's 2+2? go fuck yourself!",
    "crazy? i was crazy once",
    "go do your hw",
    "ur a nerd",
    "yeah u got that yummy yummy",
    "life is a highway",
    "what is space expanding into???",
    "built brick by brick",
    "this ur ip? 71.112.184.61",
    "delta dawn",
    "my phone password is 121623",
    "you are my sunshine",
    "um what the sigma",
    "quandale dingle here",
    "that's my hood 🍆head 😈😈",
    "Powered by 128 Gigs of RAM!",
    "Powered by 16MB of RAM!",
    "I'm Slim Shady, yes, I'm the real Shady!",
    "You're a real jerk!",
    "w h a t",
    "bryce was here",
    "why tf my dog walk sideways",
    "stay with me now...",
    "i am duke denis son of kai cenat",
    "no edging",
    "did you know",
    "cause i don't wanna live a lie lie lie",
    "We didn't start the fire! It was always burning, since the world's been turning!",
    "yeah glo",
    "microsoft edge>chrome",
    "un video mas mi gente 😭🙏",
    "trump 2024",
    "i pledge allegiance to the flag",
    "yuh yuh",
    "heat waves been fakin' me out",
    "cool explosion or smth",
    "shoutout mrs brennan",
    "Is this the United Airlines costumer service center?",
    "POV that one person who's 2 braincells are fighting for second place.",
    "bottem text",
    "Why do they call it oven if you oven the cold food of out hot eat the food",
    "No fun allowed",
    "Your toes will be pulled tonight",
    "i do love buying birth certificates from the black market! - Piplup",
    "'If you are trash go play Fortnite you loser' - Sun Tzu, Art of war",
    "Echo is not a furry I swear",
    "i wanted free vbucks :(",
    "Avocados \ud83e\udd51 from Mexico \ud83c\uddf2\ud83c\uddfd",
    "reload for another message",
    "Why does the discord server exist",
    "He stomped on his fruit loops and thus became a cereal killer.",
    "Techonoblade never dies!",
    "And just to think I knew him before he was famous",
    "Trust me, I did not copy Minecraft with this",
    "It is everyday bro",
    "That proves you are unusual",
    "What's my age again?",
    "This is the 5th time this week, and it's only Monday",
    "You bum",
    "Roblox? Cringe!",
    "Toss the Turtle is pretty fun",
    "Mission failed, we will get them next time",
    "NUKE INCOMING!",
    "I spent too much time making these",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();