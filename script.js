// JavaScript for Oboshie's Sewing Class Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ data
    const faqData = [
        {
            question: "What types of sewing classes do you offer?",
            answer: "We offer a variety of sewing classes including beginner's sewing, intermediate garment construction, advanced pattern making, and specialized workshops for specific techniques like draping, embroidery, and quilting."
        },
        {
            question: "Do I need to have prior sewing experience to join your classes?",
            answer: "Not at all! We welcome students of all skill levels. Our beginner's classes are designed for those with little to no sewing experience, and we provide all the guidance you need to get started."
        },
        {
            question: "What should I bring to the first class?",
            answer: "For your first class, all you need to bring is yourself and a notebook for taking notes. We provide all necessary sewing machines, tools, and materials for introductory classes. For advanced classes, we'll provide a list of required materials upon registration."
        },
        {
            question: "How long are the sewing classes?",
            answer: "Our standard classes run for 2-3 hours per session. Workshops and special courses may have different durations. Most courses run for 6-8 weeks, meeting once a week."
        },
        {
            question: "What is the class size?",
            answer: "To ensure personalized attention, we keep our classes small with a maximum of 8 students per instructor. This allows for plenty of one-on-one guidance throughout the learning process."
        },
        {
            question: "Do you offer private lessons?",
            answer: "Yes, we offer private sewing lessons for those who prefer one-on-one instruction. Private lessons can be scheduled at your convenience and are tailored to your specific interests and skill level."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We require at least 48 hours notice for class cancellations to receive a full refund. Cancellations made within 48 hours of the class will receive a 50% refund. No-shows without prior notice will not be refunded."
        },
        {
            question: "Do you provide sewing machines for use during class?",
            answer: "Yes, we provide high-quality sewing machines for all students to use during class. However, if you prefer to bring your own machine, you're welcome to do so. We recommend bringing your machine's manual if it's not a common model."
        },
        {
            question: "Are there any age restrictions for your classes?",
            answer: "Our adult classes are open to students aged 16 and above. We also offer specialized classes for younger students aged 10-15 during school holidays. All children's classes require parental consent."
        },
        {
            question: "Do you offer any certification upon completion of a course?",
            answer: "Yes, upon successful completion of any of our courses, you will receive a certificate of completion. This certificate recognizes the skills you've acquired and can be a valuable addition to your portfolio if you're pursuing sewing professionally."
        },
        {
            question: "How do I register for a class?",
            answer: "You can register for a class by clicking the 'Enroll Now!' button on our website and filling out the inquiry form. We'll get back to you with available class schedules and registration details. You can also contact us directly via WhatsApp at +233 54 933 4495."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including bank transfers, mobile money, and cash payments. Payment plans are available for some of our longer courses. Details will be provided upon registration."
        }
    ];

    // Initialize video data
    const videoData = [
        {
            id: 1,
            title: "Elegant Evening Gown",
            shortDescription: "A stunning, flowing gown perfect for special occasions, showcasing advanced draping techniques.",
            longDescription: "This exquisite evening gown was crafted using luxurious satin and intricate pleating techniques, a testament to precision and artistry learned in our advanced class. The flowing silhouette and delicate details make it perfect for formal events.",
            thumbnail: "https://placehold.co/600x400/E42D45/FFFFFF?text=Evening+Gown",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 2,
            title: "Casual Summer Dress",
            shortDescription: "A comfortable and stylish summer dress featuring breathable fabric and practical design.",
            longDescription: "This casual summer dress combines comfort with style, made from lightweight cotton perfect for warm weather. The simple yet elegant design includes thoughtful details like pockets and adjustable straps, demonstrating how everyday clothing can be both functional and fashionable.",
            thumbnail: "https://placehold.co/600x400/445878/FFFFFF?text=Summer+Dress",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 3,
            title: "Tailored Business Suit",
            shortDescription: "A professionally tailored business suit that exemplifies precision and attention to detail.",
            longDescription: "This impeccably tailored business suit showcases advanced construction techniques including precise fitting, welt pockets, and notched collars. Made from high-quality wool blend, it represents the pinnacle of our intermediate garment construction course.",
            thumbnail: "https://placehold.co/600x400/1A1C30/FFFFFF?text=Business+Suit",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 4,
            title: "Children's Party Dress",
            shortDescription: "A charming party dress for children featuring playful design elements and comfortable fit.",
            longDescription: "This adorable children's party dress combines whimsical design elements with practical construction. Featuring a full skirt, comfortable lining, and decorative embellishments, it demonstrates how to create garments that are both beautiful and child-friendly.",
            thumbnail: "https://placehold.co/600x400/E42D45/FFFFFF?text=Party+Dress",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 5,
            title: "Traditional Attire",
            shortDescription: "A beautifully crafted traditional outfit celebrating cultural heritage through textile art.",
            longDescription: "This traditional attire honors cultural heritage through meticulous craftsmanship and authentic techniques. The garment features intricate embroidery, traditional patterns, and custom dyeing methods that have been passed down through generations.",
            thumbnail: "https://placehold.co/600x400/445878/FFFFFF?text=Traditional+Attire",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 6,
            title: "Wedding Dress",
            shortDescription: "An exquisite wedding dress featuring delicate lace and intricate beadwork.",
            longDescription: "This breathtaking wedding dress represents the culmination of advanced sewing techniques. Featuring delicate lace appliqués, intricate beadwork, and a structured silhouette, it demonstrates the artistry and precision that can be achieved through dedicated study and practice.",
            thumbnail: "https://placehold.co/600x400/1A1C30/FFFFFF?text=Wedding+Dress",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 7,
            title: "Men's Formal Shirt",
            shortDescription: "A crisply tailored men's formal shirt with professional construction and finishing.",
            longDescription: "This men's formal shirt exemplifies precision tailoring with its perfectly aligned patterns, crisp collar, and French cuffs. The construction techniques demonstrated include flat-felled seams, collar stands, and buttonholes that showcase professional-level craftsmanship.",
            thumbnail: "https://placehold.co/600x400/E42D45/FFFFFF?text=Formal+Shirt",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 8,
            title: "Quilted Jacket",
            shortDescription: "A stylish quilted jacket combining warmth with contemporary design elements.",
            longDescription: "This quilted jacket merges functionality with fashion, featuring intricate quilting patterns, a modern silhouette, and practical design elements. The piece demonstrates advanced techniques in quilting, jacket construction, and working with insulated materials.",
            thumbnail: "https://placehold.co/600x400/445878/FFFFFF?text=Quilted+Jacket",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 9,
            title: "Embroidered Blouse",
            shortDescription: "A delicate blouse featuring hand embroidery and feminine design details.",
            longDescription: "This elegant blouse showcases the art of hand embroidery with its intricate floral patterns and delicate stitching. The garment combines traditional embroidery techniques with modern silhouette design, creating a piece that is both timeless and contemporary.",
            thumbnail: "https://placehold.co/600x400/1A1C30/FFFFFF?text=Embroidered+Blouse",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 10,
            title: "Denim Jacket",
            shortDescription: "A custom-designed denim jacket featuring unique distressing and embellishment techniques.",
            longDescription: "This custom denim jacket demonstrates creative approaches to working with heavy fabrics, including specialized distressing techniques, decorative topstitching, and unique embellishments. The piece shows how to transform a classic garment into a personalized fashion statement.",
            thumbnail: "https://placehold.co/600x400/E42D45/FFFFFF?text=Denim+Jacket",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 11,
            title: "Swimwear",
            shortDescription: "A stylish and functional swimwear piece showcasing techniques for working with stretch fabrics.",
            longDescription: "This swimwear piece highlights specialized techniques for working with stretch fabrics, including proper fitting, elastic application, and stretch stitch selection. The design balances style with functionality, demonstrating how to create garments that are both beautiful and practical for active wear.",
            thumbnail: "https://placehold.co/600x400/445878/FFFFFF?text=Swimwear",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 12,
            title: "Leather Handbag",
            shortDescription: "A sophisticated leather handbag demonstrating techniques for working with non-traditional materials.",
            longDescription: "This sophisticated leather handbag showcases techniques for working with non-traditional materials, including leather cutting, edge finishing, and hardware installation. The piece demonstrates how sewing skills can be applied to accessories and non-garment items.",
            thumbnail: "https://placehold.co/600x400/1A1C30/FFFFFF?text=Leather+Handbag",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 13,
            title: "Lingerie Set",
            shortDescription: "A delicate lingerie set featuring fine fabrics and intricate construction techniques.",
            longDescription: "This elegant lingerie set demonstrates advanced techniques for working with delicate fabrics, including lace application, elastic insertion, and fine finishing. The piece highlights the precision and attention to detail required for creating intimate apparel.",
            thumbnail: "https://placehold.co/600x400/E42D45/FFFFFF?text=Lingerie+Set",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 14,
            title: "Costume Design",
            shortDescription: "An elaborate costume piece showcasing creative design and theatrical construction techniques.",
            longDescription: "This elaborate costume piece demonstrates theatrical construction techniques, including structural underpinnings, surface embellishment, and durable construction methods for performance wear. The design showcases how sewing skills can be applied to creative and artistic projects beyond everyday fashion.",
            thumbnail: "https://placehold.co/600x400/445878/FFFFFF?text=Costume+Design",
            videoUrl: "https://placehold.co/video/600x400"
        },
        {
            id: 15,
            title: "Upcycled Garment",
            shortDescription: "A creative upcycled garment that transforms old materials into a fashionable new piece.",
            longDescription: "This innovative upcycled garment demonstrates sustainable fashion practices by transforming pre-existing materials into a stylish new creation. The piece showcases techniques for deconstruction, reconstruction, and creative problem-solving when working with repurposed textiles.",
            thumbnail: "https://placehold.co/600x400/1A1C30/FFFFFF?text=Upcycled+Garment",
            videoUrl: "https://placehold.co/video/600x400"
        }
    ];

    // Initialize page-specific elements
    const isIndexPage = document.getElementById('faq-container') !== null;
    const isWorksPage = document.getElementById('video-grid') !== null;

    // WhatsApp modal functionality (common to both pages)
    const whatsappModal = document.getElementById('whatsapp-modal');
    const navEnrollBtn = document.getElementById('nav-enroll-btn');
    const heroEnrollBtn = document.getElementById('hero-enroll-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const whatsappForm = document.getElementById('whatsapp-form');

    // Open WhatsApp modal
    function openWhatsappModal() {
        whatsappModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Close WhatsApp modal
    function closeWhatsappModal() {
        whatsappModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        whatsappForm.reset();
    }

    // Event listeners for WhatsApp modal
    if (navEnrollBtn) navEnrollBtn.addEventListener('click', openWhatsappModal);
    if (heroEnrollBtn) heroEnrollBtn.addEventListener('click', openWhatsappModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeWhatsappModal);

    // Close modal when clicking outside
    whatsappModal.addEventListener('click', function(e) {
        if (e.target === whatsappModal) {
            closeWhatsappModal();
        }
    });

    // Handle WhatsApp form submission
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Hello Oboshie's Sewing Class!%0A%0AName: ${name}%0AEmail: ${email}%0AInterest: ${interest}%0AMessage: ${message}`;
            const whatsappNumber = "+233549334495";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            window.open(whatsappUrl, '_blank');
            closeWhatsappModal();
            
            // Show success notification
            showToast('Your message has been sent via WhatsApp!');
        });
    }

    // Show toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Index/FAQ page functionality
    if (isIndexPage) {
        const faqContainer = document.getElementById('faq-container');
        const faqSearch = document.getElementById('faq-search');
        let activeFaqItem = null;

        // Render FAQ items
        function renderFaqItems(faqs) {
            faqContainer.innerHTML = '';
            
            if (faqs.length === 0) {
                faqContainer.innerHTML = '<p class="text-center text-gray-500 py-8">No FAQs found matching your search.</p>';
                return;
            }
            
            faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question">
                        <span>${faq.question}</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                `;
                
                faqItem.addEventListener('click', function() {
                    const wasActive = faqItem.classList.contains('active');
                    
                    // Close previously active FAQ item
                    if (activeFaqItem && activeFaqItem !== faqItem) {
                        activeFaqItem.classList.remove('active');
                    }
                    
                    // Toggle current FAQ item
                    faqItem.classList.toggle('active');
                    
                    // Update active FAQ item reference
                    if (wasActive) {
                        activeFaqItem = null;
                    } else {
                        activeFaqItem = faqItem;
                    }
                });
                
                faqContainer.appendChild(faqItem);
            });
        }

        // Initial render of FAQ items
        renderFaqItems(faqData);

        // FAQ search functionality
        faqSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                renderFaqItems(faqData);
                return;
            }
            
            const filteredFaqs = faqData.filter(faq => 
                faq.question.toLowerCase().includes(searchTerm) || 
                faq.answer.toLowerCase().includes(searchTerm)
            );
            
            renderFaqItems(filteredFaqs);
        });
    }

    // Works page functionality
    if (isWorksPage) {
        const videoGrid = document.getElementById('video-grid');
        const videoModal = document.getElementById('video-modal');
        const closeVideoModalBtn = document.getElementById('close-video-modal');
        const videoContainer = document.getElementById('video-container');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        const shareFacebookBtn = document.getElementById('share-facebook');
        const shareTwitterBtn = document.getElementById('share-twitter');
        const copyLinkBtn = document.getElementById('copy-link');
        let currentVideoUrl = '';

        // Render video grid
        function renderVideoGrid() {
            videoGrid.innerHTML = '';
            
            videoData.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';
                videoItem.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-description">${video.shortDescription}</p>
                    </div>
                `;
                
                videoItem.addEventListener('click', function() {
                    openVideoModal(video);
                });
                
                videoGrid.appendChild(videoItem);
            });
        }

        // Open video modal
        function openVideoModal(video) {
            currentVideoUrl = window.location.href.split('?')[0] + '?video=' + video.id;
            
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.longDescription;
            
            // Create video player
            videoContainer.innerHTML = `
                <iframe 
                    src="${video.videoUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    class="absolute top-0 left-0 w-full h-full">
                </iframe>
            `;
            
            videoModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        // Close video modal
        function closeVideoModal() {
            videoModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            videoContainer.innerHTML = '';
        }

        // Event listeners for video modal
        closeVideoModalBtn.addEventListener('click', closeVideoModal);
        
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });

        // Share functionality
        shareFacebookBtn.addEventListener('click', function() {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentVideoUrl)}`;
            window.open(url, '_blank');
        });

        shareTwitterBtn.addEventListener('click', function() {
            const text = `Check out this amazing creation from Oboshie's Sewing Class: ${videoTitle.textContent}`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentVideoUrl)}`;
            window.open(url, '_blank');
        });

        copyLinkBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(currentVideoUrl).then(function() {
                showToast('Link copied to clipboard!');
            }).catch(function() {
                showToast('Failed to copy link. Please try again.');
            });
        });

        // Initial render of video grid
        renderVideoGrid();
        
        // Check if video ID is in URL
        const urlParams = new URLSearchParams(window.location.search);
        const videoId = urlParams.get('video');
        
        if (videoId) {
            const video = videoData.find(v => v.id == videoId);
            if (video) {
                setTimeout(() => openVideoModal(video), 500);
            }
        }
    }
});