
// Docker Business MEDDICC Discovery Tool
class MeddiccTool {
    constructor() {
        this.activeSection = 'metrics';
        this.starredQuestions = new Set();
        this.callPrep = new Set();
        this.notes = {};
        
        this.sections = {
            metrics: {
                title: 'Metrics',
                subtitle: 'Quantify the Business Impact',
                icon: '📊',
                color: 'blue',
                questions: [
                    "Which engineering KPIs (e.g., lead-time-for-changes, MTTR, deployment frequency) would improve if every dev used a standard Docker Desktop + Docker Scout toolchain?",
                    "What revenue-critical services are blocked when container images fail security checks today?",
                    "What percent of your developer workday is lost to environment drift or \"works on my machine\" issues?",
                    "If we automated software-supply-chain scanning with Docker Business, how many high-severity CVEs could you remediate per sprint?",
                    "How will you measure success for this initiative—cycle-time reduction, CVE backlog burn-down, or something else?",
                    "Where do container misconfigurations currently surface in your incident-cost model (S1 downtime, SLA penalties, on-call hours)?",
                    "What's the $ cost of maintaining multiple community editions versus a single managed subscription?",
                    "Where would you like that cost/KPI to be in 12 months?",
                    "Assuming you implemented Docker Business next quarter, what tangible business results would you call out in your next Ops review?",
                    "How would a best-in-class container platform influence your Net Promoter Score with engineering teams?"
                ]
            },
            economicBuyer: {
                title: 'Economic Buyer',
                subtitle: 'Identify Who Owns the Budget & Value Narrative',
                icon: '💰',
                color: 'green',
                questions: [
                    "Have you earmarked budget for developer tooling or supply-chain security in FY25?",
                    "How did you arrive at that figure? Was it based on incident cost or head-count productivity?",
                    "Which line-item (Dev Ops, AppSec, Cloud Ops) and which executive ultimately signs off on tooling that touches security and productivity?",
                    "Who is held accountable for the DevEx OKR we discussed earlier?",
                    "Which executive's objectives are most impacted by environment drift or slow CVE remediation?",
                    "Who has final authority to approve a multi-year Docker Business subscription?",
                    "Who could veto the deal if they felt open-source Podman was \"good enough\"?",
                    "In the last 3 purchases over $100k, how many times did the CFO push back for a stronger ROI model?"
                ]
            },
            decisionCriteria: {
                title: 'Decision Criteria',
                subtitle: 'Shape the Required Capabilities',
                icon: '✅',
                color: 'purple',
                questions: [
                    "Which capabilities must a solution include to deliver both secure supply-chain and developer velocity improvements?",
                    "What does your team need that they don't get from the community edition today (e.g., SSO/SAML, centralized billing, image SBOMs)?",
                    "Is FIPS-validated crypto a non-negotiable requirement for production workloads?",
                    "Beyond security, what other pains should the platform resolve—license compliance, usage analytics, role-based access?",
                    "In an ideal world, how would onboarding new devs day 1 work?",
                    "Rank the importance of these factors: time-to-value, support SLAs, depth of ecosystem, cost per seat.",
                    "What criteria define an ideal enterprise container platform for your organization?",
                    "If price matters most, what premium would justify Docker's integrated DevEx + security bundle over point tools?",
                    "When we work with companies like Stripe and Amgen, they require auditable SBOMs, granular RBAC, and 4-hour support. How do those map to your needs?",
                    "Will you need the chosen vendor to provide an attested base image pipeline (Hardened Images)?"
                ]
            },
            decisionProcess: {
                title: 'Decision Process',
                subtitle: 'Map the Buying Journey & Paper Process',
                icon: '📋',
                color: 'orange',
                questions: [
                    "How long did your last developer-platform purchase take, end-to-end?",
                    "Who else (Security, Platform Eng, Finance) must be on board?",
                    "Can you outline each approval gate—from proof of value (POV) to red-line legal?",
                    "Who influences technical validation vs. commercial terms at each step?",
                    "Which documents (DPA, EULA, InfoSec questionnaire) need sign-off before PO issuance?",
                    "What could accelerate or stall the process—penetration test results, SOC 2 report, internal freeze?",
                    "Besides yourself, who needs to approve spend >$50k annually?",
                    "What timeline are you targeting to hit production readiness before Kubernetes migration phase 2?",
                    "If we deliver a successful 30-day POV, what happens next?",
                    "Will procurement require a competitive RFP or can you sole-source based on POV results?"
                ]
            },
            implicatePain: {
                title: 'Implicate the Pain',
                subtitle: 'Make Status-Quo Intolerable',
                icon: '⚡',
                color: 'red',
                questions: [
                    "How do you know container sprawl is a problem today?",
                    "How often do image-based vulnerabilities delay releases?",
                    "Why do you think environment drift keeps recurring despite existing scripts?",
                    "Where does this problem manifest—build pipelines, production, developer laptops?",
                    "What blocked previous attempts to standardize on a single platform?",
                    "Where does solving this rank among FY25 engineering priorities?",
                    "What are your goals around secure software supply chain this year?",
                    "How do you quantify the impact of late CVE remediation today?",
                    "Who else feels this pain—AppSec, Compliance, Dev Ops Management?",
                    "Which strategic outcomes (e.g., faster FedRAMP path, reduced audit fatigue) are you targeting?",
                    "How does inconsistent tooling impact on-call burnout or new-hire ramp?",
                    "Have you tried \"DIY\" hardening? What did that cost in head-count?",
                    "What is the annual cost of unresolved vulnerabilities (breach risk, patch cycles, reputation)?",
                    "What would automated SBOMs and policy gates enable for you?",
                    "If nothing changes in 12 months, what does that mean for cloud spend or innovation goals?",
                    "On a scale of 1–10, how mission-critical is solving this before your next SOC 2 Type 2 audit?",
                    "Why solve this before the next major product launch?",
                    "What event or deadline forces resolution (board mandate, regulatory audit)?",
                    "What's different this time—new executive mandate, breach near-miss, budget availability?",
                    "You've used open-source images for years; why not stay that course?",
                    "What might block you from adopting Docker Business this quarter?"
                ]
            },
            champion: {
                title: 'Champion',
                subtitle: 'Identify & Coach Your Internal Sponsor',
                icon: '👥',
                color: 'teal',
                questions: [
                    "Are they personally impacted by dev environment issues?",
                    "Do they own a key transformation project (K8s, SBOM compliance)?",
                    "If new to the org, do they have a mandate for change?",
                    "Have they led large Dev Ops tooling purchases before?",
                    "Do executives consult them on container strategy?",
                    "Do peers validate their influence?",
                    "Do they secure you access to the Economic Buyer and Security lead?",
                    "Do they help prep for technical deep-dives?",
                    "Are they sharing intel on competing options (Podman, Chainguard)?",
                    "Do they respond swiftly to emails/slack—are you texting?",
                    "Will they present POV outcomes to leadership on your behalf?",
                    "Are they openly challenging detractors?",
                    "Will they help build a business case and ROI model?",
                    "Can they articulate why Docker's differentiators matter?"
                ]
            },
            competition: {
                title: 'Competition',
                subtitle: 'Position Against Alternatives',
                icon: '🛡️',
                color: 'indigo',
                questions: [
                    "Which alternative container solutions (Podman, Buildah, Chainguard, home-grown toolchains) are in use today?",
                    "What do stakeholders like/dislike about those options?",
                    "How important is having all-in-one DevEx & security versus stitching point tools?",
                    "Has another vendor set the decision criteria or price anchor?",
                    "If Docker outperforms in POV, what would prompt you to choose a competitor anyway?",
                    "How will you evaluate vendor roadmaps and community ecosystem health?",
                    "What concerns exist about vendor lock-in, and how can we address them?"
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderContent();
        this.bindEvents();
        this.updateCounters();
    }

    renderNavigation() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.innerHTML = '';
        
        Object.entries(this.sections).forEach(([key, section]) => {
            const button = document.createElement('button');
            button.className = `w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 border ${
                this.activeSection === key 
                    ? 'section-active border-blue-300' 
                    : 'border-transparent hover:bg-gray-50 border hover:border-gray-200'
            }`;
            button.onclick = () => this.setActiveSection(key);
            
            button.innerHTML = `
                <span class="text-lg">${section.icon}</span>
                <div class="flex-1">
                    <div class="font-medium text-sm">${section.title}</div>
                    <div class="text-xs opacity-75">${section.questions.length} questions</div>
                </div>
            `;
            
            navMenu.appendChild(button);
        });
    }

    renderContent() {
        const contentArea = document.getElementById('content-area');
        
        if (this.activeSection === 'callPrep') {
            this.renderCallPrep();
            return;
        }
        
        const section = this.sections[this.activeSection];
        
        contentArea.innerHTML = `
            <div class="flex items-center space-x-4 mb-6">
                <div class="p-3 rounded-lg bg-${section.color}-100 text-${section.color}-700">
                    <span class="text-2xl">${section.icon}</span>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">${section.title}</h2>
                    <p class="text-gray-600">${section.subtitle}</p>
                </div>
            </div>
            
            <div class="space-y-6" id="questions-container">
                ${section.questions.map((question, index) => this.renderQuestion(question, index)).join('')}
            </div>
        `;
        
        this.bindQuestionEvents();
    }

    renderQuestion(question, index) {
        const questionKey = `${this.activeSection}-${index}`;
        const isStarred = this.starredQuestions.has(questionKey);
        const isInCallPrep = this.callPrep.has(questionKey);
        const note = this.notes[questionKey] || '';
        
        return `
            <div class="question-card border border-gray-200 rounded-lg p-5">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-start space-x-4 flex-1">
                        <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded min-w-fit">Q${index + 1}</span>
                        <p class="text-gray-800 leading-relaxed">${question}</p>
                    </div>
                    <div class="flex items-center space-x-2 ml-4">
                        <button class="star-btn p-2 rounded-lg transition-colors ${isStarred ? 'text-yellow-500 bg-yellow-50 starred' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'}" 
                                data-question="${questionKey}" title="Star this question">
                            ${isStarred ? '⭐' : '☆'}
                        </button>
                        <button class="prep-btn p-2 rounded-lg transition-colors ${isInCallPrep ? 'text-green-600 bg-green-50 in-prep' : 'text-gray-400 hover:text-green-500 hover:bg-green-50'}" 
                                data-question="${questionKey}" title="Add to call prep">
                            ${isInCallPrep ? '✓' : '○'}
                        </button>
                    </div>
                </div>
                
                <div class="ml-12">
                    <textarea class="note-textarea w-full p-3 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              rows="3" 
                              placeholder="Customize this question or add notes..."
                              data-question="${questionKey}">${note}</textarea>
                </div>
            </div>
        `;
    }

    renderCallPrep() {
        const contentArea = document.getElementById('content-area');
        const prepQuestions = this.getCallPrepQuestions();
        
        contentArea.innerHTML = `
            <div class="flex justify-between items-center mb-6">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">Call Preparation</h2>
                    <p class="text-gray-600">Questions selected for your next discovery call</p>
                </div>
            </div>
            
            ${prepQuestions.length === 0 ? `
                <div class="text-center py-12 text-gray-500">
                    <div class="text-4xl mb-4">📋</div>
                    <p class="text-lg mb-2">No questions selected for call prep yet.</p>
                    <p class="text-sm">Use the circle buttons in each section to add questions.</p>
                </div>
            ` : `
                <div class="space-y-4">
                    ${prepQuestions.map((item, index) => `
                        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">${item.section}</span>
                                <button class="remove-prep-btn text-red-500 hover:text-red-700 text-sm" data-question="${item.key}">Remove</button>
                            </div>
                            <p class="text-gray-800 mb-3 leading-relaxed">${item.question}</p>
                            <textarea class="note-textarea w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                                      rows="3"
                                      placeholder="Add notes or customize this question..."
                                      data-question="${item.key}">${this.notes[item.key] || ''}</textarea>
                        </div>
                    `).join('')}
                </div>
            `}
        `;
        
        this.bindCallPrepEvents();
    }

    bindEvents() {
        // Export button
        document.getElementById('export-btn').onclick = () => this.exportNotes();
        
        // View call prep button
        document.getElementById('view-prep-btn').onclick = () => this.setActiveSection('callPrep');
    }

    bindQuestionEvents() {
        // Star buttons
        document.querySelectorAll('.star-btn').forEach(btn => {
            btn.onclick = () => {
                const questionKey = btn.dataset.question;
                this.toggleStar(questionKey);
            };
        });
        
        // Prep buttons
        document.querySelectorAll('.prep-btn').forEach(btn => {
            btn.onclick = () => {
                const questionKey = btn.dataset.question;
                this.toggleCallPrep(questionKey);
            };
        });
        
        // Note textareas
        document.querySelectorAll('.note-textarea').forEach(textarea => {
            textarea.oninput = () => {
                const questionKey = textarea.dataset.question;
                this.notes[questionKey] = textarea.value;
            };
        });
    }

    bindCallPrepEvents() {
        // Remove from prep buttons
        document.querySelectorAll('.remove-prep-btn').forEach(btn => {
            btn.onclick = () => {
                const questionKey = btn.dataset.question;
                this.callPrep.delete(questionKey);
                this.updateCounters();
                this.renderContent();
            };
        });
        
        // Note textareas
        document.querySelectorAll('.note-textarea').forEach(textarea => {
            textarea.oninput = () => {
                const questionKey = textarea.dataset.question;
                this.notes[questionKey] = textarea.value;
            };
        });
    }

    setActiveSection(section) {
        this.activeSection = section;
        this.renderNavigation();
        this.renderContent();
    }

    toggleStar(questionKey) {
        if (this.starredQuestions.has(questionKey)) {
            this.starredQuestions.delete(questionKey);
        } else {
            this.starredQuestions.add(questionKey);
        }
        this.renderContent();
    }

    toggleCallPrep(questionKey) {
        if (this.callPrep.has(questionKey)) {
            this.callPrep.delete(questionKey);
        } else {
            this.callPrep.add(questionKey);
        }
        this.updateCounters();
        this.renderContent();
    }

    updateCounters() {
        const count = this.callPrep.size;
        document.getElementById('prep-counter').textContent = `${count} questions in call prep`;
        document.getElementById('prep-status').textContent = `${count} questions selected`;
    }

    getCallPrepQuestions() {
        const prepQuestions = [];
        Object.entries(this.sections).forEach(([sectionKey, section]) => {
            section.questions.forEach((question, index) => {
                const key = `${sectionKey}-${index}`;
                if (this.callPrep.has(key)) {
                    prepQuestions.push({
                        section: section.title,
                        question,
                        key
                    });
                }
            });
        });
        return prepQuestions;
    }

    exportNotes() {
        const csvData = [];
        csvData.push(['MEDDICC Section', 'Question #', 'Question', 'Notes', 'Starred', 'In Call Prep']);
        
        Object.entries(this.sections).forEach(([sectionKey, section]) => {
            section.questions.forEach((question, index) => {
                const key = `${sectionKey}-${index}`;
                const note = this.notes[key] || '';
                const isStarred = this.starredQuestions.has(key) ? 'Yes' : 'No';
                const isInCallPrep = this.callPrep.has(key) ? 'Yes' : 'No';
                
                if (note || this.starredQuestions.has(key) || this.callPrep.has(key)) {
                    csvData.push([
                        section.title,
                        `Q${index + 1}`,
                        `"${question.replace(/"/g, '""')}"`,
                        `"${note.replace(/"/g, '""')}"`,
                        isStarred,
                        isInCallPrep
                    ]);
                }
            });
        });
        
        const csvContent = csvData.map(row => row.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `docker-meddicc-discovery-notes-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new MeddiccTool();
});
