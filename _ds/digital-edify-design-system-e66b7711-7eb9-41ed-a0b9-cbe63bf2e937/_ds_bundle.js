/* @ds-bundle: {"format":3,"namespace":"DigitalEdifyDesignSystem_e66b77","components":[],"sourceHashes":{"ui_kits/edify-crm/Home.jsx":"56a1595a65e0","ui_kits/edify-crm/Leads.jsx":"8ac3d0f5a4b3","ui_kits/edify-crm/Pipeline.jsx":"3898211ca71a","ui_kits/edify-crm/Record.jsx":"71e250f6e17c","ui_kits/edify-crm/Shell.jsx":"96649421ce1f","ui_kits/edify-crm/data.js":"fcb31ac6769d","ui_kits/edify-crm/icons.jsx":"ee17ac74a309","ui_kits/edify-crm/primitives.jsx":"a93477aea97f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DigitalEdifyDesignSystem_e66b77 = window.DigitalEdifyDesignSystem_e66b77 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/edify-crm/Home.jsx
try { (() => {
/* Edify CRM — Agent Home view. */
(function () {
  const h = React.createElement;
  function CommandBox() {
    const [val, setVal] = React.useState('');
    return h('div', {
      className: 'cmd'
    }, h('div', {
      className: 'prompt',
      style: val ? {
        color: 'var(--ink)'
      } : null
    }, h('input', {
      value: val,
      onChange: e => setVal(e.target.value),
      placeholder: 'What should your CRM do today?',
      style: {
        all: 'unset',
        width: '100%',
        fontFamily: 'var(--font-display)',
        fontSize: 19,
        color: 'var(--ink)'
      }
    })), h('div', {
      className: 'cmd-bottom'
    }, h('button', {
      className: 'cmd-add'
    }, '+'), h('button', {
      className: 'cmd-pick'
    }, h(Icon, {
      name: 'grid',
      size: 13,
      sw: 1.8
    }), 'Pick a segment', h('span', {
      className: 'chev'
    }, '⌄')), h('button', {
      className: 'cmd-pick'
    }, h(Icon, {
      name: 'mic',
      size: 13,
      sw: 1.8
    }), 'Act', h('span', {
      className: 'chev'
    }, '⌄')), h('div', {
      className: 'sp'
    }), h('div', {
      className: 'cmd-model'
    }, 'Edify Agent ', h('b', null, 'Opus 4.8')), h('button', {
      className: 'cmd-send'
    }, h(Icon, {
      name: 'arrow',
      size: 16,
      stroke: '#fff',
      sw: 2
    }))));
  }
  const QUICK = [{
    icon: 'mail',
    label: 'Draft follow-ups for hot leads'
  }, {
    icon: 'clock',
    label: 'Book demos for this week'
  }, {
    icon: 'chart',
    label: 'Forecast May enrolments'
  }, {
    icon: 'star',
    label: 'Find leads at risk of churn'
  }];
  function AgentCard({
    a,
    go
  }) {
    return h('div', {
      className: 'agent-card',
      onClick: () => go('leads')
    }, h('div', {
      className: 'ah'
    }, h('div', {
      className: 'glyph ' + a.glyph
    }, h(Icon, {
      name: a.icon,
      size: 18,
      stroke: '#fff',
      sw: 1.8
    })), h('div', null, h('div', {
      className: 'nm'
    }, a.name), h('div', {
      className: 'st'
    }, a.live ? h('span', {
      className: 'live'
    }) : null, a.status))), h('div', {
      className: 'desc'
    }, a.desc), h('div', {
      className: 'foot'
    }, h('span', null, h('b', null, a.stat), ' ' + a.statLabel), h('span', {
      className: 'run-pill'
    }, a.pill)));
  }
  function FeedItem({
    f
  }) {
    return h('div', {
      className: 'feed-item'
    }, h('div', {
      className: 'fic',
      style: {
        background: f.tint
      }
    }, h(Icon, {
      name: f.icon,
      size: 15,
      stroke: f.stroke,
      sw: 1.8
    })), h('div', {
      className: 'body'
    }, h('div', {
      className: 'ft'
    }, f.title.map((t, i) => i % 2 ? h('b', {
      key: i
    }, t) : t)), h('div', {
      className: 'fd'
    }, f.detail), h('span', {
      className: 'tag ' + f.tag
    }, f.tagLabel)), h('div', {
      className: 'ftime'
    }, f.time));
  }
  function AgentHome({
    go
  }) {
    return h('div', {
      className: 'home-wrap'
    }, h('div', {
      className: 'home-greet'
    }, h('div', {
      className: 'burst'
    }, h('svg', {
      viewBox: '0 0 48 48',
      fill: 'none',
      width: 46,
      height: 46
    }, h('g', {
      stroke: 'url(#bg)',
      strokeWidth: 2.4,
      strokeLinecap: 'round'
    }, h('path', {
      d: 'M24 4v12M24 32v12M4 24h12M32 24h12M10 10l8 8M30 30l8 8M38 10l-8 8M18 30l-8 8'
    })), h('defs', null, h('linearGradient', {
      id: 'bg',
      x1: 0,
      y1: 0,
      x2: 48,
      y2: 48
    }, h('stop', {
      stopColor: '#1F3FCF'
    }), h('stop', {
      offset: '.5',
      stopColor: '#6B1FB8'
    }), h('stop', {
      offset: '1',
      stopColor: '#C7197A'
    }))))), h('h1', null, 'Good morning, Manikanta.', h('br'), "Let's ", h('i', null, 'grow the cohort.'))), h('p', {
      className: 'home-sub'
    }, '14 leads went hot overnight · your agents drafted 9 follow-ups. ', h('a', {
      href: '#',
      onClick: e => {
        e.preventDefault();
        go('leads');
      }
    }, 'Review the queue →')), h(CommandBox), h('div', {
      className: 'qa'
    }, QUICK.map((q, i) => h('button', {
      className: 'qa-chip',
      key: i
    }, h('span', {
      className: 'ic'
    }, h(Icon, {
      name: q.icon,
      size: 11,
      stroke: 'var(--violet)',
      sw: 2
    })), q.label))), h(SectionHead, {
      label: 'Your active agents',
      more: 'Manage all →'
    }), h('div', {
      className: 'agents-grid'
    }, CRM.AGENTS.map((a, i) => h(AgentCard, {
      a,
      go,
      key: i
    }))), h(SectionHead, {
      label: 'Agent activity · today',
      more: 'Full log →'
    }), h('div', {
      className: 'feed'
    }, CRM.FEED.map((f, i) => h(FeedItem, {
      f,
      key: i
    }))));
  }
  window.AgentHome = AgentHome;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/Leads.jsx
try { (() => {
/* Edify CRM — Leads list view. */
(function () {
  const h = React.createElement;
  const FILTERS = [{
    label: 'All',
    ct: '248',
    on: true
  }, {
    label: '🔥 Hot',
    ct: '31'
  }, {
    label: 'Warm',
    ct: '88'
  }, {
    label: 'Cold',
    ct: '129'
  }, {
    label: 'Needs action',
    ct: '9'
  }];
  function LeadRow({
    l,
    open
  }) {
    return h('div', {
      className: 'lrow',
      onClick: () => open(l.id)
    }, h('div', {
      className: 'lcheck'
    }), h('div', {
      className: 'lead-id'
    }, h(Avatar, {
      init: l.init,
      bg: l.av
    }), h('div', {
      className: 'meta'
    }, h('div', {
      className: 'nm'
    }, l.name), h('div', {
      className: 'sub'
    }, l.id + ' · ' + l.city))), h('div', {
      className: 'lcell'
    }, h('span', {
      className: 'prog'
    }, l.program), h('small', null, l.cohort)), h('div', {
      className: 'lcell col-stage'
    }, h(StagePill, {
      stage: l.stage,
      label: l.stageLabel
    })), h('div', {
      className: 'lcell'
    }, h('div', {
      className: 'score'
    }, h(ScoreRing, {
      score: l.score,
      temp: l.temp
    }))), h('div', {
      className: 'lcell col-nba'
    }, h(NbaRow, {
      icon: l.nbaIcon
    }, l.nba)), h('button', {
      className: 'row-go'
    }, '→'));
  }
  function LeadsList({
    open
  }) {
    return h('div', {
      className: 'list-wrap'
    }, h('div', {
      className: 'list-head'
    }, h('div', null, h('h1', null, 'Leads'), h('p', null, '248 leads · 14 went hot overnight · your agents have 9 actions queued')), h('div', {
      className: 'list-actions'
    }, h(Btn, {
      icon: 'sliders'
    }, 'Filters'), h(Btn, {
      variant: 'grad',
      icon: 'star'
    }, 'Run agent on selection'))), h('div', {
      className: 'insight'
    }, h('div', {
      className: 'ico'
    }, h(Icon, {
      name: 'star',
      size: 18,
      stroke: '#fff',
      sw: 1.8
    })), h('div', {
      className: 'txt'
    }, h('b', null, 'Lead Scoring Agent:'), ' 14 leads crossed the "hot" threshold overnight. 9 already have drafted follow-ups waiting — approving them now could save ~3 hours and recover an est. ', h('b', null, '₹6.2L'), ' in pipeline.'), h('button', {
      className: 'act'
    }, 'Review 9 drafts →')), h('div', {
      className: 'filters'
    }, FILTERS.map((f, i) => h('button', {
      className: 'fchip' + (f.on ? ' on' : ''),
      key: i
    }, f.label, ' ', h('span', {
      className: 'ct'
    }, f.ct))), h('div', {
      className: 'sp'
    }), h('div', {
      className: 'fsearch'
    }, h(Icon, {
      name: 'search',
      size: 13,
      sw: 2
    }), 'Filter by name…')), h('div', {
      className: 'ltable'
    }, h('div', {
      className: 'lrow hdr'
    }, h('div'), h('div', null, 'Lead'), h('div', null, 'Interest'), h('div', {
      className: 'col-stage'
    }, 'Stage'), h('div', null, 'AI score'), h('div', {
      className: 'col-nba'
    }, 'Next best action'), h('div')), CRM.LEADS.map(l => h(LeadRow, {
      l,
      open,
      key: l.id
    }))));
  }
  window.LeadsList = LeadsList;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/Leads.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/Pipeline.jsx
try { (() => {
/* Edify CRM — Pipeline (kanban) view. */
(function () {
  const h = React.createElement;
  function KCard({
    l,
    glow,
    open
  }) {
    return h('div', {
      className: 'kcard' + (glow ? ' aiglow' : ''),
      onClick: () => open(l.id)
    }, h('div', {
      className: 'kc-top'
    }, h(Avatar, {
      init: l.init,
      bg: l.av,
      size: 30,
      fs: 11
    }), h('div', {
      className: 'kc-id'
    }, h('div', {
      className: 'kc-nm'
    }, l.name), h('div', {
      className: 'kc-sub'
    }, l.id + ' · ' + l.city)), h('div', {
      className: 'kc-score ' + l.temp,
      style: {
        '--p': l.score + '%',
        width: 30,
        height: 30,
        borderRadius: 99,
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 700,
        flexShrink: 0
      }
    }, h('i', {
      style: {
        width: 23,
        height: 23,
        borderRadius: 99,
        background: 'var(--paper)',
        display: 'grid',
        placeItems: 'center',
        fontStyle: 'normal'
      }
    }, l.score))), h('div', {
      className: 'kc-prog'
    }, l.program), h('div', {
      className: 'kc-val'
    }, l.cohort), h('div', {
      className: 'kc-nba' + (l.ghost ? ' ghost' : '')
    }, h('span', {
      className: 'ai'
    }, h(Icon, {
      name: l.nbaIcon,
      size: 10,
      sw: 2
    })), l.nba));
  }
  function Column({
    col,
    open
  }) {
    const cards = col.cards.map(c => typeof c === 'string' ? CRM.leadById(c) : c);
    return h('div', {
      className: 'kcol ' + col.key
    }, h('div', {
      className: 'kcol-head'
    }, h('span', {
      className: 'kd'
    }), h('span', {
      className: 'knm'
    }, col.name), h('span', {
      className: 'kct'
    }, col.count), h('span', {
      className: 'ksum'
    }, col.sum)), col.ai ? h('div', {
      className: 'kcol-ai'
    }, h('span', {
      className: 'sp'
    }, h(Icon, {
      name: col.aiIcon,
      size: 12,
      stroke: '#fff',
      sw: 2
    })), h('span', null, col.ai.map((t, i) => i % 2 ? h('b', {
      key: i
    }, t) : t))) : null, h('div', {
      className: 'kcol-body'
    }, cards.map(l => h(KCard, {
      l,
      key: l.id,
      glow: col.glow === l.id,
      open
    })), h('button', {
      className: 'kadd'
    }, '+ Add lead')));
  }
  function Pipeline({
    open
  }) {
    return h('div', {
      className: 'kan-wrap'
    }, h('div', {
      className: 'kan-head'
    }, h('div', null, h('h1', null, 'Pipeline'), h('p', null, '248 leads · ₹2.4Cr open · your agents auto-move cards as intent changes')), h('div', {
      className: 'list-actions'
    }, h(Btn, {
      icon: 'sliders'
    }, 'Group: Stage'), h(Btn, {
      variant: 'grad',
      icon: 'star'
    }, 'Auto-prioritise board'))), h('div', {
      className: 'kan-board'
    }, CRM.COLUMNS.map(col => h(Column, {
      col,
      key: col.key,
      open
    }))));
  }
  window.Pipeline = Pipeline;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/Pipeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/Record.jsx
try { (() => {
/* Edify CRM — Lead Record view. */
(function () {
  const h = React.createElement;
  const TABS = ['Timeline', 'Emails', 'Notes', 'Files'];
  function NbaCard() {
    return h('div', {
      className: 'nba-card'
    }, h('div', {
      className: 'nh'
    }, h('span', {
      className: 'spark'
    }, h(Icon, {
      name: 'star',
      size: 15,
      stroke: '#fff',
      sw: 1.9
    })), h('span', {
      className: 'lab'
    }, 'Next best action · Edify Agent'), h('span', {
      className: 'conf'
    }, '92% confidence')), h('div', {
      className: 'rec-line'
    }, 'Send the "agentic capstone walkthrough" re-engagement email now — Aarav opens email at ~9 PM IST.'), h('div', {
      className: 'why'
    }, 'He attended 2 of 3 pre-demo touchpoints, watched 78% of the free Module 1 lesson, but missed the live demo on May 14. Re-engagement within 48h of a no-show converts 3.2× better. Draft is ready.'), h('div', {
      className: 'nactions'
    }, h('button', {
      className: 'na go'
    }, 'Approve & send draft →'), h('button', {
      className: 'na'
    }, 'Edit draft'), h('button', {
      className: 'na'
    }, 'Try a different action')));
  }
  function TimelineItem({
    t
  }) {
    return h('div', {
      className: 'tlx ' + t.kind
    }, h('div', {
      className: 'when'
    }, t.when), h('div', {
      className: 'card'
    }, h('div', {
      className: 'ch'
    }, h('span', {
      className: 'by'
    }, t.by), h('span', {
      className: 'tag ' + t.tag
    }, t.tagLabel)), h('p', null, t.text), t.quote ? h('div', {
      className: 'quote'
    }, t.quote) : null));
  }
  const SIGNALS = [{
    cls: 'pos',
    txt: 'Re-opened pricing 2× last night',
    w: '+14'
  }, {
    cls: 'pos',
    txt: 'Watched 78% of free lesson',
    w: '+11'
  }, {
    cls: 'neg',
    txt: 'Missed live demo (no-show)',
    w: '−9'
  }, {
    cls: 'pos',
    txt: 'Replied to WhatsApp in 6 min',
    w: '+8'
  }];
  const RUNS = [{
    glyph: 'g-magenta',
    icon: 'send',
    name: 'Outreach Agent',
    st: 'Draft ready · awaiting approval',
    badge: 'run',
    bl: 'queued'
  }, {
    glyph: 'g-violet',
    icon: 'star',
    name: 'Scoring Agent',
    st: 'Re-scored 18 min ago',
    badge: 'done',
    bl: 'done'
  }, {
    glyph: 'g-blue',
    icon: 'clock',
    name: 'Scheduler Agent',
    st: 'Holding a 7 PM slot for tonight',
    badge: 'run',
    bl: 'standby'
  }];
  function hueOf(temp) {
    return temp === 'hot' ? '#C7197A' : temp === 'warm' ? '#E08A1E' : '#6B5E74';
  }
  function ScoreCard({
    lead
  }) {
    const hue = hueOf(lead.temp);
    return h('div', {
      className: 'acard'
    }, h('h4', null, 'AI lead score ', h('span', {
      className: 'edit mono'
    }, 'live')), h('div', {
      className: 'bigscore'
    }, h('div', {
      className: 'ring',
      style: {
        background: 'conic-gradient(' + hue + ' ' + lead.score + '%, #F0EAE1 0)'
      }
    }, h('i', {
      style: {
        color: hue
      }
    }, lead.score)), h('div', {
      className: 'meta'
    }, h('div', {
      className: 'lbl',
      style: {
        color: hue
      }
    }, lead.temp === 'hot' ? 'Hot lead' : lead.temp === 'warm' ? 'Warm lead' : 'Cold lead'), h('div', {
      className: 'desc'
    }, 'High intent, high fit. Best contacted tonight ~9 PM IST.'))), h('div', {
      className: 'signals'
    }, SIGNALS.map((s, i) => h('div', {
      className: 'sig',
      key: i
    }, h('span', {
      className: 'dot ' + s.cls
    }), s.txt, h('span', {
      className: 'w'
    }, s.w)))));
  }
  function DetailsCard({
    lead
  }) {
    const rows = [['Email', 'aarav.m@gmail.com', 'link'], ['Phone', '+91 98••• ••231'], ['Program', lead.program], ['Cohort', '026 · 12 Jun'], ['Source', 'Instagram ad'], ['Advisor', 'Priya N.'], ['Value', '₹1.49L']];
    return h('div', {
      className: 'acard'
    }, h('h4', null, 'Lead details ', h('span', {
      className: 'edit'
    }, 'Edit')), rows.map((d, i) => h('div', {
      className: 'field',
      key: i
    }, h('span', {
      className: 'k'
    }, d[0]), h('span', {
      className: 'v' + (d[2] ? ' ' + d[2] : '')
    }, d[1]))));
  }
  function RunsCard() {
    return h('div', {
      className: 'acard'
    }, h('h4', null, 'Agents on this lead'), RUNS.map((r, i) => h('div', {
      className: 'arun',
      key: i
    }, h('div', {
      className: 'ic ' + r.glyph
    }, h(Icon, {
      name: r.icon,
      size: 14,
      stroke: '#fff',
      sw: 1.8
    })), h('div', null, h('div', {
      className: 'nm'
    }, r.name), h('div', {
      className: 'st'
    }, r.st)), h('span', {
      className: 'badge ' + r.badge
    }, r.bl))));
  }
  function Record({
    lead
  }) {
    const [tab, setTab] = React.useState('Timeline');
    const main = h('div', {
      className: 'rec-main'
    }, h('div', {
      className: 'rec-hero'
    }, h(Avatar, {
      init: lead.init,
      bg: lead.av,
      size: 64,
      radius: 18,
      fs: 24
    }), h('div', null, h('h1', null, lead.name), h('div', {
      className: 'rsub'
    }, h(StagePill, {
      stage: lead.stage,
      label: lead.stageLabel
    }), h('span', null, lead.id), h('span', null, '·'), h('span', null, lead.city + ' · IST'))), h('div', {
      className: 'acts'
    }, h(Btn, {
      icon: 'mail'
    }, 'Email'), h(Btn, {
      icon: 'clock'
    }, 'Schedule'), h(Btn, {
      variant: 'primary'
    }, 'Mark enrolled'))), h(NbaCard), h('div', {
      className: 'rtabs'
    }, TABS.map(t => h('button', {
      className: 'rtab' + (tab === t ? ' on' : ''),
      key: t,
      onClick: () => setTab(t)
    }, t))), tab === 'Timeline' ? h('div', {
      className: 'tl'
    }, CRM.TIMELINE.map((t, i) => h(TimelineItem, {
      t,
      key: i
    }))) : h('div', {
      style: {
        padding: '40px 4px',
        color: 'var(--mute)',
        fontSize: 14
      }
    }, tab + ' — no items in this demo view.'));
    const aside = h('aside', {
      className: 'rec-aside'
    }, h(ScoreCard, {
      lead
    }), h(DetailsCard, {
      lead
    }), h(RunsCard));
    return h('div', {
      className: 'rec-wrap'
    }, main, aside);
  }
  window.Record = Record;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/Record.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/Shell.jsx
try { (() => {
/* Edify CRM — app shell: icon rail, sidebar, topbar. */
(function () {
  const h = React.createElement;
  function IconRail({
    view,
    go
  }) {
    const item = (key, name, label, extra) => h('button', {
      className: 'rail-btn' + (view === key || key === 'leads' && view === 'record' ? ' on' : ''),
      onClick: key ? () => go(key) : undefined
    }, h(Icon, {
      name,
      size: 19,
      sw: 1.7
    }), extra, h('span', {
      className: 'rail-tip'
    }, label));
    return h('nav', {
      className: 'rail'
    }, h('div', {
      className: 'rail-logo'
    }, h(Icon, {
      name: 'leaf',
      size: 20,
      stroke: '#fff',
      sw: 1.9
    })), item('home', 'home', 'Agent Home'), item('leads', 'users', 'Leads · 9 need action', h('span', {
      className: 'nb'
    }, '9')), item('pipeline', 'pipeline', 'Pipeline'), item(null, 'send', 'Agents · 3 live', h('span', {
      className: 'dot'
    })), item(null, 'clock', 'Scheduled'), item(null, 'inbox', 'Inbox'), h('div', {
      className: 'rail-div'
    }), item(null, 'bars', 'Reports'), h('div', {
      className: 'rail-sp'
    }), item(null, 'settings', 'Settings'), h('div', {
      className: 'rail-av'
    }, 'MK'));
  }
  function Sidebar({
    view,
    go
  }) {
    const tab = (icon, label, on) => h('button', {
      className: 'side-tab' + (on ? ' on' : '')
    }, h(Icon, {
      name: icon,
      size: 14,
      sw: 1.8
    }), label);
    const nav = (key, icon, label, badge, beta) => h('button', {
      className: 'nav-item' + (view === key || key === 'leads' && view === 'record' ? ' on' : ''),
      onClick: key ? () => go(key) : undefined
    }, h(Icon, {
      name: icon,
      size: 16,
      sw: 1.7
    }), label, badge ? h('span', {
      className: 'badge'
    }, badge) : null, beta ? h('span', {
      className: 'pillbeta'
    }, beta) : null);
    return h('aside', {
      className: 'side'
    }, h('div', {
      className: 'side-tabs'
    }, tab('msg', 'Chat', false), tab('list', 'Agents', true), tab('code', 'Build', false)), h('button', {
      className: 'new-btn',
      onClick: () => go('home')
    }, h('span', {
      className: 'plus'
    }, '+'), 'New agent task'), h('nav', {
      className: 'nav'
    }, nav('home', 'home', 'Agent Home'), nav('leads', 'users', 'Leads', '248'), nav('pipeline', 'pipeline', 'Pipeline'), nav(null, 'clock', 'Scheduled'), nav(null, 'star', 'Live artifacts'), nav(null, 'doc', 'Dispatch', null, 'Beta'), nav(null, 'star', 'Customize')), h('div', {
      className: 'side-sec'
    }, 'Recent agent runs'), h('div', {
      className: 'recents'
    }, CRM.RECENTS.map((r, i) => h('div', {
      className: 'rec',
      key: i
    }, h('span', {
      className: 'dot ' + r.dot
    }), h('span', {
      className: 'txt'
    }, r.txt)))), h('div', {
      className: 'side-foot'
    }, h('div', {
      className: 'upd'
    }, h('div', {
      className: 'leaf'
    }, h(Icon, {
      name: 'leaf',
      size: 18,
      stroke: '#fff',
      sw: 1.8
    })), h('div', null, h('div', {
      className: 'u-nm'
    }, 'Edify Agent OS'), h('div', {
      className: 'u-v'
    }, 'v2.6 · MCP connected')), h('div', {
      className: 'arr'
    }, '→')), h('div', {
      className: 'userbar'
    }, h('div', {
      className: 'av'
    }, 'MK'), h('div', {
      className: 'u-nm'
    }, 'Manikanta'), h('span', {
      className: 'u-pl'
    }, '· Admin'), h('span', {
      className: 'chev'
    }, '⌄'))));
  }
  function Topbar({
    crumb,
    search,
    status,
    onBack
  }) {
    return h('div', {
      className: 'topbar'
    }, h('div', {
      className: 'crumb'
    }, crumb.map((c, i) => {
      const last = i === crumb.length - 1;
      return h(React.Fragment, {
        key: i
      }, last ? h('b', null, c) : h('span', {
        onClick: onBack,
        style: onBack ? {
          cursor: 'pointer'
        } : null
      }, c), !last ? h('span', {
        className: 'sep'
      }, '/') : null);
    })), h('div', {
      className: 'sp'
    }), search ? h('div', {
      className: 'top-search'
    }, h(Icon, {
      name: 'search',
      size: 14,
      sw: 2
    }), search, h('span', {
      className: 'k'
    }, '⌘K')) : null, h('div', {
      className: 'ai-status'
    }, h('span', {
      className: 'd'
    }), status));
  }
  Object.assign(window, {
    IconRail,
    Sidebar,
    Topbar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/data.js
try { (() => {
/* Edify CRM — mock data. All figures illustrative; INR currency, IST times. */
(function () {
  // Avatar gradient presets (match the source's per-lead gradients)
  const grad = {
    magenta: 'linear-gradient(135deg,#C7197A,#e6479e)',
    violet: 'linear-gradient(135deg,#6B1FB8,#9b3fe0)',
    blue: 'linear-gradient(135deg,#1F3FCF,#4067e6)',
    ochre: 'linear-gradient(135deg,#C69A3A,#e0b658)',
    vm: 'linear-gradient(135deg,#6B1FB8,#C7197A)',
    green: 'linear-gradient(135deg,#2E9E6A,#5fd39a)',
    slate: 'linear-gradient(135deg,#3B2E4A,#6B5E74)'
  };
  const LEADS = [{
    id: 'LEAD-9842',
    name: 'Aarav Mehta',
    city: 'Bengaluru',
    av: grad.magenta,
    init: 'AM',
    program: 'AI Engineer · GenAI',
    cohort: 'Cohort 026 · ₹1.49L',
    stage: 'demo',
    stageLabel: 'Demo no-show',
    score: 89,
    temp: 'hot',
    nba: 'Send re-engagement email',
    nbaIcon: 'send'
  }, {
    id: 'LEAD-9810',
    name: 'Sneha Reddy',
    city: 'Hyderabad',
    av: grad.violet,
    init: 'SR',
    program: 'Full Stack + AI',
    cohort: 'Cohort 023 · ₹1.49L',
    stage: 'qual',
    stageLabel: 'Qualified',
    score: 91,
    temp: 'hot',
    nba: 'Book demo · today 7 PM',
    nbaIcon: 'clock'
  }, {
    id: 'LEAD-9788',
    name: 'Karthik Nair',
    city: 'Kochi',
    av: grad.blue,
    init: 'KN',
    program: 'Salesforce · Agentforce',
    cohort: 'Cohort 015 · ₹99k',
    stage: 'demo',
    stageLabel: 'Demo booked',
    score: 84,
    temp: 'hot',
    nba: 'Send prep checklist',
    nbaIcon: 'mail'
  }, {
    id: 'LEAD-9756',
    name: 'Priya Varma',
    city: 'Pune',
    av: grad.ochre,
    init: 'PV',
    program: 'AI & Data Science',
    cohort: 'Cohort 08 · ₹1.19L',
    stage: 'qual',
    stageLabel: 'Qualified',
    score: 64,
    temp: 'warm',
    nba: 'Nurture · send case study',
    nbaIcon: 'star'
  }, {
    id: 'LEAD-9701',
    name: 'Rahul Thomas',
    city: 'Chennai',
    av: grad.vm,
    init: 'RT',
    program: 'DevOps + AI',
    cohort: 'Cohort 015 · ₹99k',
    stage: 'new',
    stageLabel: 'New inbound',
    score: 58,
    temp: 'warm',
    nba: 'Send welcome + syllabus',
    nbaIcon: 'send'
  }, {
    id: 'LEAD-9655',
    name: 'Megha Jain',
    city: 'Delhi',
    av: grad.green,
    init: 'MJ',
    program: 'Power BI + AI',
    cohort: 'Cohort 014 · ₹59k',
    stage: 'won',
    stageLabel: 'Enrolled',
    score: 96,
    temp: 'hot',
    nba: 'Ask for referral',
    nbaIcon: 'check'
  }, {
    id: 'LEAD-9590',
    name: 'Arjun Bose',
    city: 'Kolkata',
    av: grad.slate,
    init: 'AB',
    program: 'Cyber Security + AI',
    cohort: 'Cohort 011 · ₹1.09L',
    stage: 'new',
    stageLabel: 'New inbound',
    score: 34,
    temp: 'cold',
    nba: 'Low intent · drip only',
    nbaIcon: 'info'
  }];
  const AGENTS = [{
    name: 'Outreach Agent',
    glyph: 'g-magenta',
    icon: 'send',
    live: true,
    status: 'Running · drafting 9 emails',
    desc: "Writes personalised follow-ups from each lead's demo notes & program interest, then queues for your approval.",
    stat: '142',
    statLabel: 'sent this week',
    pill: '68% reply rate'
  }, {
    name: 'Lead Scoring Agent',
    glyph: 'g-violet',
    icon: 'star',
    live: true,
    status: 'Running · 38 leads queued',
    desc: 'Scores every inbound lead on intent, fit and urgency using site activity, demo attendance and reply sentiment.',
    stat: '248',
    statLabel: 'leads scored',
    pill: 'live'
  }, {
    name: 'Scheduler Agent',
    glyph: 'g-blue',
    icon: 'clock',
    live: false,
    status: 'Idle · next run 2:00 PM',
    desc: "Finds demo slots that fit each lead's timezone, books them, and sends calendar invites with the right advisor.",
    stat: '31',
    statLabel: 'demos booked',
    pill: 'idle'
  }, {
    name: 'Forecast Agent',
    glyph: 'g-ochre',
    icon: 'pipeline',
    live: false,
    status: 'Idle · last run 8:00 AM',
    desc: 'Projects cohort fill, revenue and at-risk enrolments — and flags which leads to prioritise to hit target.',
    stat: '₹2.4Cr',
    statLabel: 'pipeline',
    pill: '86% to target'
  }];
  const FEED = [{
    icon: 'send',
    tint: 'rgba(199,25,122,.1)',
    stroke: '#C7197A',
    tag: 'need',
    tagLabel: 'Needs approval',
    time: '2 min ago',
    title: ['Outreach Agent', ' drafted a re-engagement email for ', 'Aarav Mehta'],
    detail: '"You asked about the agentic capstone on May 14 — here\'s a 4-min walkthrough." Ready for your approval.'
  }, {
    icon: 'star',
    tint: 'rgba(107,31,184,.1)',
    stroke: '#6B1FB8',
    tag: 'auto',
    tagLabel: 'Auto-scored',
    time: '18 min ago',
    title: ['Lead Scoring Agent', ' moved ', 'Sneha Reddy', ' from Warm → Hot'],
    detail: 'Visited pricing 3× + replied to demo invite in 4 min. Score jumped 62 → 89.'
  }, {
    icon: 'clock',
    tint: 'rgba(31,63,207,.08)',
    stroke: '#1F3FCF',
    tag: 'sent',
    tagLabel: 'Booked & confirmed',
    time: '1 hr ago',
    title: ['Scheduler Agent', ' booked a demo for ', 'Karthik Nair'],
    detail: 'Wed 31 May · 7:00 PM IST with advisor Priya. Calendar invite sent + WhatsApp confirmation.'
  }, {
    icon: 'mail',
    tint: 'rgba(46,158,106,.1)',
    stroke: '#2E9E6A',
    tag: 'sent',
    tagLabel: 'Sent',
    time: '3 hr ago',
    title: ['Outreach Agent', ' sent 9 approved follow-ups to the ', 'Agentforce cohort'],
    detail: '3 opened within the hour · 1 replied "ready to enrol".'
  }];

  // Pipeline columns (kanban)
  const COLUMNS = [{
    key: 'new',
    name: 'New inbound',
    count: 42,
    sum: '₹38L',
    ai: ['Agent welcomed ', '38', ' leads & sent the syllabus automatically.'],
    aiIcon: 'star',
    cards: ['LEAD-9701', 'LEAD-9590', {
      id: 'LEAD-9588',
      name: 'Divya Nambiar',
      city: 'Online',
      av: grad.ochre,
      init: 'DN',
      program: 'AI & Data Science',
      cohort: 'Cohort 08 · ₹1.19L',
      score: 52,
      temp: 'warm',
      nba: 'Qualify via 3 questions',
      nbaIcon: 'mail'
    }]
  }, {
    key: 'qual',
    name: 'Qualified',
    count: 88,
    sum: '₹96L',
    glow: 'LEAD-9810',
    cards: ['LEAD-9810', 'LEAD-9756', {
      id: 'LEAD-9720',
      name: 'Vikram Gowda',
      city: 'Mysuru',
      av: grad.blue,
      init: 'VG',
      program: 'Salesforce · Agentforce',
      cohort: 'Cohort 015 · ₹99k',
      score: 66,
      temp: 'warm',
      nba: 'Share alumni outcomes',
      nbaIcon: 'mail'
    }]
  }, {
    key: 'demo',
    name: 'Demo / Trial',
    count: 37,
    sum: '₹52L',
    glow: 'LEAD-9842',
    ai: ['Scheduler booked ', '9', ' demos & sent prep checklists.'],
    aiIcon: 'clock',
    cards: ['LEAD-9842', 'LEAD-9788']
  }, {
    key: 'neg',
    name: 'Negotiation',
    count: 19,
    sum: '₹28L',
    cards: [{
      id: 'LEAD-9540',
      name: 'Isha Sharma',
      city: 'Noida',
      av: grad.vm,
      init: 'IS',
      program: 'AI Engineer · GenAI',
      cohort: 'Cohort 026 · asked re: EMI',
      score: 82,
      temp: 'hot',
      nba: 'Send EMI + scholarship offer',
      nbaIcon: 'rupee'
    }, {
      id: 'LEAD-9512',
      name: 'Harsha Gupta',
      city: 'Online',
      av: grad.green,
      init: 'HG',
      program: 'Full Stack + AI',
      cohort: 'Cohort 023 · verbal yes',
      score: 88,
      temp: 'hot',
      nba: 'Send payment link',
      nbaIcon: 'check'
    }]
  }, {
    key: 'won',
    name: 'Enrolled',
    count: 62,
    sum: '₹1.3Cr',
    ai: ['Agent asked ', '11', ' happy enrollees for referrals.'],
    aiIcon: 'star',
    cards: ['LEAD-9655', {
      id: 'LEAD-9601',
      name: 'Nikhil Kumar',
      city: 'Hyderabad',
      av: grad.magenta,
      init: 'NK',
      program: 'AI & Data Science',
      cohort: 'Cohort 08 · ₹1.19L · paid',
      score: 93,
      temp: 'hot',
      nba: 'Onboarding complete',
      nbaIcon: 'check',
      ghost: true
    }]
  }];

  // Record timeline (for Aarav)
  const TIMELINE = [{
    kind: 'ai',
    when: 'Today · 9:42 AM',
    by: 'Outreach Agent',
    tag: 'ai',
    tagLabel: 'AI · Draft',
    text: 'Drafted a re-engagement email referencing his interest in the agentic capstone and the May 14 no-show.',
    quote: '"Hi Aarav — you asked about the multi-agent capstone before the demo. I recorded a 4-min walkthrough of exactly that build. Want me to hold your seat for Cohort 026?"'
  }, {
    kind: 'ai',
    when: 'Today · 6:10 AM',
    by: 'Lead Scoring Agent',
    tag: 'ai',
    tagLabel: 'AI · Score',
    text: 'Re-scored Aarav 74 → 89 after he re-opened the pricing page twice last night and replied to a WhatsApp nudge.'
  }, {
    kind: 'human',
    when: 'May 14 · 7:05 PM',
    by: 'You · Priya (advisor)',
    tag: 'you',
    tagLabel: 'Human',
    text: 'Logged a no-show for the live demo. Sent a one-line "sorry we missed you" from mobile.'
  }, {
    kind: 'ai',
    when: 'May 14 · 2:00 PM',
    by: 'Scheduler Agent',
    tag: 'ai',
    tagLabel: 'AI · Booked',
    text: 'Booked the live demo for 7 PM IST and sent calendar + WhatsApp reminders at T-24h and T-1h.'
  }, {
    kind: 'human',
    when: 'May 14 · 11:20 AM',
    by: 'Aarav Mehta',
    tag: 'you',
    tagLabel: 'Lead',
    text: 'Watched 78% of the free Module 1 lesson, then asked in chat: "does the capstone actually deploy a multi-agent system?"'
  }];
  const RECENTS = [{
    dot: 'run',
    txt: 'Re-engage 14 cold demo no-shows'
  }, {
    dot: 'run',
    txt: 'Draft follow-ups · Agentforce cohort'
  }, {
    dot: 'done',
    txt: 'Score 38 new inbound leads'
  }, {
    dot: 'done',
    txt: 'Book demo slots · 9 hot leads'
  }, {
    dot: 'done',
    txt: "Summarize yesterday's calls"
  }, {
    dot: 'wait',
    txt: 'Nurture sequence · Data Science'
  }, {
    dot: 'wait',
    txt: 'Flag at-risk enrolments'
  }];
  window.CRM = {
    LEADS,
    AGENTS,
    FEED,
    COLUMNS,
    TIMELINE,
    RECENTS,
    grad,
    leadById: id => LEADS.find(l => l.id === id)
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/data.js", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/icons.jsx
try { (() => {
/* Edify CRM — line-icon set (Lucide/Feather-style, 1.7–1.9 stroke, round caps).
   Paths lifted verbatim from the source product. Usage: <Icon name="send" /> */
(function () {
  const P = {
    home: ['M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', 'M9 22V12h6v10'],
    users: ['M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2', 'M22 21v-2a4 4 0 00-3-3.87'],
    pipeline: ['M3 3v18h18', 'M7 14l4-4 3 3 5-6'],
    send: ['M22 2L11 13M22 2l-7 20-4-9-9-4z'],
    clock: ['M12 7v5l3 2'],
    inbox: ['M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'],
    bars: ['M3 3v18h18', 'M7 11v6', 'M12 7v10', 'M17 4v13'],
    settings: ['M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.6 1.6 0 008 19.4a1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H2a2 2 0 110-4h.1A1.6 1.6 0 004.6 8a1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V2a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1H22a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z'],
    star: ['M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z'],
    mail: ['M4 4h16v12H5.2L4 20z'],
    chart: ['M3 3v18h18', 'M7 13l4-4 6 6'],
    search: ['M21 21l-4.35-4.35'],
    grid: ['M3 9h18'],
    mic: ['M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z', 'M19 10v1a7 7 0 01-14 0v-1M12 18v4'],
    arrow: ['M5 12h14M13 6l6 6-6 6'],
    arrowr: ['M13 5l7 7-7 7M20 12H4'],
    check: ['M20 6L9 17l-5-5'],
    sliders: ['M4 6h16M7 12h10M10 18h4'],
    leaf: ['M11 20A7 7 0 019 6c4-2 8-1 11-3 1 5-1 12-9 14z', 'M2 22c4-6 7-8 12-9'],
    info: ['M12 8v4M12 16h.01'],
    rupee: ['M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'],
    msg: ['M8 10h8M8 14h5M21 12a8 8 0 01-11.5 7.2L4 21l1.8-5.5A8 8 0 1121 12z'],
    list: ['M4 6h4M4 12h4M4 18h4M11 6h9M11 12h9M11 18h9'],
    code: ['M9 6l-5 6 5 6M15 6l5 6-5 6'],
    doc: ['M9 7h6M9 11h6M9 15h4'],
    plus: ['M12 5v14M5 12h14']
  };
  const CIRC = {
    users: [{
      cx: 9,
      cy: 7,
      r: 4
    }],
    clock: [{
      cx: 12,
      cy: 12,
      r: 9
    }],
    search: [{
      cx: 11,
      cy: 11,
      r: 7
    }],
    settings: [{
      cx: 12,
      cy: 12,
      r: 3
    }],
    info: [{
      cx: 12,
      cy: 12,
      r: 9
    }]
  };
  function Icon({
    name,
    size = 18,
    stroke,
    sw = 1.8,
    style
  }) {
    const paths = P[name] || [];
    const circs = CIRC[name] || [];
    return React.createElement('svg', {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'none',
      stroke: stroke || 'currentColor',
      strokeWidth: sw,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style
    }, ...circs.map((c, i) => React.createElement('circle', {
      key: 'c' + i,
      ...c
    })), ...paths.map((d, i) => React.createElement('path', {
      key: 'p' + i,
      d
    })));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/edify-crm/primitives.jsx
try { (() => {
/* Edify CRM — small reusable presentational primitives. */
(function () {
  const h = React.createElement;

  // Conic AI score ring (hot/warm/cold)
  function ScoreRing({
    score,
    temp,
    size = 34
  }) {
    const inner = Math.round(size * 0.76);
    const fs = size >= 50 ? 18 : size >= 40 ? 13 : 11;
    return h('div', {
      className: 'ring ' + temp,
      style: {
        '--p': score + '%',
        width: size,
        height: size,
        borderRadius: 99,
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: fs,
        flexShrink: 0
      }
    }, h('i', {
      style: {
        width: inner,
        height: inner,
        borderRadius: 99,
        background: 'var(--paper)',
        display: 'grid',
        placeItems: 'center',
        fontStyle: 'normal'
      }
    }, score));
  }

  // Pipeline stage pill
  function StagePill({
    stage,
    label
  }) {
    return h('span', {
      className: 'stage ' + stage
    }, h('span', {
      className: 'd'
    }), label);
  }

  // Avatar with gradient bg + initials
  function Avatar({
    init,
    bg,
    size = 34,
    radius = 99,
    fs = 13
  }) {
    return h('div', {
      style: {
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: fs,
        flexShrink: 0
      }
    }, init);
  }

  // Button
  function Btn({
    variant,
    icon,
    children,
    onClick
  }) {
    const cls = 'btn' + (variant ? ' ' + variant : '');
    return h('button', {
      className: cls,
      onClick
    }, icon ? h(Icon, {
      name: icon,
      size: 14,
      sw: 2
    }) : null, children);
  }

  // Mono eyebrow with leading rule + optional trailing "more"
  function SectionHead({
    label,
    more
  }) {
    return h('div', {
      className: 'home-sec-h'
    }, h('div', {
      className: 'lab'
    }, label), more ? h('div', {
      className: 'more'
    }, more) : null);
  }

  // NBA inline row (table + kanban)
  function NbaRow({
    icon,
    children,
    ghost
  }) {
    return h('div', {
      className: 'nba' + (ghost ? ' ghost' : '')
    }, h('span', {
      className: 'ai'
    }, h(Icon, {
      name: icon,
      size: 11,
      sw: 2
    })), children);
  }
  Object.assign(window, {
    ScoreRing,
    StagePill,
    Avatar,
    Btn,
    SectionHead,
    NbaRow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/edify-crm/primitives.jsx", error: String((e && e.message) || e) }); }

})();
