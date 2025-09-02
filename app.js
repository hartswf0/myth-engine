// Film Hubs Presentation JavaScript
class FilmHubsPresentation {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.currentView = 'probabilistic';
        this.hubData = {
            "hollywood": {
                "id": "hollywood",
                "name": "Hollywood",
                "location": "Los Angeles, USA",
                "mythic_archetype": "Eternal Glamour",
                "symbol": "⭐",
                "color": "#FFD700",
                "probabilistic_strength": 0.85,
                "recent_trend": "Stable",
                "strength_factors": "Brand legacy, star power, global distribution",
                "recent_headlines": [
                    "Hollywood won't budge for Chinese censors anymore - CNN 2022",
                    "Top Gun Maverick becomes year's biggest film without China release"
                ]
            },
            "georgia": {
                "id": "georgia",
                "name": "Georgia (Y'allywood)",
                "location": "Atlanta, USA",
                "mythic_archetype": "Scrappy Underdog",
                "symbol": "🌟",
                "color": "#8B4513",
                "probabilistic_strength": 0.35,
                "recent_trend": "Declining",
                "strength_factors": "Tax incentives (declining), infrastructure (idle)",
                "recent_headlines": [
                    "Marvel leaves Georgia to film in UK — gutting state's movie industry - NY Post 2025",
                    "Georgia film spending plummets 37% after strikes - AJC 2024",
                    "Is Marvel leaving Georgia? Here's what to know - USA Today 2025"
                ]
            },
            "uk": {
                "id": "uk",
                "name": "UK (Pinewood)",
                "location": "London, England",
                "mythic_archetype": "Heritage & Craft",
                "symbol": "👑",
                "color": "#800080",
                "probabilistic_strength": 0.65,
                "recent_trend": "Mixed",
                "strength_factors": "Heritage brands (Bond), skilled crews, Brexit challenges",
                "recent_headlines": [
                    "Pinewood scales back studio plans in blow to UK film industry - Yahoo 2025",
                    "U.K.'s Pinewood Studios Unveils Revised Expansion Plans - Hollywood Reporter 2025"
                ]
            },
            "canada": {
                "id": "canada",
                "name": "Canada (Hollywood North)",
                "location": "Vancouver/Toronto",
                "mythic_archetype": "Efficient Mimic",
                "symbol": "🍁",
                "color": "#FF0000",
                "probabilistic_strength": 0.75,
                "recent_trend": "Growing",
                "strength_factors": "Tax credits (35-40%), currency advantage, stable politics",
                "recent_headlines": [
                    "B.C. budget increases Canadian content tax credit to 40% - Vancouver Sun 2025",
                    "6 Ways Film and TV Producers Can Benefit from Filming in Canada - EP 2024"
                ]
            },
            "india": {
                "id": "india",
                "name": "India (Bollywood)",
                "location": "Mumbai/Chennai",
                "mythic_archetype": "Excess & Spectacle",
                "symbol": "🦚",
                "color": "#FF6347",
                "probabilistic_strength": 0.70,
                "recent_trend": "Recovering",
                "strength_factors": "Domestic market scale ($1.3B+), global diaspora, volume production",
                "recent_headlines": [
                    "Bollywood's $1.3 billion comeback year in 2023 - Fortune 2024",
                    "Indian Yearly Box Office reaches $667M in 2022 - Box Office Mojo"
                ]
            },
            "nigeria": {
                "id": "nigeria",
                "name": "Nigeria (Nollywood)",
                "location": "Lagos, Nigeria",
                "mythic_archetype": "Hustle & Speed",
                "symbol": "🥁",
                "color": "#00FF00",
                "probabilistic_strength": 0.60,
                "recent_trend": "Rising",
                "strength_factors": "Speed/cost efficiency, growing investment, streaming platforms",
                "recent_headlines": [
                    "Big Ticket Nollywood: Leading The Charge In African Cinema - Forbes Africa 2024",
                    "Nollywood's Golden Age revenue surged 125% in 2024 - AI News 2025"
                ]
            },
            "south_korea": {
                "id": "south_korea",
                "name": "South Korea",
                "location": "Seoul, South Korea",
                "mythic_archetype": "Precision & Soft Power",
                "symbol": "☯️",
                "color": "#0000FF",
                "probabilistic_strength": 0.80,
                "recent_trend": "Surging",
                "strength_factors": "Netflix dominance (8-9% global hours), cultural soft power",
                "recent_headlines": [
                    "Korean content on Netflix ranked 2nd in global views - Korea.net 2025",
                    "South Korean Content Second Only To U.S. In Netflix's Global - Deadline 2025"
                ]
            },
            "china": {
                "id": "china",
                "name": "China",
                "location": "Beijing/Shanghai",
                "mythic_archetype": "Closed Empire",
                "symbol": "🏯",
                "color": "#DC143C",
                "probabilistic_strength": 0.40,
                "recent_trend": "Declining",
                "strength_factors": "Market access restrictions, censorship, declining Hollywood cooperation",
                "recent_headlines": [
                    "Hollywood won't budge for Chinese censors anymore - CNN 2022",
                    "Hong Kong passes new film censorship law - BBC 2021"
                ]
            }
        };

        this.tugOfWarMatches = [
            {
                "match": "Marvel: Georgia vs UK",
                "winner": "UK",
                "evidence": "Marvel moved major productions from Georgia to UK studios",
                "mythic_narrative": "Heritage defeats Underdog",
                "probability_shift": "Georgia -0.15, UK +0.10"
            },
            {
                "match": "Tax Incentives: Canada vs Georgia",
                "winner": "Canada",
                "evidence": "Canada increased tax credits to 40% while Georgia lost Marvel",
                "mythic_narrative": "Northern Mimic outbids Southern Scrappy",
                "probability_shift": "Canada +0.10, Georgia -0.05"
            },
            {
                "match": "Global Content: South Korea vs India",
                "winner": "South Korea",
                "evidence": "Korean content is #2 globally on Netflix with 8-9% of hours",
                "mythic_narrative": "Precision defeats Spectacle through efficiency",
                "probability_shift": "South Korea +0.15, India stable"
            },
            {
                "match": "Investment: Nigeria vs Traditional Hubs",
                "winner": "Nigeria",
                "evidence": "125% revenue growth, major investor attention",
                "mythic_narrative": "Hustle challenges Establishment through innovation",
                "probability_shift": "Nigeria +0.15"
            },
            {
                "match": "Market Access: Hollywood vs China",
                "winner": "Hollywood",
                "evidence": "Studios resist censorship, major films skip China release",
                "mythic_narrative": "Glamour maintains independence from Empire",
                "probability_shift": "China -0.10, Hollywood stable"
            }
        ];

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupHubsGrid();
        this.setupTugOfWarMatches();
        this.setupComparison();
        this.setupTimeline();
        this.updateProgress();
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => this.previousSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });

        this.updateNavButtons();
    }

    setupHubsGrid() {
        const probabilisticView = document.getElementById('probabilisticView');
        const mythicView = document.getElementById('mythicView');

        // Initial render
        this.renderHubsGrid('probabilistic');

        // Setup toggle event listeners with proper state management
        probabilisticView.addEventListener('click', () => {
            this.currentView = 'probabilistic';
            probabilisticView.classList.add('active');
            mythicView.classList.remove('active');
            this.renderHubsGrid('probabilistic');
        });

        mythicView.addEventListener('click', () => {
            this.currentView = 'mythic';
            mythicView.classList.add('active');
            probabilisticView.classList.remove('active');
            this.renderHubsGrid('mythic');
        });
    }

    renderHubsGrid(view = 'probabilistic') {
        const hubsGrid = document.getElementById('hubsGrid');
        if (!hubsGrid) return; // Guard clause in case element doesn't exist
        
        hubsGrid.innerHTML = '';

        Object.values(this.hubData).forEach((hub, index) => {
            const hubCard = document.createElement('div');
            hubCard.className = 'hub-card fade-in';
            hubCard.style.setProperty('--hub-color', hub.color);
            hubCard.style.animationDelay = `${index * 0.1}s`;
            
            const trendClass = hub.recent_trend.toLowerCase() === 'growing' || 
                              hub.recent_trend.toLowerCase() === 'rising' || 
                              hub.recent_trend.toLowerCase() === 'surging' ? 'trend-up' : 
                              hub.recent_trend.toLowerCase() === 'declining' ? 'trend-down' : 'trend-stable';

            if (view === 'probabilistic') {
                hubCard.innerHTML = `
                    <div class="hub-header">
                        <div class="hub-symbol">${hub.symbol}</div>
                        <div>
                            <div class="hub-name">${hub.name}</div>
                            <div class="hub-location">${hub.location}</div>
                        </div>
                    </div>
                    <div class="hub-strength">
                        <div class="strength-bar">
                            <div class="strength-fill" style="width: ${hub.probabilistic_strength * 100}%; background: ${hub.color};"></div>
                        </div>
                        <div class="strength-value">${(hub.probabilistic_strength * 100).toFixed(0)}%</div>
                    </div>
                    <div class="hub-trend">
                        <span class="${trendClass}">Trend: ${hub.recent_trend}</span>
                    </div>
                    <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary); line-height: 1.3;">
                        ${hub.strength_factors}
                    </div>
                `;
            } else {
                hubCard.innerHTML = `
                    <div class="hub-header">
                        <div class="hub-symbol">${hub.symbol}</div>
                        <div>
                            <div class="hub-name">${hub.name}</div>
                            <div class="hub-location">${hub.location}</div>
                        </div>
                    </div>
                    <div class="hub-archetype">${hub.mythic_archetype}</div>
                    <div style="margin-top: 12px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.4;">
                        <strong>Recent Impact:</strong><br>
                        ${hub.recent_headlines[0]}
                    </div>
                    <div style="margin-top: 12px; font-size: 12px; color: var(--color-primary); font-style: italic;">
                        "The ${hub.mythic_archetype} archetype defines how this hub is perceived globally"
                    </div>
                `;
            }

            // Always add click event listener for modal
            hubCard.addEventListener('click', () => this.showHubDetails(hub));
            hubsGrid.appendChild(hubCard);
        });
    }

    showHubDetails(hub) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${hub.name}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
                        <div class="hub-symbol" style="background: ${hub.color}; width: 48px; height: 48px; font-size: 24px;">${hub.symbol}</div>
                        <div>
                            <div style="font-size: 18px; font-weight: 600; color: ${hub.color};">${hub.mythic_archetype}</div>
                            <div style="color: var(--color-text-secondary);">${hub.location}</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <strong>Probabilistic Strength:</strong> ${(hub.probabilistic_strength * 100).toFixed(0)}%
                        <div class="strength-bar" style="margin-top: 8px;">
                            <div class="strength-fill" style="width: ${hub.probabilistic_strength * 100}%; background: ${hub.color};"></div>
                        </div>
                        <div style="margin-top: 8px; font-size: 14px;">
                            <span class="status status--${hub.recent_trend.toLowerCase() === 'declining' ? 'error' : 
                                hub.recent_trend.toLowerCase().includes('growing') || 
                                hub.recent_trend.toLowerCase().includes('rising') || 
                                hub.recent_trend.toLowerCase().includes('surging') ? 'success' : 'warning'}">
                                ${hub.recent_trend} Trend
                            </span>
                        </div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <strong>Key Strength Factors:</strong><br>
                        <div style="margin-top: 8px; padding: 12px; background: var(--color-bg-1); border-radius: 6px; font-size: 14px;">
                            ${hub.strength_factors}
                        </div>
                    </div>
                    <div>
                        <strong>Recent Headlines & Impact:</strong>
                        <ul style="margin-top: 8px; padding-left: 20px;">
                            ${hub.recent_headlines.map(headline => `<li style="margin-bottom: 8px; font-size: 14px; line-height: 1.4;">${headline}</li>`).join('')}
                        </ul>
                    </div>
                    <div style="margin-top: 20px; padding: 16px; background: var(--color-bg-5); border-radius: 8px; border-left: 4px solid ${hub.color};">
                        <strong>Mythic Significance:</strong><br>
                        <em style="font-size: 14px; line-height: 1.4;">
                            As the embodiment of "${hub.mythic_archetype}," ${hub.name} represents more than economic strength—it carries cultural meaning that shapes how the global industry perceives and interacts with this hub.
                        </em>
                    </div>
                </div>
            </div>
        `;

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                modal.remove();
            }
        });

        // Close on Escape key
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);

        document.body.appendChild(modal);
    }

    setupTugOfWarMatches() {
        const matchesContainer = document.getElementById('matchesContainer');
        if (!matchesContainer) return;
        
        this.tugOfWarMatches.forEach((match, index) => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card fade-in';
            matchCard.style.animationDelay = `${index * 0.15}s`;
            
            matchCard.innerHTML = `
                <div class="match-header">
                    <div class="match-title">${match.match}</div>
                    <div class="match-winner">Winner: ${match.winner}</div>
                </div>
                <div class="match-evidence">
                    <strong>Evidence:</strong> ${match.evidence}
                </div>
                <div class="match-narrative">
                    <strong>Mythic Narrative:</strong> ${match.mythic_narrative}
                </div>
                <div class="probability-shift">
                    <strong>Probability Shift:</strong> ${match.probability_shift}
                </div>
            `;
            
            matchesContainer.appendChild(matchCard);
        });
    }

    setupComparison() {
        const hub1Select = document.getElementById('hub1Select');
        const hub2Select = document.getElementById('hub2Select');
        const comparisonResult = document.getElementById('comparisonResult');

        if (!hub1Select || !hub2Select || !comparisonResult) return;

        // Populate select options
        Object.values(this.hubData).forEach(hub => {
            const option1 = document.createElement('option');
            option1.value = hub.id;
            option1.textContent = hub.name;
            hub1Select.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = hub.id;
            option2.textContent = hub.name;
            hub2Select.appendChild(option2);
        });

        const updateComparison = () => {
            const hub1Id = hub1Select.value;
            const hub2Id = hub2Select.value;

            if (hub1Id && hub2Id && hub1Id !== hub2Id) {
                const hub1 = this.hubData[hub1Id];
                const hub2 = this.hubData[hub2Id];
                this.renderComparison(hub1, hub2, comparisonResult);
            } else if (hub1Id && hub2Id && hub1Id === hub2Id) {
                comparisonResult.innerHTML = '<p style="text-align: center; color: var(--color-warning);">Please select two different hubs for comparison</p>';
            } else {
                comparisonResult.innerHTML = '<p style="text-align: center;">Select two different hubs to compare their probabilistic strengths and mythic archetypes</p>';
            }
        };

        hub1Select.addEventListener('change', updateComparison);
        hub2Select.addEventListener('change', updateComparison);
    }

    renderComparison(hub1, hub2, container) {
        const strengthDiff = Math.abs(hub1.probabilistic_strength - hub2.probabilistic_strength);
        const stronger = hub1.probabilistic_strength > hub2.probabilistic_strength ? hub1 : hub2;
        const weaker = hub1.probabilistic_strength < hub2.probabilistic_strength ? hub1 : hub2;
        
        container.innerHTML = `
            <div class="comparison-grid">
                <div class="comparison-hub">
                    <div class="comparison-hub-name" style="color: ${hub1.color};">${hub1.name}</div>
                    <div class="hub-symbol" style="background: ${hub1.color}; margin: 16px auto; width: 64px; height: 64px; font-size: 32px;">${hub1.symbol}</div>
                    <div class="comparison-strength" style="color: ${hub1.color};">${(hub1.probabilistic_strength * 100).toFixed(0)}%</div>
                    <div class="comparison-archetype">${hub1.mythic_archetype}</div>
                    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 12px; line-height: 1.4;">${hub1.strength_factors}</div>
                </div>
                <div class="comparison-hub">
                    <div class="comparison-hub-name" style="color: ${hub2.color};">${hub2.name}</div>
                    <div class="hub-symbol" style="background: ${hub2.color}; margin: 16px auto; width: 64px; height: 64px; font-size: 32px;">${hub2.symbol}</div>
                    <div class="comparison-strength" style="color: ${hub2.color};">${(hub2.probabilistic_strength * 100).toFixed(0)}%</div>
                    <div class="comparison-archetype">${hub2.mythic_archetype}</div>
                    <div style="font-size: 14px; color: var(--color-text-secondary); margin-top: 12px; line-height: 1.4;">${hub2.strength_factors}</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <div style="padding: 20px; background: var(--color-bg-1); border-radius: 8px; margin-bottom: 16px;">
                    <strong style="color: ${stronger.color}; font-size: 16px;">${stronger.name}</strong> has a 
                    <strong>${(strengthDiff * 100).toFixed(0)} percentage point</strong> advantage in probabilistic strength.
                </div>
                <div style="padding: 20px; background: var(--color-bg-7); border-radius: 8px; border-left: 4px solid var(--color-primary);">
                    <strong>Mythic Narrative:</strong><br>
                    <em style="font-size: 15px; line-height: 1.5;">
                        The clash between "${hub1.mythic_archetype}" and "${hub2.mythic_archetype}" represents 
                        ${hub1.mythic_archetype === hub2.mythic_archetype ? 
                            'two similar archetypes competing for dominance in the same narrative space' : 
                            'fundamentally different approaches to film production—one emphasizing ' + hub1.mythic_archetype.toLowerCase() + ' while the other embodies ' + hub2.mythic_archetype.toLowerCase()}.
                        This competition shapes not just market dynamics but cultural perceptions of what film production represents globally.
                    </em>
                </div>
            </div>
        `;
    }

    setupTimeline() {
        const timelineSlider = document.getElementById('timelineSlider');
        if (!timelineSlider) return;
        
        timelineSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            this.updateTimelineView(value);
        });

        // Initialize timeline view
        this.updateTimelineView(4);
    }

    updateTimelineView(timelineValue) {
        // Simulate how probabilities would change over time
        const matches = document.querySelectorAll('.match-card');
        matches.forEach((match, index) => {
            if (index <= timelineValue) {
                match.style.opacity = '1';
                match.style.transform = 'translateY(0) scale(1)';
                match.style.filter = 'none';
            } else {
                match.style.opacity = '0.4';
                match.style.transform = 'translateY(10px) scale(0.98)';
                match.style.filter = 'grayscale(0.5)';
            }
        });
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.showSlide(this.currentSlide - 1);
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.showSlide(this.currentSlide + 1);
        }
    }

    showSlide(slideNumber) {
        // Hide current slide
        const currentSlideElement = document.getElementById(`slide${this.currentSlide}`);
        if (currentSlideElement) {
            currentSlideElement.classList.remove('active');
        }

        // Show new slide
        this.currentSlide = slideNumber;
        const newSlideElement = document.getElementById(`slide${this.currentSlide}`);
        if (newSlideElement) {
            newSlideElement.classList.add('active');
        }

        this.updateProgress();
        this.updateNavButtons();
        this.updateSlideCounter();

        // Re-render hubs grid when returning to slide 4 to maintain toggle state
        if (slideNumber === 4) {
            setTimeout(() => {
                this.renderHubsGrid(this.currentView);
            }, 100);
        }
    }

    updateProgress() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }

    updateNavButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) prevBtn.disabled = this.currentSlide === 1;
        if (nextBtn) nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    updateSlideCounter() {
        const slideCounter = document.getElementById('slideCounter');
        if (slideCounter) {
            slideCounter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }
    }
}

// Add modal styles dynamically
const modalStyles = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.2s ease;
    }
    
    .modal-content {
        background: var(--color-surface);
        border-radius: var(--radius-lg);
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid var(--color-card-border);
        animation: slideInUp 0.3s ease;
        box-shadow: var(--shadow-lg);
    }
    
    .modal-header {
        padding: var(--space-20);
        border-bottom: 1px solid var(--color-card-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-bg-1);
        border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
    
    .modal-header h3 {
        margin: 0;
        color: var(--color-text);
        font-size: var(--font-size-xl);
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        color: var(--color-text-secondary);
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-base);
        transition: all var(--duration-fast) var(--ease-standard);
    }
    
    .modal-close:hover {
        background: var(--color-secondary);
        color: var(--color-text);
        transform: scale(1.1);
    }
    
    .modal-body {
        padding: var(--space-20);
    }
    
    @keyframes slideInUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FilmHubsPresentation();
});