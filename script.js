// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Copy email function
function copyEmail() {
    const email = 'abdulrafi907@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        // Create and show a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'fixed bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300';
        tooltip.textContent = 'Email copied!';
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -50%)';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);

        // Remove tooltip after 2 seconds
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 300);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

// Toggle old games section
const toggleOldGamesBtn = document.getElementById('toggleOldGames');
const oldGamesSection = document.getElementById('oldGames');

toggleOldGamesBtn.addEventListener('click', function() {
    const isHidden = !oldGamesSection.classList.contains('show');
    
    if (isHidden) {
        oldGamesSection.classList.add('show');
        this.classList.add('active');
        this.querySelector('span').textContent = 'Hide Previous Projects';
    } else {
        oldGamesSection.classList.remove('show');
        this.classList.remove('active');
        this.querySelector('span').textContent = 'Show Previous Projects';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.project-modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// Function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
            <div class="h-48 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="px-2 py-1 bg-indigo-900 text-indigo-200 rounded-full text-xs">${tag}</span>`).join('')}
                </div>
                <p class="text-gray-300 mb-4">${project.description}</p>
                <button onclick="openModal('${project.id}')" class="text-indigo-400 hover:text-indigo-300 font-medium">View Details →</button>
            </div>
        </div>
    `;
}

// Function to create project modal HTML
function createProjectModal(project) {
    return `
        <div id="${project.id}" class="project-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div class="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div class="relative">
                    <button onclick="closeModal('${project.id}')" class="absolute top-4 right-4 text-gray-400 hover:text-white">
                        <i class="fas fa-times text-2xl"></i>
                    </button>
                    <div class="h-64 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-8">
                        <h2 class="text-3xl font-bold mb-4">${project.title}</h2>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.tags.map(tag => `<span class="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm">${tag}</span>`).join('')}
                        </div>
                        
                        <h3 class="text-xl font-bold mb-3 text-indigo-300">Project Overview</h3>
                        <p class="text-gray-300 mb-6">${project.details.overview}</p>
                        
                        <h3 class="text-xl font-bold mb-3 text-indigo-300">My Contributions</h3>
                        <ul class="list-disc pl-5 text-gray-300 space-y-2 mb-6">
                            ${project.details.contributions.map(contribution => `<li>${contribution}</li>`).join('')}
                        </ul>
                        
                        <h3 class="text-xl font-bold mb-3 text-indigo-300">Technical Highlights</h3>
                        <div class="bg-gray-700 rounded-lg p-4 mb-6">
                            <code class="text-gray-200 text-sm">${project.details.codeSnippet}</code>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <div>
                                <a href="#" class="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
                                    <i class="fas fa-play mr-2"></i> Watch Trailer
                                </a>
                            </div>
                            <div>
                                <a href="#" class="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center">
                                    <i class="fab fa-github mr-2"></i> View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render all projects
function renderProjects() {
    // Render featured projects
    const featuredContainer = document.querySelector('#games .grid');
    featuredContainer.innerHTML = projects.featured.map(createProjectCard).join('');

    // Render previous projects
    const previousContainer = document.querySelector('#oldGames');
    previousContainer.innerHTML = projects.previous.map(createProjectCard).join('');

    // Render R&D projects
    const rndContainer = document.querySelector('#rnd .grid');
    rndContainer.innerHTML = projects.rnd.map(createProjectCard).join('');

    // Render all modals
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = [
        ...projects.featured,
        ...projects.previous,
        ...projects.rnd
    ].map(createProjectModal).join('');
    document.body.appendChild(modalContainer);
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill-bars');
            animateSkillBars();
        }
    });
}, {threshold: 0.1});

// Observe skill section if exists
const skillSection = document.getElementById('skills');
if (skillSection) {
    observer.observe(skillSection);
}

// Render profile info and social links
document.addEventListener('DOMContentLoaded', function() {
    if (typeof profile !== 'undefined') {
        // Set name
        const nameEl = document.getElementById('profile-name');
        if (nameEl) nameEl.textContent = profile.name;

        // Set description
        const descEl = document.getElementById('profile-description');
        if (descEl) descEl.textContent = profile.description;

        // Set email
        const emailEl = document.getElementById('profile-email');
        if (emailEl) emailEl.textContent = profile.email;

        // Render social links
        function renderSocialLinks(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            const socials = [
                { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
                { key: 'github', icon: 'fab fa-github', label: 'GitHub' },
                { key: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                { key: 'itchio', icon: 'fab fa-itch-io', label: 'itch.io' }
            ];
            socials.forEach(social => {
                if (profile.social[social.key]) {
                    const a = document.createElement('a');
                    a.href = profile.social[social.key];
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.className = 'text-gray-300 hover:text-indigo-400 transition';
                    a.title = social.label;
                    a.innerHTML = `<i class="${social.icon} text-2xl"></i>`;
                    container.appendChild(a);
                }
            });
        }
        renderSocialLinks('profile-social');
        renderSocialLinks('contact-social');
    }

    // Render projects (already present)
    if (typeof renderProjects === 'function') {
        renderProjects();
    }
}); 