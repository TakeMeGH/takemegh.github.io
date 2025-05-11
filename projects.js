// Project data structure
const projects = {
    featured: [
        {
            id: 'modal1',
            title: 'Cosmic Adventure',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['Unity', 'C#', 'Shader Graph'],
            description: 'A space exploration game with procedurally generated planets and dynamic weather systems.',
            details: {
                overview: 'Cosmic Adventure is a space exploration game where players discover procedurally generated planets with unique ecosystems and weather patterns. The game features a dynamic day-night cycle, realistic atmospheric scattering, and emergent gameplay systems.',
                contributions: [
                    'Developed the procedural planet generation system using noise algorithms and mesh deformation',
                    'Created custom shaders for atmospheric scattering and weather effects',
                    'Implemented the dynamic ecosystem simulation with predator-prey relationships',
                    'Optimized rendering pipeline to maintain 60fps on mid-range hardware',
                    'Designed the ship physics and control system'
                ],
                codeSnippet: `// Simplified planet generation snippet
void GeneratePlanet() {
    for(int i = 0; i < vertexCount; i++) {
        Vector3 vertex = sphereVertices[i];
        float elevation = CalculateNoise(vertex);
        vertex *= radius + elevation * heightMultiplier;
        vertices[i] = vertex;
    }
    ApplyBiomes(vertices);
}`
            }
        },
        {
            id: 'modal2',
            title: 'Shadow Tactics',
            image: 'https://images.unsplash.com/photo-1551103782-8ab0493f16a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['Unreal Engine', 'C++', 'Blueprint'],
            description: 'A stealth-based strategy game with advanced AI behavior trees and dynamic lighting.',
            details: {
                overview: 'Shadow Tactics is a stealth-based strategy game where players control a team of operatives with unique abilities to complete missions in enemy territory. The game features advanced AI behaviors, dynamic lighting for stealth mechanics, and complex level design.',
                contributions: [
                    'Implemented the core AI perception system with vision cones and hearing mechanics',
                    'Developed the behavior tree system for enemy AI with patrol routes and alert states',
                    'Created the dynamic lighting system that affects stealth visibility',
                    'Optimized the networking code for multiplayer synchronization',
                    'Built tools for level designers to setup patrol paths and vision parameters'
                ],
                codeSnippet: `// AI Vision Detection
bool AEnemyCharacter::CanSeePlayer() {
    FVector Start = GetEyeLocation();
    FVector End = Player->GetActorLocation();
    FHitResult HitResult;
    FCollisionQueryParams Params;
    Params.AddIgnoredActor(this);

    if (!GetWorld()->LineTraceSingleByChannel(HitResult, Start, End, ECC_Visibility, Params)) {
        float Angle = FMath::RadiansToDegrees(FMath::Acos(FVector::DotProduct(GetActorForwardVector(), (End - Start).GetSafeNormal())));
        return Angle < VisionAngle;
    }
    return false;
}`
            }
        }
    ],
    previous: [
        {
            id: 'modal3',
            title: 'Pixel Quest',
            image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            tags: ['Godot', 'GDScript', 'Pixel Art'],
            description: 'A retro-style RPG with custom physics engine and dialogue system.',
            details: {
                overview: 'Pixel Quest is a retro-style RPG featuring hand-crafted pixel art and a custom physics engine. The game combines classic JRPG elements with modern gameplay mechanics, including a branching dialogue system, day-night cycles, and dynamic quests.',
                contributions: [
                    'Developed the custom physics engine to support pixel-perfect collisions',
                    'Created the dialogue system with branching narratives and character relationships',
                    'Implemented the inventory and crafting systems',
                    'Designed the animation system for character sprites',
                    'Optimized the game for low-end hardware while maintaining visual quality'
                ],
                codeSnippet: `# Pixel-perfect collision in GDScript
func _physics_process(delta):
    var collision = move_and_collide(velocity * delta)
    if collision:
        var tile_pos = world_to_map(position + collision.normal)
        if tile_map.get_cellv(tile_pos) != -1:
            var pixel_offset = Vector2(fmod(position.x, tile_size.x), fmod(position.y, tile_size.y))
            if pixel_offset.x < collision_margin or pixel_offset.x > tile_size.x - collision_margin:
                velocity.x = 0
            if pixel_offset.y < collision_margin or pixel_offset.y > tile_size.y - collision_margin:
                velocity.y = 0`
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