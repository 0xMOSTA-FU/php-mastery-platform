// =============================================
// PHP MASTERY PLATFORM v2 — APP LOGIC
// =============================================

// =============================================
// INJECT LOGO ICONS (deferred — icons.js must load first)
// =============================================
function injectLogoIcons() {
  const logoSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"/><path d="M8 9H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v3M14 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-6M18 9.5v5M16 9h4"/></svg>`;
  document.querySelectorAll('.logo-elephant').forEach(el => { el.innerHTML = logoSVG; });
}

// =============================================
// INJECT ROADMAP ICONS
// =============================================
const ROADMAP_ICONS = [
  { id: 1, iconName: 'terminal',   color: '#a78bfa', label: '~4 weeks' },
  { id: 2, iconName: 'layers',     color: '#fbbf24', label: '~5 weeks' },
  { id: 3, iconName: 'database',   color: '#22d3ee', label: '~4 weeks' },
  { id: 4, iconName: 'api',        color: '#34d399', label: '~5 weeks' },
  { id: 5, iconName: 'lightning',  color: '#f87171', label: '~8 weeks' },
  { id: 6, iconName: 'rocket',     color: '#a5b4fc', label: '~4 weeks' },
];

function injectRoadmapIcons() {
  ROADMAP_ICONS.forEach(({ id, iconName, color, label }) => {
    const iconEl = document.getElementById(`rm-icon-${id}`);
    const durEl  = document.getElementById(`rm-dur-${id}`);
    if (iconEl) iconEl.innerHTML = iconBadge(iconName, { bg: `${color}22`, color, size: 28, badgeSize: 56, radius: '14px' });
    if (durEl)  durEl.innerHTML  = `${icon('clock', { size: 13, color: 'var(--clr-text-muted)' })} <span>~${label}</span>`;
  });
}

// =============================================
// INJECT QUIZ ICONS
// =============================================
function injectQuizIcons() {
  const brainEl = document.getElementById('quizBrainIcon');
  if (brainEl) brainEl.innerHTML = iconBadge('brain', { bg: 'rgba(139,92,246,.2)', color: '#a78bfa', size: 40, badgeSize: 80, radius: '20px' });
  const resIconEl = document.getElementById('quizResultIcon');
  if (resIconEl) resIconEl.innerHTML = iconBadge('target', { bg: 'rgba(16,185,129,.2)', color: '#34d399', size: 36, badgeSize: 72, radius: '18px' });
}

const isFinePointer = window.matchMedia('(pointer: fine)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHtmlFragment(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html);

  template.content
    .querySelectorAll('script, iframe, object, embed, meta[http-equiv="refresh"]')
    .forEach(el => el.remove());

  template.content.querySelectorAll('*').forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      const name = attr.name.toLowerCase();
      const value = String(attr.value || '').trim();

      if (name.startsWith('on')) {
        el.removeAttribute(attr.name);
        return;
      }

      if ((name === 'href' || name === 'src' || name === 'xlink:href')
        && /^(javascript:|data:text\/html)/i.test(value)) {
        el.removeAttribute(attr.name);
      }
    });
  });

  return template.innerHTML;
}

function hardenExternalLinks(root = document) {
  const scope = root instanceof Document ? root : (root instanceof Element ? root : document);
  scope.querySelectorAll('a[target="_blank"]').forEach(anchor => {
    const href = (anchor.getAttribute('href') || '').trim();
    if (href && /^(javascript:|data:text\/html)/i.test(href)) {
      anchor.removeAttribute('href');
    }
    anchor.setAttribute('rel', 'noopener noreferrer');
  });
}

function initSecurityHardeningObserver() {
  hardenExternalLinks(document);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node instanceof Element) hardenExternalLinks(node);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// =============================================
// SCROLL — throttled with rAF for performance
// =============================================
const scrollProgress = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');
let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const total = document.body.scrollHeight - window.innerHeight;
      scrollProgress.style.width = (window.scrollY / total * 100) + '%';
      navbar.classList.toggle('scrolled', window.scrollY > 30);
      document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 500);
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });


// Active section tracking
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');
const navContext = document.getElementById('navContext');
const NAV_CONTEXT_LABELS = {
  home: 'Home',
  courses: 'Courses',
  videosources: 'Video Sources',
  books: 'Books',
  projects: 'Projects',
  marketmap: 'Market Map',
  prelaunch: 'Pre-Launch QA',
  bestpractices: 'Best Practices',
  usecases: 'Use Cases',
  timeline: 'Timeline',
  docs: 'Docs',
  playbooks: 'Playbooks',
  interviewqa: 'Interview Q&A',
  jobready: 'Job Plan',
};
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
      if (navContext) {
        const label = NAV_CONTEXT_LABELS[e.target.id] || 'Explore';
        navContext.textContent = `Now: ${label}`;
      }
    }
  });
}, { rootMargin: '-30% 0px -68% 0px' });
sections.forEach(s => secObs.observe(s));

const JOURNEY_STEPS = [
  { id: 'courses', title: 'Pick your learning track', cta: 'Go To Courses' },
  { id: 'projects', title: 'Build one real project', cta: 'Open Projects' },
  { id: 'quiz', title: 'Take the 3-question quiz', cta: 'Start Quiz' },
  { id: 'docs', title: 'Save official references', cta: 'Browse Docs' },
];

const JOURNEY_STEP_MAP = new Map(JOURNEY_STEPS.map(step => [step.id, step]));
const JOURNEY_STORAGE_KEY = 'phpmastery-journey-session-v1';
const EXPERIMENT_STORAGE_KEY = 'phpmastery-experiments-v1';
const CONVERSION_STORAGE_KEY = 'phpmastery-conversions-v1';
const ROLLOUT_GUARD_STORAGE_KEY = 'phpmastery-rollout-guard-v1';
const ROLLOUT_CONFIG_STORAGE_KEY = 'phpmastery-rollout-config-v1';

const DEFAULT_ROLLOUT_CONFIG = {
  triggerProgressNoQuiz: 12,
  triggerIntentNoProject: 10,
  recoveryCooldownMs: 6 * 60 * 1000,
  recoveryQuizMin: 2,
  recoveryProjectMin: 3,
  recoveryProgressMin: 10,
};

const EXPORT_EVENT_MAP = {
  conversion_goal: { ga4: 'pm_conversion_goal', segment: 'PM Conversion Goal' },
  session_started: { ga4: 'pm_session_started', segment: 'PM Session Started' },
  rollout_guard_triggered: { ga4: 'pm_rollout_guard_triggered', segment: 'PM Rollout Guard Triggered' },
  rollout_guard_recovered: { ga4: 'pm_rollout_guard_recovered', segment: 'PM Rollout Guard Recovered' },
  journey_cta_click: { ga4: 'pm_journey_cta_click', segment: 'PM Journey CTA Click' },
  journey_cta_intent_click: { ga4: 'pm_journey_intent_cta_click', segment: 'PM Journey Intent CTA Click' },
  navbar_cta_click: { ga4: 'pm_navbar_cta_click', segment: 'PM Navbar CTA Click' },
  navbar_cta_intent_click: { ga4: 'pm_navbar_intent_cta_click', segment: 'PM Navbar Intent CTA Click' },
};

const journeyState = {
  visited: new Set(),
  dismissed: false,
};

const engagementState = {
  lastIntent: null,
  lastIntentMeta: {},
  lastIntentAt: 0,
  quizRecommendation: null,
};

const sessionState = {
  isFirstSession: false,
  startedAt: Date.now(),
  lastInteractionAt: Date.now(),
};

const nudgeState = {
  active: null,
  lastShownAt: 0,
  cooldownMs: 45000,
};

const experimentState = {
  variants: {
    journey_cta_copy: 'control',
    journey_tone: 'control',
  },
  aaMode: false,
  aaBucket: 'A',
};

const rolloutGuardState = {
  enabled: false,
  reason: '',
  triggeredAt: 0,
};

const rolloutConfig = { ...DEFAULT_ROLLOUT_CONFIG };

const conversionState = {
  funnelId: '',
  goals: {},
};

const uxDebugState = {
  enabled: false,
};

function initJourneySessionProfile() {
  const raw = localStorage.getItem(JOURNEY_STORAGE_KEY);
  if (!raw) {
    sessionState.isFirstSession = true;
    localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify({ firstSeenAt: Date.now(), sessions: 1 }));
  } else {
    sessionState.isFirstSession = false;
    try {
      const parsed = JSON.parse(raw);
      const sessions = typeof parsed.sessions === 'number' ? parsed.sessions + 1 : 2;
      localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify({ ...parsed, sessions, lastSeenAt: Date.now() }));
    } catch {
      localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify({ firstSeenAt: Date.now(), sessions: 2 }));
    }
  }
}

function createRandomExperimentVariants() {
  return {
    journey_cta_copy: Math.random() > 0.5 ? 'action' : 'control',
    journey_tone: Math.random() > 0.5 ? 'direct' : 'control',
  };
}

function initRolloutConfig() {
  const params = new URLSearchParams(window.location.search);
  const queryConfig = {
    triggerProgressNoQuiz: params.get('rg_progress'),
    triggerIntentNoProject: params.get('rg_intent'),
    recoveryCooldownMs: params.get('rg_recovery_ms'),
    recoveryQuizMin: params.get('rg_recovery_quiz'),
    recoveryProjectMin: params.get('rg_recovery_project'),
    recoveryProgressMin: params.get('rg_recovery_progress'),
  };

  Object.entries(queryConfig).forEach(([key, value]) => {
    if (value == null) return;
    const num = Number(value);
    if (!Number.isNaN(num) && Number.isFinite(num) && num >= 0) {
      rolloutConfig[key] = num;
    }
  });

  try {
    const raw = localStorage.getItem(ROLLOUT_CONFIG_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.keys(DEFAULT_ROLLOUT_CONFIG).forEach(key => {
      const val = parsed[key];
      if (typeof val === 'number' && Number.isFinite(val) && val >= 0) {
        rolloutConfig[key] = val;
      }
    });
  } catch {
    // Keep defaults when config parsing fails.
  }
}

function initExperimentVariants() {
  const params = new URLSearchParams(window.location.search);
  const aaFlag = params.get('aa');

  const fallback = createRandomExperimentVariants();

  experimentState.aaMode = aaFlag === '1';
  experimentState.aaBucket = Math.random() > 0.5 ? 'A' : 'B';

  if (experimentState.aaMode) {
    experimentState.variants = {
      journey_cta_copy: 'control',
      journey_tone: 'control',
    };
    localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(experimentState.variants));
    return;
  }

  try {
    const raw = localStorage.getItem(EXPERIMENT_STORAGE_KEY);
    if (!raw) {
      experimentState.variants = fallback;
      localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(experimentState.variants));
      return;
    }
    const parsed = JSON.parse(raw);
    experimentState.variants = {
      journey_cta_copy: parsed.journey_cta_copy || fallback.journey_cta_copy,
      journey_tone: parsed.journey_tone || fallback.journey_tone,
    };
  } catch {
    experimentState.variants = fallback;
  }
}

function initConversionState() {
  conversionState.funnelId = `funnel-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  try {
    const raw = localStorage.getItem(CONVERSION_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.goals === 'object') {
      conversionState.goals = parsed.goals;
    }
  } catch {
    conversionState.goals = {};
  }
}

function initRolloutGuardState() {
  try {
    const raw = localStorage.getItem(ROLLOUT_GUARD_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    rolloutGuardState.enabled = !!parsed.enabled;
    rolloutGuardState.reason = parsed.reason || '';
    rolloutGuardState.triggeredAt = parsed.triggeredAt || 0;
    if (rolloutGuardState.enabled) {
      experimentState.variants = {
        journey_cta_copy: 'control',
        journey_tone: 'control',
      };
    }
  } catch {
    rolloutGuardState.enabled = false;
  }
}

function persistRolloutGuardState() {
  localStorage.setItem(ROLLOUT_GUARD_STORAGE_KEY, JSON.stringify({
    enabled: rolloutGuardState.enabled,
    reason: rolloutGuardState.reason,
    triggeredAt: rolloutGuardState.triggeredAt,
  }));
}

function triggerRolloutGuard(reason) {
  if (rolloutGuardState.enabled) return;
  rolloutGuardState.enabled = true;
  rolloutGuardState.reason = reason;
  rolloutGuardState.triggeredAt = Date.now();
  experimentState.variants = {
    journey_cta_copy: 'control',
    journey_tone: 'control',
  };
  localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(experimentState.variants));
  persistRolloutGuardState();
  trackUXEvent('rollout_guard_triggered', { reason });
}

function recoverRolloutGuard(reason) {
  if (!rolloutGuardState.enabled) return;
  rolloutGuardState.enabled = false;
  rolloutGuardState.reason = '';
  rolloutGuardState.triggeredAt = 0;
  experimentState.variants = createRandomExperimentVariants();
  localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(experimentState.variants));
  persistRolloutGuardState();
  trackUXEvent('rollout_guard_recovered', { reason, variants: experimentState.variants });
}

function evaluateRolloutGuard() {
  if (experimentState.aaMode) return;

  const progress = conversionState.goals.journey_step_progress || 0;
  const quizFinish = conversionState.goals.quiz_finish || 0;
  const projectOpen = conversionState.goals.project_open || 0;
  const intentClicks = (conversionState.goals.journey_cta_intent || 0) + (conversionState.goals.navbar_cta_intent || 0);

  if (rolloutGuardState.enabled) {
    const lockedFor = Date.now() - rolloutGuardState.triggeredAt;
    const cooldownDone = lockedFor >= rolloutConfig.recoveryCooldownMs;
    const recoveredMetrics =
      quizFinish >= rolloutConfig.recoveryQuizMin &&
      projectOpen >= rolloutConfig.recoveryProjectMin &&
      progress >= rolloutConfig.recoveryProgressMin;

    if (cooldownDone && recoveredMetrics) {
      recoverRolloutGuard('metrics_recovered');
    }
    return;
  }

  if (progress >= rolloutConfig.triggerProgressNoQuiz && quizFinish === 0) {
    triggerRolloutGuard('no_quiz_finish_after_progress');
    return;
  }

  if (intentClicks >= rolloutConfig.triggerIntentNoProject && projectOpen === 0) {
    triggerRolloutGuard('intent_clicks_without_project_open');
  }
}

function mapEventForExports(event) {
  const mapped = EXPORT_EVENT_MAP[event.eventName] || {
    ga4: `pm_${event.eventName}`,
    segment: `PM ${event.eventName}`,
  };

  const params = {
    category: event.category,
    funnel_id: conversionState.funnelId,
    session_first: sessionState.isFirstSession,
    aa_mode: experimentState.aaMode,
    aa_bucket: experimentState.aaBucket,
    variant_cta_copy: experimentState.variants.journey_cta_copy,
    variant_tone: experimentState.variants.journey_tone,
    payload: event.payload,
  };

  const ga4 = {
    event: mapped.ga4,
    params,
  };

  const segment = {
    type: 'track',
    event: mapped.segment,
    properties: params,
    timestamp: new Date(event.ts).toISOString(),
  };

  window.__phpMasteryExportEvents = window.__phpMasteryExportEvents || [];
  window.__phpMasteryExportEvents.push({ ga4, segment });
}

function persistConversionState() {
  localStorage.setItem(CONVERSION_STORAGE_KEY, JSON.stringify({ goals: conversionState.goals, updatedAt: Date.now() }));
}

function trackConversionGoal(goal, payload = {}) {
  conversionState.goals[goal] = (conversionState.goals[goal] || 0) + 1;
  persistConversionState();
  trackUXEvent('conversion_goal', {
    goal,
    count: conversionState.goals[goal],
    funnelId: conversionState.funnelId,
    ...payload,
  });
  evaluateRolloutGuard();
}

function getStepCtaCopy(stepId, fallback) {
  const variant = experimentState.variants.journey_cta_copy;
  if (variant === 'action') {
    const actionMap = {
      courses: 'Start Track Now',
      projects: 'Build First Project',
      quiz: 'Take 3-Step Quiz',
      docs: 'Open Docs Stack',
    };
    return actionMap[stepId] || fallback;
  }
  if (variant === 'mentor') {
    const mentorMap = {
      courses: 'Guide Me To Courses',
      projects: 'Guide Me To Projects',
      quiz: 'Guide Me To Quiz',
      docs: 'Guide Me To Docs',
    };
    return mentorMap[stepId] || fallback;
  }
  return fallback;
}

function getJourneyToneKicker(fallback) {
  if (experimentState.variants.journey_tone === 'direct') return 'Do This Next';
  return fallback;
}

function initUXDebugState() {
  const params = new URLSearchParams(window.location.search);
  const queryFlag = params.get('uxdebug');
  if (queryFlag === '1') localStorage.setItem('phpmastery-uxdebug', '1');
  if (queryFlag === '0') localStorage.removeItem('phpmastery-uxdebug');
  uxDebugState.enabled = localStorage.getItem('phpmastery-uxdebug') === '1';
}

initRolloutConfig();
initExperimentVariants();
initConversionState();
initRolloutGuardState();
initUXDebugState();

function registerUserInteraction(kind = 'interaction') {
  sessionState.lastInteractionAt = Date.now();
  if (nudgeState.active && (kind === 'pointer' || kind === 'keyboard' || kind === 'touch')) {
    nudgeState.active = null;
  }
}

initJourneySessionProfile();

function trackUXEvent(eventName, payload = {}) {
  let category = 'general';
  if (eventName.startsWith('search_')) category = 'discovery';
  else if (eventName.startsWith('bookmark_')) category = 'retention';
  else if (eventName.startsWith('journey_') || eventName.startsWith('navbar_') || eventName.startsWith('nudge_')) category = 'conversion';
  else if (eventName.startsWith('quiz_') || eventName.startsWith('course_')) category = 'learning';

  const event = {
    eventName,
    category,
    payload,
    ts: Date.now(),
    session: {
      isFirstSession: sessionState.isFirstSession,
      elapsedMs: Date.now() - sessionState.startedAt,
    },
    experiment: {
      aaMode: experimentState.aaMode,
      aaBucket: experimentState.aaBucket,
      variants: { ...experimentState.variants },
      rolloutGuard: {
        enabled: rolloutGuardState.enabled,
        reason: rolloutGuardState.reason,
      },
    },
  };

  window.__phpMasteryUXEvents = window.__phpMasteryUXEvents || [];
  window.__phpMasteryUXEvents.push(event);

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'phpmastery_interaction', ...event });
  }

  mapEventForExports(event);

  renderUXDebugPanel();
}

function getFunnelReport() {
  const goals = conversionState.goals;
  const search = goals.search_result_open || 0;
  const course = goals.course_open || 0;
  const project = goals.project_open || 0;
  const quiz = goals.quiz_finish || 0;

  const safeRate = (num, den) => den > 0 ? `${Math.round((num / den) * 100)}%` : '-';

  return {
    search,
    course,
    project,
    quiz,
    searchToCourse: safeRate(course, search),
    courseToProject: safeRate(project, course),
    projectToQuiz: safeRate(quiz, project),
  };
}

function renderUXDebugPanel() {
  if (!uxDebugState.enabled) {
    const existing = document.getElementById('uxDebugPanel');
    if (existing) existing.remove();
    return;
  }

  let panel = document.getElementById('uxDebugPanel');
  if (!panel) {
    panel = document.createElement('aside');
    panel.id = 'uxDebugPanel';
    panel.className = 'ux-debug-panel';
    document.body.appendChild(panel);
  }

  const events = (window.__phpMasteryUXEvents || []).slice(-5).reverse();
  const funnel = getFunnelReport();
  const eventsMarkup = events.map(ev => `
    <li>
      <span class="ux-debug-ev">${ev.eventName}</span>
      <span class="ux-debug-cat">${ev.category}</span>
    </li>
  `).join('');

  panel.innerHTML = `
    <div class="ux-debug-head">
      <strong>UX Debug</strong>
      <button id="uxDebugHideBtn" type="button">Hide</button>
    </div>
    <div class="ux-debug-row"><span>Session</span><b>${sessionState.isFirstSession ? 'First' : 'Returning'}</b></div>
    <div class="ux-debug-row"><span>Intent</span><b>${engagementState.lastIntent || 'none'}</b></div>
    <div class="ux-debug-row"><span>Nudge</span><b>${nudgeState.active?.id || 'none'}</b></div>
    <div class="ux-debug-row"><span>A/B CTA</span><b>${experimentState.variants.journey_cta_copy}</b></div>
    <div class="ux-debug-row"><span>A/B Tone</span><b>${experimentState.variants.journey_tone}</b></div>
    <div class="ux-debug-row"><span>A/A</span><b>${experimentState.aaMode ? `on (${experimentState.aaBucket})` : 'off'}</b></div>
    <div class="ux-debug-row"><span>Guard</span><b>${rolloutGuardState.enabled ? 'on' : 'off'}</b></div>
    <div class="ux-debug-row"><span>Guard Reason</span><b>${rolloutGuardState.reason || '-'}</b></div>
    <div class="ux-debug-row"><span>Guard Triggers</span><b>P:${rolloutConfig.triggerProgressNoQuiz} I:${rolloutConfig.triggerIntentNoProject}</b></div>
    <div class="ux-debug-row"><span>Guard Cooldown</span><b>${Math.round(rolloutConfig.recoveryCooldownMs / 1000)}s</b></div>
    <div class="ux-debug-row"><span>Funnel</span><b>${conversionState.funnelId}</b></div>
    <div class="ux-debug-goals">
      <div class="ux-debug-title">Goals</div>
      <ul>
        <li>course_open: ${conversionState.goals.course_open || 0}</li>
        <li>project_open: ${conversionState.goals.project_open || 0}</li>
        <li>quiz_finish: ${conversionState.goals.quiz_finish || 0}</li>
      </ul>
    </div>
    <div class="ux-debug-funnel">
      <div class="ux-debug-title">Funnel Report</div>
      <ul>
        <li>search_open: ${funnel.search}</li>
        <li>course_open: ${funnel.course} (${funnel.searchToCourse})</li>
        <li>project_open: ${funnel.project} (${funnel.courseToProject})</li>
        <li>quiz_finish: ${funnel.quiz} (${funnel.projectToQuiz})</li>
      </ul>
    </div>
    <div class="ux-debug-events">
      <div class="ux-debug-title">Last Events</div>
      <ul>${eventsMarkup || '<li><span class="ux-debug-ev">none</span></li>'}</ul>
    </div>
  `;

  panel.querySelector('#uxDebugHideBtn')?.addEventListener('click', () => {
    localStorage.removeItem('phpmastery-uxdebug');
    uxDebugState.enabled = false;
    renderUXDebugPanel();
  });
}

function setJourneyIntent(intent, meta = {}) {
  engagementState.lastIntent = intent;
  engagementState.lastIntentMeta = meta;
  engagementState.lastIntentAt = Date.now();

  if (intent === 'quiz-recommendation' && meta.level) {
    engagementState.quizRecommendation = meta.level;
  }

  trackUXEvent('intent_set', { intent, ...meta });
  updateJourneyUI();
}

function getNudgeConfiguration(nextStep, intentCfg) {
  const now = Date.now();
  if (nudgeState.active && nudgeState.active.expiresAt > now) return nudgeState.active;
  if (nudgeState.active && nudgeState.active.expiresAt <= now) nudgeState.active = null;

  if (!nextStep) return null;
  if (now - nudgeState.lastShownAt < nudgeState.cooldownMs) return null;

  const idleMs = now - sessionState.lastInteractionAt;
  if (idleMs < 30000) return null;

  let nudge = null;

  if (sessionState.isFirstSession && !journeyState.visited.has('courses')) {
    nudge = {
      id: 'first-session-courses',
      kicker: 'Quick Start For New Visitors',
      title: 'Start with one beginner track. Keep it simple.',
      cta: 'Start First Track',
      note: 'You can always switch level later after one lesson.',
      action: () => {
        setJourneyIntent('course-filter', { filter: 'beginner' });
        renderCourses('beginner');
        scrollToSection('courses');
      },
    };
  } else if (journeyState.visited.has('courses') && !journeyState.visited.has('quiz')) {
    nudge = {
      id: 'quiz-boost',
      kicker: 'Precision Boost',
      title: 'Take the quiz now to get your exact path.',
      cta: 'Take Quiz Now',
      note: '3 questions only. You will get a direct recommendation.',
      action: () => scrollToSection('quiz'),
    };
  } else if (getActiveIntent()?.type === 'bookmark' && !journeyState.visited.has('projects')) {
    nudge = {
      id: 'bookmark-to-project',
      kicker: 'Action Reminder',
      title: 'Turn your saved items into practice today.',
      cta: 'Open Projects',
      note: 'A practical next step: one saved course + one practical project.',
      action: () => scrollToSection('projects'),
    };
  } else if (!intentCfg && nextStep.id === 'docs' && journeyState.visited.has('quiz')) {
    nudge = {
      id: 'docs-finish',
      kicker: 'Final Step',
      title: 'Pin your official docs stack before leaving.',
      cta: 'Open Docs Stack',
      note: 'Documentation shortcuts reduce learning friction next session.',
      action: () => scrollToSection('docs'),
    };
  }

  if (!nudge) return null;

  nudgeState.lastShownAt = now;
  nudgeState.active = {
    ...nudge,
    expiresAt: now + 22000,
  };
  trackUXEvent('nudge_shown', { id: nudge.id, idleMs });
  return nudgeState.active;
}

function getActiveIntent() {
  if (!engagementState.lastIntent) return null;
  const ageMs = Date.now() - engagementState.lastIntentAt;
  if (ageMs > 180000) return null;
  return {
    type: engagementState.lastIntent,
    meta: engagementState.lastIntentMeta,
  };
}

function getIntentConfiguration(nextStep) {
  const activeIntent = getActiveIntent();
  if (!activeIntent) return null;

  if (activeIntent.type === 'search') {
    return {
      kicker: 'Based On Your Activity',
      title: 'Keep exploring the catalog with smart search.',
      cta: 'Continue Search',
      note: 'Fastest path: search > open a course > start project.',
      action: () => openSearch(),
    };
  }

  if (activeIntent.type === 'bookmark') {
    return {
      kicker: 'Based On Your Activity',
      title: 'You saved content. Convert it into an action now.',
      cta: 'Open Saved Track',
      note: 'Go to Courses and continue from your bookmarked items.',
      action: () => scrollToSection('courses'),
    };
  }

  if (activeIntent.type === 'quiz-recommendation' && engagementState.quizRecommendation) {
    const level = engagementState.quizRecommendation;
    const levelLabel = level === 'beginner' ? 'Beginner' : level === 'intermediate' ? 'Intermediate' : 'Advanced';
    return {
      kicker: 'Based On Your Quiz Result',
      title: `${levelLabel} track is a strong next move.`,
      cta: `Open ${levelLabel} Track`,
      note: 'Follow your recommended path for faster progress.',
      action: () => {
        renderCourses(level);
        scrollToSection('courses');
      },
    };
  }

  if (activeIntent.type === 'course-filter' && nextStep) {
    return {
      kicker: 'Based On Your Activity',
      title: `You are focused on ${activeIntent.meta.filter || 'selected'} courses.`,
      cta: nextStep.cta,
      note: 'After choosing a course, jump to projects for practical momentum.',
      action: () => {
        markJourneyVisited(nextStep.id);
        scrollToSection(nextStep.id);
      },
    };
  }

  return null;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function markJourneyVisited(stepId) {
  if (!JOURNEY_STEPS.some(step => step.id === stepId)) return;
  const before = journeyState.visited.size;
  journeyState.visited.add(stepId);
  if (journeyState.visited.size !== before) updateJourneyUI();
}

function getNextJourneyStep() {
  const priority = sessionState.isFirstSession
    ? ['courses', 'quiz', 'projects', 'docs']
    : ['courses', 'projects', 'quiz', 'docs'];

  const stepId = priority.find(id => !journeyState.visited.has(id));
  return stepId ? JOURNEY_STEP_MAP.get(stepId) || null : null;
}

function shouldShowJourneyAssistant() {
  return window.scrollY > 140 && !journeyState.dismissed;
}

function updateJourneyUI() {
  const assistant = document.getElementById('journeyAssistant');
  const navCta = document.querySelector('.nav-cta');
  if (!assistant) return;

  const total = JOURNEY_STEPS.length;
  const done = journeyState.visited.size;
  const progress = Math.round((done / total) * 100);
  const next = getNextJourneyStep();
  const intentCfg = getIntentConfiguration(next);
  const nudgeCfg = getNudgeConfiguration(next, intentCfg);
  const activeCfg = nudgeCfg || intentCfg;

  if (!shouldShowJourneyAssistant()) {
    assistant.classList.remove('visible');
  } else {
    assistant.classList.add('visible');
  }
  assistant.classList.toggle('nudge-active', !!nudgeCfg);

  if (!next) {
    assistant.innerHTML = `
      <div class="journey-top">
        <div>
          <div class="journey-kicker">Journey Complete</div>
          <div class="journey-title">You're fully set. Start building and shipping.</div>
        </div>
        <span class="journey-progress-label">${done}/${total}</span>
      </div>
      <div class="journey-progress-track"><div class="journey-progress-fill" style="width:100%"></div></div>
      <div class="journey-actions">
        <button class="journey-btn primary" id="journeyRestartBtn">Restart Flow</button>
        <button class="journey-btn secondary" id="journeyDismissBtn">Hide</button>
      </div>
    `;

    document.getElementById('journeyRestartBtn')?.addEventListener('click', () => {
      journeyState.visited.clear();
      journeyState.dismissed = false;
      updateJourneyUI();
      scrollToSection('courses');
    });
    document.getElementById('journeyDismissBtn')?.addEventListener('click', () => {
      journeyState.dismissed = true;
      updateJourneyUI();
    });

    if (navCta) {
      navCta.textContent = 'Open Docs';
      navCta.onclick = () => scrollToSection('docs');
    }
    return;
  }

  assistant.innerHTML = `
    <div class="journey-top">
      <div>
        <div class="journey-kicker">${getJourneyToneKicker(activeCfg?.kicker || 'Suggested Next Step')}</div>
        <div class="journey-title">${activeCfg?.title || next.title}</div>
      </div>
      <span class="journey-progress-label">${done}/${total}</span>
    </div>
    <div class="journey-progress-track"><div class="journey-progress-fill" style="width:${progress}%"></div></div>
    ${activeCfg?.note ? `<p class="journey-note">${activeCfg.note}</p>` : ''}
    <div class="journey-actions">
      <button class="journey-btn primary" id="journeyNextBtn">${activeCfg?.cta || getStepCtaCopy(next.id, next.cta)}</button>
      <button class="journey-btn secondary" id="journeyDismissBtn">Hide</button>
    </div>
  `;

  document.getElementById('journeyNextBtn')?.addEventListener('click', () => {
    if (activeCfg?.action) {
      activeCfg.action();
      trackConversionGoal('journey_cta_intent', {
        intent: getActiveIntent()?.type || 'none',
        nudgeId: nudgeCfg?.id || null,
      });
      trackUXEvent('journey_cta_intent_click', {
        intent: getActiveIntent()?.type || 'none',
        nudgeId: nudgeCfg?.id || null,
      });
      return;
    }
    markJourneyVisited(next.id);
    scrollToSection(next.id);
    trackConversionGoal('journey_step_progress', { step: next.id });
    trackUXEvent('journey_cta_click', { step: next.id });
  });
  document.getElementById('journeyDismissBtn')?.addEventListener('click', () => {
    journeyState.dismissed = true;
    updateJourneyUI();
  });

  if (navCta) {
    navCta.textContent = activeCfg?.cta || getStepCtaCopy(next.id, next.cta);
    navCta.onclick = () => {
      if (activeCfg?.action) {
        activeCfg.action();
        trackConversionGoal('navbar_cta_intent', {
          intent: getActiveIntent()?.type || 'none',
          nudgeId: nudgeCfg?.id || null,
        });
        trackUXEvent('navbar_cta_intent_click', {
          intent: getActiveIntent()?.type || 'none',
          nudgeId: nudgeCfg?.id || null,
        });
        return;
      }
      markJourneyVisited(next.id);
      scrollToSection(next.id);
      trackConversionGoal('navbar_step_progress', { step: next.id });
      trackUXEvent('navbar_cta_click', { step: next.id });
    };
  }

  renderUXDebugPanel();
}

const journeyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
      markJourneyVisited(entry.target.id);
    }
  });
}, { threshold: [0.35], rootMargin: '-10% 0px -35% 0px' });

JOURNEY_STEPS.forEach(step => {
  const section = document.getElementById(step.id);
  if (section) journeyObserver.observe(section);
});

evaluateRolloutGuard();
updateJourneyUI();
trackUXEvent('session_started', {
  funnelId: conversionState.funnelId,
  variants: experimentState.variants,
  firstSession: sessionState.isFirstSession,
});
window.addEventListener('scroll', updateJourneyUI, { passive: true });

window.addEventListener('pointerdown', () => registerUserInteraction('pointer'), { passive: true });
window.addEventListener('touchstart', () => registerUserInteraction('touch'), { passive: true });
window.addEventListener('keydown', () => registerUserInteraction('keyboard'));
window.addEventListener('scroll', () => registerUserInteraction('scroll'), { passive: true });
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    registerUserInteraction('visibility');
    updateJourneyUI();
  }
});

setInterval(() => {
  if (!document.hidden) {
    evaluateRolloutGuard();
    updateJourneyUI();
  }
}, 8000);

// =============================================
// HAMBURGER
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

function setMobileMenuOpen(open) {
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

hamburger.setAttribute('aria-expanded', 'false');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  setMobileMenuOpen(!isOpen);
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMobileMenuOpen(false)));

document.addEventListener('click', (e) => {
  if (window.innerWidth > 768) return;
  if (!(e.target instanceof Element)) return;
  const insideMenu = e.target.closest('#navLinks');
  const onTrigger = e.target.closest('#hamburger');
  if (!insideMenu && !onTrigger) setMobileMenuOpen(false);
});

// =============================================
// BACK TO TOP
// =============================================
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// =============================================
// SMOOTH SCROLL LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// =============================================
// SCROLL REVEAL
// =============================================
const REVEAL_GROUP_SELECTORS = [
  '.courses-grid',
  '.books-grid',
  '.projects-grid',
  '.practices-grid',
  '.usecases-grid',
  '.docs-grid',
  '.playbooks-grid',
  '.interview-qa-grid',
  '.job-ready-grid',
  '.why-php-grid',
  '.testimonials-grid',
  '.php-timeline',
  '.graveyard-grid',
  '.roadmap-items',
  '.skills-grid',
];

function computeRevealDelay(el, order) {
  let delay = Math.min(order * 55, 440);
  if (el.dataset.delay) {
    delay += Math.min(parseFloat(el.dataset.delay) * 85, 220);
  }
  return Math.round(delay);
}

function setRevealMeta(el, delay) {
  el.dataset.revealDelay = String(delay);
  el.style.setProperty('--reveal-delay', `${delay}ms`);
}

function processRevealGroup(group) {
  const items = Array.from(group.querySelectorAll(':scope > .reveal'));
  if (!items.length) return [];

  const ordered = items.slice().sort((a, b) => {
    const topDiff = a.offsetTop - b.offsetTop;
    if (Math.abs(topDiff) > 8) return topDiff;
    return a.offsetLeft - b.offsetLeft;
  });

  const rowTops = [];
  const rowCounts = [];
  ordered.forEach(item => {
    const top = item.offsetTop;
    let rowIndex = rowTops.findIndex(t => Math.abs(t - top) <= 8);
    if (rowIndex === -1) {
      rowTops.push(top);
      rowIndex = rowTops.length - 1;
    }
    rowCounts[rowIndex] = (rowCounts[rowIndex] || 0) + 1;
    const colIndex = rowCounts[rowIndex] - 1;
    const order = rowIndex * 6 + colIndex;
    setRevealMeta(item, computeRevealDelay(item, order));
  });

  return items;
}

function applyRevealSequence(scope = document) {
  const root = scope instanceof Element ? scope : document;
  const groupedItems = new Set();
  const selector = REVEAL_GROUP_SELECTORS.join(',');

  if (root instanceof Element && root.matches(selector)) {
    processRevealGroup(root).forEach(el => groupedItems.add(el));
  }

  root.querySelectorAll(selector).forEach(group => {
    processRevealGroup(group).forEach(el => groupedItems.add(el));
  });

  root.querySelectorAll('.reveal').forEach(el => {
    if (groupedItems.has(el)) return;
    setRevealMeta(el, computeRevealDelay(el, 0));
  });
}

function registerRevealElements(scope = document) {
  const root = scope instanceof Element ? scope : document;
  applyRevealSequence(root);
  root.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
}

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = prefersReducedMotion ? 0 : parseInt(e.target.dataset.revealDelay || '0', 10);
      if (delay > 0) {
        setTimeout(() => e.target.classList.add('visible'), delay);
      } else {
        e.target.classList.add('visible');
      }
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.02, rootMargin: '0px 0px -30px 0px' });

let revealResizeRaf = 0;
window.addEventListener('resize', () => {
  if (revealResizeRaf) cancelAnimationFrame(revealResizeRaf);
  revealResizeRaf = requestAnimationFrame(() => {
    applyRevealSequence(document);
    revealResizeRaf = 0;
  });
}, { passive: true });

// =============================================
// AURORA CANVAS — optimized, fewer blobs
// =============================================
function initAurora() {
  const canvas = document.getElementById('auroraCanvas');
  if (!canvas) return;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 3 blobs, PHP-authentic hues (blue-violet + teal)
  const blobs = [
    { x: .28, y: .38, r: 280, hue: 225, speed: .0003 },
    { x: .72, y: .62, r: 240, hue: 200, speed: .0004 },
    { x: .5,  y: .82, r: 220, hue: 255, speed: .0002 },
  ];
  let t = 0;
  let raf;
  let lastTs = 0;
  function drawAurora(ts) {
    if (document.hidden) {
      raf = requestAnimationFrame(drawAurora);
      return;
    }
    if (lastTs && ts - lastTs < 33) {
      raf = requestAnimationFrame(drawAurora);
      return;
    }
    lastTs = ts;
    t += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    blobs.forEach(b => {
      const x = (b.x + Math.sin(t * b.speed * 1000) * .07) * canvas.width;
      const y = (b.y + Math.cos(t * b.speed * 800)  * .05) * canvas.height;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r);
      grad.addColorStop(0, `hsla(${b.hue}, 60%, 50%, .14)`);
      grad.addColorStop(1, `hsla(${b.hue}, 60%, 50%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(drawAurora);
  }
  raf = requestAnimationFrame(drawAurora);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
initAurora();

// =============================================
// PARTICLES — 16 max, optimized
// =============================================
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  if (prefersReducedMotion) return;
  // PHP authentic palette colors
  const colors = ['#7c8ec8','#38b2d4','#a5b4e8','#5fb08a'];
  const count = window.innerWidth < 768 ? 8 : 12;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*28+14}s;animation-delay:${Math.random()*22}s;`;
    container.appendChild(p);
  }
}
createParticles();

// =============================================
// COUNTER ANIMATION
// =============================================
function animateCounter(el) {
  const target = Number(el.dataset.target);
  if (!Number.isFinite(target)) return;
  const precision = Number.isFinite(Number(el.dataset.precision))
    ? Number(el.dataset.precision)
    : (Number.isInteger(target) ? 0 : 1);
  const duration = 2200;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    const current = eased * target;
    el.textContent = precision > 0
      ? current.toFixed(precision)
      : String(Math.round(current));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
const statsSection = document.querySelector('.hero-stats');
if (statsSection) counterObs.observe(statsSection);

// =============================================
// SKILLS BAR ANIMATION
// =============================================
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(fill => {
        setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, 200);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid) skillObs.observe(skillsGrid);

// =============================================
// HERO CODE WINDOW — SYNTAX HIGHLIGHTED
// =============================================
const HIGHLIGHTED_CODE_LINES = [
  `<span class="kw">&lt;?php</span>`,
  ``,
  `<span class="kw">declare</span>(<span class="fn">strict_types</span>=<span class="str">1</span>);`,
  ``,
  `<span class="kw">namespace</span> <span class="cls">App\\Services</span>;`,
  ``,
  `<span class="kw">readonly class</span> <span class="cls">UserService</span>`,
  `{`,
  `    <span class="kw">public function</span> <span class="fn">__construct</span>(`,
  `        <span class="kw">private</span> <span class="cls">UserRepository</span> <span class="var">$users</span>,`,
  `        <span class="kw">private</span> <span class="cls">Mailer</span> <span class="var">$mailer</span>,`,
  `        <span class="kw">private</span> <span class="cls">Logger</span> <span class="var">$log</span>`,
  `    ) {}`,
  ``,
  `    <span class="kw">public function</span> <span class="fn">register</span>(`,
  `        <span class="tp">string</span> <span class="var">$email</span>,`,
  `        <span class="tp">string</span> <span class="var">$password</span>`,
  `    ): <span class="cls">User</span> {`,
  `        <span class="var">$this</span>-><span class="fn">log</span>-><span class="fn">info</span>(<span class="str">"Register: $email"</span>);`,
  `        <span class="var">$user</span> = <span class="cls">User</span>::<span class="fn">create</span>(<span class="var">$email</span>, <span class="var">$password</span>);`,
  `        <span class="var">$this</span>-><span class="fn">users</span>-><span class="fn">save</span>(<span class="var">$user</span>);`,
  `        <span class="var">$this</span>-><span class="fn">mailer</span>-><span class="fn">sendWelcome</span>(<span class="var">$user</span>);`,
  `        <span class="kw">return</span> <span class="var">$user</span>;`,
  `    }`,
  `}`,
];

function initHeroCode() {
  const pre = document.getElementById('typingCode');
  const lineNumEl = document.getElementById('lineNumbers');
  if (!pre || !lineNumEl) return;
  pre.innerHTML = '';
  let lineIndex = 0;

  function revealNextLine() {
    if (lineIndex >= HIGHLIGHTED_CODE_LINES.length) {
      const cur = document.createElement('span');
      cur.className = 'cursor';
      pre.appendChild(cur);
      return;
    }
    const line = document.createElement('div');
    line.innerHTML = HIGHLIGHTED_CODE_LINES[lineIndex] || '&nbsp;';
    line.style.opacity = '0';
    line.style.transform = 'translateX(-6px)';
    line.style.transition = 'opacity .18s ease, transform .18s ease';
    pre.appendChild(line);
    requestAnimationFrame(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
    });
    lineIndex++;
    lineNumEl.innerHTML = Array.from({ length: lineIndex }, (_, i) => i + 1).join('<br/>');
    const delay = HIGHLIGHTED_CODE_LINES[lineIndex - 1] === '' ? 60 : 90 + Math.random() * 60;
    setTimeout(revealNextLine, delay);
  }

  setTimeout(revealNextLine, 700);
}
initHeroCode();


// =============================================
// TOAST NOTIFICATIONS
// =============================================
function showToast(message, iconName = 'checkCircle', color = '#34d399', duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon" style="color:${color}">${icon(iconName, { size: 16, color })}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// =============================================
// BOOKMARKS (localStorage)
// =============================================
let bookmarks = JSON.parse(localStorage.getItem('phpmastery-bookmarks') || '{}');

function saveBookmarks() {
  localStorage.setItem('phpmastery-bookmarks', JSON.stringify(bookmarks));
  updateBookmarkCount();
}
function updateBookmarkCount() {
  const count = Object.values(bookmarks).filter(Boolean).length;
  const badge = document.getElementById('bookmarkCount');
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent = count;
}
function isBookmarked(id) { return !!bookmarks[id]; }
function toggleBookmark(id, name) {
  bookmarks[id] = !bookmarks[id];
  saveBookmarks();
  if (bookmarks[id]) {
    showToast(`"${name}" bookmarked`, 'bookmarkFill', '#a78bfa');
    setJourneyIntent('bookmark', { itemId: id, itemName: name });
  } else {
    showToast('Removed from bookmarks', 'bookmark', '#9ca3af');
  }
  trackUXEvent('bookmark_toggled', { itemId: id, active: bookmarks[id] });
}
updateBookmarkCount();

// =============================================
// MODAL
// =============================================
const overlay      = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openModal(html) {
  modalContent.innerHTML = sanitizeHtmlFragment(html);
  hardenExternalLinks(modalContent);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// =============================================
// SEARCH
// =============================================
const searchOverlay = document.getElementById('searchOverlay');
const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchTrigger = document.getElementById('searchTrigger');

function buildSearchIndex() {
  const idx = [];
  COURSES_DATA.forEach(c => idx.push({ type: 'Course',   iconName: c.icon, iconColor: c.iconColor, iconBg: c.iconBg, title: c.title, desc: c.desc, action: () => showCourseModal(c.id) }));
  VIDEO_SOURCES_DATA.forEach((item, index) => idx.push({ type: 'Video Source', iconName: item.icon, iconColor: item.iconColor, iconBg: item.iconBg, title: `${item.source} (${item.scope})`, desc: item.focus, action: () => showVideoSourceModal(index) }));
  BOOKS_DATA.forEach((b, i) => idx.push({ type: 'Book', iconName: b.icon, iconColor: b.iconColor, iconBg: 'rgba(255,255,255,.08)', title: b.title, desc: b.desc, action: () => showBookModal(i) }));
  PRACTICES_DATA.forEach((p) => idx.push({ type: 'Practice', iconName: p.icon, iconColor: p.iconColor, iconBg: p.iconBg, title: p.title, desc: p.desc }));
  USECASES_DATA.forEach((u, i) => idx.push({ type: 'Use Case', iconName: u.logo, iconColor: u.iconColor, iconBg: u.bgColor, title: u.company, desc: u.desc, action: () => showUseCaseModal(i) }));
  MARKET_MAP_DATA.forEach((m) => idx.push({
    type: 'Market Map',
    iconName: 'briefcase',
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,.16)',
    title: m.role,
    desc: m.summary,
    action: () => scrollToSection('marketmap')
  }));
  PRELAUNCH_QA_CHECKLIST_DATA.forEach((item) => idx.push({
    type: 'QA Checklist',
    iconName: 'checkCircle',
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,.16)',
    title: `${item.area} QA`,
    desc: item.checks[0],
    action: () => scrollToSection('prelaunch')
  }));
  CLAIMS_AUDIT_DATA.forEach((item) => idx.push({
    type: 'Claims Audit',
    iconName: 'shield',
    iconColor: '#22d3ee',
    iconBg: 'rgba(6,182,212,.16)',
    title: item.claim,
    desc: `${item.value} · reviewed ${item.reviewedAt}`,
    action: () => scrollToSection('prelaunch')
  }));
  INTERVIEW_PLAYBOOKS_DATA.forEach((p) => idx.push({
    type: 'Playbook',
    iconName: p.icon,
    iconColor: p.iconColor,
    iconBg: p.iconBg,
    title: p.track,
    desc: p.focus,
    action: () => scrollToSection('playbooks')
  }));
  INTERVIEW_QA_DATA.forEach((q) => idx.push({
    type: 'Interview Q&A',
    iconName: 'target',
    iconColor: '#fbbf24',
    iconBg: 'rgba(245,158,11,.16)',
    title: q.question,
    desc: q.answer,
    action: () => scrollToSection('interviewqa')
  }));
  JOB_READY_ROADMAP_DATA.forEach((item) => idx.push({
    type: 'Job Plan',
    iconName: 'clock',
    iconColor: '#34d399',
    iconBg: 'rgba(16,185,129,.16)',
    title: `${item.week} - ${item.theme}`,
    desc: item.deliverable,
    action: () => scrollToSection('jobready')
  }));
  return idx;
}
let searchIndex = [];

function openSearch() {
  if (!searchIndex.length) searchIndex = buildSearchIndex();
  searchOverlay.classList.add('open');
  searchInput.focus();
  document.body.style.overflow = 'hidden';
  renderSearchResults('');
  setJourneyIntent('search', { source: 'open-search' });
  trackUXEvent('search_opened');
}
function closeSearch() {
  searchOverlay.classList.remove('open');
  searchInput.value = '';
  document.body.style.overflow = '';
}

searchTrigger.addEventListener('click', openSearch);
searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeSearch(); setMobileMenuOpen(false); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});
searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));

function renderSearchResults(query) {
  const q = query.toLowerCase().trim();
  if (q.length >= 2) {
    setJourneyIntent('search', { source: 'typing', queryLength: q.length });
    trackUXEvent('search_query', { queryLength: q.length });
  }
  if (!q) {
    searchResults.innerHTML = sanitizeHtmlFragment(`
      <div class="search-empty">
        <div class="search-empty-icon">${icon('search', { size: 36, color: '#4b5563' })}</div>
        <p>Type to search courses, books, practices, use cases…</p>
      </div>`);
    return;
  }
  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!matches.length) {
    searchResults.innerHTML = sanitizeHtmlFragment(`
      <div class="search-empty">
        <div class="search-empty-icon">${icon('alertTriangle', { size: 36, color: '#4b5563' })}</div>
        <p>No results for "<strong>${escapeHtml(query)}</strong>"</p>
      </div>`);
    return;
  }
  searchResults.innerHTML = sanitizeHtmlFragment(matches.map((item, i) => `
    <div class="search-result-item" id="sr-${i}">
      <div class="search-result-icon" style="background:${item.iconBg || 'rgba(139,92,246,.15)'}">
        ${icon(item.iconName, { size: 18, color: item.iconColor || '#a78bfa', noWrap: true })}
      </div>
      <div class="search-result-text">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.desc.slice(0, 80))}…</p>
      </div>
      <span class="search-result-type">${icon('arrowRight', { size: 14, color: '#6b7280', noWrap: true })} ${escapeHtml(item.type)}</span>
    </div>
  `).join(''));
  matches.forEach((item, i) => {
    document.getElementById(`sr-${i}`).addEventListener('click', () => {
      closeSearch();
      trackConversionGoal('search_result_open', { type: item.type, title: item.title });
      trackUXEvent('search_result_click', { type: item.type, title: item.title });
      if (item.action) setTimeout(item.action, 100);
    });
  });
}

// =============================================
// PHP TIMELINE DATA
// =============================================
const TIMELINE_DATA = [
  { version: 'PHP 1.0', year: '1994', iconName: 'seedling',   iconColor: '#34d399', iconBg: 'rgba(16,185,129,.18)', title: 'Personal Home Page Tools',     desc: 'Rasmus Lerdorf created PHP as a set of CGI scripts to track visits to his online résumé.',     features: ['CGI scripting','Form handling','Database interaction'] },
  { version: 'PHP 3.0', year: '1997', iconName: 'code',       iconColor: '#60a5fa', iconBg: 'rgba(59,130,246,.18)',  title: 'Reborn as a Real Language',   desc: 'Andi Gutmans and Zeev Suraski rewrote the parser. PHP became a proper scripting language.',    features: ['Extensible','OOP basics','Windows support'] },
  { version: 'PHP 4.0', year: '2000', iconName: 'cpu',        iconColor: '#fbbf24', iconBg: 'rgba(245,158,11,.18)',  title: 'Zend Engine 1.0',             desc: 'The Zend Engine was introduced and significantly improved performance for many workloads.', features: ['Zend Engine','Sessions','Output buffering'] },
  { version: 'PHP 5.0', year: '2004', iconName: 'layers',     iconColor: '#a78bfa', iconBg: 'rgba(139,92,246,.18)', title: 'Real Object-Oriented PHP',    desc: 'A complete overhaul of OOP support with interfaces, abstract classes, exceptions, PDO, and SPL.', features: ['Exceptions','Interfaces','PDO','SPL'] },
  { version: 'PHP 7.0', year: '2015', iconName: 'zap',        iconColor: '#f87171', iconBg: 'rgba(239,68,68,.18)',  title: 'Major Performance + Type System',     desc: 'Zend Engine 3 introduced substantial performance gains versus many PHP 5 workloads, plus scalar types and return type hints.', features: ['Scalar types','Return types','Null coalescing ??','Spaceship <=>'] },
  { version: 'PHP 8.0', year: '2020', iconName: 'lightning',  iconColor: '#fb923c', iconBg: 'rgba(249,115,22,.18)', title: 'JIT + Named Arguments',       desc: 'JIT compilation, union types, named arguments, match expression, attributes, nullsafe operators.', features: ['JIT Compiler','Named args','Match expr','Nullsafe ?.','Attributes'] },
  { version: 'PHP 8.1', year: '2021', iconName: 'target',     iconColor: '#22d3ee', iconBg: 'rgba(6,182,212,.18)',  title: 'Enums + Fibers + Readonly',   desc: 'Native Enums, readonly properties, Fibers for async, intersection types, callable syntax.', features: ['Native Enums','Fibers','Readonly','Intersection types'] },
  { version: 'PHP 8.2', year: '2022', iconName: 'lock',       iconColor: '#e879f9', iconBg: 'rgba(232,121,249,.18)', title: 'Readonly Classes + DNF Types', desc: 'Readonly classes, Disjunctive Normal Form types, true/false/null standalone types.', features: ['Readonly classes','DNF types','true/false types','Fibers improved'] },
  { version: 'PHP 8.3', year: '2023', iconName: 'zap',        iconColor: '#34d399', iconBg: 'rgba(16,185,129,.18)', title: 'Typed Class Constants',       desc: 'Typed class constants, json_validate(), Randomizer additions, dynamic class constant fetch.', features: ['Typed constants','json_validate()','Override attr','Deep cloning'] },
];

// =============================================
// CODE SNIPPETS DATA
// =============================================
const SNIPPETS_DATA = [
  {
    filename: 'UserRepository.php',
    code: `<?php\n\ndeclare(strict_types=1);\n\nnamespace App\\Repository;\n\nuse App\\Models\\User;\nuse App\\Contracts\\UserRepositoryInterface;\nuse App\\Database\\QueryBuilder;\n\nfinal class UserRepository implements UserRepositoryInterface\n{\n    public function __construct(\n        private readonly QueryBuilder $db\n    ) {}\n\n    public function findById(int $id): ?User\n    {\n        return $this->db\n            ->table('users')\n            ->where('id', $id)\n            ->first(User::class);\n    }\n\n    public function findByEmail(string $email): ?User\n    {\n        return $this->db\n            ->table('users')\n            ->where('email', $email)\n            ->first(User::class);\n    }\n\n    public function save(User $user): void\n    {\n        $this->db->upsert('users', $user->toArray(), ['id']);\n    }\n}`,
    explain: { title: 'Repository Pattern', iconName: 'database', iconColor: '#22d3ee', desc: 'Isolates data access logic from business logic. Services can stay decoupled from low-level database details.', points: ['Implements an interface — swap DB without changing service','final class prevents inheritance abuse','readonly DI — constructor injection enforced','Each method has one clear data responsibility'] }
  },
  {
    filename: 'JwtMiddleware.php',
    code: `<?php\n\ndeclare(strict_types=1);\n\nnamespace App\\Http\\Middleware;\n\nuse Firebase\\JWT\\JWT;\nuse Firebase\\JWT\\Key;\n\nfinal class JwtMiddleware\n{\n    public function __construct(\n        private readonly AuthService $auth,\n        private readonly string $secret\n    ) {}\n\n    public function __invoke(Request $req, callable $next): Response\n    {\n        $token = $this->extractToken($req);\n\n        if (!$token) {\n            return Response::json(['error' => 'Unauthorized'], 401);\n        }\n\n        try {\n            $payload = JWT::decode($token, new Key($this->secret, 'HS256'));\n            $user    = $this->auth->findById((int) $payload->sub);\n            $req->setUser($user);\n        } catch (\\Exception $e) {\n            return Response::json(['error' => 'Invalid token'], 401);\n        }\n\n        return $next($req);\n    }\n\n    private function extractToken(Request $req): ?string\n    {\n        $header = $req->header('Authorization', '');\n        if (str_starts_with($header, 'Bearer ')) {\n            return substr($header, 7);\n        }\n        return null;\n    }\n}`,
    explain: { title: 'JWT Auth Middleware', iconName: 'lock', iconColor: '#a78bfa', desc: 'A PSR-15 compatible middleware for validating JSON Web Tokens on protected routes.', points: ['Extracts Bearer token from Authorization header','Decodes and validates JWT signature','Attaches user to request for downstream handlers','Returns 401 on failures while avoiding detailed token leakage'] }
  },
  {
    filename: 'EventDispatcher.php',
    code: `<?php\n\ndeclare(strict_types=1);\n\nnamespace App\\Events;\n\nfinal class EventDispatcher\n{\n    /** @var array<string, callable[]> */\n    private array $listeners = [];\n\n    public function listen(string $event, callable $listener): void\n    {\n        $this->listeners[$event][] = $listener;\n    }\n\n    public function dispatch(object $event): void\n    {\n        $eventClass = get_class($event);\n\n        foreach ($this->listeners[$eventClass] ?? [] as $listener) {\n            $listener($event);\n\n            if ($event instanceof StoppableEventInterface\n                && $event->isPropagationStopped()) {\n                break;\n            }\n        }\n    }\n}\n\n// Usage:\n$dispatcher->listen(UserRegistered::class, function(UserRegistered $e) {\n    $mailer->send(new WelcomeEmail($e->user));\n});\n$dispatcher->dispatch(new UserRegistered($user));`,
    explain: { title: 'Event Dispatcher', iconName: 'broadcast', iconColor: '#f472b6', desc: 'Implements the Observer pattern for decoupled, event-driven architecture.', points: ['Zero coupling between event source and handlers','Multiple listeners per event','Supports propagation stopping','Fully type-safe with PHP 8'] }
  },
  {
    filename: 'OrderStatus.php',
    code: `<?php\n\ndeclare(strict_types=1);\n\nnamespace App\\Enums;\n\nenum OrderStatus: string\n{\n    case Pending    = 'pending';\n    case Processing = 'processing';\n    case Shipped    = 'shipped';\n    case Delivered  = 'delivered';\n    case Cancelled  = 'cancelled';\n\n    public function label(): string\n    {\n        return match($this) {\n            self::Pending    => 'Pending Payment',\n            self::Processing => 'Processing',\n            self::Shipped    => 'Shipped',\n            self::Delivered  => 'Delivered',\n            self::Cancelled  => 'Cancelled',\n        };\n    }\n\n    public function canTransitionTo(self $status): bool\n    {\n        return match($this) {\n            self::Pending    => in_array($status, [self::Processing, self::Cancelled]),\n            self::Processing => in_array($status, [self::Shipped,    self::Cancelled]),\n            self::Shipped    => $status === self::Delivered,\n            default          => false,\n        };\n    }\n}\n\n// Usage\n$order->status = OrderStatus::Processing;\necho $order->status->label();   // Processing\necho $order->status->value;     // 'processing'`,
    explain: { title: 'PHP 8.1+ Backed Enums', iconName: 'hash', iconColor: '#a5b4fc', desc: 'Backed enums replace string constants with type-safe, self-documenting state machines.', points: ['Stored as string in database (backed enum)','Business logic lives inside the enum','canTransitionTo() enforces valid state machine','Reduces invalid status values by constraining allowed cases'] }
  }
];

// =============================================
// DOCS CATEGORIES DATA
// =============================================
const DOCS_CATEGORIES_DATA = {
  'Core Language': [
    { iconName: 'php',      iconColor: '#a78bfa', bg: 'rgba(139,92,246,.14)', title: 'PHP.net Official Manual',  desc: 'Functions, classes, types, extensions, and migration guides.', type: 'Official', link: 'https://www.php.net/manual/en/' },
    { iconName: 'ruler',    iconColor: '#60a5fa', bg: 'rgba(59,130,246,.12)', title: 'PHP-FIG PSR Standards',    desc: 'PSR-4 autoloading, PSR-7 HTTP, PSR-12 code style, PSR-15 middleware.', type: 'Standards', link: 'https://www.php-fig.org/psr/' },
    { iconName: 'package',  iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'Composer Documentation',   desc: 'Dependency management, autoloading strategies, and plugins.', type: 'Tool', link: 'https://getcomposer.org/doc/' },
    { iconName: 'globe',    iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)',  title: 'PHP The Right Way',        desc: 'Community best practice guide: security, testing, deployment.', type: 'Guide', link: 'https://phptherightway.com/' },
  ],
  'Frameworks': [
    { iconName: 'lightning',iconColor: '#f87171', bg: 'rgba(239,68,68,.12)',  title: 'Laravel Documentation',    desc: 'Eloquent, queues, events, Sanctum, Telescope, Octane.', type: 'Framework', link: 'https://laravel.com/docs' },
    { iconName: 'music',    iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'Symfony Documentation',    desc: 'Components, bundles, DI container, Doctrine, Messenger.', type: 'Framework', link: 'https://symfony.com/doc/current/' },
    { iconName: 'api',      iconColor: '#a5b4fc', bg: 'rgba(99,102,241,.12)', title: 'API Platform',             desc: 'REST + GraphQL APIs in Symfony/PHP with minimal code.', type: 'Framework', link: 'https://api-platform.com/docs/' },
    { iconName: 'component',iconColor: '#fbbf24', bg: 'rgba(245,158,11,.12)', title: 'Slim Framework',           desc: 'Micro-framework for simple REST APIs and middleware chains.', type: 'Framework', link: 'https://www.slimframework.com/docs/v4/' },
  ],
  'Testing & Quality': [
    { iconName: 'checkCircle', iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'PHPUnit Documentation', desc: 'Assertions, data providers, mocking, code coverage.', type: 'Testing', link: 'https://phpunit.readthedocs.io/' },
    { iconName: 'testTube',    iconColor: '#fbbf24', bg: 'rgba(245,158,11,.12)', title: 'Pest PHP Docs',         desc: 'Expressive, readable PHP testing framework.', type: 'Testing', link: 'https://pestphp.com/docs' },
    { iconName: 'scan',        iconColor: '#a5b4fc', bg: 'rgba(99,102,241,.12)', title: 'PHPStan',               desc: 'Static analysis — find bugs without running code.', type: 'Analysis', link: 'https://phpstan.org/user-guide/getting-started' },
    { iconName: 'ruler',       iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)',  title: 'PHP-CS-Fixer',          desc: 'Auto-format code to PSR-12 standards.', type: 'Tool', link: 'https://cs.symfony.com/' },
  ],
  'Databases & Infrastructure': [
    { iconName: 'database',  iconColor: '#f87171', bg: 'rgba(239,68,68,.12)',  title: 'MySQL Reference Manual', desc: 'SQL syntax, optimization, replication, security.', type: 'Database', link: 'https://dev.mysql.com/doc/refman/8.0/en/' },
    { iconName: 'activity',  iconColor: '#f87171', bg: 'rgba(220,38,38,.12)',  title: 'Redis Documentation',    desc: 'Commands, data types, Pub/Sub, clustering, persistence.', type: 'Database', link: 'https://redis.io/docs/' },
    { iconName: 'docker',    iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)', title: 'Docker for PHP',          desc: 'PHP-specific Docker config, multi-stage builds, Compose.', type: 'DevOps', link: 'https://docs.docker.com/' },
    { iconName: 'layers',    iconColor: '#fbbf24', bg: 'rgba(245,158,11,.12)', title: 'Doctrine ORM',           desc: 'Entities, repositories, DQL, migrations, relationships.', type: 'ORM', link: 'https://www.doctrine-project.org/projects/doctrine-orm/en/3.2/index.html' },
  ],
  'Security & Best Practices': [
    { iconName: 'shield',    iconColor: '#a78bfa', bg: 'rgba(139,92,246,.12)', title: 'OWASP PHP Security Guide', desc: 'XSS, CSRF, SQL injection, session management cheatsheets.', type: 'Security', link: 'https://cheatsheetseries.owasp.org/' },
    { iconName: 'package',   iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'Packagist',               desc: 'Official public registry for PHP packages, versions, and metadata.', type: 'Registry', link: 'https://packagist.org/' },
    { iconName: 'server',    iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)',  title: 'Nginx PHP-FPM Guide',     desc: 'Server blocks, FastCGI, performance tuning, SSL.', type: 'Server', link: 'https://nginx.org/en/docs/' },
    { iconName: 'gitMerge',  iconColor: '#a5b4fc', bg: 'rgba(99,102,241,.12)', title: 'GitHub Actions for PHP', desc: 'CI/CD pipelines, matrix builds, deploying PHP apps.', type: 'CI/CD', link: 'https://docs.github.com/en/actions' },
  ],
  'Architecture & Design Patterns': [
    { iconName: 'layers',    iconColor: '#a78bfa', bg: 'rgba(139,92,246,.12)', title: 'Refactoring.Guru (PHP Patterns)', desc: 'Practical pattern catalog with PHP examples: Strategy, Adapter, Factory, Observer, and more.', type: 'Patterns', link: 'https://refactoring.guru/design-patterns/php' },
    { iconName: 'workflow',  iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'Martin Fowler Architecture', desc: 'Authoritative articles on architecture patterns, trade-offs, and enterprise design decisions.', type: 'Architecture', link: 'https://martinfowler.com/architecture/' },
    { iconName: 'component', iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)',  title: 'PSR-11 Container Interface', desc: 'Standard contract for dependency containers used in modern PHP frameworks.', type: 'Standard', link: 'https://www.php-fig.org/psr/psr-11/' },
    { iconName: 'broadcast', iconColor: '#fbbf24', bg: 'rgba(245,158,11,.12)', title: 'PSR-14 Event Dispatcher', desc: 'Standard event-dispatching pattern for decoupled, event-driven application design.', type: 'Standard', link: 'https://www.php-fig.org/psr/psr-14/' },
  ],
  'Interview-Ready (Verified)': [
    { iconName: 'shield', iconColor: '#34d399', bg: 'rgba(16,185,129,.12)', title: 'PHP Supported Versions', desc: 'Official lifecycle policy: active support, security-only support, and end-of-life windows.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://www.php.net/supported-versions.php' },
    { iconName: 'rocket', iconColor: '#a78bfa', bg: 'rgba(139,92,246,.12)', title: 'PHP 8.3 -> 8.4 Migration Guide', desc: 'Real backward-compatibility and upgrade checklist from official PHP docs.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://www.php.net/manual/en/migration84.php' },
    { iconName: 'barChart', iconColor: '#22d3ee', bg: 'rgba(6,182,212,.12)', title: 'MySQL EXPLAIN / EXPLAIN ANALYZE', desc: 'Execution plans, join order, index usage, and runtime analysis from MySQL reference manual.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://dev.mysql.com/doc/refman/8.0/en/explain.html' },
    { iconName: 'database', iconColor: '#fbbf24', bg: 'rgba(245,158,11,.12)', title: 'InnoDB Transaction Model', desc: 'Isolation levels, autocommit, locking reads, and consistent reads in production scenarios.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-model.html' },
    { iconName: 'component', iconColor: '#f87171', bg: 'rgba(239,68,68,.12)', title: 'Laravel Query Builder', desc: 'PDO parameter binding behavior, query safety, and performance-oriented query patterns.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://laravel.com/docs/12.x/queries' },
    { iconName: 'activity', iconColor: '#60a5fa', bg: 'rgba(59,130,246,.12)', title: 'Laravel Deployment', desc: 'Production deployment baseline: cache commands, APP_DEBUG rules, health route, and server config.', type: 'Interview Core', trust: 'Tier-1 Official', link: 'https://laravel.com/docs/12.x/deployment' },
    { iconName: 'alertTriangle', iconColor: '#f472b6', bg: 'rgba(236,72,153,.12)', title: 'OWASP SQL Injection Prevention', desc: 'Prepared statements, allow-list validation, and least-privilege guidance used in real audits.', type: 'Security', trust: 'OWASP Standard', link: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
  ],
};

// =============================================
// HELPER — LEVEL BADGE
// =============================================
function getLevelClass(level) { return `level-${level}`; }

// =============================================
// RENDER: COURSES
// =============================================
function renderCourses(filter = 'all') {
  const grid = document.getElementById('coursesGrid');
  const counts = {
    all: COURSES_DATA.length,
    beginner: COURSES_DATA.filter(c => c.level === 'beginner').length,
    intermediate: COURSES_DATA.filter(c => c.level === 'intermediate').length,
    advanced: COURSES_DATA.filter(c => c.level === 'advanced').length,
    framework: COURSES_DATA.filter(c => c.level === 'framework').length,
  };

  Object.entries(counts).forEach(([key, value]) => {
    const el = document.querySelector(`[data-filter-count="${key}"]`);
    if (el) el.textContent = String(value);
  });

  const filtered = filter === 'all' ? COURSES_DATA : COURSES_DATA.filter(c => c.level === filter);
  const resultCount = document.getElementById('coursesResultCount');
  if (resultCount) {
    resultCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'course' : 'courses'}`;
  }

  grid.innerHTML = filtered.map((c, i) => `
    <div class="course-card reveal" onclick="showCourseModal(${c.id})" id="course-${c.id}">
      <div class="course-rank">${String(i + 1).padStart(2, '0')}</div>
      <div class="course-header">
        <div class="course-top">
          <span class="course-icon-wrap">${iconBadge(c.icon, { bg: c.iconBg, color: c.iconColor, size: 26, badgeSize: 56, radius: '16px' })}</span>
          <span class="course-level ${getLevelClass(c.level)}">${c.levelLabel}</span>
        </div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
      <div class="course-body">
        <div class="course-meta">
          <div class="meta-item">${icon('bookOpen', { size: 13, color: '#6b7280' })} ${c.lessons} Lessons</div>
          <div class="meta-dot"></div>
          <div class="meta-item">${icon('clock', { size: 13, color: '#6b7280' })} ${c.hours} total</div>
        </div>
        <div class="course-topics">
          ${c.topics.slice(0, 5).map(t => `<span class="topic-tag">${t}</span>`).join('')}
          ${c.topics.length > 5 ? `<span class="topic-tag">+${c.topics.length - 5}</span>` : ''}
        </div>
      </div>
      <div class="course-footer">
        <span class="course-cta">View Syllabus ${icon('arrowRight', { size: 13, color: 'var(--clr-accent1)', noWrap: true })}</span>
        <button class="course-bookmark ${isBookmarked('course-'+c.id)?'bookmarked':''}" data-course-id="${c.id}" title="Bookmark course">
          ${isBookmarked('course-'+c.id) ? icon('bookmarkFill',{size:15,color:'#a78bfa',noWrap:true}) : icon('bookmark',{size:15,color:'#6b7280',noWrap:true})}
        </button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.course-bookmark').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const id = Number(btn.getAttribute('data-course-id'));
      const course = COURSES_DATA.find(item => item.id === id);
      if (!course) return;
      toggleBookmark(`course-${id}`, course.title);
      btn.classList.toggle('bookmarked', isBookmarked(`course-${id}`));
      btn.innerHTML = isBookmarked(`course-${id}`)
        ? icon('bookmarkFill',{size:15,color:'#a78bfa',noWrap:true})
        : icon('bookmark',{size:15,color:'#6b7280',noWrap:true});
    });
  });

  registerRevealElements(grid);
  addCardTilt('.course-card');
}

function showCourseModal(id) {
  const c = COURSES_DATA.find(x => x.id === id);
  if (!c) return;
  trackConversionGoal('course_open', { courseId: id, level: c.level });
  openModal(`
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
      ${iconBadge(c.icon, { bg: c.iconBg, color: c.iconColor, size: 30, badgeSize: 64, radius: '16px' })}
      <div>
        <span class="course-level ${getLevelClass(c.level)}" style="display:inline-block;margin-bottom:6px">${c.levelLabel}</span>
        <h2 style="margin:0">${c.title}</h2>
      </div>
    </div>
    <p>${c.details.overview}</p>
    <div class="modal-tag-row">${c.topics.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    <h3 style="font-size:.9rem;color:var(--clr-text-muted);margin:18px 0 10px;display:flex;align-items:center;gap:6px">
      ${icon('fileText', { size: 14, color: 'var(--clr-accent1)' })} Syllabus (${c.lessons} Lessons · ${c.hours})
    </h3>
    <ul>${c.details.syllabus.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3 style="font-size:.9rem;color:var(--clr-text-muted);margin:16px 0 10px;display:flex;align-items:center;gap:6px">
      ${icon('externalLink', { size: 14, color: 'var(--clr-accent2)' })} Official Resources
    </h3>
    ${c.details.resources.map(r => `<a href="${r}" target="_blank" rel="noopener noreferrer" class="modal-link">↗ ${r}</a><br/>`).join('')}
  `);
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.dataset.filter);
    setJourneyIntent('course-filter', { filter: btn.dataset.filter });
    trackUXEvent('course_filter_changed', { filter: btn.dataset.filter });
  });
});

// =============================================
// RENDER: BOOKS
// =============================================
function renderBooks() {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = BOOKS_DATA.map((b, i) => `
    <div class="book-card reveal spotlight-card" id="book-${i}">
      <div class="book-cover icon-floating" style="background:${b.bgColor}">
        ${icon(b.icon, { size: 40, color: 'rgba(255,255,255,.9)', noWrap: true })}
      </div>
      <div class="book-info">
        <h3>${b.title}</h3>
        <div class="book-author">${b.author} · ${b.edition}</div>
        <div class="book-desc">${b.desc}</div>
        <div class="book-tags">${b.tags.map(t => `<span class="book-tag">${t}</span>`).join('')}</div>
        <div class="book-footer">
          <div class="book-rating">${starRating(b.starCount)}</div>
          <button class="book-read-btn" onclick="showBookModal(${i})">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

function renderVideoSources() {
  const grid = document.getElementById('instructorsGrid');
  if (!grid) return;

  grid.innerHTML = VIDEO_SOURCES_DATA.map((item, i) => `
    <article class="instructor-card reveal spotlight-card" id="video-source-${i}" onclick="showVideoSourceModal(${i})">
      <div class="instructor-head">
        ${iconBadge(item.icon, { bg: item.iconBg, color: item.iconColor, size: 24, badgeSize: 52, radius: '14px' })}
        <div>
          <h3>${item.source}</h3>
          <p class="instructor-meta">${item.presenter} · ${item.scope}</p>
        </div>
      </div>
      <p class="instructor-focus">${item.focus}</p>
      <p class="instructor-desc">${item.desc}</p>
      <div class="instructor-tags">${item.tags.map(tag => `<span class="instructor-tag">${tag}</span>`).join('')}</div>
      <div class="instructor-links">
        ${item.links.slice(0, 2).map(link => `<a href="${link.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">↗ ${link.label}</a>`).join('')}
      </div>
      <p class="modal-source-note" style="margin-top:10px">Reviewed: ${item.lastReviewed}</p>
    </article>
  `).join('');

  registerRevealElements(grid);
}

function showVideoSourceModal(index) {
  const item = VIDEO_SOURCES_DATA[index];
  if (!item) return;

  openModal(`
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
      ${iconBadge(item.icon, { bg: item.iconBg, color: item.iconColor, size: 30, badgeSize: 62, radius: '16px' })}
      <div>
        <h2 style="margin:0">${item.source}</h2>
        <p style="margin:4px 0 0;color:var(--clr-text-muted)">${item.presenter} · ${item.scope}</p>
      </div>
    </div>
    <p><strong>Focus:</strong> ${item.focus}</p>
    <p>${item.desc}</p>
    <div class="modal-tag-row">${item.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}</div>
    <h3 style="font-size:.9rem;color:var(--clr-text-muted);margin:16px 0 10px;display:flex;align-items:center;gap:6px">
      ${icon('externalLink', { size: 14, color: 'var(--clr-accent2)' })} Official Source Links
    </h3>
    ${item.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener" class="modal-link">↗ ${link.label}</a><br/>`).join('')}
    <div style="margin-top:14px;padding:12px;border:1px solid var(--clr-border);border-radius:10px;background:var(--clr-bg)">
      <p class="modal-source-note" style="margin:0 0 4px">Last Reviewed: <strong style="color:var(--clr-text)">${item.lastReviewed}</strong></p>
      <p class="modal-source-note" style="margin:0">Verification: ${item.verificationNote}</p>
    </div>
  `);
}

function showBookModal(i) {
  const b = BOOKS_DATA[i];
  trackConversionGoal('book_open', { index: i, title: b.title });
  openModal(`
    <div style="display:flex;gap:20px;margin-bottom:20px;align-items:flex-start">
      <div style="background:${b.bgColor};width:90px;height:120px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:4px 8px 24px rgba(0,0,0,.4)">
        ${icon(b.icon, { size: 44, color: 'rgba(255,255,255,.92)', noWrap: true })}
      </div>
      <div>
        <h2 style="margin-bottom:6px">${b.title}</h2>
        <div style="color:var(--clr-text-muted);font-size:.9rem;margin-bottom:8px">${b.author} · ${b.edition}</div>
        <div style="margin-bottom:10px">${starRating(b.starCount)}</div>
        <div class="modal-tag-row" style="margin:0">${b.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
    <p>${b.details}</p>
    <p>${b.desc}</p>
    <a href="${b.link}" target="_blank" rel="noopener noreferrer" class="modal-link">↗ View / Get This Book</a>
  `);
}

// =============================================
// RENDER: PROJECTS
// =============================================
const PROJECT_STACK_REFERENCE_MAP = {
  'PHP': { label: 'PHP Manual', url: 'https://www.php.net/manual/en/' },
  'PHP 8.3': { label: 'PHP 8.3 Migration Notes', url: 'https://www.php.net/manual/en/migration83.php' },
  'Laravel': { label: 'Laravel Documentation', url: 'https://laravel.com/docs' },
  'Symfony': { label: 'Symfony Documentation', url: 'https://symfony.com/doc/current/' },
  'MySQL': { label: 'MySQL 8 Reference Manual', url: 'https://dev.mysql.com/doc/refman/8.0/en/' },
  'PDO': { label: 'PHP PDO Manual', url: 'https://www.php.net/manual/en/book.pdo.php' },
  'Redis': { label: 'Redis Documentation', url: 'https://redis.io/docs/' },
  'Docker': { label: 'Docker Documentation', url: 'https://docs.docker.com/' },
  'Stripe': { label: 'Stripe API Docs', url: 'https://docs.stripe.com/api' },
  'Stripe API': { label: 'Stripe API Docs', url: 'https://docs.stripe.com/api' },
  'RabbitMQ': { label: 'RabbitMQ Documentation', url: 'https://www.rabbitmq.com/docs' },
  'PostgreSQL': { label: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/' },
  'Elasticsearch': { label: 'Elasticsearch Guide', url: 'https://www.elastic.co/guide/' },
  'Twilio SMS': { label: 'Twilio Messaging Docs', url: 'https://www.twilio.com/docs/messaging' },
  'S3': { label: 'Amazon S3 Documentation', url: 'https://docs.aws.amazon.com/s3/' },
  'Nginx': { label: 'Nginx Documentation', url: 'https://nginx.org/en/docs/' },
  'WebSockets': { label: 'RFC 6455 WebSocket Protocol', url: 'https://datatracker.ietf.org/doc/html/rfc6455' },
};

function getProjectReferences(project) {
  const explicit = Array.isArray(project.references) ? project.references : [];
  const inferred = (project.stack || [])
    .map(item => PROJECT_STACK_REFERENCE_MAP[item])
    .filter(Boolean)
    .map(ref => ({ label: ref.label, url: ref.url }));

  const merged = [...explicit, ...inferred];
  const seen = new Set();
  return merged.filter(ref => {
    const key = `${ref.label}|${ref.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function openProjectByRef(projectRef) {
  if (!projectRef || !projectRef.tab || !projectRef.title) return;
  const tab = projectRef.tab;
  const list = PROJECTS_DATA[tab] || [];
  const index = list.findIndex(item => item.title === projectRef.title);
  if (index < 0) return;

  const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (tabBtn) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');
  }
  renderProjects(tab);
  showProjectModal(tab, index);
}

function renderMarketMap() {
  const grid = document.getElementById('marketMapGrid');
  if (!grid) return;

  grid.innerHTML = MARKET_MAP_DATA.map((role) => `
    <article class="market-role-card reveal spotlight-card">
      <div class="market-role-head">
        <div class="market-role-badge">${iconBadge('briefcase', { bg: 'rgba(16,185,129,.16)', color: '#34d399', size: 22, badgeSize: 48, radius: '12px' })}</div>
        <div>
          <h3>${role.role}</h3>
          <p>${role.level}</p>
        </div>
      </div>
      <p class="market-signal">${role.marketSignal}</p>
      <p class="market-summary">${role.summary}</p>

      <div class="market-block">
        <h4>Skills Checklist</h4>
        <ul class="market-checklist">
          ${role.skills.map(skill => `<li>${icon('checkCircle', { size: 14, color: '#34d399' })}<span>${skill}</span></li>`).join('')}
        </ul>
      </div>

      <div class="market-block">
        <h4>Recommended Courses</h4>
        <div class="market-actions">
          ${role.courseIds.map(courseId => {
            const course = COURSES_DATA.find(item => item.id === courseId);
            if (!course) return '';
            return `<button class="market-chip-btn" type="button" onclick="showCourseModal(${course.id})">${course.title}</button>`;
          }).join('')}
        </div>
      </div>

      <div class="market-block">
        <h4>Portfolio Projects</h4>
        <div class="market-actions">
          ${role.projectRefs.map(projectRef => `<button class="market-chip-btn" type="button" onclick='openProjectByRef(${JSON.stringify(projectRef)})'>${projectRef.title}</button>`).join('')}
        </div>
      </div>

      <div class="market-refs">
        <h4>Official References</h4>
        ${role.references.map(ref => `<a href="${ref.url}" target="_blank" rel="noopener">↗ ${ref.label}</a>`).join('')}
      </div>
    </article>
  `).join('');

  registerRevealElements(grid);
}

function renderPrelaunchQa() {
  const checklistGrid = document.getElementById('qaChecklistGrid');
  const claimsGrid = document.getElementById('claimsAuditGrid');
  if (!checklistGrid || !claimsGrid) return;

  checklistGrid.innerHTML = PRELAUNCH_QA_CHECKLIST_DATA.map(item => `
    <article class="qa-card reveal spotlight-card">
      <div class="qa-card-head">
        ${iconBadge(item.status === 'pass' ? 'checkCircle' : 'alertTriangle', { bg: item.status === 'pass' ? 'rgba(16,185,129,.16)' : 'rgba(239,68,68,.16)', color: item.status === 'pass' ? '#34d399' : '#f87171', size: 20, badgeSize: 44, radius: '12px' })}
        <div>
          <h3>${item.area}</h3>
          <p>${item.status === 'pass' ? 'Pass' : 'Needs review'}</p>
        </div>
      </div>
      <ul class="qa-checks">
        ${item.checks.map(check => `<li>${icon('checkCircle', { size: 13, color: '#34d399' })}<span>${check}</span></li>`).join('')}
      </ul>
    </article>
  `).join('');

  claimsGrid.innerHTML = `
    <article class="claims-card reveal spotlight-card">
      <div class="claims-head">
        ${iconBadge('shield', { bg: 'rgba(6,182,212,.16)', color: '#22d3ee', size: 20, badgeSize: 44, radius: '12px' })}
        <div>
          <h3>Claims Audit Log</h3>
          <p>Last integrity pass: 2026-04-10</p>
        </div>
      </div>
      <div class="claims-items">
        ${CLAIMS_AUDIT_DATA.map(item => `
          <div class="claim-row">
            <div class="claim-main">
              <h4>${item.claim}</h4>
              <p>${item.note}</p>
            </div>
            <div class="claim-meta">
              <span class="claim-value">${item.value}</span>
              <span class="claim-date">Reviewed: ${item.reviewedAt}</span>
              <a href="${item.sourceUrl}" target="_blank" rel="noopener">${item.sourceLabel}</a>
            </div>
          </div>
        `).join('')}
      </div>
    </article>
  `;

  registerRevealElements(checklistGrid);
  registerRevealElements(claimsGrid);
}

function renderVerificationBadge() {
  const badge = document.getElementById('verificationBadge');
  if (!badge) return;
  const textEl = badge.querySelector('.vb-text');
  if (!textEl) return;

  const reviewedDates = CLAIMS_AUDIT_DATA
    .map(item => item.reviewedAt)
    .map(dateStr => new Date(`${dateStr}T00:00:00Z`))
    .filter(date => !Number.isNaN(date.getTime()));

  if (!reviewedDates.length) {
    badge.classList.add('vb-stale');
    textEl.textContent = 'Last Verification: unknown';
    return;
  }

  const latest = new Date(Math.max(...reviewedDates.map(d => d.getTime())));
  const todayUtc = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const ageDays = Math.floor((Date.UTC(todayUtc.getUTCFullYear(), todayUtc.getUTCMonth(), todayUtc.getUTCDate()) - Date.UTC(latest.getUTCFullYear(), latest.getUTCMonth(), latest.getUTCDate())) / dayMs);

  badge.classList.remove('vb-fresh', 'vb-warn', 'vb-stale');

  if (ageDays > 30) {
    badge.classList.add('vb-stale');
  } else if (ageDays > 20) {
    badge.classList.add('vb-warn');
  } else {
    badge.classList.add('vb-fresh');
  }

  textEl.textContent = `Last Verification: ${latest.toISOString().slice(0, 10)} (${ageDays}d ago)`;
}

const FACT_SOURCE_MAP = [
  { pattern: /w3techs|known server-side/i, label: 'W3Techs', url: 'https://w3techs.com/technologies/details/pl-php' },
  { pattern: /wordpress/i, label: 'WordPress.org', url: 'https://wordpress.org/about/' },
  { pattern: /packagist|packages|versions|installs/i, label: 'Packagist Statistics', url: 'https://packagist.org/statistics' },
  { pattern: /symfony/i, label: 'Symfony', url: 'https://symfony.com/' },
  { pattern: /laravel/i, label: 'Laravel', url: 'https://laravel.com/' },
  { pattern: /jit|release notes|php 8/i, label: 'PHP 8 Release Notes', url: 'https://www.php.net/releases/8.0/en.php' },
  { pattern: /eol|supported versions|branch/i, label: 'PHP Supported Versions', url: 'https://www.php.net/supported-versions.php' },
  { pattern: /mediawiki|wikipedia/i, label: 'MediaWiki', url: 'https://www.mediawiki.org/wiki/MediaWiki' },
];

function detectFactSource(text) {
  return FACT_SOURCE_MAP.find(item => item.pattern.test(text)) || null;
}

function applyStrictFactMode() {
  document.querySelectorAll('.ticker-item').forEach(item => {
    const existing = item.querySelector('.strict-source-inline');
    if (existing) return;

    const text = item.textContent || '';
    const hasNumber = /\d/.test(text);
    if (!hasNumber) return;

    const source = detectFactSource(text);
    if (!source) return;

    const suffix = document.createElement('span');
    suffix.className = 'strict-source-inline';
    suffix.innerHTML = `As reported by <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>`;
    item.appendChild(suffix);
  });

  document.querySelectorAll('.cst-item').forEach(item => {
    const sub = item.querySelector('.cst-sub');
    if (!sub) return;
    const text = sub.textContent || '';
    const source = detectFactSource(text);
    if (!source) return;
    if (sub.querySelector('a')) return;
    sub.innerHTML = `As reported by <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>`;
  });
}

function getProjectGithubUrl(project) {
  if (!project || typeof project.github !== 'string') return null;
  const url = project.github.trim();
  if (!url) return null;
  if (!/^https:\/\/github\.com\//i.test(url)) return null;
  return url;
}

function renderProjects(tab = 'practice') {
  const grid = document.getElementById('projectsGrid');
  const items = PROJECTS_DATA[tab] || [];
  grid.innerHTML = items.map((p, i) => `
    <div class="project-card reveal spotlight-card" id="proj-${tab}-${i}" onclick="showProjectModal('${tab}',${i})">
      <div class="project-card-banner" style="background:${p.banner}">
        <div class="project-banner-icon icon-bounce">${iconBadge(p.icon, { bg: 'rgba(255,255,255,.15)', color: 'white', size: 28, badgeSize: 56, radius: '14px' })}</div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <span class="project-difficulty diff-${p.difficulty}">${p.diffLabel}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
        <div class="project-links">
          <button class="project-btn primary" onclick="event.stopPropagation();showProjectModal('${tab}',${i})">View Details</button>
          ${getProjectGithubUrl(p)
            ? `<a class="project-btn secondary" href="${getProjectGithubUrl(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Project Repository ↗</a>`
            : `<button class="project-btn secondary project-btn-disabled" type="button" onclick="event.stopPropagation()" aria-disabled="true" title="Exact official repository for this project is not set">Project Repository: Not Set</button>`}
        </div>
      </div>
    </div>
  `).join('');
  registerRevealElements(grid);
  addCardTilt('.project-card');
}

function showProjectModal(tab, i) {
  const p = PROJECTS_DATA[tab][i];
  const references = getProjectReferences(p);
  const githubUrl = getProjectGithubUrl(p);
  trackConversionGoal('project_open', { tab, index: i, title: p.title });
  openModal(`
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
      ${iconBadge(p.icon, { bg: p.iconBg, color: p.iconColor, size: 32, badgeSize: 64, radius: '16px' })}
      <div>
        <span class="project-difficulty diff-${p.difficulty}" style="display:inline-block;margin-bottom:6px">${p.diffLabel}</span>
        <h2 style="margin:0">${p.title}</h2>
      </div>
    </div>
    <p>${p.detail}</p>
    <p>${p.desc}</p>
    <div class="modal-tag-row">${p.stack.map(s => `<span class="modal-tag">${s}</span>`).join('')}</div>
    ${references.length ? `
      <h3 style="font-size:.9rem;color:var(--clr-text-muted);margin:16px 0 10px;display:flex;align-items:center;gap:6px">
        ${icon('externalLink', { size: 14, color: 'var(--clr-accent2)' })} Trusted References
      </h3>
      ${references.slice(0, 6).map(ref => `<a href="${ref.url}" target="_blank" rel="noopener" class="modal-link">↗ ${ref.label}</a><br/>`).join('')}
    ` : ''}
    ${githubUrl
      ? `<a href="${githubUrl}" target="_blank" rel="noopener" class="modal-link" style="margin-top:12px;display:inline-flex">↗ Official Project Repository</a>`
      : `<p class="modal-source-note" style="margin-top:12px">Official repository link is intentionally hidden until an exact project repository is provided.</p>`}
    <div style="margin-top:16px;padding:16px;background:var(--clr-bg);border-radius:10px;border:1px solid var(--clr-border);display:flex;gap:10px;align-items:flex-start">
      ${icon('trendingUp', { size: 18, color: '#34d399' })}
      <p style="margin:0;font-size:.86rem;color:var(--clr-text-muted)">This project maps directly to course modules. Each feature you build is grounded in a specific lesson.</p>
    </div>
  `);
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.tab);
  });
});

// =============================================
// RENDER: BEST PRACTICES
// =============================================
function renderPractices() {
  const grid = document.getElementById('practicesGrid');
  grid.innerHTML = PRACTICES_DATA.map((p, i) => `
    <div class="practice-card reveal spotlight-card" id="practice-${i}">
      <div class="practice-glow"></div>
      <div class="practice-icon-wrap icon-swing">${iconBadge(p.icon, { bg: p.iconBg, color: p.iconColor, size: 22, badgeSize: 48, radius: '12px' })}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="practice-code">${p.code}</div>
      <div class="practice-tags">${p.tags.map(t => `<span class="practice-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

// =============================================
// RENDER: USE CASES
// =============================================
function renderUseCases() {
  const grid = document.getElementById('usecasesGrid');
  grid.innerHTML = USECASES_DATA.map((u, i) => `
    <div class="usecase-card reveal spotlight-card" id="usecase-${i}" onclick="showUseCaseModal(${i})">
      <div class="usecase-company">
        <div class="company-logo icon-spin" style="background:${u.bgColor}">
          ${icon(u.logo, { size: 28, color: u.iconColor, noWrap: true })}
        </div>
        <div>
          <div class="company-name">${u.company}</div>
          <div class="company-scale">${u.scale}</div>
        </div>
      </div>
      <p>${u.desc}</p>
      <div class="fact-source-inline">
        ${icon('externalLink', { size: 12, color: 'var(--clr-accent2)', noWrap: true })}
        <a href="${u.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Source: ${u.sourceLabel || 'Reference'}</a>
      </div>
      ${(u.claimType || u.lastReviewed) ? `
      <div class="fact-source-inline" style="margin-top:8px;gap:8px;flex-wrap:wrap">
        ${u.claimType ? `<span class="topic-tag" style="font-size:.68rem;padding:4px 8px">Claim: ${u.claimType === 'dynamic' ? 'Dynamic' : 'Static'}</span>` : ''}
        ${u.lastReviewed ? `<span style="font-size:.72rem;color:var(--clr-text-muted)">Reviewed: ${u.lastReviewed}</span>` : ''}
      </div>
      ` : ''}
      <div class="usecase-highlights">
        ${u.highlights.map(h => `
          <div class="highlight-item">
            ${icon('arrowRight', { size: 12, color: 'var(--clr-accent2)' })}
            <span>${h}</span>
          </div>`).join('')}
      </div>
      <div class="usecase-tech">${u.tech.map(t => `<span class="usecase-tech-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

function showUseCaseModal(i) {
  const u = USECASES_DATA[i];
  trackConversionGoal('usecase_open', { index: i, company: u.company });
  openModal(`
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
      <div style="width:64px;height:64px;border-radius:16px;background:${u.bgColor};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${icon(u.logo, { size: 30, color: u.iconColor, noWrap: true })}
      </div>
      <div>
        <h2 style="margin:0">${u.company}</h2>
        <div style="font-size:.82rem;color:var(--clr-text-muted);margin-top:4px">${u.scale}</div>
      </div>
    </div>
    <p>${u.desc}</p>
    <ul>${u.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    <div class="modal-tag-row">${u.tech.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    <p class="modal-source-note">Source: <a href="${u.link}" target="_blank" rel="noopener">${u.sourceLabel || 'Reference'}</a></p>
    ${(u.claimType || u.lastReviewed || u.verificationNote) ? `
    <div style="margin-top:12px;padding:12px;border:1px solid var(--clr-border);background:var(--clr-bg);border-radius:10px">
      <p class="modal-source-note" style="margin:0 0 6px">Verification</p>
      ${u.claimType ? `<p class="modal-source-note" style="margin:0 0 4px">Claim Type: <strong style="color:var(--clr-text)">${u.claimType === 'dynamic' ? 'Dynamic' : 'Static'}</strong></p>` : ''}
      ${u.lastReviewed ? `<p class="modal-source-note" style="margin:0 0 4px">Last Reviewed: <strong style="color:var(--clr-text)">${u.lastReviewed}</strong></p>` : ''}
      ${u.verificationNote ? `<p class="modal-source-note" style="margin:0">Note: ${u.verificationNote}</p>` : ''}
    </div>
    ` : ''}
    <a href="${u.link}" target="_blank" rel="noopener noreferrer" class="modal-link" style="margin-top:14px;display:inline-flex;align-items:center;gap:6px">
      ${icon('externalLink', { size: 14, color: 'var(--clr-accent2)', noWrap: true })} Engineering Blog / Learn More
    </a>
  `);
}

// =============================================
// RENDER: PHP TIMELINE
// =============================================
function renderTimeline() {
  const container = document.getElementById('phpTimeline');
  container.innerHTML = TIMELINE_DATA.map((item, i) => `
    <div class="timeline-item reveal">
      <div class="timeline-dot">${iconBadge(item.iconName, { bg: item.iconBg, color: item.iconColor, size: 20, badgeSize: 44, radius: '50%' })}</div>
      <div class="timeline-content">
        <span class="timeline-version">${item.version}</span>
        <div class="timeline-year">${icon('clock', { size: 12, color: '#6b7280' })} ${item.year}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="timeline-features">
          ${item.features.map(f => `<span class="timeline-feature">${f}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  registerRevealElements(container);
}

// =============================================
// RENDER: DOCS
// =============================================
function renderDocs() {
  const wrap = document.getElementById('docsCategories');
  wrap.innerHTML = Object.entries(DOCS_CATEGORIES_DATA).map(([cat, items]) => `
    <div class="docs-category">
      <h3>${cat}</h3>
      <div class="docs-grid">
        ${items.map((d, i) => `
          <a class="doc-card reveal" href="${d.link}" target="_blank" rel="noopener">
            <div class="doc-icon" style="background:${d.bg}">
              ${icon(d.iconName, { size: 22, color: d.iconColor, noWrap: true })}
            </div>
            <div class="doc-info">
              <div class="doc-meta-row">
                <span class="doc-type">${d.type}</span>
                ${d.trust ? `<span class="doc-trust">${d.trust}</span>` : ''}
              </div>
              <h3>${d.title}</h3>
              <p>${d.desc}</p>
              <span class="doc-link">Visit Official Docs ${icon('externalLink', { size: 12, color: 'var(--clr-accent2)', noWrap: true })}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
  registerRevealElements(wrap);
}

function renderInterviewPlaybooks() {
  const grid = document.getElementById('playbooksGrid');
  if (!grid) return;

  grid.innerHTML = INTERVIEW_PLAYBOOKS_DATA.map(playbook => `
    <article class="playbook-card reveal spotlight-card">
      <div class="playbook-head">
        ${iconBadge(playbook.icon, { bg: playbook.iconBg, color: playbook.iconColor, size: 22, badgeSize: 46, radius: '12px' })}
        <div>
          <h3>${playbook.track}</h3>
          <p>${playbook.focus}</p>
        </div>
      </div>
      <div class="playbook-columns">
        <div>
          <h4>What to prove in interview</h4>
          <ul>${playbook.outcomes.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div>
          <h4>Practice drill</h4>
          <ul>${playbook.drills.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="playbook-refs">
        <h4>Line-by-line trusted references</h4>
        <ol>
          ${playbook.references.map(ref => `
            <li>
              <a href="${ref.url}" target="_blank" rel="noopener">${ref.label}</a>
              <span>${ref.note}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </article>
  `).join('');

  registerRevealElements(grid);
}

let interviewQaFilter = 'all';

function inferInterviewQaDifficulty(qa, index) {
  const text = `${qa.question} ${qa.answer} ${qa.expectedSignal}`.toLowerCase();

  if (text.includes('deployment') || text.includes('production') || text.includes('transaction') || text.includes('concurrency')) {
    return 'senior';
  }

  if (text.includes('explain') || text.includes('query') || text.includes('strict_types') || text.includes('jit')) {
    return 'intermediate';
  }

  if (index <= 1) return 'easy';
  if (index <= 3) return 'intermediate';
  return 'senior';
}

function setInterviewQaFilter(nextFilter) {
  interviewQaFilter = nextFilter;
  renderInterviewQa();
}

function renderInterviewQa() {
  const grid = document.getElementById('interviewQaGrid');
  if (!grid) return;
  const countEl = document.getElementById('interviewQaCount');

  const withDifficulty = INTERVIEW_QA_DATA.map((qa, index) => ({
    qa,
    index,
    difficulty: inferInterviewQaDifficulty(qa, index),
  }));

  const filtered = interviewQaFilter === 'all'
    ? withDifficulty
    : withDifficulty.filter(item => item.difficulty === interviewQaFilter);

  if (countEl) {
    countEl.textContent = `${filtered.length} of ${withDifficulty.length} shown`;
  }

  grid.innerHTML = filtered.map(({ qa, index, difficulty }) => `
    <article class="interview-qa-card reveal">
      <div class="qa-index">Q${index + 1}</div>
      <span class="qa-difficulty qa-${difficulty}">${difficulty}</span>
      <h3>${qa.question}</h3>
      <button class="qa-toggle" type="button" data-open="0" aria-expanded="false">
        ${icon('chevronUp', { size: 14, color: 'var(--clr-purple-lt)', noWrap: true })}
        Reveal Answer
      </button>
      <div class="qa-answer-wrap" hidden>
        <p class="qa-answer">${qa.answer}</p>
      </div>
      <p class="qa-signal"><strong>What interviewer wants:</strong> ${qa.expectedSignal}</p>
      <div class="qa-references">
        ${qa.references.map(ref => `
          <a href="${ref.url}" target="_blank" rel="noopener">${ref.label}</a>
        `).join('')}
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.qa-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.dataset.open === '1';
      const wrap = btn.parentElement?.querySelector('.qa-answer-wrap');
      if (!wrap) return;

      if (isOpen) {
        btn.dataset.open = '0';
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `${icon('chevronUp', { size: 14, color: 'var(--clr-purple-lt)', noWrap: true })} Reveal Answer`;
        wrap.hidden = true;
      } else {
        btn.dataset.open = '1';
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = `${icon('chevronUp', { size: 14, color: 'var(--clr-purple-lt)', noWrap: true, className: 'qa-chevron-open' })} Hide Answer`;
        wrap.hidden = false;
      }
    });
  });

  const filterBar = document.getElementById('interviewQaFilters');
  if (filterBar) {
    filterBar.querySelectorAll('[data-qa-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-qa-filter') === interviewQaFilter);
    });
  }

  registerRevealElements(grid);
}

document.getElementById('interviewQaFilters')?.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const btn = target.closest('[data-qa-filter]');
  if (!btn) return;
  setInterviewQaFilter(btn.getAttribute('data-qa-filter') || 'all');
});

function renderJobReadyRoadmap() {
  const grid = document.getElementById('jobReadyGrid');
  if (!grid) return;

  grid.innerHTML = JOB_READY_ROADMAP_DATA.map(item => `
    <article class="job-week-card reveal spotlight-card">
      <div class="job-week-top">
        <span class="job-week-badge">${item.week}</span>
        <h3>${item.theme}</h3>
      </div>
      <p class="job-week-deliverable">${item.deliverable}</p>
      <ul class="job-week-milestones">
        ${item.milestones.map(milestone => `<li>${milestone}</li>`).join('')}
      </ul>
      <div class="job-week-links">
        ${item.references.map(ref => `<a href="${ref.url}" target="_blank" rel="noopener">${ref.label}</a>`).join('')}
      </div>
    </article>
  `).join('');

  registerRevealElements(grid);
}

// =============================================
// RENDER: SNIPPETS
// =============================================
let currentSnippetIdx = 0;

function renderSnippet(idx) {
  const s = SNIPPETS_DATA[idx];
  document.getElementById('snippetFilename').textContent = s.filename;
  const codeEl = document.getElementById('snippetCode');
  codeEl.textContent = s.code;
  const explainEl = document.getElementById('snippetExplain');
  explainEl.innerHTML = `
    <div class="snippet-explain-header">
      ${iconBadge(s.explain.iconName, { bg: `${s.explain.iconColor}22`, color: s.explain.iconColor, size: 22, badgeSize: 48, radius: '12px' })}
      <h4>${s.explain.title}</h4>
    </div>
    <p>${s.explain.desc}</p>
    <ul>${s.explain.points.map(p => `
      <li>${icon('checkCircle', { size: 14, color: '#34d399' })} ${p}</li>
    `).join('')}</ul>
  `;
  currentSnippetIdx = idx;
}

document.querySelectorAll('.snip-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.snip-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderSnippet(parseInt(tab.dataset.snip));
  });
});

document.getElementById('copySnippetBtn').addEventListener('click', () => {
  const code = SNIPPETS_DATA[currentSnippetIdx].code;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copySnippetBtn');
    btn.classList.add('copied');
    btn.innerHTML = `${icon('checkCircle', { size: 14, color: '#34d399', noWrap: true })} Copied!`;
    showToast('Code copied to clipboard', 'copy', '#22d3ee', 2000);
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `${icon('copy', { size: 14, color: 'currentColor', noWrap: true })} Copy`;
    }, 2500);
  });
});

// =============================================
// QUIZ
// =============================================
const quizScores = [0, 0, 0];
let quizStep = 0;

document.querySelectorAll('.quiz-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = parseInt(btn.dataset.step);
    const val  = parseInt(btn.dataset.val);
    quizScores[step] = val;
    document.querySelectorAll(`.quiz-opt[data-step="${step}"]`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    setTimeout(() => {
      quizStep = step + 1;
      if (quizStep < 3) {
        document.getElementById(`quiz-step-${step}`).classList.remove('active');
        document.getElementById(`quiz-step-${quizStep}`).classList.add('active');
        document.getElementById('quizProgressFill').style.width = (quizStep / 3 * 100) + '%';
      } else {
        showQuizResult();
      }
    }, 400);
  });
});

function showQuizResult() {
  const total = quizScores.reduce((a, b) => a + b, 0);
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  const result = document.getElementById('quizResult');
  result.style.display = 'block';
  document.getElementById('quizProgressFill').style.width = '100%';

  // Update result icon
  const resIconEl = document.getElementById('quizResultIcon');
  if (resIconEl) resIconEl.innerHTML = iconBadge('target', { bg: 'rgba(16,185,129,.2)', color: '#34d399', size: 36, badgeSize: 72, radius: '18px' });

  let title, desc, btnText, btnAction, recommendedLevel;
  if (total <= 2) {
    recommendedLevel = 'beginner';
    title = 'Strong Start: PHP Fundamentals';
    desc = "You're at the beginning of your PHP journey — great! Start with PHP 8.3 Fundamentals for a rock-solid foundation.";
    btnText = 'Start PHP Fundamentals Course';
    btnAction = () => { closeModal(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); renderCourses('beginner'); };
  } else if (total <= 5) {
    recommendedLevel = 'intermediate';
    title = 'Ready for Intermediate: OOP & APIs';
    desc = "You have the basics down. Dive into OOP patterns, databases, and REST APIs to reach professional-grade code.";
    btnText = 'Explore Intermediate Courses';
    btnAction = () => { closeModal(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); renderCourses('intermediate'); };
  } else {
    recommendedLevel = 'advanced';
    title = 'Advanced: Frameworks & Architecture';
    desc = "You're an experienced developer ready to master Laravel, Symfony, microservices, and enterprise PHP patterns.";
    btnText = 'Jump to Advanced Courses';
    btnAction = () => { closeModal(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); renderCourses('advanced'); };
  }

  document.getElementById('quizResultTitle').textContent = title;
  document.getElementById('quizResultDesc').textContent  = desc;
  markJourneyVisited('quiz');
  setJourneyIntent('quiz-recommendation', { level: recommendedLevel, score: total });
  trackConversionGoal('quiz_finish', { score: total, recommendedLevel });
  trackUXEvent('quiz_completed', { score: total, recommendedLevel });
  const resultBtn = document.getElementById('quizResultBtn');
  resultBtn.innerHTML = `${btnText} ${icon('arrowRight', { size: 16, color: 'white', noWrap: true })}`;
  resultBtn.onclick = () => {
    trackUXEvent('quiz_result_cta_click', { recommendedLevel });
    btnAction();
  };
}

// =============================================
// 3D CARD TILT EFFECT
// =============================================
function addCardTilt(selector) {
  if (!isFinePointer || prefersReducedMotion) return;

  document.querySelectorAll(selector).forEach(card => {
    let rafId = 0;
    let rotX = 0;
    let rotY = 0;

    const applyTilt = () => {
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      rafId = 0;
    };

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      rotX = -y * 4;
      rotY = x * 4;
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
    });
    card.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      card.style.transform = '';
    });
  });
}

// =============================================
// MAGNETIC BUTTONS
// =============================================
if (isFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = parseInt(el.dataset.strength || '20');
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width  / 2) / rect.width  * strength;
      const y = (e.clientY - rect.top  - rect.height / 2) / rect.height * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// =============================================
// ROADMAP REVEAL
// =============================================
registerRevealElements(document);

// =============================================
// SPOTLIGHT MOUSE TRACKING
// =============================================
if (isFinePointer && !prefersReducedMotion) {
  let spotlightRaf = 0;
  let pendingCard = null;
  let pendingX = 0;
  let pendingY = 0;

  const updateSpotlight = () => {
    if (pendingCard) {
      pendingCard.style.setProperty('--mouse-x', `${pendingX}px`);
      pendingCard.style.setProperty('--mouse-y', `${pendingY}px`);
    }
    spotlightRaf = 0;
  };

  document.addEventListener('mousemove', e => {
    if (!(e.target instanceof Element)) return;
    const card = e.target.closest('.spotlight-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    pendingCard = card;
    pendingX = e.clientX - rect.left;
    pendingY = e.clientY - rect.top;
    if (!spotlightRaf) spotlightRaf = requestAnimationFrame(updateSpotlight);
  }, { passive: true });
}

// =============================================
// RENDER: WHY PHP
// =============================================
function renderWhyPhp() {
  const grid = document.getElementById('whyPhpGrid');
  if (!grid) return;
  grid.innerHTML = WHY_PHP_DATA.map((w, i) => `
    <div class="why-card reveal spotlight-card" style="--why-color:${w.color}">
      <div class="why-card-top">
        ${iconBadge(w.icon, { bg: w.iconBg, color: w.iconColor, size: 24, badgeSize: 52, radius: '14px' })}
        <div class="why-highlight">
          <div class="why-highlight-num">${w.highlight}</div>
          <span class="why-highlight-label">${w.highlightLabel}</span>
        </div>
      </div>
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
      <div class="fact-source-inline">
        ${icon('externalLink', { size: 12, color: 'var(--clr-accent2)', noWrap: true })}
        <a href="${w.sourceUrl}" target="_blank" rel="noopener">Source: ${w.sourceLabel}</a>
      </div>
      <div class="why-tags">
        ${w.tags.map(t => `<span class="why-tag" style="color:${w.iconColor};background:${w.iconBg};border-color:${w.iconColor}33">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

// =============================================
// RENDER: TESTIMONIALS
// =============================================
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS_DATA.map((t, i) => `
    <div class="testimonial-card reveal">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="fact-source-inline testimonial-source-inline">
        ${icon('externalLink', { size: 12, color: 'var(--clr-accent2)', noWrap: true })}
        <a href="${t.sourceUrl}" target="_blank" rel="noopener">Source attribution: ${t.sourceLabel}</a>
      </div>
      <div class="testimonial-tags">
        ${t.tags.map(tag => `<span class="testimonial-tag">${tag}</span>`).join('')}
      </div>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.avatarGradient}">${t.avatar}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
          <div class="testimonial-company">@ ${t.company}</div>
        </div>
      </div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

// =============================================
// COMMUNITY COUNTERS ANIMATION
// =============================================
const communityCounterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.cst-counter').forEach(animateCounter);
      communityCounterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const communityStatsEl = document.getElementById('communityStats');
if (communityStatsEl) communityCounterObs.observe(communityStatsEl);

// =============================================
// INITIALIZE ALL
// =============================================
const runWhenIdle = (cb, timeout = 1200) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(cb, { timeout });
  } else {
    setTimeout(cb, 120);
  }
};

function lazyRenderOnce(targetId, renderFn, rootMargin = '260px 0px') {
  const el = document.getElementById(targetId);
  if (!el) return;

  let rendered = false;
  const render = () => {
    if (rendered) return;
    rendered = true;
    renderFn();
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        render();
        obs.disconnect();
      }
    });
  }, { rootMargin, threshold: 0.01 });

  obs.observe(el);
}

// Note: PHP logo is now inline SVG — no injection needed
initSecurityHardeningObserver();
injectRoadmapIcons();
injectQuizIcons();

// Critical above-the-fold content
renderCourses();
renderProjects();
renderSnippet(0);
initCLI();

// Medium priority sections (idle time)
runWhenIdle(() => renderBooks());
runWhenIdle(() => renderVideoSources());
runWhenIdle(() => renderPractices());
runWhenIdle(() => renderUseCases());
runWhenIdle(() => renderTimeline());
runWhenIdle(() => renderDocs());
runWhenIdle(() => renderMarketMap());
runWhenIdle(() => renderPrelaunchQa());
runWhenIdle(() => renderVerificationBadge());
runWhenIdle(() => applyStrictFactMode());

// Below-the-fold heavy sections (lazy by viewport proximity)
lazyRenderOnce('playbooksGrid', renderInterviewPlaybooks, '340px 0px');
lazyRenderOnce('interviewQaGrid', renderInterviewQa, '340px 0px');
lazyRenderOnce('jobReadyGrid', renderJobReadyRoadmap, '340px 0px');
lazyRenderOnce('whyPhpGrid', renderWhyPhp, '300px 0px');
lazyRenderOnce('testimonialsGrid', renderTestimonials, '300px 0px');
lazyRenderOnce('graveyardGrid', renderGraveyard, '360px 0px');
// =============================================
// RENDER: GRAVEYARD
// =============================================
function renderGraveyard() {
  const grid = document.getElementById('graveyardGrid');
  if (!grid) return;
  grid.innerHTML = GRAVEYARD_DATA.map((g, i) => `
    <div class="tombstone reveal" style="--ts-color:${g.color}">
      <div class="ts-crack"></div>
      <div class="ts-rip">${g.rip}</div>
      <div class="ts-name">${g.name}</div>
      <div class="ts-years">${g.years}</div>
      <div class="ts-divider">⸻</div>
      <div class="ts-epitaph">${g.epitaph}</div>
      <div class="ts-cause">${g.cause}</div>
      <div class="ts-source"><a href="${g.sourceUrl}" target="_blank" rel="noopener">Source: ${g.sourceLabel}</a></div>
    </div>
  `).join('');
  registerRevealElements(grid);
}

// =============================================
// HERO CLI — interactive bash-style terminal
// =============================================
function initCLI() {
  const input = document.getElementById('cliInput');
  const history = document.getElementById('cliHistory');
  if (!input || !history) return;

  let cmdHistory = [];
  let historyIdx = -1;

  // Show boot message
  setTimeout(() => {
    appendOutput(`<span class="co-dim">PHP Mastery Terminal v1.0 — type <span class="co-cmd">help</span> to get started</span>`);
  }, 800);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;
      cmdHistory.unshift(cmd);
      historyIdx = -1;
      appendCommand(cmd);
      handleCommand(cmd);
      input.value = '';
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < cmdHistory.length - 1) historyIdx++;
      input.value = cmdHistory[historyIdx] || '';
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) historyIdx--;
      else { historyIdx = -1; input.value = ''; return; }
      input.value = cmdHistory[historyIdx] || '';
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.trim().toLowerCase();
      const match = Object.keys(CLI_COMMANDS).find(k => k.startsWith(partial) && k !== partial);
      if (match) input.value = match;
    }
  });

  function appendCommand(cmd) {
    const el = document.createElement('div');
    el.className = 'cli-entry';
    el.innerHTML = `<span class="cli-prompt-hist">~/php-mastery $&nbsp;</span><span class="cli-cmd-echo">${escapeHtml(cmd)}</span>`;
    history.appendChild(el);
  }

  function appendOutput(html) {
    const el = document.createElement('div');
    el.className = 'cli-output-block';
    el.innerHTML = sanitizeHtmlFragment(html.replace(/\n/g, '<br>'));
    history.appendChild(el);
    history.scrollTop = history.scrollHeight;
  }

  function handleCommand(cmd) {
    const entry = CLI_COMMANDS[cmd];
    if (entry) {
      if (entry.out === '[CLEAR]') { history.innerHTML = ''; return; }
      appendOutput(entry.out);
      if (entry.action) setTimeout(() => entry.action(), 600);
    } else {
      appendOutput(`<span class="co-err">bash: ${escapeHtml(cmd)}: command not found</span>\n<span class="co-dim">Type <span class="co-cmd">help</span> to see available commands</span>`);
    }
  }

  // Click anywhere on CLI focuses input
  document.getElementById('heroCli')?.addEventListener('click', () => input.focus());
}


