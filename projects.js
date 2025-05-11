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
            id: 'modal4',
            title: 'Procedural Terrain Generation',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['HLSL', 'Compute Shaders', 'Noise Algorithms'],
            description: 'Research into GPU-accelerated terrain generation with dynamic LOD and biome blending.',
            showTechnicalHighlights: true,
            itchioUrl: '',
            details: {
                overview: 'This research project explored GPU-accelerated terrain generation techniques using compute shaders and advanced noise algorithms. The system generates infinite, varied terrain with dynamic level of detail (LOD) and seamless biome transitions while maintaining high performance.',
                contributions: [
                    'Developed a hybrid noise approach combining Perlin, Worley, and Domain Warping for natural formations',
                    'Implemented GPU-based LOD system that adapts to camera distance and movement speed',
                    'Created biome blending system using compute shaders for smooth transitions',
                    'Achieved 10x performance improvement over CPU-based approaches',
                    'Developed erosion simulation running entirely on GPU'
                ],
                codeSnippet: `// Compute shader for terrain generation
[numthreads(8, 8, 1)]
void GenerateTerrain (uint3 id : SV_DispatchThreadID) {
    float2 uv = id.xy * _ChunkSize / _Resolution;
    
    // Base noise with domain warping
    float baseNoise = PerlinNoise(uv * _Frequency);
    float2 warpUV = uv + baseNoise * _WarpStrength;
    
    // Combined noise layers
    float mountain = PerlinNoise(warpUV * 0.2) * 50;
    float detail = WorleyNoise(warpUV * 2.0) * 5;
    
    // Biome blending
    float biome = Smoothstep(_BiomeThreshold, _BiomeThreshold + 0.1, PerlinNoise(uv * 0.05));
    float height = lerp(mountain, detail, biome);
    
    _Heightmap[id.xy] = height;
}`
            }
        },
        {
            id: 'modal5',
            title: 'Real-Time Global Illumination',
            image: 'https://images.unsplash.com/photo-1639762681057-1e71aacd134c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['Vulkan', 'Ray Tracing', 'SDF'],
            description: 'Exploring techniques for dynamic lighting with signed distance fields and voxel cone tracing.',
            showTechnicalHighlights: true,
            itchioUrl: '',
            details: {
                overview: 'This project investigated alternative approaches to real-time global illumination without relying on hardware ray tracing. The solution combines signed distance fields (SDF) with voxel cone tracing to achieve plausible indirect lighting at a fraction of the computational cost.',
                contributions: [
                    'Developed hybrid SDF/voxel representation for dynamic scenes',
                    'Implemented cone tracing with adaptive step size based on scene complexity',
                    'Created temporal accumulation system to reduce noise and artifacts',
                    'Achieved 60fps performance on mid-range GPUs',
                    'Developed denoising techniques specifically for voxel-based GI'
                ],
                codeSnippet: `// Voxel cone tracing for indirect diffuse
vec3 ConeTraceDiffuse(vec3 origin, vec3 direction, float tanHalfAngle) {
    float maxDistance = _MaxTraceDistance;
    float minDistance = _VoxelSize * 2.0;
    float currentDistance = minDistance;
    vec3 accumLight = vec3(0.0);
    float accumWeight = 0.0;

    while(currentDistance < maxDistance && accumWeight < 1.0) {
        float coneDiameter = 2.0 * tanHalfAngle * currentDistance;
        float mipLevel = log2(coneDiameter / _VoxelSize);
        
        vec3 position = origin + direction * currentDistance;
        vec4 voxel = textureLod(_VoxelTexture, position, mipLevel);
        
        if(voxel.a > 0.01) {
            float weight = (1.0 - accumWeight) * voxel.a;
            accumLight += voxel.rgb * weight;
            accumWeight += weight;
        }
        
        currentDistance += coneDiameter * _StepScale;
    }
    
    return accumLight / max(accumWeight, 0.001);
}`
            }
        }
    ]
}; 