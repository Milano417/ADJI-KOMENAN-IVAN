/* =========================================================
   MILANO — Portfolio (JavaScript natif)
   Les données viennent de js/data.js
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Utilitaires ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* stockage indisponible */ } },
  };

  /* ---------- Icônes (tracés Lucide) ---------- */
  const ICONS = {
    'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    'check-circle': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'alert-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    compass: '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
  };

  function icon(name, size, extra) {
    const cls = ['icon', size ? 'icon-' + size : '', extra || ''].filter(Boolean).join(' ');
    return '<svg class="' + cls + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }

  // Remplace les <i data-icon="..."> présents dans le HTML
  function hydrateIcons(root = document) {
    $$('i[data-icon]', root).forEach((el) => {
      el.outerHTML = icon(el.dataset.icon, el.dataset.size, el.dataset.class);
    });
  }

  /* ---------- Données du profil dans le HTML ---------- */
  function bindProfile() {
    $$('[data-bind]').forEach((el) => { el.textContent = PROFILE_DATA[el.dataset.bind] || ''; });
    $('#hero-text').textContent = PROFILE_DATA.tagline + ' ' + PROFILE_DATA.shortBio;
    $$('.js-mailto').forEach((a) => { a.href = 'mailto:' + PROFILE_DATA.email; });
    $$('.js-linkedin').forEach((a) => {
      if (PROFILE_DATA.socials.linkedin) a.href = PROFILE_DATA.socials.linkedin; else a.remove();
    });
    $$('.js-github').forEach((a) => {
      if (PROFILE_DATA.socials.github) a.href = PROFILE_DATA.socials.github; else a.remove();
    });
  }

  /* ---------- Preloader ---------- */
  function initPreloader() {
    const el = $('#preloader');
    setTimeout(() => {
      el.classList.add('fading');
      setTimeout(() => el.remove(), 300);
    }, 600);
  }

  /* ---------- Thème clair / sombre ---------- */
  function initTheme() {
    const btn = $('#theme-toggle');
    const render = () => {
      const dark = document.documentElement.classList.contains('dark');
      btn.innerHTML = dark ? icon('sun', null, 'sun') : icon('moon');
      btn.setAttribute('aria-label', dark ? 'Basculer en mode clair' : 'Basculer en mode sombre');
      btn.title = dark ? 'Mode clair' : 'Mode sombre';
    };
    btn.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      store.set('milano_theme', dark ? 'dark' : 'light');
      render();
    });
    render();
  }

  /* ---------- Navbar ---------- */
  function initNavbar() {
    const nav = $('#navbar');
    const sections = ['hero', 'about', 'skills', 'services', 'projects', 'workflow', 'experience', 'contact'];
    const links = $$('[data-section]');

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      const pos = window.scrollY + 140;
      let active = 'hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) { active = sections[i]; break; }
      }
      links.forEach((l) => l.classList.toggle('active', l.dataset.section === active));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Menu mobile
    const menu = $('#mobile-menu');
    const toggle = $('#menu-toggle');
    const setMenu = (open) => {
      menu.classList.toggle('hidden', !open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = icon(open ? 'x' : 'menu');
    };
    toggle.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
    setMenu(false);

    // Easter egg : 5 clics sur le logo
    let clicks = 0;
    let eggTimer;
    const egg = $('#easter-egg');
    const closeEgg = () => egg.classList.add('hidden');
    $('#logo').addEventListener('click', () => {
      clicks++;
      if (clicks >= 5) {
        clicks = 0;
        egg.classList.remove('hidden');
        clearTimeout(eggTimer);
        eggTimer = setTimeout(closeEgg, 4000);
      }
    });
    $('#easter-close').addEventListener('click', closeEgg);

    $('#to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Curseur personnalisé ---------- */
  function initCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const cursor = $('#cursor');
    const ring = $('.cursor-ring', cursor);
    const dot = $('.cursor-dot', cursor);
    window.addEventListener('mousemove', (e) => {
      const t = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
      ring.style.transform = t;
      dot.style.transform = t;
      cursor.classList.add('visible');
      const target = e.target;
      const interactive = target && target.closest && target.closest('button, a, input, textarea, select, [role="button"], .clickable');
      cursor.classList.toggle('hover', !!interactive);
    });
    document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    document.addEventListener('mouseenter', () => cursor.classList.add('visible'));
  }

  /* ---------- Compétences ---------- */
  function initSkills() {
    const tabs = $('#skill-tabs');
    tabs.innerHTML = SKILLS_DATA.map((c) =>
      '<button class="tab" role="tab" data-id="' + esc(c.id) + '">' + esc(c.title) + '</button>'
    ).join('');

    const show = (id) => {
      const cat = SKILLS_DATA.find((c) => c.id === id) || SKILLS_DATA[0];
      $$('.tab', tabs).forEach((t) => {
        const on = t.dataset.id === cat.id;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', String(on));
      });
      $('#skill-title').textContent = cat.title;
      $('#skill-desc').textContent = cat.shortDesc;
      $('#skill-items').innerHTML = cat.items.map((item) =>
        '<div class="skill-item">' +
          '<div class="row"><strong>' + esc(item.name) + '</strong><span class="lvl">' + esc(item.level) + '</span></div>' +
          '<p>' + esc(item.highlight) + '</p>' +
        '</div>'
      ).join('');
    };

    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab');
      if (btn) show(btn.dataset.id);
    });
    show(SKILLS_DATA[0].id);

    $('#tech-wall').innerHTML = TECH_WALL.map((t) => '<div class="tech-chip">' + esc(t) + '</div>').join('');
  }

  /* ---------- Services ---------- */
  function initServices() {
    $('#services-grid').innerHTML = SERVICES_DATA.map((s) =>
      '<div class="service-card">' +
        '<div class="service-top">' +
          '<div class="row"><div class="service-icon">' + icon(s.iconName) + '</div><span class="service-num">' + esc(s.number) + '</span></div>' +
          '<div><h3>' + esc(s.title) + '</h3><p class="desc">' + esc(s.description) + '</p></div>' +
          '<div class="deliverables"><span class="label-up">Livrables Clés</span>' +
            s.deliverables.map((d) => '<div class="check-item">' + icon('check-circle') + '<span>' + esc(d) + '</span></div>').join('') +
          '</div>' +
        '</div>' +
        '<div class="service-foot">' +
          '<span class="ideal" title="' + esc(s.idealFor) + '">' + esc(s.idealFor) + '</span>' +
          '<button data-service="' + esc(s.title) + '"><span>' + esc(s.actionText) + '</span>' + icon('arrow-up-right', 'sm') + '</button>' +
        '</div>' +
      '</div>'
    ).join('');

    // Un clic sur un service pré-sélectionne le type de projet et descend au contact
    const map = {
      'Développement Web': 'Site web',
      'Applications Web': 'Application web',
      'Applications Mobiles': 'Application mobile',
      'Solutions Digitales': 'Solution digitale',
      'UI / UX Design': 'Design',
      'Design Graphique': 'Design',
    };
    $('#services-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-service]');
      if (!btn) return;
      $('#contact-project-type').value = map[btn.dataset.service] || 'Autre';
      const subject = $('#contact-subject');
      if (!subject.value) subject.value = btn.dataset.service;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Projets ---------- */
  function projectCard(p) {
    const techs = p.technologies.slice(0, 3).map((t, i, arr) =>
      '<span>' + esc(t) + '</span>' + (i < arr.length - 1 ? '<span class="sep" aria-hidden="true">·</span>' : '')
    ).join('') + (p.technologies.length > 3 ? '<span>+' + (p.technologies.length - 3) + '</span>' : '');

    return '<div class="project-card">' +
      '<div class="project-media" data-open="' + esc(p.id) + '">' +
        '<img src="' + esc(p.image) + '" alt="Aperçu du projet ' + esc(p.title) + '" loading="lazy" />' +
        '<div class="project-overlay"><span>' + icon('eye', 'sm') + '<span>Consulter l\'étude de cas</span></span></div>' +
      '</div>' +
      '<div class="project-body">' +
        '<div>' +
          '<div class="meta"><b>' + esc(p.category) + '</b><span>' + esc(p.year) + '</span></div>' +
          '<h3 data-open="' + esc(p.id) + '">' + esc(p.title) + '</h3>' +
          '<p class="sub">' + esc(p.subtitle) + '</p>' +
          '<p class="summary">' + esc(p.summary) + '</p>' +
        '</div>' +
        '<div class="project-foot">' +
          '<div class="techs">' + techs + '</div>' +
          '<div class="project-actions">' +
            '<button data-open="' + esc(p.id) + '"><span>Étude de cas</span>' + icon('arrow-up-right', 'sm') + '</button>' +
            (p.demoUrl ? '<a href="' + esc(p.demoUrl) + '" target="_blank" rel="noreferrer" title="Consulter le lien">' + icon('external-link', 'sm') + '</a>' : '') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function initProjects() {
    const grid = $('#projects-grid');
    const render = (filter) => {
      const list = filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.categoryKey === filter);
      grid.innerHTML = list.map(projectCard).join('');
    };
    $('#project-filters').addEventListener('click', (e) => {
      const btn = e.target.closest('.tab');
      if (!btn) return;
      $$('#project-filters .tab').forEach((t) => t.classList.toggle('active', t === btn));
      render(btn.dataset.filter);
    });
    grid.addEventListener('click', (e) => {
      const el = e.target.closest('[data-open]');
      if (el) openCaseStudy(el.dataset.open);
    });
    render('all');
  }

  /* ---------- Méthodologie ---------- */
  function initWorkflow() {
    $('#workflow-grid').innerHTML = WORK_PROCESS_STEPS.map((s, i) =>
      '<div class="step-card' + (i === 6 ? ' last' : '') + '">' +
        '<div class="row"><span class="step-num">' + esc(s.number) + '</span><span class="step-count">Étape ' + (i + 1) + '/7</span></div>' +
        '<div><h3>' + esc(s.title) + '</h3><p class="subtitle">' + esc(s.subtitle) + '</p></div>' +
        '<p class="desc">' + esc(s.description) + '</p>' +
        '<div class="focus-list">' + s.focusPoints.map((f) => '<div>' + esc(f) + '</div>').join('') + '</div>' +
      '</div>'
    ).join('');
  }

  /* ---------- Expériences & formation ---------- */
  function initExperience() {
    $('#exp-list').innerHTML = EXPERIENCES_DATA.map((x) =>
      '<div class="exp-card hoverable">' +
        '<div class="head"><h4>' + esc(x.role) + '</h4><span class="period">' + esc(x.period) + '</span></div>' +
        '<div class="exp-meta">' +
          '<span class="company">' + esc(x.company) + '</span><span aria-hidden="true">·</span>' +
          '<span class="loc">' + icon('map-pin', 'xs') + '<span>' + esc(x.location) + '</span></span><span aria-hidden="true">·</span>' +
          '<span class="type">' + esc(x.type) + '</span>' +
        '</div>' +
        '<p class="desc">' + esc(x.description) + '</p>' +
        '<div class="exp-acts"><span class="label-up">Activités Réalisées</span>' +
          x.activities.map((a) => '<div class="check-item">' + icon('check-circle') + '<span>' + esc(a) + '</span></div>').join('') +
        '</div>' +
      '</div>'
    ).join('');

    $('#edu-list').innerHTML = EDUCATION_DATA.map((e) =>
      '<div class="exp-card">' +
        '<div class="edu-top">' +
          '<div class="row"><span class="edu-status">' + esc(e.status) + '</span><span class="years">' + esc(e.years) + '</span></div>' +
          '<h4>' + esc(e.degree) + '</h4>' +
          '<p class="field">' + esc(e.field) + '</p>' +
        '</div>' +
        '<div class="edu-inst">Établissement : <strong>' + esc(e.institution) + '</strong></div>' +
        '<div class="edu-hl"><span class="label-up">Parcours de Validation</span>' +
          e.highlights.map((h) => '<p>' + esc(h) + '</p>').join('') +
        '</div>' +
      '</div>'
    ).join('');
  }

  /* ---------- Formulaire de contact ---------- */
  function initContact() {
    const form = $('#contact-form');
    const ok = $('#form-success');
    const err = $('#form-error');
    const submit = $('#form-submit');
    const label = $('span', submit);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if ($('#honeypot').value) return; // anti-spam

      const name = $('#contact-name').value.trim();
      const email = $('#contact-email').value.trim();
      const message = $('#contact-message').value.trim();

      ok.classList.add('hidden');
      const fail = (msg) => {
        $('#form-error-text').textContent = msg;
        err.classList.remove('hidden');
      };

      if (!name || !email || !message) return fail('Veuillez remplir tous les champs obligatoires.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Veuillez saisir une adresse email valide.');

      err.classList.add('hidden');
      submit.disabled = true;
      label.textContent = 'Envoi en cours...';

      // Envoi simulé, comme dans la version React
      setTimeout(() => {
        form.reset();
        submit.disabled = false;
        label.textContent = 'Envoyer ma demande';
        ok.classList.remove('hidden');
      }, 600);
    });
  }

  /* ---------- Gestion des modales ---------- */
  let openModalEl = null;

  function openModal(el) {
    openModalEl = el;
    el.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    if (!openModalEl) return;
    openModalEl.classList.add('hidden');
    openModalEl = null;
    document.body.classList.remove('modal-open');
  }

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---------- Étude de cas ---------- */
  function caseList(items) {
    return '<ul class="case-list">' + items.map((i) => '<li><b>›</b><span>' + esc(i) + '</span></li>').join('') + '</ul>';
  }

  function openCaseStudy(id) {
    const p = PROJECTS_DATA.find((x) => x.id === id);
    if (!p) return;
    const cs = p.caseStudy;
    const links = (p.demoUrl || p.githubUrl)
      ? '<div class="case-links">' +
          (p.demoUrl ? '<a href="' + esc(p.demoUrl) + '" target="_blank" rel="noreferrer" class="btn btn-primary btn-md"><span>Consulter le projet</span>' + icon('external-link', 'sm') + '</a>' : '') +
          (p.githubUrl ? '<a href="' + esc(p.githubUrl) + '" target="_blank" rel="noreferrer" class="btn btn-gray btn-md">' + icon('github', 'sm') + '<span>Code source</span></a>' : '') +
        '</div>'
      : '';

    $('#case-content').innerHTML =
      '<div class="modal-header">' +
        '<div class="meta"><span class="cat">Étude de cas · ' + esc(p.category) + '</span><span class="bar">|</span><span class="yr">' + esc(p.year) + '</span></div>' +
        '<button class="modal-close js-case-close" aria-label="Fermer l\'étude de cas">' + icon('x') + '</button>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div class="case-hero">' +
          '<h2 id="case-study-title">' + esc(p.title) + '</h2>' +
          '<p class="sub">' + esc(p.subtitle) + '</p>' +
          '<div class="case-meta"><b>Rôle :</b><span>' + esc(p.role) + '</span><span aria-hidden="true">·</span><b>Année :</b><span>' + esc(p.year) + '</span></div>' +
          '<div class="case-img"><img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" /></div>' +
          links +
        '</div>' +
        '<div class="case-grid">' +
          '<div class="case-block"><div class="case-label">' + icon('alert-circle') + '<span>01 · Le Problème</span></div><p>' + esc(cs.problem) + '</p></div>' +
          '<div class="case-block"><div class="case-label">' + icon('compass') + '<span>02 · La Réflexion</span></div><p>' + esc(cs.reflection) + '</p></div>' +
          '<div class="case-block solution span-2"><div class="case-label">' + icon('check-circle') + '<span>03 · La Solution Conçue</span></div><p>' + esc(cs.solution) + '</p></div>' +
          '<div class="case-block"><div class="case-label">' + icon('layers') + '<span>04 · Design &amp; Interfaces</span></div>' + caseList(cs.designHighlights) + '</div>' +
          '<div class="case-block"><div class="case-label">' + icon('cpu') + '<span>05 · Développement &amp; Stack</span></div>' + caseList(cs.devArchitecture) + '</div>' +
          '<div class="case-block span-2"><div class="case-label"><span>06 · Principales Fonctionnalités</span></div>' +
            '<div class="features">' + cs.features.map((f) => '<div class="check-item">' + icon('check-circle') + '<span>' + esc(f) + '</span></div>').join('') + '</div>' +
          '</div>' +
          '<div class="case-block outcome span-2"><div class="case-label"><span>07 · Résultat Documenté</span></div><p>' + esc(cs.outcome) + '</p></div>' +
        '</div>' +
        '<div class="case-techs"><b>Technologies mobilisées :</b>' +
          p.technologies.map((t, i) => '<span>' + esc(t) + '</span>' + (i < p.technologies.length - 1 ? '<span class="sep" aria-hidden="true">·</span>' : '')).join('') +
        '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<p>Étude de cas réalisée et validée par MILANO</p>' +
        '<button class="btn btn-secondary btn-md js-case-close">Fermer</button>' +
      '</div>';

    const modal = $('#case-modal');
    openModal(modal);
    $('.modal-body', modal).scrollTop = 0;
  }

  function initCaseModal() {
    const modal = $('#case-modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.js-case-close')) closeModal();
    });
  }

  /* ---------- CV ---------- */
  function renderCV() {
    $('#cv-body').innerHTML =
      '<div class="cv-hero">' +
        '<div class="top">' +
          '<div><h1 id="cv-title">' + esc(PROFILE_DATA.fullName) + '</h1><p class="role">' + esc(PROFILE_DATA.professionalName) + ' · ' + esc(PROFILE_DATA.role) + '</p></div>' +
          '<div class="cv-contacts">' +
            '<div>' + icon('map-pin', 'sm') + '<span>' + esc(PROFILE_DATA.location) + '</span></div>' +
            '<div>' + icon('mail', 'sm') + '<a href="mailto:' + esc(PROFILE_DATA.email) + '">' + esc(PROFILE_DATA.email) + '</a></div>' +
          '</div>' +
        '</div>' +
        '<p>' + esc(PROFILE_DATA.shortBio) + '</p>' +
      '</div>' +
      '<div>' +
        '<h2 class="cv-h2">Compétences Clés</h2>' +
        '<div class="cv-skills">' +
          '<div><strong>Développement Web &amp; Mobile</strong><p>React, TypeScript, JavaScript (ES6+), PHP, MySQL, Tailwind CSS, HTML5/CSS3, PWA</p></div>' +
          '<div><strong>UI/UX &amp; Design Graphique</strong><p>Conception d\'interfaces, Wireframes, Figma, Photoshop, Illustrator, Identités visuelles</p></div>' +
          '<div><strong>Architecture &amp; Données</strong><p>Modélisation relationnelle (Merise/SQL), DBeaver, logique métier, APIs RESTful</p></div>' +
          '<div><strong>Méthodes &amp; Outils</strong><p>Git/GitHub, VS Code, Vercel, Outils d\'assistance IA, Rigueur qualité &amp; accessibilité</p></div>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<h2 class="cv-h2">Expériences Professionnelles</h2>' +
        EXPERIENCES_DATA.map((x) =>
          '<div class="cv-entry">' +
            '<div class="head"><h3>' + esc(x.role) + '</h3><span class="period">' + esc(x.period) + '</span></div>' +
            '<div class="company">' + esc(x.company) + ' · ' + esc(x.location) + '</div>' +
            '<p>' + esc(x.description) + '</p>' +
            '<ul>' + x.activities.map((a) => '<li><b>•</b><span>' + esc(a) + '</span></li>').join('') + '</ul>' +
          '</div>'
        ).join('') +
      '</div>' +
      '<div>' +
        '<h2 class="cv-h2">Formation &amp; Diplômes</h2>' +
        EDUCATION_DATA.map((e) =>
          '<div class="cv-entry edu">' +
            '<div class="head"><h3>' + esc(e.degree) + ' — ' + esc(e.field) + '</h3><span class="status">' + esc(e.status) + ' · ' + esc(e.years) + '</span></div>' +
            '<div class="inst">' + esc(e.institution) + '</div>' +
            e.highlights.map((h) => '<p>' + esc(h) + '</p>').join('') +
          '</div>'
        ).join('') +
      '</div>' +
      '<div class="cv-projects">' +
        '<h2 class="cv-h2">Projets Phares Réalisés</h2>' +
        '<div class="list">' +
          '<div><b>MILAWEB :</b> Écosystème web et solutions logicielles modulaires.</div>' +
          '<div><b>HotelFlow :</b> Système complet de gestion d\'hôtellerie &amp; réservations (PHP/MySQL).</div>' +
          '<div><b>CaisPro :</b> Application de caisse commerciale et suivi financier.</div>' +
          '<div><b>ISATECH Portal :</b> Plateforme académique et gestion des programmes.</div>' +
        '</div>' +
      '</div>';
  }

  function initCV() {
    renderCV();
    const modal = $('#cv-modal');
    $$('.js-open-cv').forEach((b) => b.addEventListener('click', () => {
      openModal(modal);
      $('#cv-body').scrollTop = 0;
    }));
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.js-cv-close')) closeModal();
    });

    // Impression : uniquement le CV, toujours en thème clair
    let wasDark = false;
    $('#cv-print').addEventListener('click', () => window.print());
    window.addEventListener('beforeprint', () => {
      if (openModalEl !== modal) return;
      wasDark = document.documentElement.classList.contains('dark');
      document.documentElement.classList.remove('dark');
      document.body.classList.add('printing-cv');
    });
    window.addEventListener('afterprint', () => {
      document.body.classList.remove('printing-cv');
      if (wasDark) document.documentElement.classList.add('dark');
      wasDark = false;
    });
  }

  /* ---------- Visite guidée ---------- */
  function initTour() {
    const tour = $('#tour');
    const welcome = $('#tour-welcome');
    const stepView = $('#tour-step');
    let index = 0;

    const close = () => tour.classList.add('hidden');
    const done = () => { store.set('milano_tour_completed', 'true'); close(); };

    const showStep = () => {
      const step = TOUR_STEPS[index];
      welcome.classList.add('hidden');
      stepView.classList.remove('hidden');
      $('#tour-badge').textContent = step.badge;
      $('#tour-title').textContent = step.title;
      $('#tour-desc').textContent = step.description;
      $('#tour-progress').style.width = ((index + 1) / TOUR_STEPS.length) * 100 + '%';
      $('#tour-count').textContent = (index + 1) + ' / ' + TOUR_STEPS.length;
      $('#tour-prev').disabled = index === 0;
      $('#tour-next-label').textContent = index === TOUR_STEPS.length - 1 ? 'Terminer' : 'Suivant';
      const target = document.getElementById(step.targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const start = () => {
      index = 0;
      tour.classList.remove('hidden');
      showStep();
    };

    $('#tour-begin').addEventListener('click', start);
    $$('.js-tour-dismiss').forEach((b) => b.addEventListener('click', done));
    $('#tour-close').addEventListener('click', close);
    $('#tour-prev').addEventListener('click', () => { if (index > 0) { index--; showStep(); } });
    $('#tour-next').addEventListener('click', () => {
      if (index < TOUR_STEPS.length - 1) { index++; showStep(); } else { done(); }
    });
    $$('.js-start-tour').forEach((b) => b.addEventListener('click', start));

    // Message de bienvenue lors de la première visite
    if (!store.get('milano_tour_completed')) {
      setTimeout(() => {
        welcome.classList.remove('hidden');
        stepView.classList.add('hidden');
        tour.classList.remove('hidden');
      }, 1400);
    }
  }

  /* ---------- Démarrage ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    bindProfile();
    hydrateIcons();
    initPreloader();
    initTheme();
    initNavbar();
    initCursor();
    initSkills();
    initServices();
    initProjects();
    initWorkflow();
    initExperience();
    initContact();
    initCaseModal();
    initCV();
    initTour();
  });
})();
