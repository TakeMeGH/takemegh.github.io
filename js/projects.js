// Project data structure
const projects = {
    featured: [
        {
            id: 'couriers-conquest',
            title: 'Courier\'s Conquest',
            image: 'static/image/games/CourierConquest.jpg',
            tags: ['Unity', 'Adventure', 'Delivery', 'RPG', 'Team Lead'],
            description: 'Embark on a delivery adventure in a whimsical world. Overcome obstacles and deliver packages on time! As the lead programmer, I managed a team of 6 programmers while implementing core gameplay systems.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://rmdtya.itch.io/couriers-conquest',
            githubUrl: 'https://github.com/TakeMeGH/couriers-conquest',
            trailerUrl: 'https://youtu.be/SonHyGXENF4?si=zIGkq279Rpc-raf_',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Take on the role of a courier in a vibrant world. Navigate challenges, optimize your route, and ensure timely deliveries. This RPG adventure features a comprehensive movement system, quest system, and interactive dialogue.',
                contributions: [
                    'Lead Programmer: Managed and coordinated a team of 6 programmers',
                    'Developed core movement system including advanced climbing mechanics',
                    'Implemented comprehensive quest system with another programmer',
                    'Created and managed the dialogue system for character interactions',
                    'Designed and implemented HUD and UI systems for game feedback',
                    'Developed interactive minimap system for navigation',
                    'Coordinated team efforts and maintained code quality standards'
                ]
            }
        },
        {
            id: 'witchcraft',
            title: 'FullStack WitchCraft',
            image: 'static/image/games/FullStackWitchCraft.gif',
            tags: ['Unreal Engine', '3D', 'GameJam', 'Local Multiplayer', 'Physics'],
            description: 'My first Unreal Engine game jam project! A chaotic local co-op game where two witches compete to collect the most books in a magical laboratory. Nominated for Best Visual and Best Gameplay GIM ITB GameJam 2025!',
            showTechnicalHighlights: false,
            itchioUrl: 'https://samueltaniel.itch.io/full-stack-witchcraft',
            githubUrl: 'https://github.com/TakeMeGH/gimjam-2025',
            trailerUrl: 'https://youtu.be/Q1zPb2I6opQ?t=107',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Help Caca and Cici gather as many books as possible in a magical, chaotic environment. Play locally with a friend and experience the fun of too many books, too many hazards, and too much chaos! This project was my first experience with Unreal Engine game development and local multiplayer implementation.',
                contributions: [
                    'Developed complex physics system for book stacking and interactions',
                    'Implemented core gameplay mechanics and local multiplayer',
                    'Integrated sound and visual effects for immersive experience'
                ],
            }
        },
        {
            id: 'molly',
            title: 'Molly, Palli-Palli!',
            image: 'static/image/games/Moly.png',
            tags: ['Unity', 'Platformer', 'Educational', '2.5D', '3D Environment'],
            description: 'My first game featuring a 3D environment with 2D characters! A platformer about a cat escaping a house fire, teaching safety and problem-solving. Developed for Gamejam+ 2024.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/molly-palli-palli',
            githubUrl: 'https://github.com/TakeMeGH/the-cat',
            trailerUrl: 'https://youtu.be/7pV3GCESNis?si=M9FpvlCx7Tdvmdv-',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Guide Molly the cat to safety by solving puzzles and using household items. Learn about fire safety in a fun, retro-inspired environment. This project combines 2D character sprites with a 3D environment, creating a unique 2.5D visual style using Unity\'s built-in systems.',
                contributions: [
                    'Utilized Unity\'s 2D sprite system in 3D space',
                    'Created seamless integration between 2D characters and 3D environment',
                    'Programmed core movement and interaction systems',
                    'Collaborated on level and puzzle design',
                ],
            }
        }
    ],
    previous: [
        {
            id: 'last-threads',
            title: 'The Knight, The Princess, and The Last Threads',
            image: 'static/image/games/LastThreads.png',
            tags: ['Unity', 'Fighting', 'Co-op', 'Local Multiplayer', 'Cutscenes'],
            description: 'My first local multiplayer game in Unity! A polished, fast-paced co-op fighting game where you defend the universe\'s last threads. Developed for Garena Game Jam 2, 2025.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/the-knight-the-princess-and-the-last-threads',
            githubUrl: 'https://github.com/TakeMeGH/garena-game-jam-2',
            showItchio: true,
            showGithub: true,
            details: {
                overview: 'Play as Hades and Lopi, defending the last threads of the universe from waves of enemies. Use simple two-button controls for intense local multiplayer action. Features cinematic cutscenes and polished gameplay mechanics.',
                contributions: [
                    'Implemented two-button control system for accessible gameplay',
                    'Developed enemy AI and wave system',
                    'Created and implemented cutscenes',
                    'Designed and polished core combat mechanics',
                    'Built local multiplayer system'
                ]
            }
        },
        {
            id: 'trafficky',
            title: 'Trafficky',
            image: 'static/image/games/Traficky.png',
            tags: ['Unity', 'Educational', 'Puzzle', '3D', 'Custom Systems'],
            description: 'My first 3D project in Unity! A puzzle game teaching traffic rules to children. Developed for GEMASTIK XVI, featuring custom dialogue and traffic management systems.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/trafficky',
            githubUrl: 'https://github.com/TakeMeGH/wijart-gemastik-2023',
            showItchio: true,
            showGithub: true,
            details: {
                overview: 'Identify traffic violations and help Rara, the police officer, keep the roads safe. Designed for educational impact and fun! This project features a custom dialogue system and dynamic traffic management.',
                contributions: [
                    'Programmed core gameplay and UI',
                    'Developed custom dialogue system for character interactions',
                    'Created traffic management system for car spawning and events',
                    'Implemented 3D environment',
                ]
            }
        },
        {
            id: 'galactic-dive',
            title: 'Galactic Dive',
            image: 'static/image/games/GalacticDive.png',
            tags: ['Unity', 'Action', 'Space', 'WebGL', 'Cross-platform', 'Infinite Runner'],
            description: 'Dive into the galactic unknown in this vertical action-exploration game. Built with WebGL for cross-platform support (PC and mobile), featuring infinite runner gameplay. In development.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://takemegh.itch.io/galactic-dive',
            githubUrl: 'https://github.com/TakeMeGH/compfest-downwell',
            showItchio: true,
            showGithub: true,
            details: {
                overview: 'Navigate through uncharted galaxies, battle alien creatures, and survive the mysteries of space with advanced, weaponized boots. Experience endless gameplay with procedurally generated levels and infinite runner mechanics.',
                contributions: [
                    'Developed vertical movement and combat systems',
                    'Designed alien enemy behaviors',
                    'Implemented infinite runner gameplay mechanics',
                    'Created WebGL build for cross-platform support',
                    'Optimized input system for mobile devices'
                ]
            }
        }
    ],
    rnd: [
        {
            id: 'fps-3c',
            title: 'FPS 3C and Shader Research',
            image: 'static/image/rnd/FPS3C.png',
            tags: ['Unreal Engine', 'Shader Development', 'PS5 Integration'],
            description: 'Research into FPS character control, camera systems, and advanced shader effects with PS5 integration.',
            itchioUrl: 'https://takemegh.itch.io/fps-3c',
            trailerUrl: 'https://youtu.be/to3GocxHeRg',
            showItchio: true,
            showTrailer: true,
            details: {
                overview: 'This project focused on developing advanced FPS character control and camera systems, along with various shader effects, while integrating with PS5-specific features.',
                contributions: [
                    'Created dissolve shader for character effects',
                    'Created a dynamic health damage UI shader inspired by Call of Duty, with screen effects',
                    'Implemented invisibility and energy shield shaders',
                    'Successfully integrated PS5-specific features including haptic feedback, adaptive triggers, controller speaker support, and trophy system',
                    'Using Unreal Engine sequencer for creating cinematic sequences and gameplay moments',
                    'Implemented basic save system functionality',
                    'Learned and implemented Unreal Engine lighting system for dynamic environments'
                ]
            }
        },
        {
            id: 'gameplay-ability',
            title: 'Gameplay Ability System Research',
            image: 'static/image/rnd/PVP.png',
            tags: ['Unreal Engine', 'GAS', 'Multiplayer'],
            description: 'Research into implementing a comprehensive gameplay ability system for MOBA-style games with multiplayer support.',
            itchioUrl: 'https://takemegh.itch.io/pvp-moba-gas',
            trailerUrl: 'https://youtu.be/AH4bESsIOxw',
            showItchio: true,
            showTrailer: true,
            details: {
                overview: 'This project explored the implementation of a comprehensive gameplay ability system for MOBA-style games, including level progression, skill points, and multiplayer support.',
                contributions: [
                    'Designed and implemented a level progression system with experience points and level-up mechanics',
                    'Implemented active and passive skills with customizable effects',
                    'Maintained multiplayer replication to ensure consistent gameplay across all clients',
                    'Built an UI system for skill management and progression visualization',
                ]
            }
        },
        {
            id: 'pcg-outdoor',
            title: 'Procedural Content Generation for Outdoor Environments',
            image: 'static/image/rnd/PCG.png',
            tags: ['Unreal Engine', 'PCG', 'Spline Integration'],
            description: 'Research into procedural generation of outdoor environments with dynamic path creation using splines.',
            description: 'Research into FPS character control, camera systems, and advanced shader effects with PS5 integration.',
            itchioUrl: 'https://takemegh.itch.io/pcg-rnd',
            trailerUrl: 'https://youtu.be/5UySA7dBjek',
            showItchio: true,
            showTrailer: true,
            details: {
                overview: 'This research project focused on developing a procedural content generation system for outdoor environments that dynamically places vegetation and terrain features while integrating with spline-based path creation.',
                contributions: [
                    'Designed and implemented a procedural placement system for natural elements (grass, trees, rocks) with density control and natural distribution patterns',
                    'Created a spline-based path generation system that automatically creates walkable paths through the environment',
                    'Developed a procedural building generation system with customizable parameters for floors, rooms, and doors'
                ]
            }
        },
        {
            id: 'auto-material',
            title: 'Automatic Material Generation for Terrain',
            image: 'static/image/rnd/AutoMaterial.png',
            tags: ['Unreal Engine', 'Material System', 'Height-based Blending'],
            description: 'Research into automatic material generation based on terrain height and features.',
            itchioUrl: 'https://takemegh.itch.io/auto-material-rnd',
            trailerUrl: 'https://youtu.be/xeO1-MRrzd4',
            showItchio: true,
            showTrailer: true,
            details: {
                overview: 'This project explored automatic material generation for terrain based on height and features, creating dynamic material transitions and special features like puddles.',
                contributions: [
                    'Developed a sophisticated height-based material blending system that creates natural transitions between different terrain types',
                    'Created an automatic puddle generation system that identifies and fills low areas with realistic water effects',
                    'Implemented a material variation system that adds natural diversity to terrain surfaces'
                ]
            }
        }
    ]
}; 