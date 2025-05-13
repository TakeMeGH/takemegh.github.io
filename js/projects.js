// Project data structure
const projects = {
    featured: [
        {
            id: 'couriers-conquest',
            title: 'Courier\'s Conquest',
            image: 'static/image/games/CourierConquest.jpg',
            tags: ['Unity', 'Adventure', 'Delivery'],
            description: 'Embark on a delivery adventure in a whimsical world. Overcome obstacles and deliver packages on time!',
            showTechnicalHighlights: false,
            itchioUrl: 'https://rmdtya.itch.io/couriers-conquest',
            githubUrl: 'https://github.com/TakeMeGH/couriers-conquest',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Take on the role of a courier in a vibrant world. Navigate challenges, optimize your route, and ensure timely deliveries.',
                contributions: [
                    'Developed delivery and obstacle systems',
                    'Implemented time and scoring mechanics',
                    'Worked on world-building and character design'
                ],
                codeSnippet: `// Example delivery logic\nvoid DeliverPackage() {\n    if (atDestination) {\n        score += deliveryPoints;\n        packagesDelivered++;\n    }\n}`
            }
        },
        {
            id: 'witchcraft',
            title: 'FullStack WitchCraft',
            image: 'static/image/games/FullStackWitchCraft.gif',
            tags: ['Unity', '3D', 'GameJam'],
            description: 'A chaotic local co-op game where two witches compete to collect the most books in a magical laboratory. Nominated for Best Visual and Best Gameplay GIM ITB GameJam 2025!',
            showTechnicalHighlights: false,
            itchioUrl: 'https://samueltaniel.itch.io/full-stack-witchcraft',
            githubUrl: 'https://github.com/TakeMeGH/gimjam-2025',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Help Caca and Cici gather as many books as possible in a magical, chaotic environment. Play locally with a friend and experience the fun of too many books, too many hazards, and too much chaos!',
                contributions: [
                    'Main Programmer: Abdul Rafi',
                    'Implemented core gameplay mechanics and local multiplayer',
                    'Integrated sound and visual effects for immersive experience'
                ],
                codeSnippet: `// Example gameplay logic\nvoid CollectBook(Player player) {\n    player.books += 1;\n    if (player.books > maxBooks) {\n        TriggerChaos();\n    }\n}`
            }
        },
        {
            id: 'molly',
            title: 'Molly, Palli-Palli!',
            image: 'static/image/games/Moly.png',
            tags: ['Unity', 'Platformer', 'Educational'],
            description: 'A platformer about a cat escaping a house fire, teaching safety and problem-solving. Developed for Gamejam+ 2024.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/molly-palli-palli',
            githubUrl: 'https://github.com/TakeMeGH/the-cat',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Guide Molly the cat to safety by solving puzzles and using household items. Learn about fire safety in a fun, retro-inspired environment.',
                contributions: [
                    'Programmed core movement and interaction systems',
                    'Designed educational gameplay elements',
                    'Collaborated on level and puzzle design'
                ],
                codeSnippet: `// Example movement logic\nvoid Jump() {\n    if (isGrounded) {\n        velocity.y = jumpForce;\n    }\n}`
            }
        }
    ],
    previous: [
        {
            id: 'last-threads',
            title: 'The Knight, The Princess, and The Last Threads',
            image: 'static/image/games/LastThreads.png',
            tags: ['Unity', 'Fighting', 'Co-op'],
            description: 'Defend the universe\'s last threads in this fast-paced co-op fighting game. Developed for Garena Game Jam 2, 2025.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/the-knight-the-princess-and-the-last-threads',
            githubUrl: 'https://github.com/TakeMeGH/garena-game-jam-2',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Play as Hades and Lopi, defending the last threads of the universe from waves of enemies. Use simple two-button controls for intense local multiplayer action.',
                contributions: [
                    'Main Programmer: Abdul Rafi',
                    'Implemented two-button control system',
                    'Developed enemy AI and wave system'
                ],
                codeSnippet: `// Example control logic\nvoid OnButtonPress(Button button) {\n    if (button == Button.Left) AttackLeft();\n    else if (button == Button.Right) AttackRight();\n}`
            }
        },
        {
            id: 'trafficky',
            title: 'Trafficky',
            image: 'static/image/games/Traficky.png',
            tags: ['Unity', 'Educational', 'Puzzle'],
            description: 'A puzzle game teaching traffic rules to children. Developed for GEMASTIK XVI.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://navisraditya.itch.io/trafficky',
            githubUrl: 'https://github.com/TakeMeGH/wijart-gemastik-2023',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Identify traffic violations and help Rara, the police officer, keep the roads safe. Designed for educational impact and fun!',
                contributions: [
                    'Programmed core gameplay and UI',
                    'Designed educational mechanics',
                    'Collaborated on 3D asset creation'
                ],
                codeSnippet: `// Example violation check\nbool IsViolation(Car car) {\n    return car.speed > speedLimit || car.hasNoSeatbelt;\n}`
            }
        },
        {
            id: 'galactic-dive',
            title: 'Galactic Dive',
            image: 'static/image/games/GalacticDive.png',
            tags: ['Unity', 'Action', 'Space'],
            description: 'Dive into the galactic unknown in this vertical action-exploration game. In development.',
            showTechnicalHighlights: false,
            itchioUrl: 'https://takemegh.itch.io/galactic-dive',
            githubUrl: 'https://github.com/TakeMeGH/compfest-downwell',
            trailerUrl: 'https://www.youtube.com/watch?v=your-trailer-id',
            showItchio: true,
            showGithub: true,
            showTrailer: true,
            details: {
                overview: 'Navigate through uncharted galaxies, battle alien creatures, and survive the mysteries of space with advanced, weaponized boots.',
                contributions: [
                    'Developed vertical movement and combat systems',
                    'Designed alien enemy behaviors',
                    'Implemented procedural level elements'
                ],
                codeSnippet: `// Example dive logic\nvoid Dive() {\n    position.y -= diveSpeed * Time.deltaTime;\n    CheckForObstacles();\n}`
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
            image: 'https://images.unsplash.com/photo-1639762681057-1e71aacd134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['Unreal Engine', 'GAS', 'Multiplayer'],
            description: 'Research into implementing a comprehensive gameplay ability system for MOBA-style games with multiplayer support.',
            githubUrl: 'https://github.com/TakeMeGH/gameplay-ability',
            showGithub: true,
            details: {
                overview: 'This project explored the implementation of a comprehensive gameplay ability system for MOBA-style games, including level progression, skill points, and multiplayer support.',
                contributions: [
                    'Designed and implemented a flexible level progression system with experience points and level-up mechanics',
                    'Implemented active and passive skills with customizable effects and conditions',
                    'Maintained multiplayer replication to ensure consistent gameplay across all clients',
                    'Built an UI system for skill management and progression visualization',
                    'Created a data-driven approach for easy skill creation and balancing'
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