const GAMES_MIGRATION_DATA = [
    {
        "gameName":"Assasin's Creed",
        "genre":['Action','Adventure','Historical'],
        "src":'assassin.png',
        "size":6.1,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'Ubisoft',
        "description":"Assassin’s Creed® is a game that redefined the action-adventure genre. With photo-realistic graphics, an advanced physics model, and a nearly fanatical attention to detail, this title was able to begin a new chapter in gaming history. However, the excellent technical aspects are only half of the reason why it became so popular; the other half is the story.\nWhile you technically play the game as Desmond Miles, the main focus of the game takes place elsewhere. The year is 1191: Jerusalem, the middle of the Third Crusade. You are a member of a mysterious order of assassins where you have trained your whole life to do one thing and one thing only – to kill. The recently growing influence of the Order of the Knights Templar disturbs the delicate balance of power in the region and therefore directly threatens The Brotherhood. The clash of the two most powerful organizations in Jerusalem at the time has the most unexpected consequences and triggers devastating events that threaten the world itself, and you – Altaïr Ibn-La'Ahad – are in the middle of all this.",
        "requirements":[
            {'processor':'Dual core 2.6 GHz Intel® Pentium® D or AMD Athlon™ 64 X2 3800+'},
            {'memory':2,},
            {'graphics':'ATI/NVidia 256 MB DirectX® 10.0–compliant video card or DirectX 9.0–compliant card with Shader Model 3.0 or higher'},
            {'storage':8},
            ],
        "price":11.85,
        "images": ["assassin_imgone.png", "assassin_imgtwo.png" , "assassin_imgthree.png", "assassin_imgfour.png"],
    },
    {
        "gameName":"Batman: The Enemy Within",
        "genre":['Adventure','Action','Mystery'],
        "src":'batman.png',
        "size":23.6,
        "workson":'Windows (7, 8, 10, 11), Mac OS X (10.12+)',
        "company":'Telltale',
        "description":'In this latest chapter from the award-winning studio behind Batman - The Telltale Series, both Bruce Wayne and Batman will be forced into precarious new roles. The Riddler has returned to terrorize Gotham City, but his gruesome puzzles merely foreshadow an even greater crisis. With the arrival of a ruthless federal agent and the return of a still nascent Joker, Batman must navigate uneasy alliances while Bruce Wayne undertakes a perilous series of deceptions. Which of Batman’s new allies will you choose to trust? And how deep into the darkness will you let Bruce descend?',
        "requirements":[
            {'processor':'Intel Core 2 Duo 2.4GHz'},
            {'memory':8},
            {'graphics':'Nvidia GTS 450+ with 1024MB+ VRAM (excluding GT)'},
            {'storage':30},
            ],
        "price":6.70,
        "images": ["batman_imgone.png", "batman_imgtwo.png" , "batman_imgthree.png", "batman_imgfour.png"],
    },
    {
        "gameName":'Fortnite',
        "genre":'Action',
        "src":'fortnite.png',
        "size":31,
        "workson":'Windows 7/8/10, Xbox One, PlayStation 4',
        "company":'Epic Games',
        "description":'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite. Fortnite is a free-to-play game, meaning that you can play it without paying any money. The game is also free to play.',
        "requirements":[
            {'processor':'Intel HD 4000 on PC'},
            {'memory':2},
            {'graphics':'Core i3-3225 3,3 GHz'},
            {'storage':8},
            ],
        "price":0,
        "images": ["fortnite_imgone.png", "fortnite_imgtwo.png" , "fortnite_imgthree.png", "fortnite_imgfour.png"],
    },
    {
        "gameName":'Sonic Mania',
        "genre":'Adventure',
        "src":'sonic_mania.png',
        "size":2,
        "workson":'Windows 7/8/10, Xbox One, PlayStation 4',
        "company":'Lab42',
        "description":"Sonic Mania is a side-scrolling platformer video game in the Sonic the Hedgehog franchise which acts as a celebration of the Sonic series' 25th anniversary. Set in an alternate reality, the game follows Sonic the Hedgehog, Miles Tails Prower, and Knuckles the Echidna as they try to keep Dr. Eggman and his Hard Boiled Heavies from harnessing a mysterious new energy source. The storyline of the game also ties into Sonic Forces.",
        "requirements":[
            {'processor':'Core 2 Duo'},
            {'memory':2},
            {'graphics':'DirectX 9.0'},
            {'storage':.4},
            ],
        "price":19.99,
        "images": ["sonic_imgone.png", "sonic_imgtwo.png" , "sonic_imgthree.png", "sonic_imgfour.png"],
    },
    {
        "gameName":'Mortal Kombat 11',
        "genre":'Action',
        "src":'mortalkombat.png',
        "size":78,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'NetherRealm Studios/Shiver',
        "description":'In Mortal Kombat players select one of many unique characters to battle against other fighters in a gauntlet-style tournament to determine who faces the final “boss.” Among the game’s notable points is a vast catalogue of special techniques for each fighter that can be performed by entering an intricate series of commands on the controller. One of these techniques, the finishing move, gained particular notoriety because, if players quickly pressed the right combination of buttons on the controller, the defeated opponent would be brutally maimed, humiliated, or otherwise defiled. Because of the excessive amount of simulated blood, violence, and gore, Mortal Kombat faced intense public scrutiny. In fact, Mortal Kombat and other comparable games eventually gave rise to the Entertainment Software Rating Board. The advent of a rating system resulted in later versions of the game featuring the ability to restrict the violence in the game via game-play settings, but, as the series was founded on characters spraying blood and falling into spiked pits, the game’s premise and overall feel remained the same. As advances in technology and a departure from Mortal Kombat’s classic style began, the game faded in popularity and sales.',
        "requirements":[
            {'processor':'Intel Core i5-2300, 2.8 GHz / AMD FX-6300, 3.5GHz or AMD Ryzen 5 1400, 3.2 GHz'},
            {'memory':8},
            {'graphics':'NVIDIA GeForce GTX 780 or NVIDIA GeForce GTX 1060-6GB / AMD Radeon R9 290 or RX 570'},
            {'storage':16},
            ],
        "price":5.99,
        "images": ["mortal_imgone.png", "mortal_imgtwo.png" , "mortal_imgthree.png", "mortal_imgfour.png"],
    },
    {
        "gameName":'Apex Legends',
        "genre":'Action',
        "src":'apex.png',
        "size":73,
        "workson":'Microsoft Windows, PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5, Xbox Series X/S, Android, iOS',
        "company":'Respawn Entertainment',
        "description":'Feee-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One in February 2019, for Nintendo Switch in March 2021, and for PlayStation 5 and Xbox Series X/S in March 2022. A mobile version of the game specially designed for touchscreens titled Apex Legends Mobile has also been announced which is scheduled to be fully released by 2022 on Android and iOS. The game supports cross-platform play.\n Before the match, players form into two or three-player squads, and select from pre-designed characters with distinctive abilities, known as Legends. The game has two gameplay modes. In Battle Royale, up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat. The available play area on the island shrinks over time, forcing players to keep moving or else find themselves outside the play area which can be fatal. The final team alive wins the round. In Arenas, players form into three-player squads and fight against another squad in a 3v3 team deathmatch over a series of rounds to determine the winner of the match. Teams win when their team has at least 3 points and is 2 points ahead.',
        "requirements":[
            {'processor':'Ryzen 5 CPU or Equivalent'},
            {'memory':8},
            {'graphics':'AMD Radeon™ R9 290, NVIDIA GeForce GTX 970'},
            {'storage':56},
            ],
        "price":8.50,
        "images": ["apex_imgone.png", "apex_imgtwo.png" , "apex_imgthree.png", "apex_imgfour.png"],
    },
    {
        "gameName":'Pokemon Unite',
        "genre":['MOBA','Action','Action RPG'],
        "src":'pokemon.png',
        "size":1,
        "workson":'Nintendo Switch, Android, iOS',
        "company":'TiMi Studios',
        "description":'Pokémon Unite is a multiplayer online battle arena game, with standard matches consisting of two teams of five players. Each match is time-limited, and the team with the highest total score by the end of each match wins. There is also quick battles, which has 4 people per team, and is 5 minutes long.',
        "requirements":[
            {'processor':'Android 5.0, iOS 12.0'},
            {'memory':4},
            {'graphics':'Adreno 506 or superior'},
            {'storage':5},
            ],
        "price":0,
        "images": ["pokemon_imgone.png", "pokemon_imgtwo.png" , "pokemon_imgthree.png", "pokemon_imgfour.png"],
    },
    {
        "gameName":'Mario Party Superstars',
        "genre":['Party','Multiplayer'],
        "src":'mario.png',
        "size":2.7,
        "workson":'Nintendo Switch',
        "company":'Nintendo',
        "description":'Mario Party Superstars is a 2021 party video game developed by NDcube and published by Nintendo for the Nintendo Switch. It is the twelfth home console installment in the Mario Party series, and the second for the Nintendo Switch following Super Mario Party (2018). It was released on October 29, 2021.',
        "requirements":[
            {'processor':'-'},
            {'memory':3},
            {'graphics':'-'},
            {'storage':3},
            ],
        "price":29.99,
        "images": ["mario_imgone.png", "mario_imgtwo.png" , "mario_imgthree.png", "mario_imgfour.png"],

    },
    {
        "gameName":'Kirby Forgotten Land',
        "genre":['Party','Multiplayer'],
        "src":'kirby.png',
        "size":6.2,
        "workson":'Nintendo Switch',
        "company":'Nintendo',
        "description":'Kirby and the Forgotten Land is the first platform game in the series with full 3D gameplay, where the player must guide Kirby through various different stages to save the Waddle Dees at the end. As in most Kirby games, Kirby can jump and slide as well as inhale enemies and objects which he can either spit out like projectiles or swallow to gain a copy ability. Alongside with the returning copy abilities, this game introduced two new copy abilities in the form of Drill and Ranger, as well as an upgrade system for copy abilities and a new Mouthful Mode where Kirby can swallow and control larger objects, such as cars and vending machines. Similar to Kirby Battle Royale and Kirby and the Rainbow Curse, a second player can join in and play as Bandana Waddle Dee, who uses a spear as his main form of attack. The goal of each stage is to rescue the Waddle Dees at the end of the level. Once rescued, they are returned to Waddle Dee Town, the main hub of the game. As the player rescues more Waddle Dees, the town size increases as well as unlocks minigames that the player can compete with others online for the top score. The game also supports amiibo functionality.',
        "requirements":[
            {'processor':''},
            {'memory':7},
            {'graphics':''},
            {'storage':7},
            ],
        "price":54.99,
        "images": ["kirby_imgone.png", "kirby_imgtwo.png" , "kirby_imgthree.png", "kirby_imgfour.png"],
    },
    {
        "gameName":'Elden Ring',
        "genre":['Action','RPG'],
        "src":'elden_ring.png',
        "size":58,
        "workson":'Microsoft Windows, PlayStation 4, PlayStation 5 and Xbox',
        "company":'FromSoftware Inc.',
        "description":"Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration; it features elements similar to those found in other games developed by FromSoftware, such as the Souls series, Bloodborne, and Sekiro: Shadows Die Twice. Director Hidetaka Miyazaki explained that players start with a linear opening but eventually progress to freely explore the Lands Between, including its six main areas, as well as castles, fortresses, and catacombs scattered throughout the open world map. These main areas are interconnected through a central hub that players can access later in the game's progression—similar to Firelink Shrine from Dark Souls—and are explorable using the character's mount as the main mode of transport, although a fast travel system is an available option. Throughout the game, players encounter non-player characters (NPCs) and enemies alike, including the demigods who rule each main area and serve as the game's main bosses.",
        "requirements":[
            {'processor':'Intel Core i5-8400 or AMD Ryzen 3 3300X'},
            {'memory':16},
            {'graphics':'NVIDIA GeForce GTX 1060, 3GB | AMD Radeon RX 580'},
            {'storage':60},
            ],
        "price":39.99,
        "images": ["elden_imgone.png", "elden_imgtwo.png" , "elden_imgthree.png", "elden_imgfour.png"],
    },
    {
        "gameName":'Aftermath',
        "genre":['Action','Adventure','Open World'],
        "src":'aftermath.png',
        "size":70,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'ONE-O-ONE GAMES',
        "description":'Charlie Gray was at the top of the world. A talented engineer and European astronaut, her career had brought her to where most people could only dream of; but following a reentry to earth gone wrong, and the traumatic events that ensued, Charlie returns a broken spirit. With her life spiralling into darker and darker places, Charlie now finds herself Isolated in a deserted, defragmented world. The only thing she knows is that she has to find the one thing that still matters: Sammy. Analyze your surroundings and utilise the urban resources at your disposal. Mundane, everyday items can become an invaluable tool in your fight against the enigmatic beings that now occupy the city. Study alien weaknesses and find the best approach to take down those that might want to use you as an offering.',
        "requirements":[
            {'processor':'AMD Ryzen 5 1600 or Intel i5-4440'},
            {'memory':80},
            {'graphics':'AMD RX 570 or NVIDIA GTX 1050 Ti'},
            {'storage':80},
            ],
        "price":25.99,
        "images": ["aftermath_imgone.png", "aftermath_imgtwo.png" , "aftermath_imgthree.png", "aftermath_imgfour.png"],
    },
    {
        "gameName":'Evil Dead: The game',
        "genre":['Action' , 'Adventure' , 'Open World'],
        "src":'evil_dead.png',
        "size":70,
        "workson":'Microsoft Windows, PlayStation 4, PlayStation 5, Nintendo Switch and Xbox One',
        "company":'Saber Interactive',
        "description":'The game marks the first time in Evil Dead franchise history that all three studios that own their respective films in the series (Renaissance Pictures, StudioCanal, and MGM) have partnered to create a single product, with the addition of STARZ allowing elements from the Ash vs Evil Dead television series as well. Plenty of surprises await in this gore-filled battle against the evil that captures the characters, horror, humor, and action from the franchise. Battle across memorable locations including the infamous cabin in the woods brought to life with tons of terrifying visuals and all-new dialogue from Bruce Campbell. Discover more than 25 weapons, including Ash’s Gauntlet, Boomstick, and chainsaw, and advance in a variety of skill trees to grow stronger and survive in this fun co-op and PvP experience.',
        "requirements":[
            {'processor':'i7-7700/ Ryzen 2600X'},
            {'memory':16},
            {'graphics':'GTX 1070 Ti/ RX 5600 XT'},
            {'storage':20},
            ],
        "price":8.49,
        "images": ["evildead_imgone.png", "evildead_imgtwo.png" , "evildead_imgthree.png", "evildead_imgfour.png"],
    },
    {
        "gameName":'Sniper Elite 5 Deluxe Edition',
        "genre":['Action' ,'Adventure'],
        "src":'sniper_elite.png',
        "size":51,
        "workson":'Windows (10 and 11)',
        "company":'Rebellion',
        "description":'The latest instalment in the award-winning series, Sniper Elite 5 offers unparalleled sniping, tactical third-person combat and an enhanced kill cam. Fight your way across the most immersive maps yet, with many real-world locations captured in stunning detail, and an improved traversal system that lets you explore more of them than ever before. France, 1944 – As part of a covert US Rangers operation to weaken the Atlantikwall fortifications along the coast of Brittany, elite marksman Karl Fairburne makes contact with the French Resistance. Soon they uncover a secret Nazi project that threatens to end the war before the Allies can even invade Europe: Operation Kraken.',
        "requirements":[
            {'processor':'tesIntel CPU Core i3-8100 or equivalentt'},
            {'memory':8},
            {'graphics':'DirectX12 capable GPU with 4GB VRAM'},
            {'storage':60},
            ],
        "price":37.29,
        "images": ["sniper_imgone.png", "sniper_imgtwo.png" , "sniper_imgthree.png", "sniper_imgfour.png"],
    },
    {
        "gameName":'S.T.A.L.K.E.R. 2: Heart of Chernobyl',
        "genre":['Action','Adventure'],
        "src":'stalker_two.png',
        "size":82,
        "workson":'Windows 10 / Windows 11',
        "company":'GSC Game World',
        "description":"The Heart of Chornobyl has never been beating so loud as it is right now. The Zone is calling for stalkers, who are ready to delve into the non-linear journey through a sinister open world in the Eastern European post-apocalyptic setting.\nS.T.A.L.K.E.R. 2: Heart of Chornobyl applies the full potential of Unreal Engine 5 as well as motion capture and photogrammetry technologies to provide you with benchmark-setting graphics and ultimate immersion into the game world. The advanced artificial intelligence system will compel the stalker to utilize a tactical approach against numerous enemies, challenging and keeping even the most hard-boiled players engaged. A-Life 2.0 life-simulating system builds a holistic live environment where player's actions have an impact on the world of the Zone.\nDangerous mutants and deadly anomalies will not be the only obstacles on your journey. You will feel all the griefs of a new stalker life while searching and consuming rare and valuable supplies — food, drinks, meds, alcohol, etc. Immersive survival mechanics will be enriching the gameplay on the path through the branched storyline.",
        "requirements":[
            {'processor':'AMD Ryzen 7 3700X / Intel Core i7-9700K'},
            {'memory':16},
            {'graphics':'AMD Radeon RX 5700 XT 8GB - NVIDIA GeForce RTX 2070 SUPER 8GB'},
            {'storage':100},
            ],
        "price":49.25,
        "images": ["stalker_imgone.png", "stalker_imgtwo.png" , "stalker_imgthree.png", "stalker_imgfour.png"],
    },
    {
        "gameName":'Chrono Cross: The Radical Dreamers',
        "genre":['Adventure'],
        "src":'chrono_cross.png',
        "size":4,
        "workson":'Windows 10 / Windows 11',
        "company":'Square Enix, D4Enterprise Co.',
        "description":'Chrono Cross is an RPG that transcends time and space, unfolding across two interlinked parallel worlds. With over 40 party members to meet, people and dimensions will intertwine in this epic drama about the planet itself. Utilising an innovative turn-based style battle system, CHRONO CROSS is a unique RPG that follows the protagonis “Serge” as he crosses time on his quest to save himself dying in a parallel universe.',
        "requirements":[
            {'processor':'AMD A8-7600 / Intel® Core™ i3-3210'},
            {'memory':8},
            {'graphics':'AMD Radeon™ RX 560 / NVIDIA GeForce GTX 1050'},
            {'storage':5},
            ],
        "price":9.85,
        "images": ["chrono_imgone.png", "chrono_imgtwo.png" , "chrono_imgthree.png", "chrono_imgfour.png"],
    },
    {
        "gameName":'Against the Storm',
        "genre":['Strategy','Building','Fantasy'],
        "src":'against_the_storm.png',
        "size":4,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'Eremite Games',
        "description":'Against the Storm is a roguelite city builder set in a fantasy world where it never stops raining. You are the Queen’s viceroy — a pioneer sent into the wilds to establish and manage new settlements inhabited by beavers, lizards, and humans. Your goal is to survive long enough and gather the valuable resources necessary to rebuild and upgrade the Smouldering City. It’s the only safe haven against the Blightstorm — a vile cycle of destruction ravaging everything in its path. Do you have what it takes to weather the storm?',
        "requirements":[
            {'processor':'Intel® Core™ i5'},
            {'memory':8},
            {'graphics':'NVIDIA GeForce GTX 650'},
            {'storage':5},
            ],
        "price":8.24,
        "images": ["against_imgone.png", "against_imgtwo.png" , "against_imgthree.png", "against_imgfour.png"],
    },
    {
        "gameName":'Monster Hunter: World',
        "genre":['Action','RPG','Adventure'],
        "src":'monster_hunter_world.png',
        "size":23,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'CAPCOM Co., Ltd.',
        "description":'Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!',
        "requirements":[
            {'processor':'Intel Core i7 3770 3.4GHz / AMD Ryzen™ 5 1500X'},
            {'memory':8},
            {'graphics':'NVIDIA GeForce GTX 1060 / AMD Radeon RX 570'},
            {'storage':30},
            ],
        "price":13.26,
        "images": ["monster_imgone.png", "monster_imgtwo.png" , "monster_imgthree.png", "monster_imgfour.png"],
    },
    {
        "gameName":'Hades',
        "genre":['Indies','Action','RPG'],
        "src":'hades.png',
        "size":15,
        "workson":'Windows (7, 8, 10, 11)',
        "company":'Supergiant Games',
        "description":'The game has a simple premise – you are the son of Hades (Zagreus) and you are making a break from the bowels of hell to the pinnacle of Mount Olympus, in the hopes of finding out some more about your mom. Olympus is, of course, where all your aunties and uncles hang out and some of them will aid you on your mission, but even this godly help this won’t stop you dying often!\nNon-god characters deserving of a special mention are Sisyphus – he of the endless boulder, Patroclus, Hercules’s buddy, and Eurydice, late wife of Orpheus who oh-so-nearly made it out of Hades and back into her tragically cut short life.\nYou have a range of weapons and powers: dash, light or weapon attack (primary weapon), special attack (an enhancement of your primary weapon and attack), and some magic (called a ‘cast’ and being a spell that is basically a long distance weapon). You can combine power-ups, for example, combining dash with attack gives you a whirling melee attack called a ‘dash-strike’.',
        "requirements":[
            {'processor':'Dual Core 3.0 GHz+'},
            {'memory':8},
            {'graphics':'2GB VRAM / DirectX 10+ support'},
            {'storage':20},
            ],
        "price":22.5,
        "images": ["hades_imgone.png", "hades_imgtwo.png" , "hades_imgthree.png", "hades_imgfour.png"],
    },
    {
        "gameName":'BioShock Infinite',
        "genre":['Action'],
        "src":'bioshock.png',
        "size":42,
        "workson":'Nintendo Switch, PlayStation 3, Xbox 360, macOS, Microsoft Windows, Linux and Classic Mac OS',
        "company":'Irrational Games, Virtual Programming (Linux)',
        "description":'Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia. Forced to trust one another, Booker and Elizabeth form a powerful bond during their daring escape. Together, they learn to harness an expanding arsenal of weapons and abilities, as they fight on zeppelins in the clouds, along high-speed Sky-Lines, and down in the streets of Columbia, all while surviving the threats of the air-city and uncovering its dark secret.',
        "requirements":[
            {'processor':'Quad Core Processor'},
            {'memory':4},
            {'graphics':'DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560'},
            {'storage':50},
            ],
        "price":29.99,
        "images": ["bioshock_imgone.png", "bioshock_imgtwo.png" , "bioshock_imgthree.png", "bioshock_imgfour.png"],
    },
    {
        "gameName":'God of War',
        "genre":['Action','Adventure','RPG'],
        "src":'god_of_war.png',
        "size":70,
        "workson":'PlayStation 4, PlayStation 5, Microsoft Windows',
        "company":'Santa Monica Studio',
        "description":'The game’s plot plays out against the background of Norse gods in this iteration, rather than the Ancient Greece of the original games, and it is loosely set in Medieval Scandinavia in the realm of Midgard, which is the Norse equivalent of the lands inhabited by the earliest humans when the world was young. There are two protagonists in the game, one of whom is playable. Kratos – a former Greek God of War and only playable character – is accompanied by his young son, Atreus, who looks to be anywhere between eight years old and twelve or so. The two of them are on an honour quest, to dispose of Faye’s (Atreus’s mother) ashes according to her deathbed wish, to have her remains scattered on the highest peak of the nine realms. Almost equally satisfying and rare in a game better known for skull-shattering crunches and broken bones, is the arc between Kratos and Atreus. When they set off, they are almost strangers to each other, both feeling that the other expects more of them than they give. This arc progresses along with the game, ending with a much closer, more respectful and loving relationship between the two. And all without impacting the joyous blood-shed!',
        "requirements":[
            {'processor':'Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)'},
            {'memory':8},
            {'graphics':'NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)'},
            {'storage':75},
            ],
        "price":39.99,
        "images": ["gow_imgone.png", "gow_imgtwo.png" , "gow_imgthree.png", "gow_imgfour.png"],
    }
]

module.exports = GAMES_MIGRATION_DATA