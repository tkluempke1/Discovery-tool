import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Circle, FileText, Target, Users, DollarSign, Lightbulb, Shield } from 'lucide-react';

const MeddiccTool = () => {
  const [activeSection, setActiveSection] = useState('metrics');
  const [starredQuestions, setStarredQuestions] = useState(new Set());
  const [notes, setNotes] = useState({});
  const [callPrep, setCallPrep] = useState(new Set());

  const sections = {
    metrics: {
      title: 'Metrics',
      subtitle: 'Quantify the Business Impact',
      icon: <Target className="w-5 h-5" />,
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
      icon: <DollarSign className="w-5 h-5" />,
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
      icon: <CheckCircle className="w-5 h-5" />,
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
      icon: <FileText className="w-5 h-5" />,
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
      icon: <Lightbulb className="w-5 h-5" />,
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
      icon: <Users className="w-5 h-5" />,
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
      icon: <Shield className="w-5 h-5" />,
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

  const toggleStar = (sectionKey, questionIndex) => {
    const key = `${sectionKey}-${questionIndex}`;
    const newStarred = new Set(starredQuestions);
    if (newStarred.has(key)) {
      newStarred.delete(key);
    } else {
      newStarred.add(key);
    }
    setStarredQuestions(newStarred);
  };

  const toggleCallPrep = (sectionKey, questionIndex) => {
    const key = `${sectionKey}-${questionIndex}`;
    const newCallPrep = new Set(callPrep);
    if (newCallPrep.has(key)) {
      newCallPrep.delete(key);
    } else {
      newCallPrep.add(key);
    }
    setCallPrep(newCallPrep);
  };

  const updateNote = (sectionKey, questionIndex, note) => {
    const key = `${sectionKey}-${questionIndex}`;
    setNotes(prev => ({
      ...prev,
      [key]: note
    }));
  };

  const getColorClasses = (color, active = false) => {
    const colors = {
      blue: active ? 'bg-blue-100 text-blue-700 border-blue-300' : 'hover:bg-blue-50',
      green: active ? 'bg-green-100 text-green-700 border-green-300' : 'hover:bg-green-50',
      purple: active ? 'bg-purple-100 text-purple-700 border-purple-300' : 'hover:bg-purple-50',
      orange: active ? 'bg-orange-100 text-orange-700 border-orange-300' : 'hover:bg-orange-50',
      red: active ? 'bg-red-100 text-red-700 border-red-300' : 'hover:bg-red-50',
      teal: active ? 'bg-teal-100 text-teal-700 border-teal-300' : 'hover:bg-teal-50',
      indigo: active ? 'bg-indigo-100 text-indigo-700 border-indigo-300' : 'hover:bg-indigo-50'
    };
    return colors[color] || colors.blue;
  };

  const getCallPrepQuestions = () => {
    const prepQuestions = [];
    Object.entries(sections).forEach(([sectionKey, section]) => {
      section.questions.forEach((question, index) => {
        const key = `${sectionKey}-${index}`;
        if (callPrep.has(key)) {
          prepQuestions.push({
            section: section.title,
            question,
            key
          });
        }
      });
    });
    return prepQuestions;
  };

  const exportNotesToCSV = () => {
    const csvData = [];
    
    // Add header row
    csvData.push(['MEDDICC Section', 'Question #', 'Question', 'Notes', 'Starred', 'In Call Prep']);
    
    // Iterate through all sections and questions
    Object.entries(sections).forEach(([sectionKey, section]) => {
      section.questions.forEach((question, index) => {
        const key = `${sectionKey}-${index}`;
        const note = notes[key] || '';
        const isStarred = starredQuestions.has(key) ? 'Yes' : 'No';
        const isInCallPrep = callPrep.has(key) ? 'Yes' : 'No';
        
        // Only include rows that have notes or are starred/in call prep
        if (note || starredQuestions.has(key) || callPrep.has(key)) {
          csvData.push([
            section.title,
            `Q${index + 1}`,
            `"${question.replace(/"/g, '""')}"`, // Escape quotes in question text
            `"${note.replace(/"/g, '""')}"`, // Escape quotes in notes
            isStarred,
            isInCallPrep
          ]);
        }
      });
    });
    
    // Convert to CSV string
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `docker-meddicc-discovery-notes-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg mb-6 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Docker Business MEDDICC Discovery Tool</h1>
        <p className="text-gray-600 mb-4">Interactive playbook for qualifying, forecasting, and advancing Docker Business opportunities</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="text-sm text-blue-700">
            <strong>Pro Tip:</strong> Star important questions, add them to your call prep, and customize with specific customer data for maximum impact.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-lg p-4 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">MEDDICC Elements</h3>
            <nav className="space-y-2">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center space-x-2 border ${
                    activeSection === key 
                      ? getColorClasses(section.color, true)
                      : `border-transparent ${getColorClasses(section.color)}`
                  }`}
                >
                  {section.icon}
                  <div>
                    <div className="font-medium text-sm">{section.title}</div>
                    <div className="text-xs opacity-75">{section.questions.length} questions</div>
                  </div>
                </button>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-2">Call Prep</h4>
              <div className="text-sm text-gray-600 mb-2">
                {callPrep.size} questions selected
              </div>
              {callPrep.size > 0 && (
                <button
                  onClick={() => setActiveSection('callPrep')}
                  className="mb-2 w-full px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
                >
                  View Call Prep
                </button>
              )}
              <button
                onClick={exportNotesToCSV}
                className="w-full px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                Export Notes to CSV
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          {activeSection === 'callPrep' ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Call Preparation</h2>
                  <p className="text-gray-600">Questions selected for your next discovery call</p>
                </div>
                <button
                  onClick={exportNotesToCSV}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Export All Notes
                </button>
              </div>
              
              {getCallPrepQuestions().length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Circle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No questions selected for call prep yet.</p>
                  <p className="text-sm">Use the checkboxes in each section to add questions.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {getCallPrepQuestions().map((item, index) => (
                    <div key={item.key} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-indigo-600">{item.section}</span>
                        <button
                          onClick={() => {
                            const [sectionKey, questionIndex] = item.key.split('-');
                            toggleCallPrep(sectionKey, parseInt(questionIndex));
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-gray-800 mb-2">{item.question}</p>
                      <textarea
                        placeholder="Add notes or customize this question..."
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        rows="2"
                        value={notes[item.key] || ''}
                        onChange={(e) => {
                          const [sectionKey, questionIndex] = item.key.split('-');
                          updateNote(sectionKey, parseInt(questionIndex), e.target.value);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                {sections[activeSection].icon}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{sections[activeSection].title}</h2>
                  <p className="text-gray-600">{sections[activeSection].subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {sections[activeSection].questions.map((question, index) => {
                  const questionKey = `${activeSection}-${index}`;
                  const isStarred = starredQuestions.has(questionKey);
                  const isInCallPrep = callPrep.has(questionKey);
                  
                  return (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3 flex-1">
                          <span className="text-sm font-medium text-gray-500 min-w-fit">Q{index + 1}</span>
                          <p className="text-gray-800 leading-relaxed">{question}</p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => toggleStar(activeSection, index)}
                            className={`p-1 rounded ${isStarred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                            title="Star this question"
                          >
                            {isStarred ? <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" /> : <Star className="w-5 h-5" />}
                          </button>
                          <button
                            onClick={() => toggleCallPrep(activeSection, index)}
                            className={`p-1 rounded ${isInCallPrep ? 'text-green-600' : 'text-gray-400 hover:text-green-500'}`}
                            title="Add to call prep"
                          >
                            {isInCallPrep ? <CheckCircle className="w-5 h-5 fill-current" /> : <Circle className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      
                      <div className="ml-8">
                        <textarea
                          placeholder="Customize this question or add notes..."
                          className="w-full p-3 border border-gray-200 rounded-md text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows="2"
                          value={notes[questionKey] || ''}
                          onChange={(e) => updateNote(activeSection, index, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Best Practices Footer */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices & Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Before Every Call</h4>
            <ul className="space-y-1">
              <li>• Pick 2–3 questions per MEDDICC element</li>
              <li>• Avoid interrogations—make it conversational</li>
              <li>• Customize questions with specific customer data</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">After Each Call</h4>
            <ul className="space-y-1">
              <li>• Map answers into Salesforce MEDDICC fields</li>
              <li>• Score health and update close plan</li>
              <li>• Use Docker Scout to show quantified value</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-700 mb-2">
            <strong>Remember:</strong> Pair this discovery guide with the Docker Business ROI Calculator to translate pains & metrics into dollars for the Economic Buyer.
          </p>
          <p className="text-sm text-blue-700">
            <strong>Export Feature:</strong> Use the "Export Notes to CSV" button to download all your customized questions, notes, starred items, and call prep selections for easy sharing or CRM import.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeddiccTool;