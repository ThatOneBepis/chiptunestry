//no other scripts are in this mod, main js will be used for storing all scripted data
//region Mindustry classic music

const mindustryClassic1 = loadMusic("game-classic-1");
const mindustryClassic2 = loadMusic("game-classic-2");
const mindustryClassic3 = loadMusic("game-classic-3");
const mindustryClassic4 = loadMusic("game-classic-4");
const mindustryClassic5 = loadMusic("game-classic-5");
const mindustryClassic6 = loadMusic("game-classic-6");
const mindustryClassic7 = loadMusic("game-classic-7");
const mindustryClassic8 = loadMusic("game-classic-8");

//endregion
//region Infinitode music

const blankPage = loadMusic("game-inf-1");
const shockTherapy = loadMusic("game-inf-2");
const dragonAtlas = loadMusic("game-inf-3");
const ghost = loadMusic("game-inf-4");
const tarenLever = loadMusic("game-inf-5");
const sorePoint = loadMusic("game-inf-6");
const coolNotes = loadMusic("game-inf-7");
const brd = loadMusic("game-inf-8");
const tigerMission = loadMusic("game-inf-9");
const tekillaGroove = loadMusic("game-inf-10");
const infinitodeTutorial = loadMusic("game-inf-11");
const relatedMemories = loadMusic("game-inf-12");
const plostic = loadMusic("game-inf-13");
const chicagoChipchop = loadMusic("game-inf-14");
const auroraDawn = loadMusic("game-inf-15");
const monday = loadMusic("game-inf-16");
const classCracktro = loadMusic("game-inf-17");
const dancing = loadMusic("game-inf-18");
const knas = loadMusic("game-inf-19");
const hazeChiptune = loadMusic("game-inf-20");
const karleksmums = loadMusic("game-inf-21");
const pampRadion = loadMusic("game-inf-22");
const returnToSender = loadMusic("game-inf-23");
const weed = loadMusic("game-inf-24");
const darkCommunism = loadMusic("game-inf-25");
const soClose = loadMusic("game-inf-26");
const kaos = loadMusic("game-inf-27");
const discovery = loadMusic("game-inf-28");
const tiff3 = loadMusic("game-inf-29");

const paradox2 = loadMusic("boss-inf-1");
const unreeealSuperhero3 = loadMusic("boss-inf-2");
const ablibOMintooz = loadMusic("boss-inf-3");
const rldInstaller10 = loadMusic("boss-inf-4");
const cryoBed = loadMusic("boss-inf-5");
const againstTheTime = loadMusic("boss-inf-6");
const lerka = loadMusic("boss-inf-7");
const eyewashJosh = loadMusic("boss-inf-8");
const chaos1 = loadMusic("boss-inf-9");
const sidMatic = loadMusic("boss-inf-10");
const gianaSisters = loadMusic("boss-inf-11");
const quake3 = loadMusic("boss-inf-12");

//const infinitodeMenu = loadMusic("menu-inf");
//const infinitodePlanet = loadMusic("launch-inf");
//const editor1 = loadMusic("editor-inf-1");
//const editor2 = loadMusic("editor-inf-2");

//endregion
//region ambient music
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(mindustryClassic5);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(mindustryClassic7);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(mindustryClassic8);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(shockTherapy);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(tarenLever);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(sorePoint);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(dragonAtlas);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(tekillaGroove);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(relatedMemories);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(tigerMission);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(plostic);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(auroraDawn);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(auroraDawn);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(knas);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(karleksmums);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(pampRadion);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(weed);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(soClose);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(discovery);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.ambientMusic.add(tiff3);
    });

//endregion
//region combat music

//may or may not contain funky music to wreck enemy bases with
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(mindustryClassic1);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(mindustryClassic2);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(mindustryClassic3);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(mindustryClassic4);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(mindustryClassic6);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(blankPage);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(ghost);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(coolNotes);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(brd);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(infinitodeTutorial);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(chicagoChipchop);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(monday);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(classCracktro);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(dancing);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(hazeChiptune);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(returnToSender);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(darkCommunism);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.darkMusic.add(kaos);
    });

//endregion
//region boss music

Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(paradox2);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(unreeealSuperhero3);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(ablibOMintooz);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(rldInstaller10);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(cryoBed);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(againstTheTime);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(lerka);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(eyewashJosh);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(chaos1);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(sidMatic);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(gianaSisters);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.bossMusic.add(quake3);
    });

//endregion
//region menu music
/* 
improbable to be added
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.menu.add(infinitodeMenu);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.menu.add(infinitodeLaunch);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.menu.add(editor1);
    });
Events.on(ClientLoadEvent, e => {
        Vars.control.sound.menu.add(editor2);
    });
*/
//endregion