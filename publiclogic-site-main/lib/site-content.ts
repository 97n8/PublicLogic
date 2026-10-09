// PublicLogic site content — source of truth, kept aligned with the Sept 2026 canon.
// Preserve only the non-obvious public-language guardrails and proof distinctions here.

export const SITE_URL = 'https://publiclogic.org';

// ── Brand lock ───────────────────────────────────────────────────────────────
export const BRAND = {
  wordmark: 'PUBLICLOGIC',
  firmLine: 'We build the structure that turns opportunity into something real.', // front-door promise — footer + one earned placement per page
  productTagline: 'Systems That Stick.', // subordinate product/footer stamp only
  humanThesis: 'People should do the work. They should not have to be the system.',
  onePosition: 'PublicLogic finds overlooked opportunities, builds the structure around them, and helps get them into operation.',
  primaryCta: { label: 'Start a conversation', href: '/contact' },
  emails: {
    municipal: 'nate@publiclogic.org',
    research: 'allie@publiclogic.org',
    general: 'info@publiclogic.org',
  },
} as const;

// ── Primary navigation ───────────────────────────────────────────────────────
export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Applications', href: '/applications' },
  { label: 'Build With Us', href: '/build-with-us' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;

// ── Home ─────────────────────────────────────────────────────────────────────
export const HOME = {
  hero: {
    headline: 'We build the structure that turns opportunity into something real.',
    body: `PublicLogic works where plans have to become operating reality. We help organizations and communities sort out structural problems, shape promising opportunities, and put the governance, funding, technology, partnerships, and day-to-day capacity in place to carry them.

We stay with the work past the memo. We help build the next piece.`,
    cta: 'Start a conversation',
    secondaryCta: { label: 'See how we work', href: '/services' },
  },
  thesis: {
    headline: 'When good ideas stall, the missing piece is usually structure.',
    body: `Most organizations are not short on ideas. They are short on the structure that lets an idea live outside one person's head: clear ownership, capital, governance, technology, operating capacity, partnerships, or a way to tie those pieces together. That is where PublicLogic works. Sometimes the issue starts with a broken process. Sometimes it is an underused asset, an unfunded project, a technology mess, or an idea nobody has had the room to carry forward. We keep coming back to one question: what would need to be true for this to work in real life?`,
  },
  pathways: {
    headline: 'How an idea becomes real.',
    lead: [
      'First, we look for the value, capacity, or project that is being left on the table.',
      'Then we put the surrounding structure in place: ownership, governance, financing, workflows, agreements, and an operating model.',
      'Then we help build it so the work can actually run.',
    ],
    items: [
      {
        name: 'We find the opportunity',
        copy:
          'We look across operations, assets, people, funding, technology, regulation, and ' +
          'partnerships to see where value is being lost or capacity is sitting unused.',
        href: '/services',
        cta: 'Services',
      },
      {
        name: 'We structure it',
        copy:
          'We figure out what has to exist around the idea for it to hold up: ownership, governance, ' +
          'financing, workflows, agreements, accountability, and a workable operating model.',
        href: '/services',
        cta: 'Services',
      },
      {
        name: 'We build and implement it',
        copy:
          'We can run the project, coordinate partners, pursue funding, build the technology, and help ' +
          'move the work into operation.',
        href: '/applications',
        cta: 'Applications',
      },
    ],
  },
  waysToWork: [
    {
      name: 'Engage us.',
      copy:
        'Bring PublicLogic into a defined problem, project, transition, or opportunity. We do ' +
        'strategy and organizational systems, grants and capital strategy, economic and project ' +
        'development, regional and multi-party governance, digital operations, and research, ' +
        'evaluation, and readiness work. The advice comes from people who have done the job.',
      href: '/services',
      cta: 'Explore services',
    },
    {
      name: 'Use what we build.',
      copy:
        'Use PublicLogic applications and infrastructure, including the technology built on ' +
        'PuddleJumper. LogicCommons gives teams practical tools for records, documents, decisions, ' +
        'packets, comparisons, and accountable work. Permit & Bridge is built for permits, licenses, ' +
        'and other regulated processes. The interface fits the task, and the structure underneath ' +
        'stays connected.',
      href: '/applications',
      cta: 'Explore applications',
    },
    {
      name: 'Build with us.',
      copy:
        'For selected opportunities, PublicLogic can work as an implementation or development partner, ' +
        'bringing together strategy, technology, funding, operations, and outside expertise to build ' +
        'something substantial that would be hard to pull off alone.',
      href: '/build-with-us',
      cta: 'Explore development partnerships',
    },
  ],
  governanceInfra: {
    eyebrow: 'WHAT MAKES THE WORK HOLD',
    headline: 'Build the opportunity without losing the authority, evidence, and history.',
    body:
      'Once a project moves, it creates decisions, obligations, approvals, handoffs, risks, and ' +
      'records. When those pieces drift apart, the work gets brittle and hard to trust. PublicLogic\u2019s ' +
      'governance infrastructure keeps the logic, evidence, and history attached while the work is ' +
      'moving and after it is done.',
    items: [
      { name: 'LogicCommons', copy: 'gives people practical tools for accountable work.' },
      { name: 'PuddleJumper', copy: 'connects identity, authority, workflow, evidence, and institutional history underneath those tools.' },
      { name: 'VAULT', copy: 'holds the doctrine behind consequential work.' },
      { name: 'ARCHIEVE', copy: 'closes completed work without cutting the result off from the record that produced it.' },
    ],
    cta: 'Explore the infrastructure',
    href: '/puddlejumper',
  },
  builtFrom: {
    headline: 'Built from work we actually do.',
    body:
      'PublicLogic grew out of municipal administration, organizational psychology, public-sector ' +
      'governance, regulated human services, project development, behavioral systems, technology ' +
      'implementation, research, small-business operations, and properties we operate ourselves. That ' +
      'range matters. We are not coming at complex problems from one professional discipline. We can ' +
      'move between the boardroom, the workflow, the funding model, the regulatory environment, the ' +
      'technology, and the people expected to make all of it run. That experience includes ' +
      'helping build a regional public-safety collaboration launched with five communities and later ' +
      'serving nine, and municipal digital work recognized at the 2025 Massachusetts Digital ' +
      'Government Summit.',
    thesis: "Across all of it, the same lesson kept showing up: important work should not depend on one person's memory.",
    cta: 'See our work',
    href: '/work',
  },
  lodge: {
    name: 'We run our own systems too.',
    copy:
      'Kendall Pond Lodge is an operating business and a live test of the PublicLogic model. Running ' +
      'a real asset forces customer experience, pricing, property operations, vendors, technology, ' +
      'financial performance, maintenance, risk, and growth to line up. That matters to clients ' +
      'because we are not speaking from a distance. We are building the capability to create and ' +
      'operate value ourselves.',
    href: '/lodge',
    cta: 'Visit the Lodge',
  },
  closing: {
    eyebrow: 'BRING US THE THING THAT IS NOT MOVING',
    headline: 'You do not need to diagnose it before you call.',
    body:
      'Bring the stalled project, overlooked asset, structural problem, technology gap, capital need, ' +
      'complicated partnership, or work nobody has room to own. We will help figure out what is ' +
      'slowing it down and whether PublicLogic is the right fit. If it is, we will define the ' +
      'smallest useful place to start.',
    line: BRAND.firmLine,
    thesis: BRAND.humanThesis,
  },
} as const;

// ── Build With Us — selected development partnerships ───────────────────────
// Selective and concrete: not a public invitation to pitch any idea, an
// offer of investment, or a claim PublicLogic supplies every discipline.
export const BUILD_WITH_US = {
  hero: {
    eyebrow: 'SELECT DEVELOPMENT PARTNERSHIPS',
    headline: 'Some opportunities need more than advice.',
    body:
      'For the right opportunity, PublicLogic can help build the project, platform, operating ' +
      'model, or enterprise itself. We do the upfront structuring and the hands-on work: systems ' +
      'design, implementation, technology, governance, capital strategy, and partner coordination. ' +
      'We take on a small number of these relationships. It starts with a specific opportunity and ' +
      'a clear reason the parties can build it better together.',
    cta: 'Bring us a defined opportunity',
    secondaryCta: { label: 'See the selection criteria', href: '#what-belongs-here' },
  },
  whatBelongs: {
    headline: 'A real opportunity that needs structure.',
    body: 'The best fits usually have several of these conditions:',
    items: [
      'A specific asset, need, user, customer, or operating environment',
      'A credible path to public value, earned revenue, savings, or another measurable result',
      'A structural gap PublicLogic is well suited to solve',
      'A partner with real authority, access, expertise, capital, or operating capacity',
      'A reason technology or a repeatable system could improve the economics or reach',
      'A development path that can be scoped, governed, and tested',
    ],
    closing:
      'An idea alone is not enough. We need to understand who needs the result, what has held it ' +
      'up, and what each party can responsibly contribute.',
  },
  mayContribute: {
    headline: 'What PublicLogic can bring.',
    items: [
      'Opportunity shaping and operating-model development',
      'Governance, ownership, and decision structure',
      'Project management and implementation capacity',
      'Technology, applications, or PuddleJumper infrastructure',
      'Grant, capital, and financial-path development',
      'Partner and specialist coordination',
      'Research, evaluation, adoption, and operating systems',
      'A defined operating role after launch',
    ],
    note:
      "PublicLogic's contribution may be compensated through fees, licenses, shared revenue, " +
      'ownership, an operating agreement, or another negotiated structure. We do not assume a ' +
      'default model. It is documented before material work or risk begins.',
  },
  partnerBrings: {
    headline: 'What the partner needs to bring.',
    body:
      'A development partner may bring the asset, domain expertise, customer or community access, ' +
      'statutory authority, capital, professional capacity, distribution, or operating team. This ' +
      'only works when each contribution is real and the decision rights line up with it.',
  },
  howItForms: {
    headline: 'How the relationship takes shape.',
    steps: [
      { name: 'Readiness', copy: 'We look closely at the problem, user, asset, constraints, economics, authority, and implementation conditions.' },
      { name: 'Structure', copy: 'The parties define the project, roles, ownership, governance, capital responsibility, intellectual property, risk, compensation, milestones, and stop conditions.' },
      { name: 'Build', copy: 'The team brings together the needed disciplines, builds the operating and technology systems, and works through approvals, funding, and implementation.' },
      { name: 'Operate and review', copy: 'The project moves into real conditions. The parties measure performance, meet obligations, and decide whether to scale, transfer, continue, or stop.' },
    ],
  },
  boundaries: {
    headline: 'The terms have to be explicit.',
    body:
      'This page is not an offer to invest, lend, sell securities, broker property, or guarantee ' +
      'funding or returns. PublicLogic participates only through a written agreement that identifies ' +
      'the legal parties, authority, contributions, ownership, compensation, liabilities, data rights, ' +
      'and exit conditions. Licensed work remains with licensed professionals.',
    note:
      'PublicLogic may decline an opportunity because the user is unclear, the economics do not ' +
      'support it, authority is missing, the downside falls on the wrong party, or the work is ' +
      'outside our capabilities.',
  },
  closing: {
    headline: 'Show us the opportunity and what has kept it from moving.',
    body:
      'A few concrete details are enough to start: what exists, who needs it, who controls the ' +
      'relevant asset or decision, what has already been tried, and what you believe PublicLogic ' +
      'could add.',
    cta: 'Start a development conversation',
  },
} as const;

// ── Services — municipal + institutional consulting catalog ────────────────
export const SERVICES = {
  hero: {
    eyebrow: 'PUBLICLOGIC SERVICES',
    headline: 'Bring us the thing that is not moving.',
    body:
      'Sometimes it is an organizational problem. Sometimes it is an underused asset, a funding gap, ' +
      'a technology mess, a partnership that never quite got structured, or work nobody has the ' +
      'capacity to own. PublicLogic figures out what is actually stuck and helps get it moving.',
  },
  intro: {
    headline: 'Start with the real constraint.',
    body:
      'The obvious problem is not always the one holding things up. A project that "needs funding" ' +
      'may first need ownership and a workable plan. A software request may really be a workflow ' +
      'problem. We look at the full picture, identify the real constraint, and recommend a sensible ' +
      'place to begin. For many clients, that starts with a fixed-scope Readiness Review. It shows ' +
      'what is blocking progress now, what has to be true before the work can move, and whether the ' +
      'next step should involve PublicLogic at all.',
  },
  detailLabels: {
    whoFor: 'A good fit when',
    whatTheyGet: 'What we can do',
    engagementModel: "How it's structured",
  },
  groups: [
    {
      key: 'core',
      label: 'Where PublicLogic works.',
      gloss: 'Work that sits at the overlap of strategy, operations, governance, technology, capital, partnerships, and implementation.',
    },
    {
      key: 'supporting',
      label: 'Supporting capability.',
      gloss: 'Used when it helps a defined implementation or development effort move forward.',
    },
  ],
  items: [
    {
      slug: 'strategy-organizational-systems',
      name: 'Strategy & Organizational Systems',
      lane: 'institutional',
      group: 'core',
      h1: 'A plan only matters if the organization can actually run it.',
      subhead:
        'PublicLogic turns direction into a working operating model. We connect priorities to ' +
        'ownership, decisions, workflows, meetings, measures, records, and the daily habits that keep ' +
        'the plan from slipping back into talk.',
      whoFor:
        'Leadership agrees on the goal but execution keeps splintering; roles or decision rights are ' +
        'muddy; the organization has outgrown its informal habits; important work still depends on ' +
        'one person\u2019s memory or intervention; a reorganization, succession, or new initiative needs a ' +
        'practical way to run.',
      whatTheyGet:
        'We map responsibilities, decision rights, governance structures, management rhythms, ' +
        'escalation paths, workflows, handoffs, accountability, and the records needed so the next ' +
        'person can step in without guessing. The result is clearer ownership, visible decisions, and ' +
        'work that repeats without heroic effort.',
      engagementModel: 'Short diagnostic, design-and-implementation engagement, or support during a larger transition.',
      triggerPhrase: 'The strategy deck is done, but nobody can tell you who owns the weekly work.',
      positioningNote: '',
    },
    {
      slug: 'economic-project-development',
      name: 'Economic & Project Development',
      lane: 'institutional',
      group: 'core',
      h1: 'A good idea or underused asset is not a project yet.',
      subhead:
        'Opportunity often shows up before anyone has built the project around it. PublicLogic helps ' +
        'municipalities, organizations, businesses, and property owners figure out what could be ' +
        'viable, what structure it would take, and who needs to be at the table to pursue it.',
      whoFor:
        'A property, facility, corridor, program, or business asset has more potential than anyone is ' +
        'capturing; an idea has public or commercial value but no clear development owner; several ' +
        'parties are interested, but nobody has set up the structure between them.',
      whatTheyGet:
        'That may include early feasibility work, asset and stakeholder mapping, development-path and ' +
        'operating-model design, partner and professional-team assembly, and roadmaps for approvals, ' +
        'governance, capital, and implementation. Development work does not replace appraisal, ' +
        'engineering, environmental review, brokerage, legal advice, lending, or securities ' +
        'compliance. PublicLogic sets up the structure around those disciplines and helps keep them aligned.',
      engagementModel: 'Fixed-scope Readiness Review, then phase-based development support.',
      triggerPhrase: 'We can see the opportunity. We do not yet have an actual project.',
      positioningNote: '',
    },
    {
      slug: 'grants',
      name: 'Grants, Capital & Financial Strategy',
      lane: 'municipal',
      group: 'core',
      h1: 'Funding helps when the project underneath it is real.',
      subhead:
        'PublicLogic works on the project underneath the funding ask. We connect readiness, capital ' +
        'sources, grants, financial responsibilities, compliance, evidence, administration, and ' +
        'closeout to an implementation plan that can hold up once money is involved.',
      whoFor:
        'A project needs a realistic capital stack or funding sequence; a grant opportunity exists but ' +
        'the application would be premature; funding has already been awarded and the implementation ' +
        'obligations still need a clear owner.',
      whatTheyGet:
        'We assess readiness and funding fit, develop grant applications, analyze capital sources and ' +
        'sequencing, coordinate budgets and cash flow, and set up compliance, reporting, and closeout ' +
        'systems. PublicLogic does not guarantee awards, financing, or returns, and does not provide ' +
        'legal, tax, securities, or regulated investment advice.',
      engagementModel: 'Per application, annual retainer, or fixed-fee engagement.',
      triggerPhrase: "There may be money available, but we are not ready to ask for it well.",
      positioningNote: '',
    },
    {
      slug: 'digital-government',
      name: 'Technology & Digital Operations',
      lane: 'municipal',
      group: 'core',
      h1: 'Technology should make the work easier to run.',
      subhead:
        'Technology is one of the tools PublicLogic uses to make complicated work repeatable. We ' +
        'design the workflow, authority, records, and handoffs together with the interface, ' +
        'automation, and data structure that support them.',
      whoFor:
        'Staff enter the same information in several systems; a website, portal, or dashboard exists ' +
        'but the surrounding work is still manual; a recurring task needs a focused application ' +
        'instead of one more spreadsheet; AI is already being used without shared rules for source, ' +
        'review, approval, or records.',
      whatTheyGet:
        'Depending on the job, we design workflows and services, build Microsoft 365 and SharePoint ' +
        'environments, create forms and automations, develop purpose-built applications, and set AI ' +
        'use, review, and evidence controls. ' +
        'PublicLogic\u2019s digital practice grows from systems built in live municipal environments, ' +
        'including work recognized at the 2025 Massachusetts Digital Government Summit.',
      engagementModel: 'Scoped project or phased delivery.',
      triggerPhrase: "The work lives in inboxes and workarounds, and staff are already trying AI tools without a shared playbook.",
      positioningNote: '',
    },
    {
      slug: 'regional-project-governance',
      name: 'Governance & Multi-Party Projects',
      lane: 'institutional',
      group: 'core',
      h1: 'Shared projects break down when the space between the parties stays vague.',
      subhead:
        'Regional initiatives, public-private projects, shared services, and cross-organizational ' +
        'partnerships often start with agreement on the goal. They slow down when authority, money, ' +
        'ownership, evidence, and operating responsibility are still being handled by assumption.',
      whoFor:
        'The work crosses organizations, jurisdictions, sectors, or funding sources; no one has ' +
        'authority to direct every contributor; leadership, funding, or operating responsibility may ' +
        'change before the work is complete.',
      whatTheyGet:
        'We map the parties, authority, and decision rights; shape governance bodies, charters, and ' +
        'meeting structures; and sort out cost, asset, and intellectual-property responsibilities, ' +
        'along with change, dispute, and succession provisions. Counsel drafts or approves legal ' +
        'instruments. PublicLogic makes sure the working relationship shows up in the day-to-day work ' +
        'instead of living only in the agreement.',
      engagementModel: 'Study or positioning fee, then phase-based project support.',
      triggerPhrase: 'There are multiple organizations involved, and the project record gets fuzzy the minute you ask who decided what.',
      positioningNote:
        'Our co-founder helped establish a regional public-safety collaboration launched with five ' +
        'communities and later serving nine — his own record from public service.',
    },
    {
      slug: 'research-evaluation-readiness',
      name: 'Research, Evaluation & Readiness',
      lane: 'institutional',
      group: 'core',
      h1: 'Before you commit real time or money, find out what is actually true.',
      subhead:
        'PublicLogic combines operating inquiry, research, behavioral analysis, stakeholder evidence, ' +
        'and implementation review to figure out what is really in the way. The point is a decision ' +
        'about what to do next, not a report that politely repeats the problem back to you.',
      whoFor:
        'Anyone who wants an honest answer before committing to a larger engagement, capital request, ' +
        'or implementation project.',
      whatTheyGet:
        'The Readiness Review is our fixed-scope first engagement for many clients. It ends with a ' +
        'clear statement of the opportunity or problem, the constraints that matter now, the decisions ' +
        'and conditions required to proceed, a recommended path, risks and evidence gaps, and, where ' +
        'useful, a bounded next engagement. Sometimes the right answer is to pause, narrow the goal, ' +
        'hire a permanent employee, retain another specialist, or use an existing tool.',
      engagementModel: 'Fixed-scope Readiness Review, or a standalone research/evaluation project.',
      triggerPhrase: "We are not ready to commit yet, and we need a straight answer before we do.",
      positioningNote: '',
    },
    {
      slug: 'politics-and-policy',
      name: 'Public Process & Policy',
      lane: 'institutional',
      group: 'supporting',
      h1: 'Public decisions still need a practical way to get carried out.',
      subhead:
        'PublicLogic supports policy and public-process work when it is tied to a defined ' +
        'organizational, development, or implementation objective. We help decision-makers understand ' +
        'stakeholders, explain choices, structure participation, and carry an adopted direction into practice.',
      whoFor:
        'A project needs public explanation and a credible path through approval; a policy decision ' +
        'must become an operating process after adoption; a coalition or governing body needs a shared ' +
        'decision record.',
      whatTheyGet:
        'This can include stakeholder and decision mapping, public-process and engagement design, ' +
        'policy research and option development, and records and decision tracking. PublicLogic does ' +
        'not present this work as campaign management, voter targeting, political advertising, or ' +
        'lobbying, and it is not a substitute for counsel. Conflicts related to public employment, ' +
        'candidacy, or procurement are reviewed before an engagement is accepted.',
      engagementModel: 'Hourly or project-based.',
      triggerPhrase: "We need the facts, the process, and a clean decision record, but we do not need to build a whole in-house team to get there.",
      positioningNote: '',
    },
  ],
  redirects: {
    'leadership-coaching': 'strategy-organizational-systems',
    'organizational-continuity': 'strategy-organizational-systems',
    'continuity-and-leadership': 'strategy-organizational-systems',
    'records-and-compliance': 'strategy-organizational-systems',
    'interim-management': 'strategy-organizational-systems',
    'engagement-facilitation': 'grants',
    regionalization: 'regional-project-governance',
    'project-governance': 'regional-project-governance',
  },
  engagementSteps: {
    eyebrow: 'SMALL ENOUGH TO START · BUILT TO MOVE',
    headline: 'How an engagement works.',
    steps: [
      { name: 'Find the constraint', copy: 'We look at the work, asset, people, rules, systems, money, timing, and relationships around the problem.' },
      { name: 'Define the opportunity', copy: 'We spell out what could happen, what evidence supports it, and what has to be true for it to work.' },
      { name: 'Bound the role', copy: 'We define the immediate outcome, PublicLogic\u2019s responsibilities, decision rights, dependencies, evidence, timing, and what stays with the client or other professionals.' },
      { name: 'Build and implement', copy: 'We put the needed structure in place and help it hold up under real operating conditions.' },
      { name: 'Transfer or continue deliberately', copy: 'We prepare a handoff people can actually use. If an ongoing or shared operating role makes sense, it is defined on purpose rather than drifting into place.' },
    ],
  },
  collaborators: {
    headline: 'Complex work needs more than one discipline.',
    body:
      'PublicLogic works alongside counsel, engineers, accountants, lenders, funders, technology ' +
      'vendors, brokers, planners, internal staff, subject-matter experts, and other specialists, ' +
      'coordinating with the professionals who already serve a community or organization instead of ' +
      'trying to replace them. We do not imitate credentials the work requires. We build the working ' +
      'structure that lets those disciplines contribute to one result.',
  },
  callProcess: {
    eyebrow: 'CLOSING',
    headline: 'What is not moving — and what could become possible if it did?',
    body:
      'You do not need to name the service. Tell us what is stuck. We identify the real constraint ' +
      'and propose the smallest useful engagement, one that gets the work moving and leaves better ' +
      'structure behind it.',
    note: 'Put structure around the work before circumstances do it for you.',
  },
} as const;

// ── PuddleJumper — the Governance Process Runtime underneath PublicLogic
// applications. Public language: "the runtime underneath PublicLogic
// applications." Never "engine," "operational memory engine," "platform" as
// the primary category, or "LogicOS." Operational memory is a benefit, not
// the category. Sell the outcome; never expose enforcement mechanics.
export const PUDDLEJUMPER = {
  hero: {
    eyebrow: 'The runtime underneath PublicLogic applications',
    headline: 'The work moves forward. The record stays.',
    body: `Most software can tell you what a field says now. PuddleJumper keeps the work behind that field so you can see how it got there. Forms, files, connected systems, people, automations, and AI can all add information. None of them has to become the record. PublicLogic applications use PuddleJumper underneath to keep identity, authority, decisions, evidence, and history connected while work moves.`,
    cta: 'How it works',
  },
  storesResult: {
    headline: 'Most software stores the result.',
    lines: ['A field says approved.', 'A task says complete.', 'A record says closed.'],
    body:
      'PuddleJumper keeps the surrounding work too: what came in, ' +
      'what it meant, who had authority, what changed, what happened, ' +
      'and what evidence remained.',
    thesis: 'A field change should not be the whole story.',
  },
  sources: {
    headline: 'Sources can contribute without owning the truth.',
    body:
      'Information can come from almost anywhere. A person, form, file, ' +
      'connected system, automation, or AI can report something or ' +
      'ask for something. That source does not become authoritative ' +
      'just because it supplied the information. PuddleJumper keeps ' +
      'the source, meaning, authority, progression, and outcome tied ' +
      'to the work itself. That is what makes the record useful later.',
  },
  caseSpaces: {
    eyebrow: 'CaseSpaces',
    headline: 'A durable place for the work.',
    body:
      'A CaseSpace is a structured place for a recurring responsibility, ' +
      'matter, property, process, department, or project. Different ' +
      'applications can show that work in different ways. The history ' +
      'stays connected underneath.',
  },
  recordKeepsWhy: {
    headline: 'The record keeps the why.',
    body:
      'Being able to reach a system does not automatically mean someone ' +
      'is authorized to make a consequential change. PuddleJumper keeps ' +
      'the distinction between what was requested, what was allowed, ' +
      'what was attempted, and what actually happened. Where needed, ' +
      'work can pause for authority, evidence, approval, or verification ' +
      'before moving. Corrections do not require quietly rewriting what ' +
      'came before. A newer action can supersede an earlier one while ' +
      'preserving the history.',
    thesis: 'That is the record you need when questions come later.',
  },
  archieve: {
    eyebrow: 'ARCHIEVE',
    headline: 'Deliberate closeout.',
    body:
      'Some work eventually becomes final. ARCHIEVE is the closeout ' +
      'layer for preserving governed work as a completed evidence ' +
      'package. The finished record stays connected to the work that ' +
      'produced it.',
  },
} as const;

// ── LogicCommons — the general PublicLogic toolbox ──────────────────────────
export const LOGICCOMMONS = {
  hero: {
    subline: 'Coming soon',
    headline: 'Useful tools for accountable work.',
    body:
      'LogicCommons is a growing set of practical tools for ' +
      'documents, records, decisions, packets, comparisons, and other ' +
      'work where the result has to be right. No big implementation. ' +
      'No long setup. Pick the tool, do the job, and keep the result.',
    cta: 'Tell us what you keep rebuilding from scratch',
  },
  friction: {
    headline: 'Serious underneath. Easy on purpose.',
    body:
      'Accountable work tends to accumulate unnecessary friction. Files ' +
      'move between inboxes, downloads, shared drives, and different ' +
      'versions. Information gets copied around. Nobody remembers which one was ' +
      'final.',
    thesis: 'Good controls should not require a clumsy interface.',
  },
  tools: {
    headline: 'Come for one job.',
    body:
      'You may need to compare two documents, assemble a packet, check a ' +
      'record, structure an intake, capture a decision, or produce a ' +
      'clean final output. Use the tool, get the result, and move on.',
    items: [
      { name: 'Create a record', copy: 'Turn source material into a kept record you can point back to.' },
      { name: 'Compare documents', copy: 'See what changed between two versions without line-by-line guesswork.' },
      { name: 'Assemble a packet', copy: 'Bundle documents into a finished packet you can hand off.' },
      { name: 'Capture a decision', copy: 'Keep the decision with the record it belongs to.' },
    ],
  },
  note:
    'If the work eventually needs a persistent governed environment, the ' +
    'same PublicLogic architecture is already underneath.',
} as const;

// ── Permit & Bridge — the specialized toolbox for permits, licenses, and
// regulated work ────────────────────────────────────────────────────────────
export const PERMITBRIDGE = {
  hero: {
    subline: 'In development',
    headline: 'Tools for permits, licenses, and regulated work.',
    body:
      'Requirements should be easier to understand before someone ' +
      'submits the wrong thing. Permit & Bridge helps turn regulated ' +
      'processes into clearer paths without softening the rules behind ' +
      'them.',
    cta: 'Tell us what permit process is breaking',
  },
  startWithRequirement: {
    headline: 'Start with the requirement.',
    body:
      'Regulated work is often organized around the agency or the form. ' +
      'The person doing the work starts somewhere else.',
    thesis: 'What applies to what I am trying to do?',
    closing:
      'Permit & Bridge is built around that question. It helps connect ' +
      'proposed work to the requirements, forms, supporting records, ' +
      'decisions, and history that belong to it.',
  },
  sides: {
    headline: 'For both sides of the counter.',
    items: [
      {
        name: 'Applicants',
        copy: 'See what applies, know what is missing, and keep the submission together.',
      },
      {
        name: 'Reviewers',
        copy: 'Receive more structured information, keep decisions tied to the matter, and preserve the record as it moves.',
      },
      {
        name: 'Organizations',
        copy: 'Maintain requirements and processes without relying on one employee to explain how everything works.',
      },
    ],
  },
} as const;

// ── About — Nate + Allie, co-equal ──────────────────────────────────────────
export const ABOUT = {
  hero: {
    headline: 'We came to the same problem from different sides.',
    body:
      'Nate learned this work inside government. Allie learned it ' +
      'inside complex human-service organizations. In very different ' +
      'settings, we kept seeing the same thing: important work was ' +
      'being held together by whoever happened to know how to keep it ' +
      'moving. PublicLogic helps turn that kind of fragile know-how ' +
      'into structure a team can keep using.',
  },
  structureIsCare: {
    headline: 'Structure is care.',
    thesis: BRAND.humanThesis,
    body:
      'For us, that means building systems that keep decisions from ' +
      'disappearing, make responsibility plain, help people adopt the ' +
      'work, and leave the next person something they can actually ' +
      'use. A good system has to make sense to the institution and to ' +
      'the people doing the job.',
    commitments: [
      { label: 'Decisions kept', copy: 'Decisions and the reasoning behind them do not disappear when people move on.' },
      { label: 'Responsibility plain', copy: 'Ownership is written down, so nobody has to guess who is responsible for what.' },
      { label: 'Built to be adopted', copy: 'The system helps people do the work, instead of giving them one more thing to work around.' },
      { label: 'Ready for the next person', copy: 'Whoever takes over is left something they can actually use, not just a record of what happened before them.' },
    ],
  },
  founders: [
    {
      name: 'Nate Boudreau',
      role: 'Governance, operations, and systems.',
      copy: [
        "Nate spent about fifteen years working inside Massachusetts municipal government — as an " +
          'administrator, an elected official, and the person who actually had to make procurement, ' +
          'records, finance, and digital systems work day to day. He helped stand up a regional ' +
          'public-safety collaboration that started with five towns and grew to nine, and built ' +
          "municipal systems recognized at the 2025 Massachusetts Digital Government Summit. He's the " +
          'one asking whether the structure will hold up once he walks away.',
      ],
    },
    {
      name: 'Dr. Allison Weiss Rothschild',
      role: 'Leadership, organizational psychology, and implementation.',
      copy: [
        'Allie is a psychologist, social worker, and behavior analyst who has spent her career inside ' +
          'complex, high-stakes organizations — the kind where turnover can quietly erase years of ' +
          'institutional knowledge. Her doctoral research looked at exactly that: why some ' +
          "organizations keep functioning when people leave, and why others don't. She still holds " +
          'senior clinical and research responsibilities at a large multi-site human-services ' +
          "organization, so her work stays grounded in practice, not just theory. She's the one asking " +
          'whether people will actually use what gets built.',
      ],
    },
  ],
  twoDisciplines: {
    headline: 'Two disciplines, one practical question.',
    nateQuestion: 'How do we make this work last beyond one person?',
    allieQuestion: 'How do we make it usable enough that people stick with it?',
    closing: 'That overlap is where PublicLogic works.',
  },
  photos: {
    headline: 'Photos from the work.',
    body: 'A few moments from the field. We will add more as we have them.',
    items: [
      { src: '/about/conference-1.jpg', alt: 'Allie and Nate at a municipal technology conference booth' },
      { src: '/about/conference-2.jpg', alt: 'Allie and Nate at a Massachusetts Municipal Association conference' },
      { src: '/about/conference-3.jpg', alt: 'Allie and Nate networking at a conference' },
    ],
  },
} as const;

// ── Team — full credential detail for Nate and Allie ────────────────────────
export const TEAM = {
  hero: {
    headline: 'Two people who have lived inside the work.',
    body:
      'We bring together governance and operating experience with ' +
      'behavioral, clinical, organizational, and research expertise. ' +
      'The structure has to hold up, and it has to be workable for the ' +
      'people inside it.',
  },
  members: [
    {
      name: 'Nathan R. Boudreau, MPA, MCPPO',
      role: 'Founder & Principal',
      focus: [
        'Governance',
        'Municipal administration',
        'Procurement',
        'Public records',
        'Regional systems',
        'Digital operations',
        'Project structure',
        'Software and workflow design',
      ],
      bio: [
        'Nate leads governance, operations, systems, and technical ' +
          'architecture at PublicLogic. He spent about fifteen years ' +
          'inside Massachusetts municipal government as an ' +
          'administrator, an elected official, and the person who had ' +
          'to make procurement, records, finance, and digital systems ' +
          'work day to day.',
        'That work included helping stand up a regional public-safety ' +
          'collaboration that started with five towns and grew to ' +
          'nine, along with building municipal systems recognized at ' +
          'the 2025 Massachusetts Digital Government Summit. He tends ' +
          'to be the person asking whether the structure will still ' +
          'hold once the original builder walks away.',
      ],
    },
    {
      name: 'Allie Weiss Rothschild, PsyD, MSW, LICSW, BCBA, LABA',
      role: 'Co-Founder & Principal',
      focus: [
        'Organizational psychology',
        'Behavior analysis',
        'Social work',
        'Applied research',
        'Organizational readiness',
        'Stakeholder engagement',
        'Implementation',
        'Program evaluation',
      ],
      bio: [
        'Allie Weiss Rothschild, PsyD, MSW, LICSW, BCBA, LABA, is ' +
          'Co-Founder and Principal of PublicLogic. She is an ' +
          'organizational psychologist, social worker, and behavior ' +
          'analyst who has spent her career inside complex, multi-site ' +
          'organizations where the work is regulated, high-stakes, and ' +
          'deeply dependent on people.',
        'Her doctoral research looked at staff retention and ' +
          'structural resilience: why some organizations keep their ' +
          'knowledge, consistency, and capacity when people leave, and ' +
          "why others don't. Her research has been published in " +
          'peer-reviewed journals, and she is regularly invited to ' +
          'serve as a peer reviewer, including for BMC Health Services ' +
          'Research, with a particular focus on implementation science ' +
          'and the translation of evidence into practice.',
        'She also continues to hold senior clinical leadership and ' +
          'research responsibilities within a large, multi-site ' +
          'human-services organization, which keeps her grounded in ' +
          'the day-to-day reality of implementation. At PublicLogic, ' +
          'she leads organizational readiness, stakeholder ' +
          'engagement, implementation, and program evaluation.',
        'All of that shapes the question she brings to the work: will ' +
          'people actually use this, and can it keep working through ' +
          'change? Her practice draws across organizational ' +
          'psychology, social work, behavioral science, and applied ' +
          'research to make sure a system works in real life, not just ' +
          'on paper.',
      ],
    },
  ],
} as const;

// ── Work — proof, honestly framed ───────────────────────────────────────────
const workRegional = {
  headline: 'Building something several organizations can actually own together.',
  eyebrow: 'Regional systems',
  body:
    "PublicLogic's governance work draws on firsthand experience " +
    'creating regional structures, including a public-safety ' +
    'collaboration launched with five communities and later serving ' +
    'nine. The hard part was not drawing an organizational chart. It ' +
    'was creating authority, finances, operating responsibility, ' +
    'governance, and continuity several independent communities could ' +
    'trust. That pattern now informs our regional and multi-party work.',
} as const;

const workDigitalGovernment = {
  headline: 'Systems should survive the person who built them.',
  eyebrow: 'Digital government',
  body:
    'Before PublicLogic existed as a firm, Nate built and implemented ' +
    'municipal digital operating systems using Microsoft 365, ' +
    'SharePoint, workflow automation, web systems, and custom ' +
    'applications. That work included an implementation recognized at ' +
    'the 2025 Massachusetts Digital Government Summit. The lesson was ' +
    'not that every organization needs custom software. It was that ' +
    'technology becomes useful when the work, ownership, and handoff ' +
    'around it are designed too.',
} as const;

const workBehavioralSystems = {
  headline: 'A technically correct system can still fail.',
  eyebrow: 'Behavioral systems and implementation',
  body:
    "Allie's work across clinical practice, behavior analysis, social " +
    'work, research, and organizational systems shapes the way ' +
    'PublicLogic thinks about adoption. Her role is not to make ' +
    'technology more human-friendly after it is built. It is to help ' +
    'determine whether the structure itself accounts for how people ' +
    'actually behave, change, resist, learn, and eventually own it.',
} as const;

const workGrants = {
  headline: 'Funding is part of a system.',
  eyebrow: 'Grants and capital work',
  body:
    "PublicLogic's approach to grants comes from direct experience " +
    'administering multiple funding programs, developing capital work, ' +
    'preparing applications, coordinating implementation, and managing ' +
    'reporting and closeout. We treat funding as one part of a project ' +
    'lifecycle rather than the project itself.',
} as const;

export const WORK = {
  hero: {
    headline: 'Built from work, not a category pitch.',
    body:
      'PublicLogic is new as a firm. The work underneath it is not. Our ' +
      'methods come from municipal administration, regional ' +
      'collaboration, technology implementation, behavioral and ' +
      'organizational research, regulated processes, project ' +
      'development, and businesses we operate ourselves.',
  },
  regional: workRegional,
  digitalGovernment: workDigitalGovernment,
  behavioralSystems: workBehavioralSystems,
  grants: workGrants,
  proofSections: [
    { id: 'regional', ...workRegional },
    { id: 'digital-government', ...workDigitalGovernment },
    { id: 'behavioral-systems', ...workBehavioralSystems },
    { id: 'grants', ...workGrants },
  ],
  lodge: {
    headline: 'Our own live operating environment.',
    eyebrow: 'Kendall Pond Lodge',
    body:
      'Nate and Allie operate Kendall Pond Lodge together. That gives ' +
      'PublicLogic somewhere to test its own systems against work that ' +
      'cannot be cleaned up for a demo. Guests arrive. Payments happen. ' +
      'Things break. Information has to reach two people. The next stay ' +
      'still has to start on time.',
    thesis: 'STAY, our lodging application family, grows out of that environment.',
  },
  proof: {
    headline: 'Proof has to work between two people.',
    body:
      'Kendall Pond gives us a simple test for the systems we build: can ' +
      'either of us understand what is happening without calling the ' +
      'other to reconstruct it? Bookings, turnovers, guest needs, ' +
      'property issues, payments, and changes happen while Nate and ' +
      'Allie are not always in the same place. The useful result is not ' +
      'another dashboard. It is that the next person can open the ' +
      'record, understand what changed, and keep the stay moving.',
    note: 'Founder-operated live environment — Kendall Pond Lodge.',
  },
  honesty: {
    headline: 'We are careful about proof.',
    body:
      'Some PublicLogic work cannot be publicly named. Some work ' +
      'predates the firm. Some product applications are still being ' +
      'proven in environments we control. We distinguish those things ' +
      'deliberately. When we describe an illustrative scenario, we call ' +
      'it illustrative. When we describe founder experience, we say so. ' +
      'When we publish a client case study, it will be because we have ' +
      'permission and evidence to support it.',
  },
  whatWeCareAbout: {
    headline: 'What we care about.',
    items: [
      { id: 'kept-moving', text: 'Did the work keep moving?' },
      { id: 'handoff', text: 'Could another person pick it up?' },
      { id: 'authority', text: 'Was the authority clear?' },
      { id: 'record', text: 'Was the record complete?' },
      { id: 'independence', text: 'Could the organization operate without us afterward?' },
      { id: 'reconstruction', text: 'Did the system reduce reconstruction and repeated work?' },
    ],
    closing: 'Those matter more than how impressive the deliverable looked on presentation day.',
  },
  whoWeWorkWith: {
    headline: 'Who we work with.',
    body:
      'PublicLogic does not work alone, and does not pretend to. Every ' +
      'engagement sits alongside the people who already serve a ' +
      'community — engineers, attorneys, technology vendors, regional ' +
      'planners, funders, and the professionals inside town hall.',
    current:
      'Our recent and current work includes development coordination on ' +
      'a multi-site waste-to-energy corridor alongside Carbon Alliance ' +
      'Group and WasteWerx, a statewide AI for Impact pilot with ' +
      'Polimorphic, grant development and federal compliance work with ' +
      'nonprofit development partners, and direct engagements with ' +
      'Massachusetts towns including Phillipston and Westminster.',
    partnering: {
      headline: 'Partnering with PublicLogic.',
      body:
        'We take on a small number of partnerships in defined classes: ' +
        'platform and pilot partners, channel and association partners, ' +
        'implementation and counsel partners, and deployment references. ' +
        "We don't resell, we don't white-label, and we don't trade in " +
        "client data. If a partnership survives those rules, it's " +
        'usually a good one.',
    },
  },
} as const;

// ── Applications hub ─────────────────────────────────────────────────────────
export const APPLICATIONS = {
  hero: {
    headline: 'Tools for work that has to be right.',
    body:
      'Some work needs a specialist. Some work just needs a tool a ' +
      'person can open, use, and finish with. PublicLogic applications ' +
      'are built for that second kind: clear on the surface, serious ' +
      'where the record matters.',
  },
  items: [
    {
      name: 'LogicCommons',
      tagline: 'Practical tools for accountable work.',
      copy:
        'Not every task needs a software rollout. Sometimes you need to ' +
        'compare documents, assemble a packet, prepare a record, ' +
        'structure an intake, or capture a decision and keep the result. ' +
        'LogicCommons is the general PublicLogic toolbox: open the tool, ' +
        'do the work, keep what it produces.',
      status: 'Coming Soon',
      cta: 'Open LogicCommons',
      href: '/logiccommons',
      topic: 'logiccommons',
      relatedServices: ['strategy-organizational-systems'],
    },
    {
      name: 'Permit & Bridge',
      tagline: 'Tools for permits, licenses, and regulated work.',
      copy:
        'Regulated work gets messy long before formal review begins. ' +
        'Which requirement applies? What needs to be submitted? What is ' +
        'missing? Which version is current? What happens next? Permit & ' +
        'Bridge makes the requirements easier to read and the resulting ' +
        'record easier to carry through review.',
      status: 'In Development',
      cta: 'Explore Permit & Bridge',
      href: '/permit-bridge',
      topic: 'permitbridge',
      relatedServices: ['digital-government', 'strategy-organizational-systems'],
    },
  ],
  families: {
    eyebrow: 'ONE SPINE · FOUR KINDS OF WORK',
    headline: 'Application families.',
    body:
      'The applications above are the first usable tools. PublicLogic is also building four ' +
      'application families on the same underlying structure, each for a different operating ' +
      'environment. Use the narrowest status that is true. A specification or controlled test ' +
      'does not by itself establish a live product or an external pilot.',
    items: [
      {
        name: 'MUNI',
        status: 'In Development',
        tagline: 'Municipal, regional, and public-facing work.',
        copy:
          'Records, permits, licenses, procurement, board packets, grants, and the handoffs ' +
          'between them, tied together across the systems a public organization has to keep.',
        href: '/applications/muni',
        cta: 'Explore MUNI',
      },
      {
        name: 'BUILD',
        status: 'In Development',
        tagline: 'Grant, capital, and multi-party project work.',
        copy:
          'A shared CaseSpace for formation, funding, approvals, delivery, outcomes, and ' +
          'closeout when each party holds part of the record but not the whole.',
        href: '/applications/build',
        cta: 'Explore BUILD',
      },
      {
        name: 'BIZZ',
        status: 'Planned',
        tagline: 'Small-business continuity.',
        copy:
          'A place to keep vendors, contracts, approvals, renewals, and the operating memory ' +
          'that too often lives with one owner.',
        href: '/applications/bizz',
        cta: 'Explore BIZZ',
      },
      {
        name: 'STAY',
        status: 'Internal Pilot',
        tagline: 'Lodging and property operations.',
        copy:
          'Guest stays, turnovers, maintenance, payments, and incident records, tested ' +
          'internally at Kendall Pond Lodge before any outside rollout.',
        href: '/applications/stay',
        cta: 'Explore STAY',
      },
    ],
  },
  statusLanguage: {
    headline: 'Status language.',
    items: [
      { label: 'Live', copy: 'ready for public use now.' },
      { label: 'Public Beta', copy: 'available to a limited external group under beta terms.' },
      { label: 'Pilot', copy: 'in use with selected partners in a controlled implementation.' },
      { label: 'Internal Pilot', copy: 'in use where PublicLogic operates it, not offered as an outside deployment.' },
      { label: 'In Development', copy: 'being built now; not offered as a live product.' },
      { label: 'Planned', copy: 'named and scoped, without a usable release yet.' },
    ],
  },
  underneath: {
    eyebrow: 'Underneath the applications',
    headline: 'PuddleJumper',
    body:
      'PublicLogic applications can look very different and still share ' +
      'the same operating guarantees underneath. PuddleJumper is the ' +
      'runtime that keeps identity, authority, progression, evidence, ' +
      'and history tied to the work as it moves. Most people using a ' +
      'PublicLogic application should not need to think about that ' +
      'machinery. That is the point.',
    cta: 'How PuddleJumper works',
    href: '/puddlejumper',
  },
  sameSpine: {
    headline: 'Same spine. Different work.',
    items: [
      'A document tool should feel like a document tool.',
      'A permit tool should feel like a permit tool.',
      'A lodging application should feel like a lodging application.',
    ],
    closing: 'People do the work. The structure carries the governance.',
  },
} as const;

// ── Application families — MUNI, BUILD, BIZZ, STAY ──────────────────────────
// Same governed spine as PuddleJumper/LogicCommons, adapted to different
// operating environments. Statuses are load-bearing — do not upgrade
// without a documented release or pilot-agreement decision.
export const MUNI = {
  hero: {
    eyebrow: 'MUNI · PUBLIC AND MUNICIPAL WORK · IN DEVELOPMENT',
    headline: 'Public work breaks down when the record is scattered.',
    body:
      'MUNI adapts PublicLogic infrastructure to municipal, regional, and public-facing work, ' +
      'including records, permits, licenses, procurement, board packets, grants, and the handoffs ' +
      'between them. Municipalities already rely on websites, finance systems, permitting tools, ' +
      'shared drives, and public dashboards. MUNI keeps approvals, obligations, and transfer paths ' +
      'connected across the systems they still need to keep.',
  },
  builtFor: {
    headline: 'Built for everyday public work that still has to hold up.',
    body:
      'Public organizations move recurring work across departments, boards, vendors, residents, ' +
      'counsel, regulators, and changing administrations. Any single task may be routine. The ' +
      'record around it rarely is. MUNI helps someone finish the job in front of them without ' +
      'losing the matter, rule, responsibility, decision, or next obligation.',
  },
  fitsWhere: {
    headline: 'Where MUNI fits.',
    items: [
      'Public records and document work',
      'Board and decision packets',
      'Permits, licenses, and regulated processes',
      'Procurement and vendor records',
      'Grant and capital obligations',
      'Cross-department and regional matters',
      'Administrative continuity and handoff',
    ],
  },
  doesNot: {
    headline: 'What MUNI is not.',
    body:
      'MUNI does not replace judgment, counsel, public authority, or any system the organization ' +
      'must keep. It adds a shared record layer so those people and systems can work from the same ' +
      'facts. ' +
      'A public portal may show the outcome. MUNI keeps the work behind that outcome and the ' +
      'obligations that remain after publication.',
  },
  cta: 'Talk with us about a MUNI pilot',
} as const;

export const BUILD = {
  hero: {
    eyebrow: 'BUILD · GRANTS, CAPITAL, AND PROJECTS · IN DEVELOPMENT',
    headline: 'Projects cross lines. The record has to cross with them.',
    body:
      'BUILD keeps project governance and evidence connected from early formation through ' +
      'funding, approvals, delivery, outcomes, and closeout.',
  },
  oneProject: {
    headline: 'One project, many owners of the record.',
    body:
      'Complex projects move among owners, developers, municipalities, nonprofits, funders, ' +
      'lenders, engineers, counsel, and operators. Each party holds part of the record, but no ' +
      'one automatically holds the whole story. BUILD gives the shared work a CaseSpace and keeps ' +
      'clear boundaries around what was proposed, required, approved, funded, changed, delivered, ' +
      'and proven. A project dashboard can report schedule, budget, and status. BUILD ties those ' +
      'results back to the commitments, conditions, and open obligations under them.',
  },
  carries: {
    headline: 'What BUILD is meant to carry.',
    items: [
      'Project formation and governance',
      'Parties, roles, decisions, and commitments',
      'Funding sources and application records',
      'Approvals, conditions, and obligations',
      'Schedules, milestones, and phase gates',
      'Reports, reimbursements, and evidence',
      'Outcomes, public benefit, and evaluation',
      'Transfer and closeout packages',
    ],
  },
  statusNote:
    'BUILD is in development. Its patterns come from grant, capital, and multi-party work ' +
    'PublicLogic carries through services. That experience shapes the design, but it does not ' +
    'establish a deployed product.',
  cta: 'Bring us a project that crosses boundaries',
} as const;

export const BIZZ = {
  hero: {
    eyebrow: 'BIZZ · SMALL-BUSINESS CONTINUITY · PLANNED',
    headline: 'A small business needs a system people can share.',
    body:
      'BIZZ is planned as a place to keep recurring small-business work, including vendors, ' +
      'contracts, approvals, deadlines, procedures, and handoffs.',
  },
  firstOS: {
    headline: 'Many small businesses run on one person\u2019s memory.',
    body:
      'The founder knows the relationship, the exception, the renewal date, the workaround, and ' +
      'why the spreadsheet looks the way it does. Growth, time away, a new employee, or a ' +
      'transition makes the gap obvious. BIZZ is designed to move that operating memory into ' +
      'shared structure without asking a small business to adopt enterprise process.',
  },
  carries: {
    headline: 'What BIZZ is meant to carry.',
    items: [
      'Vendor and counterparty relationships',
      'Contracts, insurance, W-9s, and renewals',
      'Recurring obligations and deadlines',
      'Approvals, decisions, and exceptions',
      'Procedures and operating records',
      'Ownership and handoff',
      'Optional continuity from completed LogicCommons functions',
    ],
  },
  statusNote:
    'BIZZ is planned. The LogicCommons W-9 function defines a consent-based path into a future ' +
    'BIZZ CaseSpace, but that path does not make BIZZ a live product before its own release ' +
    'conditions are met.',
  cta: 'Tell us what the business keeps in your head',
} as const;

export const STAY = {
  hero: {
    eyebrow: 'STAY · LODGING AND PROPERTY OPERATIONS · INTERNAL PILOT',
    headline: 'Running a property takes more than managing reservations.',
    body:
      'STAY connects the operating record around a lodging property: guests, turnovers, ' +
      'maintenance, payments, incidents, vendors, and handoffs between operators.',
  },
  bookingPlatforms: {
    headline: 'Booking platforms track the reservation.',
    body:
      'They may not capture that a guest reported a loose railing, a contractor rescheduled, a ' +
      'payment exception is still open, or the next turnover needs a different setup. Those ' +
      'details often live in messages and memory. STAY is designed to connect the reservation to ' +
      'the property work it sets in motion.',
  },
  carries: {
    headline: 'What STAY carries in its internal environment.',
    items: [
      'Stay identity and guest communication',
      'Arrival, access, and departure obligations',
      'Turnover tasks and evidence',
      'Maintenance issues and vendor work',
      'Payment events and exceptions',
      'Incident and risk records',
      'Pricing, operating, and performance decisions',
      'Handoffs between operators',
    ],
  },
  statusNote:
    'STAY is used as an internal pilot at Kendall Pond Lodge. PublicLogic is testing the ' +
    'operating model in a property it controls. That does not mean STAY has been deployed for ' +
    'outside lodging operators.',
  cta: 'See the operating environment',
} as const;

// ── Notes — written by both principals as they work ─────────────────────────
export const NOTES = {
  hero: {
    headline: 'Notes',
    body:
      'Writing from the two practices this firm is built on: one inside ' +
      'municipal government, one inside clinical and organizational ' +
      'research. Process notes, governance essays, and research findings ' +
      'from the person closest to the work.',
  },
  series: {
    headline: 'Institutional Stewardship: three releases.',
    items: [
      {
        name: 'Institutional Stewardship',
        subtitle: 'A Governance Framework for Safe Change Absorption in Public Institutions',
        type: 'White paper',
        author: 'Dr. Allison Weiss Rothschild & Nathan R. Boudreau',
        abstract:
          'Modernization efforts in public institutions rarely fail for ' +
          'lack of will or funding. They fail when change arrives before ' +
          'anyone has decided where the resulting risk will live. ' +
          'Institutional Stewardship lays out the structural conditions ' +
          'that let an institution carry that risk: clear authority, ' +
          'bounded responsibility, controlled scope, and continuity that ' +
          'does not depend on one person.',
        status: 'Published',
      },
      {
        name: 'Where Risk Lives',
        subtitle: 'Governance Design, Turnover Pressure, and Institutional Survivability in Massachusetts Municipalities',
        type: 'White paper',
        author: 'Nathan R. Boudreau & Dr. Allison Weiss Rothschild',
        abstract:
          "Turnover is usually treated as a workforce problem. It is " +
          'also a governance stress test. Where authority, workflow, and ' +
          'institutional memory are built into the system, the system ' +
          'absorbs the strain. Where they are not, individual people end ' +
          "up carrying it. Turnover does not create fragility; it shows " +
          'you where fragility was already sitting.',
        status: 'In review',
      },
      {
        name: 'Why Good People Leave Massachusetts Towns',
        subtitle: 'And How Structures Can Keep Them',
        type: 'Op-ed',
        author: 'Nathan R. Boudreau',
        abstract:
          'Capable municipal professionals are leaving small and mid-' +
          'sized Massachusetts towns at accelerating rates. Pay and ' +
          "burnout are only part of the story. A bigger driver is " +
          'structural pressure that no one has managed: unclear ' +
          'authority, undocumented workflows, and systems that depend on ' +
          'individual endurance. That is a governance problem, not a ' +
          'personnel failure.',
        status: 'Drafted, pending placement',
      },
    ],
  },
  empty: {
    headline: 'More notes are on the way.',
    body:
      'The institutional stewardship series above is only the start. ' +
      "Ask us directly if you want to hear what we're seeing in the " +
      'field before it is written up.',
    cta: 'Ask us directly',
  },
} as const;

// ── Kendall Pond Lodge — real operating property, live proving environment ─
export const LODGE = {
  hero: {
    headline: 'Come stay where we test our own systems.',
    body:
      'Kendall Pond Lodge is a family-run waterfront stay in North ' +
      'Central Massachusetts. Three bedrooms. Two bathrooms. Room for ' +
      'eight. Water outside the door, a hot tub, pool, dock, kayaks, ' +
      'paddle boat, patio, and fire pit. And behind the scenes, a real ' +
      'operating business where PublicLogic uses the systems it builds.',
    cta: 'Check availability',
    href: 'https://kendallpondlodge.com',
  },
  placeFirst: {
    headline: 'A place first.',
    body:
      'Kendall Pond is not a software demo with beds. It is a place we ' +
      'care about and want people to enjoy. Spend the day on the water. ' +
      'Sit by the fire. Bring the dog. Take the kayaks out. Settle into ' +
      'the house. The systems should stay mostly out of the way.',
  },
  whyOnSite: {
    headline: 'Why it is on the PublicLogic site.',
    body:
      'We think people who build operational systems should live with ' +
      'some of their own decisions. The Lodge gives us that chance. If ' +
      'guest information is confusing, we hear about it. If Nate and ' +
      'Allie cannot tell what changed, we feel it. If a booking, ' +
      'payment, maintenance issue, and property note end up scattered ' +
      'across four systems, we have to solve the same fragmentation we ' +
      'help clients solve. That makes Kendall Pond useful to ' +
      'PublicLogic, but it is a real place before it is a proving ' +
      'ground.',
  },
} as const;

// ── Interest intake — every "Notify me"/interest CTA sitewide posts here.
export const INTEREST_FORM = {
  action:
    'https://docs.google.com/forms/d/e/1FAIpQLSffXCklHoUVSrjgzQCECU_ubKg8QdgqM6QnyOh4akN2F5nXfQ/formResponse',
  entries: {
    name: 'entry.142312498',
    email: 'entry.63622542',
    orgType: 'entry.2027536273',
    interestedIn: 'entry.248612007',
    message: 'entry.1793499454',
    sourcePage: 'entry.1850348614',
  },
} as const;

// ── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  hero: {
    headline: "Tell us what's stuck.",
    body:
      'You do not need to know which PublicLogic service, application, ' +
      "or framework fits. Just tell us what's going on. We can sort " +
      'out the category later.',
  },
  reasons: {
    headline: 'Reasons people reach out.',
    items: [
      'Someone important is leaving.',
      'A project keeps going in circles.',
      'A process lives in one person\u2019s head.',
      'You have a grant or capital project in mind but not the structure to support it.',
      'Records or procurement work is piling up.',
      'Several organizations are trying to work together.',
      'The software exists. The operation around it does not.',
      'You are interested in LogicCommons, Permit & Bridge, PuddleJumper, or Kendall Pond Lodge.',
    ],
    thesis: 'Or maybe you are simply thinking: there has to be a cleaner way to run this.',
    closing: "That's enough.",
  },
  next: {
    headline: 'What happens next.',
    body:
      'Send a few sentences. We read every message. If we can help, ' +
      "we'll set up a conversation. If we're not the right fit, we'll " +
      'say that plainly. No long intake packet.',
  },
  orgOptions: [
    'Municipality/Public Agency',
    'Institution/Nonprofit',
    'Multi-party Project',
    'Property / Lodge',
    'Not Sure',
  ],
  interestOptions: [
    'Services / Consulting',
    'LogicCommons',
    'Permit & Bridge',
    'PuddleJumper',
    'Kendall Pond Lodge',
    'Something else',
  ],
  direct: {
    headline: 'Or contact a person directly.',
    rows: [
      { label: 'General', value: BRAND.emails.general },
      { label: 'Governance, municipal & systems work', value: BRAND.emails.municipal },
      { label: 'Behavioral systems, research & evaluation', value: BRAND.emails.research },
    ],
  },
  thankYou: {
    headline: "Got it. We're reading.",
    body:
      "Your message is in. If we can help, we'll set up a " +
      "conversation. If we're not the right fit, we'll say that " +
      'plainly.',
  },
} as const;

// ── Legal ────────────────────────────────────────────────────────────────────
export const LEGAL = {
  privacy: {
    headline: 'Privacy Policy',
    body:
      'PublicLogic LLC collects only what is needed to respond to you: ' +
      'the information you submit through our contact form, and basic, ' +
      'non-invasive site analytics. We do not sell or share your ' +
      'information with third parties for advertising. Information ' +
      'submitted through the contact form is used solely to respond to ' +
      'your inquiry and, if you become a client, to deliver the ' +
      'engagement. Contact info@publiclogic.org with any privacy question ' +
      'or request.',
  },
  terms: {
    headline: 'Terms of Use',
    body:
      'This site is provided for general information about PublicLogic ' +
      'LLC and its services. Nothing on this site constitutes legal, ' +
      'financial, or engineering advice, or forms a client relationship. ' +
      'A client relationship begins only with a signed engagement ' +
      'letter. Content is ' +
      'provided "as is" without warranty. PublicLogic LLC, PuddleJumper, ' +
      'and Kendall Pond Lodge are marks of PublicLogic LLC.',
  },
  accessibility: {
    headline: 'Accessibility Statement',
    body:
      'We build for public bodies, so this site is built to WCAG 2.1 AA. ' +
      "If something here is hard to use, tell us and we'll fix it. " +
      'Reach us at ' +
      'info@publiclogic.org.',
  },
} as const;

// ── Footer / global copy blocks ──────────────────────────────────────────────
export const COPY = {
  footerLegal: 'PublicLogic LLC · Gardner, Massachusetts',
  footerStamp: BRAND.productTagline,
  notFound: {
    headline: 'This one got lost in the filing.',
    body:
      "The page you're looking for isn't here. Fitting, for a firm that " +
      'builds records systems. Try Services, Applications, or just tell ' +
      'us what you were looking for.',
  },
} as const;

// ── Metadata / SEO — matches canon v4.0 §14 ─────────────────────────────────
export const META = {
  home: {
    title: 'PublicLogic | Governance Systems and Public Operations',
    description:
      'PublicLogic builds governance, systems, applications, and operating records for public, ' +
      'regional, and mission-driven work.',
  },
  services: {
    title: 'Services | Strategy, Governance, and Digital Operations',
    description:
      'Services include strategy, organizational systems, grants and capital strategy, regional ' +
      'governance, digital operations, and research and evaluation.',
  },
  applications: {
    title: 'Applications | PublicLogic Tools for Accountable Work',
    description:
      'Explore PublicLogic tools for accountable work, including LogicCommons, Permit & Bridge, ' +
      'and the PuddleJumper runtime behind MUNI, BUILD, BIZZ, and STAY.',
  },
  buildWithUs: {
    title: 'Build With Us | Development and Implementation Partner',
    description:
      'For selected opportunities, PublicLogic serves as an implementation or development partner ' +
      'across strategy, technology, funding, and operations.',
  },
  muni: {
    title: 'MUNI | Municipal and Regional Operations Infrastructure',
    description:
      'PublicLogic infrastructure for municipal, regional, and public-facing work, including ' +
      'records, permits, licenses, procurement, and operating tasks.',
  },
  build: {
    title: 'BUILD | Project Governance, Funding, and Delivery',
    description:
      'Project governance and evidence connected from formation through funding, approvals, ' +
      'delivery, outcomes, and closeout.',
  },
  bizz: {
    title: 'BIZZ | Small-Business Operations, Vendors, and Contracts',
    description:
      'A planned home for recurring small-business work, including vendors, contracts, approvals, ' +
      'deadlines, and handoffs.',
  },
  stay: {
    title: 'STAY | Lodging Operations and Property Records',
    description: 'Lodging operations and property records piloted internally at Kendall Pond Lodge.',
  },
  puddlejumper: {
    title: 'PuddleJumper | Governance Process Runtime by PublicLogic',
    description:
      'The Governance Process Runtime behind PublicLogic applications, keeping identity, ' +
      'authority, progression, evidence, and history attached to work.',
  },
  logiccommons: {
    title: 'LogicCommons | Documents, Records, and Decisions',
    description:
      'Tools for documents, records, decisions, comparisons, packets, and other accountable work.',
  },
  permitbridge: {
    title: 'Permit & Bridge | Permits, Licenses, and Reviews',
    description:
      'Tools for permits, licenses, and regulated work that clarify requirements and keep records ' +
      'moving through review.',
  },
  about: {
    title: 'About PublicLogic | Governance and Operating Experience',
    description:
      'PublicLogic combines governance and operating experience with behavioral, clinical, ' +
      'organizational, and research expertise.',
  },
  work: {
    title: 'PublicLogic Work | Operating Experience and Evidence',
    description:
      "See the operating experience, live environments, and evidence behind PublicLogic's " +
      'governance, systems, behavioral, and continuity work.',
  },
  lodge: {
    title: 'Kendall Pond Lodge | Waterfront Stay in Massachusetts',
    description:
      'A family-run waterfront stay in North Central Massachusetts and a live operating environment ' +
      'for PublicLogic systems.',
  },
  contact: {
    title: 'Contact PublicLogic | Start a Conversation',
    description:
      'Contact PublicLogic about systems, governance, projects, records, applications, ' +
      'transitions, and institutional continuity.',
  },
} as const;
