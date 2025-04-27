document.addEventListener('DOMContentLoaded', () => {
    const components = [
        {
            title: "Git Integration",
            icon: "fab fa-github",
            description: "Automated code synchronization with GitHub repositories and pull requests"
        },
        {
            title: "Code Review Agent",
            icon: "fas fa-code",
            description: "LLM-powered code analysis for quality, security, and performance"
        },
        {
            title: "Docker Automation",
            icon: "fab fa-docker",
            description: "Intelligent Dockerfile generation and build optimization"
        },
        {
            title: "CI/CD Pipeline",
            icon: "fas fa-rocket",
            description: "Automated workflow generation for seamless deployments"
        }
    ];

    const workflowSteps = [
        "Code Commit",
        "AI Analysis",
        "Build Prediction",
        "Docker Build",
        "Deployment"
    ];

    // Insert component cards
    const cardsContainer = document.querySelector('.cards-container');
    components.forEach(component => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <i class="${component.icon} fa-3x" style="color: var(--accent)"></i>
            <h3 style="margin: 1rem 0">${component.title}</h3>
            <p>${component.description}</p>
        `;
        cardsContainer.appendChild(card);
    });

    // Insert workflow timeline
    const timeline = document.querySelector('.timeline');
    workflowSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'timeline-step';
        stepElement.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <h3>${step}</h3>
        `;
        timeline.appendChild(stepElement);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .timeline-step').forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
});
