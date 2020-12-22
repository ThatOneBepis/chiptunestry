var ambient = [
    "game-classic-5", "game-classic-7", "game-classic-8", "game-inf-2",
    "game-inf-3", "game-inf-5", "game-inf-6", "game-inf-9",
    "game-inf-10", "game-inf-12", "game-inf-13", "game-inf-15",
    "game-inf-19", "game-inf-21", "game-inf-22", "game-inf-24",
    "game-inf-26", "game-inf-28","game-inf-29",
];

var dark = [
    "game-classic-1", "game-classic-2", "game-classic-3", "game-classic-4",
    "game-classic-6", "game-inf-1", "game-inf-4", "game-inf-7",
    "game-inf-8", "game-inf-11", "game-inf-14", "game-inf-16",
    "game-inf-17", "game-inf-18", "game-inf-20", "game-inf-23",
    "game-inf-25", "game-inf-27",
];

var boss = [
    "boss-inf-1", "boss-inf-2", "boss-inf-3", "boss-inf-4",
    "boss-inf-5", "boss-inf-6", "boss-inf-7", "boss-inf-8",
    "boss-inf-9", "boss-inf-10", "boss-inf-11", "boss-inf-12",
];

Events.on(ClientLoadEvent, () => {
    for(var a of ambient){
        var x = loadMusic(a);
        Vars.control.sound.ambientMusic.add(x);
    };

    for(var d of dark){
        var x = loadMusic(d);
        Vars.control.sound.darkMusic.add(x);
    };

    for(var b of boss){
        var x = loadMusic(b);
        Vars.control.sound.bossMusic.add(x);
    };
});
