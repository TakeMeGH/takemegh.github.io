// Create star background
function createStarBackground() {
    const background = document.createElement('div');
    background.className = 'star-background';
    
    // Add nebula effect
    const nebula = document.createElement('div');
    nebula.className = 'nebula';
    background.appendChild(nebula);
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    // Create regular stars
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size and type
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Assign star type based on size
        if (size < 1.5) {
            star.classList.add('small');
        } else if (size < 2.5) {
            star.classList.add('medium');
        } else {
            star.classList.add('large');
        }
        
        // Random animation duration and opacity
        star.style.setProperty('--duration', `${Math.random() * 4 + 2}s`);
        star.style.setProperty('--opacity', Math.random() * 0.7 + 0.3);
        
        starsContainer.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 8; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random position
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        shootingStar.style.setProperty('--duration', `${Math.random() * 8 + 6}s`);
        
        // Random delay
        shootingStar.style.animationDelay = `${Math.random() * 15}s`;
        
        starsContainer.appendChild(shootingStar);
    }
    
    background.appendChild(starsContainer);
    document.body.insertBefore(background, document.body.firstChild);
}

// Initialize background when DOM is loaded
document.addEventListener('DOMContentLoaded', createStarBackground); 