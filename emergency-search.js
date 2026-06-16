// ============================================================
//  E-Legal Advisor — Emergency Smart Search
//  15 Real-Life Pakistan Scenarios with Human-Tone Guidance
//  Drop this file in /public and add <script src="emergency-search.js"></script>
// ============================================================

const EMERGENCY_SCENARIOS = [

  // 1. DOMESTIC VIOLENCE
  {
    keywords: ["domestic violence","husband beating","wife beating","ghar mein maar","shohar maar","family violence","spouse abuse","ghar pe maarpeet"],
    title: "🚨 Domestic Violence — You Are Not Alone",
    emergency: true,
    urgency: "HIGH",
    immediateAction: "Call 1099 (Women Helpline) or 15 (Police) RIGHT NOW if you are in danger.",
    humanGuide: `Sister, first — you are safe to ask for help. What is happening to you is a crime under Pakistani law, not a family matter.

Here is what you should do step by step:

① Get to a safe place first. Go to a neighbour, relative, or any public place away from the abuser.

② Call 1099 — this is the Women Helpline. They are available 24/7 and will guide you in Urdu. They can arrange shelter if you need it.

③ Go to the nearest police station and file an FIR under the Domestic Violence Act 2021. The police MUST register it — it is the law.

④ Take photos of any injuries on your phone before they heal. This is your evidence.

⑤ If you have children, take them with you when you leave.`,
    laws: "Domestic Violence (Prevention & Protection) Act 2021 | PPC Section 337 (Hurt) | Punjab Protection of Women Against Violence Act 2016",
    documents: ["Your CNIC", "Photos of injuries", "Medical report if available", "Witness names (neighbours, family)"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }, { name: "Edhi Foundation", number: "115" }],
    shelter: "Dar-ul-Aman shelters are available in every district. Police or 1099 can take you there for free."
  },

  // 2. RAPE / SEXUAL ASSAULT
  {
    keywords: ["rape","sexual assault","ziadti","zyadti","sexual abuse","molested","touched inappropriately","sexual violence","assault kiya"],
    title: "🚨 Sexual Violence — Help Is Available",
    emergency: true,
    urgency: "CRITICAL",
    immediateAction: "Call 1099 or 15 immediately. Do NOT bathe or change clothes — this preserves evidence.",
    humanGuide: `What happened to you is not your fault. Please hear this clearly — YOU are the victim and you have every right to justice.

Do these things right now:

① Do NOT wash yourself, change clothes, or clean anything. This preserves DNA evidence which is critical for your case.

② Go directly to the nearest government hospital (not private). Ask for a medico-legal examination. This is free and confidential.

③ Call 1099 — Women Helpline. Tell them what happened. They will send someone to help you and can connect you with a female police officer.

④ You have the right to register an FIR. A female police officer must be present. Under Anti-Rape Act 2021 the police CANNOT refuse.

⑤ The medico-legal report from the hospital is your strongest evidence. Collect it and keep it safe.`,
    laws: "Anti-Rape (Investigation & Trial) Act 2021 | PPC Section 375-376 | Protection Against Harassment Act 2010",
    documents: ["Medico-legal examination report", "Your CNIC", "Original clothing in a bag (do not wash)", "Any screenshots/messages if online harassment"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police Emergency", number: "15" }, { name: "Rescue", number: "1122" }],
    shelter: "After reporting, if you need a safe place, 1099 can arrange government shelter homes."
  },

  // 3. ACID ATTACK
  {
    keywords: ["acid attack","tezab","acid phenkna","acid violence","acid dalna","burned with acid"],
    title: "🚨 Acid Attack — Emergency Medical Help First",
    emergency: true,
    urgency: "CRITICAL",
    immediateAction: "Call 1122 (Rescue/Ambulance) IMMEDIATELY. Flush the affected area with large amounts of clean water for 20 minutes.",
    humanGuide: `This is a life-threatening emergency. Medical treatment comes FIRST.

RIGHT NOW:

① Call 1122 for ambulance immediately.

② Flush the burned area with large amounts of clean water continuously for at least 20 minutes. Do NOT use milk, toothpaste or anything else — only water.

③ Remove any clothing or jewellery from the burned area carefully.

④ Do NOT touch your eyes with contaminated hands.

⑤ Go to Mayo Hospital Lahore / JPMC Karachi / PIMS Islamabad — they have specialist burn units.

For legal action after treatment:

⑥ Under the Acid Control Act 2011, this is a non-bailable offence. The attacker faces life imprisonment.

⑦ File FIR at nearest police station. Give description or name of attacker if known.

⑧ Acid Survivors Foundation Pakistan: 0800-22444 (free call) — they provide free legal, medical and psychological support.`,
    laws: "Prevention of Acid Crime Act 2011 | PPC Section 336-A & 336-B | Life imprisonment or death penalty applies",
    documents: ["Medical reports from hospital", "CNIC", "Witness statements", "CCTV footage if available"],
    helplines: [{ name: "Rescue / Ambulance", number: "1122" }, { name: "Police", number: "15" }, { name: "Acid Survivors Foundation", number: "0800-22444" }],
    shelter: "Acid Survivors Foundation provides free long-term rehabilitation, surgery, and legal aid."
  },

  // 4. CHILD ABUSE
  {
    keywords: ["child abuse","bacha","child sexual abuse","bachay ke saath","child harassment","minor abuse","child molested","zainab alert"],
    title: "🚨 Child Abuse — Report Immediately",
    emergency: true,
    urgency: "CRITICAL",
    immediateAction: "Call 1098 (Child Helpline) or 15 immediately. Remove the child from danger first.",
    humanGuide: `A child's safety is the absolute priority. Here is what to do:

① Remove the child from the situation immediately and take them somewhere safe.

② Call 1098 — this is the Child Protection Helpline, available 24/7.

③ Do NOT question the child repeatedly about what happened — this can be traumatic. Reassure them they are safe and it was not their fault.

④ Take the child to a government hospital for a medical examination. This is confidential.

⑤ File FIR at the police station. Under ZAINAB ALERT ACT 2020, police must register the case within 2 hours and begin investigation immediately.

⑥ Contact Sahil NGO (03008266653) — they specialise in child abuse cases and provide free legal support.`,
    laws: "Zainab Alert, Recovery and Response Act 2020 | PPC Section 376 (Child Rape) | Child Protection & Welfare Act | PECA 2016 (online abuse)",
    documents: ["Child's B-Form or birth certificate", "Medical examination report", "Witness statements", "Screenshots if online abuse"],
    helplines: [{ name: "Child Helpline", number: "1098" }, { name: "Police", number: "15" }, { name: "Sahil NGO", number: "03008266653" }],
    shelter: "Child Protection Bureaus exist in all major cities and can provide immediate shelter."
  },

  // 5. KIDNAPPING
  {
    keywords: ["kidnapping","kidnapped","abducted","agwa","agwa kar liya","missing person","child missing","person missing"],
    title: "🚨 Kidnapping / Missing Person — Act Immediately",
    emergency: true,
    urgency: "CRITICAL",
    immediateAction: "Call 15 (Police) immediately. Every minute matters in kidnapping cases.",
    humanGuide: `Act immediately — do not wait:

① Call 15 (Police Emergency) RIGHT NOW and report the kidnapping.

② For a missing child — under the Zainab Alert Act 2020, police must respond within 2 hours. Demand this.

③ Provide police with: full name, last seen location, time, clothing description, recent photo.

④ Call the person's phone repeatedly — sometimes it helps locate them.

⑤ Share information on social media immediately with the person's photo and last known location.

⑥ Go to the police station in person if the phone call is not taken seriously. Demand FIR registration — they cannot refuse.

⑦ Contact Rescue 1122 as well — they coordinate with police in emergencies.`,
    laws: "PPC Section 359-374 (Kidnapping & Abduction) | Zainab Alert Act 2020 | Up to 14 years imprisonment",
    documents: ["Recent photo of missing person", "Their CNIC/B-Form", "Last known location details", "List of their contacts"],
    helplines: [{ name: "Police Emergency", number: "15" }, { name: "Rescue", number: "1122" }, { name: "Child Helpline", number: "1098" }],
    shelter: null
  },

  // 6. CYBER HARASSMENT / BLACKMAIL
  {
    keywords: ["blackmail","nude photos","private videos","leaked photos","online blackmail","cyber blackmail","photos share kar raha","video leak","sextortion","social media blackmail"],
    title: "⚠️ Online Blackmail / Cyber Harassment",
    emergency: false,
    urgency: "HIGH",
    immediateAction: "Do NOT pay any money. Block the person immediately on all platforms.",
    humanGuide: `This is happening to many people and there is a clear legal process to stop it:

① Do NOT pay money — paying never stops blackmailers, it encourages more demands.

② Take screenshots of all messages, threats and the person's profile as evidence RIGHT NOW before blocking.

③ Block the person on all platforms after taking screenshots.

④ Report to FIA Cybercrime Wing:
   - Online: complaint.fia.gov.pk
   - Phone: 9911
   - Visit nearest FIA office

⑤ File complaint under PECA 2016 — sharing or threatening to share private images without consent is a crime carrying 5 years imprisonment.

⑥ If images are already shared, FIA can get them removed from platforms within 24 hours through their legal authority.

⑦ Do NOT feel ashamed — YOU are the victim. The criminal is the one blackmailing you.`,
    laws: "PECA 2016 Section 21 (Cyberstalking) | Section 20 (Privacy Violation) | Up to 5 years imprisonment and Rs. 10 million fine",
    documents: ["Screenshots of all threatening messages", "Profile links/usernames of blackmailer", "Your CNIC", "Any payment receipts if already paid"],
    helplines: [{ name: "FIA Cybercrime", number: "9911" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }],
    shelter: null
  },

  // 7. HARASSMENT AT WORKPLACE
  {
    keywords: ["workplace harassment","office harassment","boss harassment","job harassment","sexual harassment at work","teacher harassment","professor harassment","harassment at university"],
    title: "⚠️ Workplace / Academic Harassment",
    emergency: false,
    urgency: "MEDIUM",
    immediateAction: "Document everything in writing. Do not delete any messages.",
    humanGuide: `You have strong legal protection in Pakistan. Here is the step by step process:

① First, document EVERYTHING — save all messages, emails, witness names, dates and descriptions of incidents.

② Every organisation with more than 10 employees MUST have an Inquiry Committee under the Protection Against Harassment Act 2010. File a written complaint with HR or the head of organisation.

③ If the organisation does not act within 30 days, file complaint with the Federal Ombudsman:
   - Website: mohtasib.gov.pk
   - Phone: 051-9205514

④ For university harassment — the HEC has a separate harassment policy. Contact HEC at hec.gov.pk

⑤ You can also file FIR at police station under Section 509 PPC (words or gestures intended to insult).

⑥ Keep attending work normally — do not let the harasser force you to resign.`,
    laws: "Protection Against Harassment of Women at Workplace Act 2010 | PPC Section 509 | University Harassment Policies under HEC",
    documents: ["Written complaint copy", "Screenshots of messages", "Email records", "Witness names and contact info", "HR complaint acknowledgment"],
    helplines: [{ name: "Federal Ombudsman", number: "051-9205514" }, { name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }],
    shelter: null
  },

  // 8. LAND / PROPERTY DISPUTE
  {
    keywords: ["property dispute","zameen","land dispute","zameen ka jhagra","plot dispute","makaan","house dispute","qabza","illegal possession","forceful possession"],
    title: "⚖️ Property / Land Dispute",
    emergency: false,
    urgency: "MEDIUM",
    immediateAction: "Do NOT sign any documents under pressure. Secure all original property papers immediately.",
    humanGuide: `Property disputes are very common in Pakistan. Here is how to protect yourself:

① Secure ALL original documents immediately — Fard, Registry, Mutation (Intiqal), NOC, any sale agreements.

② If someone has illegally occupied your property — file FIR under Section 447 PPC (criminal trespass) at the nearest police station.

③ Visit the local Patwari (revenue officer) and get a certified copy of your property records from the land record office.

④ File a civil suit in District Court for possession/declaration of your rights. You need a lawyer for this.

⑤ Contact District Bar Association for free or low-cost legal aid if you cannot afford a lawyer.

⑥ If the dispute is about inheritance — contact the local Union Council or file in Family Court.`,
    laws: "PPC Section 447 (Criminal Trespass) | Land Revenue Act 1967 | Transfer of Property Act | Registration Act 1908",
    documents: ["Original Registry/Sale Deed", "Fard (land record)", "CNIC", "Mutation (Intiqal) papers", "Any court orders", "Utility bills showing possession"],
    helplines: [{ name: "Police", number: "15" }, { name: "Punjab Land Records", number: "0800-02345" }, { name: "District Bar Association", number: "Visit locally" }],
    shelter: null
  },

  // 9. FRAUD / FINANCIAL SCAM
  {
    keywords: ["fraud","scam","cheating","paise le liye","money fraud","online fraud","investment fraud","fake job","job fraud","dhokebaazi","420"],
    title: "⚠️ Fraud / Financial Scam",
    emergency: false,
    urgency: "HIGH",
    immediateAction: "Stop all payments immediately. Do NOT transfer any more money.",
    humanGuide: `Stop and do not send any more money. Here is what to do:

① Immediately stop all contact and payments with the fraudster.

② Screenshot and save all conversations, transaction receipts, bank transfers, and any contracts.

③ File FIR at the nearest police station under Section 420 PPC (Cheating and dishonestly inducing delivery of property).

④ If it was online fraud — also report to FIA Cybercrime at complaint.fia.gov.pk or call 9911.

⑤ Contact your bank immediately if you made a transfer — banks can sometimes reverse transactions within 24-48 hours.

⑥ If it was a job scam — also report to NADRA and the company whose name was used.

⑦ Keep all evidence — bank statements, screenshots, call recordings if available.`,
    laws: "PPC Section 420 (Cheating) | PECA 2016 (Online Fraud) | Electronic Transactions Ordinance 2002 | Up to 7 years imprisonment",
    documents: ["Transaction receipts / bank statements", "Screenshots of all communications", "Any contracts or agreements signed", "CNIC", "Contact details of fraudster if known"],
    helplines: [{ name: "Police", number: "15" }, { name: "FIA Cybercrime", number: "9911" }, { name: "Your Bank Helpline", number: "Check card back" }],
    shelter: null
  },

  // 10. DRUG ARREST / POSSESSION
  {
    keywords: ["drug arrest","drugs","narcotics","caught with drugs","nasha","charas","heroin","drug case","CNSA"],
    title: "⚖️ Drug Arrest / Narcotics Case",
    emergency: false,
    urgency: "HIGH",
    immediateAction: "Do NOT make any statement to police without a lawyer present. You have this right.",
    humanGuide: `This is a serious legal situation. Stay calm and follow these steps:

① You have the RIGHT TO REMAIN SILENT. Do not confess or make any statement without a lawyer.

② Immediately contact a family member or trusted person and tell them you have been arrested and where you are.

③ You have the right to a lawyer. If you cannot afford one, the court must provide one under Article 10-A of the Constitution.

④ Police must produce you before a magistrate within 24 hours — this is your constitutional right.

⑤ Small quantity possession may result in 2 years imprisonment. Large quantities or trafficking carry much heavier sentences under CNSA 1997.

⑥ Do NOT bribe police — this makes your situation worse legally.`,
    laws: "Control of Narcotic Substances Act 1997 (CNSA) | PPC Section 328 | Constitution Article 10 (Rights of arrested person)",
    documents: ["CNIC", "Contact lawyer immediately", "Note the name and badge number of arresting officer"],
    helplines: [{ name: "Police", number: "15" }, { name: "Legal Aid Pakistan", number: "051-111-119-119" }],
    shelter: null
  },

  // 11. FORCED MARRIAGE
  {
    keywords: ["forced marriage","jabri shadi","shadi nahi karni","forced nikah","underage marriage","child marriage","watta satta","honor killing threat","izzat ke naam pe"],
    title: "🚨 Forced Marriage / Child Marriage",
    emergency: true,
    urgency: "HIGH",
    immediateAction: "Call 1099 (Women Helpline) immediately if you are being forced.",
    humanGuide: `Forced marriage is illegal in Pakistan. You have the right to choose your spouse.

① If you are in immediate danger — call 1099 or 15 right now.

② Under the Child Marriage Restraint Act 2019, marriage under 18 (girls) and 18 (boys) is illegal. Any such marriage can be declared void.

③ Your consent is REQUIRED for a valid nikah under Muslim Family Laws. A nikah without consent is invalid under Pakistani law.

④ If you have already been forcefully married — you can file for dissolution of marriage in Family Court.

⑤ Call Rozan Counselling Helpline: 051-2890505 — they specialise in forced marriage cases.

⑥ You can seek protection order from District Court preventing the forced marriage.`,
    laws: "Child Marriage Restraint Act 2019 | Muslim Family Laws Ordinance 1961 | PPC Section 498-B (Forced Marriage) | Up to 5 years imprisonment",
    documents: ["Your CNIC / B-Form", "Nikah Nama if already married", "Any written threats received"],
    helplines: [{ name: "Women Helpline", number: "1099" }, { name: "Police", number: "15" }, { name: "Rozan Helpline", number: "051-2890505" }],
    shelter: "Dar-ul-Aman shelters available via 1099 call."
  },

  // 12. POLICE BRUTALITY / WRONGFUL ARREST
  {
    keywords: ["police brutality","wrongful arrest","police beating","illegal detention","false case","fake case","police ne pakad liya","illegal arrest","police torture"],
    title: "⚖️ Police Misconduct / Wrongful Arrest",
    emergency: false,
    urgency: "HIGH",
    immediateAction: "Remember officer name and badge number. Inform a family member of your location immediately.",
    humanGuide: `You have constitutional rights that police cannot violate:

① You CANNOT be detained for more than 24 hours without being produced before a magistrate — this is Article 10 of the Constitution.

② If police have not registered an FIR and are holding you — this is illegal detention. A family member can file a Habeas Corpus petition in High Court.

③ Note the name, badge number, and police station of the officers involved.

④ Any injuries from police torture — get medical examination immediately upon release as evidence.

⑤ File complaint with:
   - Senior Superintendent of Police (SSP) of your district
   - Provincial Police Complaint Authority
   - Human Rights Commission of Pakistan: 051-9204688

⑥ You can file FIR against police officers for assault under PPC Section 330.`,
    laws: "Constitution of Pakistan Article 9, 10, 14 | PPC Section 330 (Torture) | Police Order 2002 | Police Complaint Authority Act",
    documents: ["Officer name and badge number", "Date, time and location of incident", "Medical report of injuries", "Witness names"],
    helplines: [{ name: "Police Complaint", number: "15" }, { name: "Human Rights Commission", number: "051-9204688" }, { name: "Legal Aid", number: "051-111-119-119" }],
    shelter: null
  },

  // 13. INHERITANCE DISPUTE
  {
    keywords: ["inheritance","wirasat","jaidad","haq mera nahi de rahe","will","wasiyat","property after death","father died","mother died property","sisters inheritance","daughters right"],
    title: "⚖️ Inheritance / Wirasat Dispute",
    emergency: false,
    urgency: "MEDIUM",
    immediateAction: "Do not sign any documents transferring your share before consulting a lawyer.",
    humanGuide: `Under Islamic law (which Pakistani law follows), every heir has a fixed share that CANNOT be taken away:

① Daughters have a guaranteed share — 1/2 of son's share — which no one can legally deny them.

② First step — get a legal heir certificate from NADRA or Union Council listing all heirs.

③ Get property records from the local Patwari / Land Record office.

④ If family members are refusing to give your share — file suit for Partition in District Civil Court.

⑤ You can also file a complaint with local police if someone is illegally occupying property that belongs to you.

⑥ Female Legal Aid is available free through Aurat Foundation: 051-2891350.`,
    laws: "Muslim Family Laws Ordinance 1961 | West Pakistan Muslim Personal Law 1962 | Succession Act | Quran Surah An-Nisa (Islamic inheritance shares)",
    documents: ["Death certificate of deceased", "Legal Heir Certificate from NADRA", "Property documents", "Your CNIC", "Family tree / family registration certificate"],
    helplines: [{ name: "NADRA", number: "051-111-786-100" }, { name: "Aurat Foundation", number: "051-2891350" }, { name: "District Court", number: "Visit locally" }],
    shelter: null
  },

  // 14. TENANT / LANDLORD DISPUTE
  {
    keywords: ["landlord","tenant","rent","kiraya","makaan khali karo","eviction","security deposit","deposit wapas","ghar se nikal","illegal eviction"],
    title: "⚖️ Tenant / Landlord Dispute",
    emergency: false,
    urgency: "MEDIUM",
    immediateAction: "Do not vacate the property under pressure without a court order.",
    humanGuide: `Both tenants and landlords have rights under Pakistani law:

FOR TENANTS being illegally evicted:
① A landlord CANNOT forcibly evict you without a court order. If they cut utilities or damage property — this is an offence.
② File complaint with Rent Controller (available in District Courts) immediately.
③ If landlord threatens you physically — call 15 and file FIR.

FOR LANDLORDS not getting rent or property back:
① Send formal written notice to tenant via registered post giving 30 days notice.
② File eviction suit before Rent Controller in District Court.
③ Court will issue eviction order — police will then legally evict tenant.

FOR SECURITY DEPOSIT disputes:
① This is recoverable through Small Claims Court or Rent Controller.
② Keep all payment receipts and rental agreements as evidence.`,
    laws: "Rent Restriction Ordinance 2001 | Punjab Rented Premises Act 2009 | PPC Section 441 (Criminal Trespass) | Transfer of Property Act",
    documents: ["Rental agreement / lease contract", "Payment receipts", "CNIC", "Written notices exchanged", "Property ownership documents (for landlord)"],
    helplines: [{ name: "Police", number: "15" }, { name: "District Rent Controller", number: "Visit District Court" }, { name: "Legal Aid", number: "051-111-119-119" }],
    shelter: null
  },

  // 15. SUICIDE / MENTAL HEALTH CRISIS
  {
    keywords: ["suicide","khudkushi","self harm","depression","khatam karna chahta","jeena nahi chahta","zindagi khatam","mental health","koi nahi hai","akela","help me","I want to die"],
    title: "💙 You Matter — Help Is Here",
    emergency: true,
    urgency: "CRITICAL",
    immediateAction: "Call Umang helpline: 0317-4288665. You are not alone.",
    humanGuide: `Please stop for a moment and read this.

Whatever you are going through right now — the pain, the hopelessness, the feeling that there is no way out — it is real, and it is valid. And you deserve support.

Please call right now:
📞 Umang Mental Health Helpline: 0317-4288665
📞 Rozan Counselling: 051-2890505
📞 Rescue: 1122

You do not have to explain everything. Just call and say "I need help." That is enough.

If you are with someone right now — please tell them how you are feeling. If you are alone — please move to a place where there are other people.

The legal, financial, or family problem you are facing — there IS a way through it. People have been in situations just as difficult and have found a path forward. You deserve that chance too.

Please make that call.`,
    laws: "Mental Health Ordinance 2001 | Suicide attempt was decriminalized in Pakistan — you will NOT be arrested for seeking help.",
    documents: [],
    helplines: [{ name: "Umang Helpline", number: "0317-4288665" }, { name: "Rozan Counselling", number: "051-2890505" }, { name: "Rescue", number: "1122" }],
    shelter: "Government psychiatric hospitals provide free inpatient care if needed."
  }

];

// ── Match query to scenario ──────────────────────────────────
function matchScenario(query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;
  for (const s of EMERGENCY_SCENARIOS) {
    if (s.keywords.some(kw => q.includes(kw.toLowerCase()))) return s;
  }
  // Partial word match fallback
  for (const s of EMERGENCY_SCENARIOS) {
    if (s.keywords.some(kw => kw.toLowerCase().split(' ').some(word => word.length > 3 && q.includes(word)))) return s;
  }
  return null;
}

// ── Render the result card ───────────────────────────────────
function renderScenarioResult(scenario) {
  const urgencyColor = scenario.urgency === 'CRITICAL' ? '#ef4444' : scenario.urgency === 'HIGH' ? '#f97316' : '#f59e0b';
  const helplineHTML = scenario.helplines.map(h =>
    `<a href="tel:${h.number}" style="display:inline-flex;align-items:center;gap:6px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);color:#fca5a5;padding:8px 14px;border-radius:40px;text-decoration:none;font-weight:600;font-size:0.9rem;margin:4px;">
      📞 ${h.name}: ${h.number}
    </a>`
  ).join('');

  const docsHTML = scenario.documents.length > 0 ?
    `<div style="margin-top:16px;padding:14px;background:rgba(99,102,241,0.1);border-radius:12px;border:1px solid rgba(99,102,241,0.3);">
      <div style="font-weight:600;color:#a5b4fc;margin-bottom:8px;">📁 Documents to Collect:</div>
      ${scenario.documents.map(d => `<div style="color:#c7d2fe;font-size:0.88rem;padding:3px 0;">✓ ${d}</div>`).join('')}
    </div>` : '';

  const shelterHTML = scenario.shelter ?
    `<div style="margin-top:12px;padding:12px;background:rgba(16,185,129,0.1);border-radius:12px;border:1px solid rgba(16,185,129,0.3);color:#6ee7b7;font-size:0.88rem;">
      🏠 <strong>Shelter:</strong> ${scenario.shelter}
    </div>` : '';

  return `
    <div id="emergencyResult" style="margin-top:20px;background:rgba(12,18,34,0.9);border:2px solid ${urgencyColor};border-radius:20px;padding:20px;animation:fadeIn 0.3s ease;">
      <style>@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}</style>

      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="background:${urgencyColor};color:white;padding:3px 12px;border-radius:40px;font-size:0.75rem;font-weight:700;">${scenario.urgency} PRIORITY</span>
        <span style="font-size:1.1rem;font-weight:700;color:white;">${scenario.title}</span>
      </div>

      ${scenario.emergency ? `
      <div style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.5);border-radius:12px;padding:12px;margin-bottom:14px;">
        <div style="color:#fca5a5;font-weight:700;font-size:0.85rem;">⚡ IMMEDIATE ACTION REQUIRED:</div>
        <div style="color:#fee2e2;margin-top:4px;font-size:0.9rem;">${scenario.immediateAction}</div>
      </div>` : ''}

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="color:#93c5fd;font-weight:600;margin-bottom:10px;">💬 Step-by-Step Guidance:</div>
        <div style="color:#e2e8f0;font-size:0.9rem;line-height:1.8;white-space:pre-line;">${scenario.humanGuide}</div>
      </div>

      <div style="margin-bottom:14px;">
        <div style="color:#fbbf24;font-weight:600;font-size:0.85rem;margin-bottom:8px;">⚖️ Applicable Laws: <span style="color:#fde68a;font-weight:400;">${scenario.laws}</span></div>
      </div>

      ${docsHTML}
      ${shelterHTML}

      <div style="margin-top:16px;">
        <div style="color:#f87171;font-weight:700;font-size:0.9rem;margin-bottom:8px;">📞 Call for Help — tap to dial:</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${helplineHTML}</div>
      </div>

      <div style="margin-top:14px;padding:10px;background:rgba(59,130,246,0.1);border-radius:10px;color:#93c5fd;font-size:0.8rem;text-align:center;">
        ℹ️ This guidance is based on Pakistani law. For complex cases, consult a licensed lawyer.
      </div>
    </div>
  `;
}

// ── Inject into the home search bar ─────────────────────────
function initEmergencySearch() {
  const searchInput = document.getElementById('homeSearchInput');
  if (!searchInput) return;

  // Add placeholder hint
  searchInput.placeholder = 'Describe your emergency or legal situation... (e.g., husband is beating me, I was blackmailed online)';

  // Create result container below search
  let resultContainer = document.getElementById('emergencySearchResult');
  if (!resultContainer) {
    resultContainer = document.createElement('div');
    resultContainer.id = 'emergencySearchResult';
    searchInput.parentElement.parentElement.appendChild(resultContainer);
  }

  function handleEmergencySearch() {
    const query = searchInput.value.trim();
    if (!query) return;
    const scenario = matchScenario(query);
    if (scenario) {
      resultContainer.innerHTML = renderScenarioResult(scenario);
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      resultContainer.innerHTML = `
        <div style="margin-top:16px;padding:16px;background:rgba(12,18,34,0.8);border:1px solid rgba(96,165,250,0.3);border-radius:16px;color:#93c5fd;">
          <div style="font-weight:600;margin-bottom:8px;">🔍 No exact match found.</div>
          <div style="font-size:0.9rem;color:#cbd5e1;">Try describing your situation differently. Examples:<br>
          • "my husband is beating me"<br>
          • "I was blackmailed with photos"<br>
          • "acid attack happened"<br>
          • "child was abused"<br>
          • "property dispute with brother"<br><br>
          Or use the <strong>AI Consultation</strong> section for a detailed response.</div>
        </div>`;
    }
  }

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleEmergencySearch();
  });

  // Also add a Search button if not present
  const searchBar = searchInput.parentElement;
  if (!document.getElementById('emergencySearchBtn')) {
    const btn = document.createElement('button');
    btn.id = 'emergencySearchBtn';
    btn.innerHTML = '<i class="fas fa-search"></i>';
    btn.style.cssText = 'background:linear-gradient(105deg,#2563eb,#1e40af);border:none;padding:0.7rem 1.2rem;border-radius:40px;color:white;cursor:pointer;margin-left:8px;font-size:1rem;';
    btn.addEventListener('click', handleEmergencySearch);
    searchBar.appendChild(btn);
  }
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEmergencySearch);
} else {
  initEmergencySearch();
}

// Re-init when dashboard re-renders (SPA behaviour)
const _origRender = window.renderDashboardFull;
if (typeof _origRender === 'function') {
  window.renderDashboardFull = function(...args) {
    const r = _origRender.apply(this, args);
    setTimeout(initEmergencySearch, 100);
    return r;
  };
}
// Fallback: poll for the search input after login
setInterval(() => {
  if (document.getElementById('homeSearchInput') && !document.getElementById('emergencySearchBtn')) {
    initEmergencySearch();
  }
}, 1000);
