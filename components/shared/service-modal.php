<!-- Service Modal Dialog - Based on HugeInc structure -->
<dialog id="service-modal" class="service-modal">
    <article class="service-modal__article">
        <!-- Левая колонка: изображение/видео -->
        <div class="service-modal__left" data-theme="default">
            <div class="service-modal__image-wrapper" data-theme="default">
                <img id="service-modal-image" src="" alt="Service Image" class="service-modal__image">
                <video id="service-modal-video" class="service-modal__video" controls style="display: none;">
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        <!-- Правая колонка -->
        <div class="service-modal__right">
            <!-- Шапка -->
            <div class="service-modal__header">
                <div class="service-modal__header-content">
                    <div class="service-modal__category">
                        <span id="service-modal-category">Legal Marketing</span>
                    </div>
                    <h1 id="service-modal-title" class="service-modal__title">Service Title</h1>
                    <p id="service-modal-subtitle" class="service-modal__subtitle">Service Subtitle</p>
                </div>
                <button class="service-modal__close" aria-label="Close modal">
                    <span>Close</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            
            <!-- Контентная часть -->
            <div class="service-modal__content lenis" data-lenis-content="true">
                <div id="service-modal-description" class="service-modal__description">
                    <!-- Контент будет загружаться динамически -->
                </div>
                
                <!-- Дополнительные секции -->
                <div class="service-modal__sections">
                    <div class="service-modal__section">
                        <h3>Key Benefits</h3>
                        <ul id="service-modal-benefits">
                            <!-- Будет заполняться динамически -->
                        </ul>
                    </div>
                    
                    <div class="service-modal__section">
                        <h3>Watch Our Process</h3>
                        <div class="service-modal__video-container">
                            <iframe 
                                id="service-modal-youtube" 
                                width="100%" 
                                height="315" 
                                src="" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    
                    <div class="service-modal__section">
                        <h3>Our Approach</h3>
                        <div id="service-modal-approach">
                            <!-- Будет заполняться динамически -->
                        </div>
                    </div>
                    
                    <div class="service-modal__section">
                        <h3>Results You Can Expect</h3>
                        <div id="service-modal-results">
                            <!-- Будет заполняться динамически -->
                        </div>
                    </div>
                </div>
                
                <!-- CTA секция -->
                <div class="service-modal__cta">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today to learn how this service can transform your law firm's growth.</p>
                    <button class="service-modal__cta-button btn-primary">
                        Get Free Consultation
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </article>
</dialog>

<!-- Service Data Templates (скрытые данные для каждой услуги) -->
<script type="application/json" id="services-data">
{
    "aggressive-case-generation": {
        "title": "Aggressive Case Generation",
        "subtitle": "Google Ads for Attorneys",
        "category": "Paid Advertising",
        "image": "assets/images/services/element-079.png",
        "video": "v2.0/assets/videos/services/google-ads.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Drive immediate results with our aggressive Google Ads campaigns specifically designed for law firms. We create high-converting ad campaigns that target potential clients at the exact moment they need legal help.",
        "benefits": [
            "Immediate visibility in Google search results",
            "Targeted campaigns for specific practice areas",
            "Advanced keyword research and optimization",
            "Conversion tracking and ROI analysis",
            "24/7 campaign monitoring and optimization"
        ],
        "approach": "Our Google Ads specialists conduct thorough keyword research, create compelling ad copy, and continuously optimize campaigns for maximum ROI. We focus on high-intent keywords that convert prospects into clients.",
        "results": "Our clients typically see a 300-500% increase in qualified leads within the first 90 days, with an average cost per acquisition 40% lower than industry standards."
    },
    "law-firm-brand": {
        "title": "Building Your Law Firm's BRAND",
        "subtitle": "Social Media Marketing for Law Firms",
        "category": "Brand Building",
        "image": "assets/images/services/element-012.png",
        "video": "v2.0/assets/videos/services/social-media.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Establish your law firm as a trusted authority in your practice areas through strategic social media marketing. We build your digital footprint across all major platforms to attract and engage potential clients.",
        "benefits": [
            "Increased brand awareness and recognition",
            "Enhanced credibility and trust",
            "Direct engagement with potential clients",
            "Content that showcases expertise",
            "Multi-platform presence optimization"
        ],
        "approach": "We develop a comprehensive social media strategy that includes content creation, community management, and targeted advertising across Facebook, LinkedIn, Instagram, and other relevant platforms.",
        "results": "Law firms working with us see an average 250% increase in social media engagement and a 180% boost in website traffic from social channels within 6 months."
    },
    "quality-content-seo": {
        "title": "Quality Content and Natural Case Lead Funnels",
        "subtitle": "State-of-the-Art SEO for Lawyers",
        "category": "Organic Growth",
        "image": "assets/images/services/element-016.png",
        "video": "v2.0/assets/videos/services/seo.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Dominate search engine results with our advanced SEO strategies. We create high-quality content and optimize your website to attract organic traffic and generate natural lead funnels.",
        "benefits": [
            "Higher search engine rankings",
            "Increased organic website traffic",
            "Quality content that converts",
            "Long-term sustainable growth",
            "Enhanced online authority"
        ],
        "approach": "Our SEO experts conduct comprehensive website audits, perform keyword research, create optimized content, and build high-quality backlinks to improve your search rankings.",
        "results": "Clients experience an average 400% increase in organic traffic and 60% more qualified leads from search engines within 12 months."
    },
    "local-market-domination": {
        "title": "Dominating Your Local Market",
        "subtitle": "Local Service Ads for Attorneys",
        "category": "Local Marketing",
        "image": "assets/images/services/element-017.png",
        "video": "v2.0/assets/videos/services/local-ads.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Capture local clients with Google Local Service Ads. These ads appear at the top of search results and are specifically designed for service-based businesses like law firms.",
        "benefits": [
            "Prime placement in local search results",
            "Google-backed verification and trust",
            "Pay-per-lead pricing model",
            "Direct phone calls from prospects",
            "Enhanced local market presence"
        ],
        "approach": "We handle the entire Local Service Ads setup, verification process, and ongoing optimization to ensure maximum visibility in your local market.",
        "results": "Law firms see an average 200% increase in local leads and 85% improvement in local search visibility within 60 days."
    },
    "google-maps-leads": {
        "title": "Controlling Maximum Lead Generation Real Estate",
        "subtitle": "Google Local MAPS Optimization",
        "category": "Local SEO",
        "image": "assets/images/services/element-024.png",
        "video": "v2.0/assets/videos/services/google-maps.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Maximize your presence in Google Maps and local search results. We optimize your Google Business Profile to capture the maximum amount of local search real estate.",
        "benefits": [
            "Improved Google Maps rankings",
            "Increased local search visibility",
            "More phone calls and directions",
            "Enhanced online reputation",
            "Competitive advantage in local market"
        ],
        "approach": "We optimize your Google Business Profile, manage reviews, create location-specific content, and implement local SEO strategies to dominate local search results.",
        "results": "Clients typically see a 300% increase in Google Maps views and 150% more calls directly from their Google Business Profile."
    },
    "traditional-advertising": {
        "title": "Traditional Advertising and Media Buys",
        "subtitle": "Over 100 Years of Combined Experience",
        "category": "Traditional Media",
        "image": "assets/images/services/element-026.png",
        "video": "v2.0/assets/videos/services/traditional-media.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Leverage our team's combined 100+ years of experience in TV, radio, and billboard advertising. We create compelling traditional media campaigns that drive brand awareness and client acquisition.",
        "benefits": [
            "Massive brand exposure and awareness",
            "Credibility boost from traditional media",
            "Multi-channel marketing approach",
            "Proven track record of success",
            "Expert media buying and placement"
        ],
        "approach": "Our experienced media buyers negotiate the best rates and placements for TV, radio, and billboard advertising, ensuring maximum ROI for your traditional media investment.",
        "results": "Traditional media campaigns typically generate 500-1000% increase in brand recognition and 200-400% boost in overall lead volume."
    },
    "live-intake-teams": {
        "title": "Live Intake Teams",
        "subtitle": "24/7/365 English & Spanish Support",
        "category": "Lead Management",
        "image": "assets/images/services/element-008.png",
        "video": "v2.0/assets/videos/services/live-intake.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Never miss a potential client with our 24/7/365 live intake teams. Our bilingual specialists answer calls, qualify leads, and can even obtain signed retainers on your behalf.",
        "benefits": [
            "24/7/365 availability for potential clients",
            "Bilingual support (English & Spanish)",
            "Professional case qualifying specialists",
            "Signed retainer acquisition capability",
            "Increased conversion rates"
        ],
        "approach": "Our trained intake specialists use proven scripts and qualification processes to convert more calls into signed clients, ensuring no opportunity is missed.",
        "results": "Law firms using our intake services see 60-80% improvement in call-to-client conversion rates and 40% increase in overall case acquisition."
    },
    "advanced-ai": {
        "title": "The Industry's Most Advanced AI",
        "subtitle": "Saturn AI Multi-Language Support",
        "category": "AI Technology",
        "image": "assets/images/services/element-030.png",
        "video": "v2.0/assets/videos/services/saturn-ai.mp4",
        "youtube": "m-A_7Pxt9wA",
        "description": "Revolutionary AI technology that allows your law firm to take calls in any language and obtain signed client files. Saturn AI breaks down language barriers and maximizes your client acquisition potential.",
        "benefits": [
            "Multi-language call handling capability",
            "AI-powered client file acquisition",
            "24/7 automated intake processing",
            "Breakthrough language barrier technology",
            "Scalable client acquisition system"
        ],
        "approach": "Saturn AI uses advanced natural language processing and machine learning to communicate with potential clients in their preferred language and guide them through the intake process.",
        "results": "Early adopters report 300-500% increase in international and non-English speaking client acquisition, with 90% client satisfaction rates."
    }
}
</script>
