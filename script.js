document.addEventListener('DOMContentLoaded', () => {

    const terminalTextEl = document.querySelector('.terminal-text');
    const beginBriefingBtn = document.getElementById('begin-briefing');
    const introSection = document.getElementById('intro');
    const reportContent = document.getElementById('report-content');
    const briefingSections = document.querySelectorAll('.briefing-section');

    const textToType = [
        "REPORT VER 5.1",
        "SUBJECT: Analysis of Medical Information Accuracy in Men's Health Articles.",
        "STATUS: CRITICAL.",
        "ORIGINATOR: The Information Sentinel.",
        "...",
        "DECRYPTING MESSAGE...",
        "ACCESS GRANTED.",
        "AWAITING COMMAND."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        if (lineIndex < textToType.length) {
            if (charIndex < textToType[lineIndex].length) {
                terminalTextEl.innerHTML += textToType[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 30); // Typing speed
            } else {
                terminalTextEl.innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 500); // Pause between lines
            }
        } else {
            // Typing finished
            beginBriefingBtn.classList.remove('hidden');
        }
    }

    function createCartelDiagram() {
        const diagram = document.getElementById('cartel-diagram');
        if (!diagram) return;

        const centralNode = {
            title: '건강 염려-상업주의 복합체',
            desc: 'Health Anxiety-Commercialism Complex'
        };

        const satelliteNodes = [
            { title: '클릭베이트 언론', desc: 'Clickbait Media' },
            { title: '보조제/대체요법 산업', desc: 'Supplement Industry' },
            { title: '사이비 전문가', desc: 'Pseudo-experts' }
        ];

        // Create and add satellite nodes (top)
        satelliteNodes.forEach(nodeInfo => {
            const node = document.createElement('div');
            node.className = 'cartel-node satellite';
            node.innerHTML = `<h4>${nodeInfo.title}</h4><p>${nodeInfo.desc}</p>`;
            diagram.appendChild(node);
        });

        // Create and add central node
        const centralDiv = document.createElement('div');
        centralDiv.className = 'cartel-node central';
        centralDiv.innerHTML = `<h4>${centralNode.title}</h4><p>${centralNode.desc}</p>`;

        // Insert central node after the first satellite to visually center it
        if (diagram.children.length > 1) {
            diagram.insertBefore(centralDiv, diagram.children[Math.floor(satelliteNodes.length / 2)]);
        } else {
            diagram.appendChild(centralDiv);
        }
    }

    // Start the typing animation
    type();

    const fiveWhysData = [
        {
            question: "Why 1: 40세 미만 남성의 혈뇨가 '주로' 방광염 때문이라는 주장은 의학적으로 사실인가?",
            evidence: "젊은 남성의 혈뇨 원인은 매우 다양하며, 남성에게 방광염은 상대적으로 드뭅니다. 오히려 신장결석, 요로결석, 과격한 운동, 외상, 신장 질환(사구체신염 등)이 더 흔한 원인입니다. 특히 통증 없는 육안적 혈뇨는 방광암, 신장암 등 비뇨기계 암의 핵심 초기 신호일 수 있어, '주로 방광염'이라는 단정은 명백한 의학적 왜곡이며 매우 위험합니다.",
            sourceAnalysis: "대한비뇨의학회, 미국 비뇨기과 협회, 메이요 클리닉 등 세계 최고 수준의 의료 기관들은 모두 혈뇨의 심각성을 경고하며, 조기 진단의 중요성을 강조합니다.",
            tacticalAnalysis: "기사는 '복잡성의 단순화'와 '안심 제공' 전술을 사용합니다. '혈뇨'라는 공포스러운 증상을 '단순 감염'이라는 손쉬운 설명으로 완화시켜, 독자의 건강보다 미디어의 상업적 이익(만족도, 공유)을 우선시합니다."
        },
        {
            question: "Why 2: 남성의 회음부 통증이 전립선염의 징후라는 주장은 타당한가?",
            evidence: "전립선염은 실제로 회음부 통증의 가장 흔한 원인 중 하나이므로, 이 주장은 혈뇨 주장보다 의학적 개연성이 높습니다. 하지만 골반저근 긴장, 신경통, 치질 등 다른 원인도 충분히 가능하므로 '전립선염'으로 단정하는 것은 섣부릅니다.",
            sourceAnalysis: "NIH, WebMD 등 신뢰도 높은 의학 정보 출처에서도 다양한 원인을 제시합니다.",
            tacticalAnalysis: "'전립선'이라는 키워드로 남성들의 불안감을 자극하고 '개인적 연관성'을 극대화하여 기사 몰입도를 높입니다. 이는 '전립선 건강'에 대한 불안감을 가진 소비자를 양산하는 효과로 이어집니다."
        },
        {
            question: "Why 3: 정보의 출처인 Dr. Larry Lipshultz와 'MH' 매체는 누구인가?",
            evidence: "Dr. Larry Lipshultz는 남성 생식의학 분야의 세계적 권위자입니다. 'MH'는 대중 건강 잡지 'Men's Health'로 보입니다. 즉, 정보의 최초 소스는 권위 있지만, 대중에게 전달되는 과정에서 상업 매체의 편집 및 가공을 거쳤습니다.",
            sourceAnalysis: "베일러 의과대학 공식 웹사이트, PubMed, Men's Health 공식 웹사이트.",
            tacticalAnalysis: "핵심 전술은 '권위 차용(Authority Borrowing)'입니다. 저명한 전문가의 이름을 빌려 기사의 신뢰도를 포장하지만, 실제 내용은 전문가의 신중한 발언을 자극적이고 단순하게 왜곡했을 가능성이 높습니다. 전문가의 권위가 상업적 목적에 도구로 사용된 것입니다."
        },
        {
            question: "Why 4: 왜 대중은 이러한 단순화된 의학 정보에 쉽게 설득되는가?",
            evidence: "인간의 뇌는 불확실성과 불안을 회피하려는 '정상성 편향' 또는 '희망적 사고' 경향이 있습니다. '암일지도 모른다'는 위협적인 불확실성보다 '단순 감염일 뿐'이라는 명확하고 덜 위협적인 설명을 선호합니다. 뇌는 인지적 구두쇠처럼 가장 이해하기 쉬운 설명을 진실로 받아들입니다.",
            sourceAnalysis: "행동 심리학, 인지 과학 관련 학술 자료.",
            tacticalAnalysis: "카르텔은 이러한 인지적 취약점을 파고듭니다. '공포 조장' -> '구원 서사 제공' -> '가짜 효능감 부여'의 심리적 롤러코스터를 통해 매체에 대한 의존도를 높입니다."
        },
        {
            question: "Why 5: 이러한 정보 왜곡으로 궁극적으로 누가 이익을 얻고, 어떤 피해가 발생하는가?",
            evidence: "단기적 이익은 미디어 플랫폼이지만, 구조적 이익은 '건강 염려-상업주의 복합체' 전체에 돌아갑니다. 이들은 '불안의 상업화'를 통해 이익을 얻습니다. 가장 큰 피해자는 독자, 즉 일반 대중입니다. 방광암 진단 시기를 놓쳐 생명을 위협받거나, 불필요한 약물 남용, 검증되지 않은 요법에 돈과 시간을 낭비할 수 있습니다.",
            sourceAnalysis: "종양학 저널, 소비자 보호 단체 보고서, 규제 기관 자료.",
            tacticalAnalysis: "이것이 카르텔의 최종 목표, '불안의 상업화(Commercialization of Anxiety)'입니다. 그들은 질병을 치료하는 것이 아니라, 질병에 대한 '불안감'을 지속적으로 생산하고 판매함으로써 이익을 얻습니다."
        }
    ];

    function createWhyAccordion() {
        const accordionContainer = document.getElementById('why-accordion');
        if (!accordionContainer) return;

        let content = '';
        fiveWhysData.forEach(item => {
            content += `
                <div class="accordion-item">
                    <button class="accordion-header">
                        ${item.question}
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <h4>🚨 Evidence:</h4>
                        <p>${item.evidence}</p>
                        <h4>🚨 Source Analysis:</h4>
                        <p>${item.sourceAnalysis}</p>
                        <h4>🚨 Tactical Analysis:</h4>
                        <p>${item.tacticalAnalysis}</p>
                    </div>
                </div>
            `;
        });
        accordionContainer.innerHTML = content;

        accordionContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header');
            if (header) {
                const item = header.parentElement;
                item.classList.toggle('active');
            }
        });
    }

    // Setup animations and interactive elements
    createCartelDiagram();
    createWhyAccordion();

    // Event listener for the "Begin Briefing" button
    beginBriefingBtn.addEventListener('click', () => {
        introSection.style.transition = 'opacity 1s ease-out';
        introSection.style.opacity = '0';
        setTimeout(() => {
            introSection.classList.add('hidden');
            reportContent.classList.remove('hidden');
            // Manually trigger the observer for the first visible sections
            handleIntersect(document.querySelectorAll('.briefing-section'), observer);
        }, 1000); // Match timeout with transition duration
    });

    // --- Final Touches: Copy Link Button ---
    const copyLinkBtn = document.getElementById('copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                // Success feedback
                const originalText = copyLinkBtn.textContent;
                copyLinkBtn.textContent = '복사 완료!';
                setTimeout(() => {
                    copyLinkBtn.textContent = originalText;
                }, 2000);
            }).catch(err => {
                // Error feedback
                console.error('Failed to copy: ', err);
                alert('링크 복사에 실패했습니다.');
            });
        });
    }

    // Intersection Observer for fade-in effect on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // --- Animations for Section 5 ---
                if (entry.target.id === 'strategy') {
                    const stamp = document.getElementById('verdict-stamp');
                    const playbookItems = document.querySelectorAll('.playbook-item');

                    // Animate stamp
                    if (stamp) {
                        stamp.classList.remove('stamp-hidden');
                        stamp.classList.add('visible');
                    }

                    // Animate playbook items
                    playbookItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, 300 * (index + 1)); // Staggered delay
                    });
                }

                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections within the main content
    reportContent.querySelectorAll('.briefing-section').forEach(section => {
        observer.observe(section);
    });

});
