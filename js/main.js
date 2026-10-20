/* =========================================================
   Adji Komenan Ivan — Portfolio (JavaScript)
   Données : js/data.js · 3D : module intégré dans index.html · Animations : GSAP
   ========================================================= */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* stockage indisponible */ } },
  };
  const list = (items) => '<ul>' + items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>';
  const pad = (n) => String(n).padStart(2, '0');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger) && !reduceMotion;
  if (!hasGsap) document.documentElement.classList.add('no-anim');

  const ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  };
  const icon = (name) =>
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';

  /* =========================================================
     Contenu
     ========================================================= */
  function bindProfile() {
    $$('[data-bind]').forEach((el) => { el.textContent = PROFILE_DATA[el.dataset.bind] || ''; });
    $$('.js-mailto').forEach((a) => { a.href = 'mailto:' + PROFILE_DATA.email; });
    $$('.js-linkedin').forEach((a) => { if (PROFILE_DATA.socials.linkedin) a.href = PROFILE_DATA.socials.linkedin; else a.remove(); });
    $$('.js-github').forEach((a) => { if (PROFILE_DATA.socials.github) a.href = PROFILE_DATA.socials.github; else a.remove(); });

    // Chiffres clés calculés à partir des données
    const keys = $$('.about-keys strong');
    if (keys.length === 3) {
      keys[0].textContent = PROJECTS_DATA.length;
      keys[1].textContent = EXPERIENCES_DATA.length;
      keys[2].textContent = SERVICES_DATA.length;
      keys.forEach((k) => { k.dataset.value = k.textContent; });
    }
  }

  function renderMarquee() {
    const items = TECH_WALL.map((t) => '<span>' + esc(t) + '</span>').join('');
    $('#marquee-track').innerHTML = items + items;
  }

  function renderProjects() {
    const featured = PROJECTS_DATA.filter((p) => p.featured);
    const others = PROJECTS_DATA.filter((p) => !p.featured);

    $('#projects-track').innerHTML =
      '<div class="track-intro">' +
        '<p class="section-label"><span>02</span>Projets</p>' +
        '<h2 class="section-title">Projets<br />sélectionnés</h2>' +
        '<p class="projects-hint">' + pad(featured.length) + ' études de cas · cliquez pour ouvrir</p>' +
      '</div>' +
      featured.map((p, i) =>
        '<article class="project-card">' +
          '<button type="button" class="project-card-inner" data-case="' + esc(p.id) + '" aria-label="Étude de cas : ' + esc(p.title) + '">' +
            '<div class="project-media">' +
              '<span class="project-index">' + pad(i + 1) + ' / ' + pad(featured.length) + '</span>' +
              '<img src="' + esc(p.image) + '" alt="" loading="lazy" />' +
            '</div>' +
            '<div class="project-info">' +
              '<h3>' + esc(p.title) + '</h3>' +
              '<span class="project-year">' + esc(p.year) + '</span>' +
              '<p class="project-sub">' + esc(p.subtitle) + '</p>' +
              '<div class="project-stack">' + p.technologies.slice(0, 4).map((t) => '<span>' + esc(t) + '</span>').join('') + '</div>' +
            '</div>' +
          '</button>' +
          (p.demoUrl ? '<a class="project-live" href="' + esc(p.demoUrl) + '" target="_blank" rel="noreferrer">Voir le site ↗</a>' : '') +
        '</article>'
      ).join('');

    $('#others-list').innerHTML = others.map((p) =>
      '<li class="other-row">' +
        '<button type="button" data-case="' + esc(p.id) + '">' +
          '<span class="name">' + esc(p.title) + '</span>' +
          '<span class="desc">' + esc(p.subtitle) + '</span>' +
          '<span class="year">' + esc(p.year) + '</span>' +
          '<span class="arrow" aria-hidden="true">→</span>' +
        '</button>' +
      '</li>'
    ).join('');

    $('#projets').addEventListener('click', (e) => {
      const el = e.target.closest('[data-case]');
      if (el) openCaseStudy(el.dataset.case);
    });
  }

  function renderServices() {
    $('#service-list').innerHTML = SERVICES_DATA.map((s) =>
      '<li class="service"><div class="service-row">' +
        '<span class="service-num">' + esc(s.number) + '</span>' +
        '<div><h3>' + esc(s.title) + '</h3><p class="service-desc">' + esc(s.description) + '</p></div>' +
        list(s.deliverables) +
      '</div></li>'
    ).join('');

    $('#process').innerHTML = WORK_PROCESS_STEPS.map((s) =>
      '<li>' +
        '<span class="num">' + esc(s.number) + '</span>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p class="sub">' + esc(s.subtitle) + '</p>' +
        '<p class="desc">' + esc(s.description) + '</p>' +
      '</li>'
    ).join('');
  }

  function renderSkills() {
    $('#skills').innerHTML = SKILLS_DATA.map((c, i) =>
      '<div class="skill-card">' +
        '<span class="idx" aria-hidden="true">' + pad(i + 1) + '</span>' +
        '<h3>' + esc(c.title) + '</h3>' +
        '<p class="intro">' + esc(c.shortDesc) + '</p>' +
        '<ul>' + c.items.map((it) =>
          '<li><span class="skill-name">' + esc(it.name) + '</span><span class="skill-detail">' + esc(it.highlight) + '</span></li>'
        ).join('') + '</ul>' +
      '</div>'
    ).join('');
  }

  function renderTimeline() {
    const exp = EXPERIENCES_DATA.map((x) =>
      '<li class="t-item">' +
        '<div class="t-when"><strong>' + esc(x.type) + '</strong>' + esc(x.period) + '</div>' +
        '<div>' +
          '<h3>' + esc(x.role) + '</h3>' +
          '<p class="t-org">' + esc(x.company) + ' · ' + esc(x.location) + '</p>' +
          '<p class="t-desc">' + esc(x.description) + '</p>' +
          list(x.activities) +
        '</div>' +
      '</li>'
    );
    const edu = EDUCATION_DATA.map((e) =>
      '<li class="t-item">' +
        '<div class="t-when"><strong>Formation · ' + esc(e.status) + '</strong>' + esc(e.years) + '</div>' +
        '<div>' +
          '<h3>' + esc(e.degree) + '</h3>' +
          '<p class="t-org">' + esc(e.field) + ' — ' + esc(e.institution) + '</p>' +
          list(e.highlights) +
        '</div>' +
      '</li>'
    );
    $('#timeline-list').innerHTML = exp.concat(edu).join('');
  }

  // Découpe un texte en mots (pour les animations mot à mot)
  function splitWords(el) {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w) => '<span class="w">' + esc(w) + '</span>').join(' ');
    return $$('.w', el);
  }

  // Découpe un texte en lettres
  function splitChars(el) {
    const text = el.textContent;
    el.innerHTML = Array.from(text).map((c) => (c === ' ' || c === ' ') ? '&nbsp;' : '<span class="ch">' + esc(c) + '</span>').join('');
    return $$('.ch', el);
  }

  /* =========================================================
     Interface
     ========================================================= */
  function initTheme() {
    const btn = $('#theme-toggle');
    const render = () => {
      const dark = document.documentElement.classList.contains('dark');
      btn.innerHTML = icon(dark ? 'sun' : 'moon');
      btn.setAttribute('aria-label', dark ? 'Passer en thème clair' : 'Passer en thème sombre');
    };
    btn.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      store.set('milano_theme', dark ? 'dark' : 'light');
      render();
      updateHeader();
    });
    render();
  }

  let updateHeader = () => {};

  function initHeader() {
    const header = $('#header');
    const hero = $('.hero');
    const links = $$('.nav a');
    const sections = links.map((a) => document.getElementById(a.dataset.section)).filter(Boolean);
    let lastY = window.scrollY;

    updateHeader = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 20);
      // L'en-tête garde des couleurs claires tant qu'il est au-dessus de l'intro bleu nuit
      header.classList.toggle('always-dark', document.body.classList.contains('menu-open') || y < hero.offsetHeight - 84);
      // Se cache en descendant, réapparaît en remontant
      const menuOpen = document.body.classList.contains('menu-open');
      header.classList.toggle('hidden-up', !menuOpen && y > lastY && y > 400);
      lastY = y;

      const pos = y + 140;
      let current = '';
      sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
      links.forEach((a) => a.classList.toggle('active', a.dataset.section === current));
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    const toggle = $('#menu-toggle');
    const menu = $('#mobile-nav');
    const setMenu = (open) => {
      menu.hidden = !open;
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      toggle.innerHTML = icon(open ? 'x' : 'menu');
      updateHeader();
      if (open && hasGsap) gsap.from($$('a', menu), { yPercent: 60, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'expo.out' });
    };
    toggle.addEventListener('click', () => setMenu(menu.hidden));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
    setMenu(false);
  }

  function initCursor() {
    if (!finePointer || reduceMotion) return;
    const ring = $('#cursor');
    const dot = $('#cursor-dot');
    const label = $('#cursor-label');
    document.documentElement.classList.add('has-cursor');

    let x = -100, y = -100, rx = -100, ry = -100;
    window.addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
      const view = e.target.closest && e.target.closest('.project-card, .other-row button');
      const link = e.target.closest && e.target.closest('a, button, select, label');
      ring.classList.toggle('is-view', !!view);
      ring.classList.toggle('is-link', !view && !!link);
      label.textContent = view ? 'Voir' : '';
    }, { passive: true });

    (function loop() {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseleave', () => { ring.style.opacity = 0; dot.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { ring.style.opacity = 1; dot.style.opacity = 1; });
  }

  // Les boutons « magnétiques » suivent légèrement la souris
  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + dx * 0.25 + 'px,' + dy * 0.35 + 'px)';
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
        el.style.transform = '';
        setTimeout(() => { el.style.transition = ''; }, 600);
      });
    });
  }

  // Inclinaison 3D des cartes projet
  function initTilt() {
    if (!finePointer || reduceMotion) return;
    $$('.project-card').forEach((card) => {
      const inner = $('.project-card-inner', card);
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        inner.style.transform = 'rotateY(' + px * 10 + 'deg) rotateX(' + -py * 8 + 'deg) translateZ(0)';
      });
      card.addEventListener('pointerleave', () => { inner.style.transform = ''; });
    });
  }

  /* =========================================================
     Modales
     ========================================================= */
  function openDialog(dialog) {
    dialog.showModal();
    document.body.classList.add('modal-open');
    const body = $('.modal-body', dialog);
    if (body) body.scrollTop = 0;
  }

  function initDialogs() {
    $$('dialog.modal').forEach((dialog) => {
      dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target.closest('.js-close')) dialog.close();
      });
    });
    $$('.js-close').forEach((b) => { b.innerHTML = icon('x'); });
  }

  function openCaseStudy(id) {
    const p = PROJECTS_DATA.find((x) => x.id === id);
    if (!p) return;
    const cs = p.caseStudy;
    $('#case-content').innerHTML =
      '<div class="modal-bar">' +
        '<span class="modal-bar-title">Étude de cas · ' + esc(p.category) + '</span>' +
        '<button type="button" class="icon-button js-close" aria-label="Fermer l\'étude de cas">' + icon('x') + '</button>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div class="case-head"><h2 id="case-title">' + esc(p.title) + '</h2><p>' + esc(p.subtitle) + '</p></div>' +
        '<dl class="case-meta">' +
          '<div><dt>Rôle</dt><dd>' + esc(p.role) + '</dd></div>' +
          '<div><dt>Année</dt><dd>' + esc(p.year) + '</dd></div>' +
          '<div><dt>Technologies</dt><dd>' + p.technologies.map(esc).join(', ') + '</dd></div>' +
        '</dl>' +
        (p.image ? '<div class="case-image"><img src="' + esc(p.image) + '" alt="Aperçu de ' + esc(p.title) + '" /></div>' : '') +
        '<div class="case-section"><h3><span>01</span>Le problème</h3><p>' + esc(cs.problem) + '</p></div>' +
        '<div class="case-section"><h3><span>02</span>La démarche</h3><p>' + esc(cs.reflection) + '</p></div>' +
        '<div class="case-section"><h3><span>03</span>La solution</h3><p>' + esc(cs.solution) + '</p></div>' +
        '<div class="case-columns">' +
          '<div class="case-section"><h3><span>04</span>Design</h3>' + list(cs.designHighlights) + '</div>' +
          '<div class="case-section"><h3><span>05</span>Architecture</h3>' + list(cs.devArchitecture) + '</div>' +
        '</div>' +
        '<div class="case-section"><h3><span>06</span>Fonctionnalités</h3>' + list(cs.features) + '</div>' +
        '<div class="case-outcome"><h3>Résultat</h3><p>' + esc(cs.outcome) + '</p></div>' +
        ((p.demoUrl || p.githubUrl)
          ? '<div class="case-links">' +
              (p.demoUrl ? '<a class="button button-red button-small" href="' + esc(p.demoUrl) + '" target="_blank" rel="noreferrer"><span>Voir le site ↗</span></a>' : '') +
              (p.githubUrl ? '<a class="button button-ghost button-small" href="' + esc(p.githubUrl) + '" target="_blank" rel="noreferrer"><span>Code source</span></a>' : '') +
            '</div>'
          : '') +
      '</div>';
    openDialog($('#case-modal'));
  }

  function renderCV() {
    $('#cv-body').innerHTML =
      '<div class="cv-header">' +
        '<div><h1 id="cv-title">' + esc(PROFILE_DATA.fullName) + '</h1><p class="role">Développeur Web &amp; Mobile</p></div>' +
        '<div class="cv-contact"><div>' + esc(PROFILE_DATA.location) + '</div><div><a href="mailto:' + esc(PROFILE_DATA.email) + '">' + esc(PROFILE_DATA.email) + '</a></div></div>' +
      '</div>' +
      '<p class="cv-summary">' + esc(PROFILE_DATA.shortBio) + '</p>' +
      '<h2>Compétences</h2>' +
      '<div class="cv-skills">' +
        '<div><strong>Développement web &amp; mobile</strong><span>PHP, MySQL, JavaScript, TypeScript, React, HTML5/CSS3, PWA</span></div>' +
        '<div><strong>UI/UX &amp; design graphique</strong><span>Maquettes, wireframes, Figma, Photoshop, Illustrator, identités visuelles</span></div>' +
        '<div><strong>Architecture &amp; données</strong><span>Modélisation Merise/SQL, logique métier, APIs REST, DBeaver</span></div>' +
        '<div><strong>Outils</strong><span>Git/GitHub, VS Code, Vercel, outils d\'assistance IA</span></div>' +
      '</div>' +
      '<h2>Expérience professionnelle</h2>' +
      EXPERIENCES_DATA.map((x) =>
        '<div class="cv-entry">' +
          '<div class="cv-entry-head"><h3>' + esc(x.role) + '</h3><span class="when">' + esc(x.period) + '</span></div>' +
          '<div class="org">' + esc(x.company) + ' · ' + esc(x.location) + '</div>' +
          list(x.activities) +
        '</div>'
      ).join('') +
      '<h2>Formation</h2>' +
      EDUCATION_DATA.map((e) =>
        '<div class="cv-entry">' +
          '<div class="cv-entry-head"><h3>' + esc(e.degree) + ' — ' + esc(e.field) + '</h3><span class="when">' + esc(e.years) + '</span></div>' +
          '<div class="org">' + esc(e.institution) + '</div>' +
        '</div>'
      ).join('') +
      '<h2>Projets</h2>' +
      '<div class="cv-projects">' +
        PROJECTS_DATA.filter((p) => p.featured).map((p) => '<div><strong>' + esc(p.title) + '</strong> — ' + esc(p.subtitle) + '</div>').join('') +
      '</div>';
  }

  function initCV() {
    renderCV();
    const dialog = $('#cv-modal');
    $$('.js-open-cv').forEach((b) => b.addEventListener('click', () => openDialog(dialog)));
    let wasDark = false;
    $('#cv-print').addEventListener('click', () => window.print());
    window.addEventListener('beforeprint', () => {
      if (!dialog.open) return;
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

  /* =========================================================
     Formulaire de contact
     Envoi via FormSubmit (https://formsubmit.co) : gratuit, sans compte.
     Le tout premier message déclenche un email d'activation à confirmer une fois.
     ========================================================= */
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + PROFILE_DATA.email;

  function initContact() {
    const form = $('#contact-form');
    const status = $('#form-status');
    const submit = $('#form-submit');
    const submitLabel = $('span', submit);
    const f = {
      name: $('#contact-name'), email: $('#contact-email'), subject: $('#contact-subject'),
      projectType: $('#contact-project-type'), message: $('#contact-message'),
    };

    const showStatus = (type, text, withMailto) => {
      status.className = 'form-status ' + type;
      status.textContent = text;
      if (withMailto) {
        const link = document.createElement('a');
        link.href = 'mailto:' + PROFILE_DATA.email;
        link.textContent = PROFILE_DATA.email;
        status.append(' Vous pouvez m\'écrire directement à ', link, '.');
      }
      status.hidden = false;
    };

    Object.values(f).forEach((el) => el.addEventListener('input', () => el.removeAttribute('aria-invalid')));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if ($('#honeypot').value) return; // anti-spam

      const name = f.name.value.trim();
      const email = f.email.value.trim();
      const subject = f.subject.value.trim();
      const projectType = f.projectType.value;
      const message = f.message.value.trim();

      const invalid = [];
      if (!name) invalid.push(f.name);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) invalid.push(f.email);
      if (!message) invalid.push(f.message);
      if (invalid.length) {
        invalid.forEach((el) => el.setAttribute('aria-invalid', 'true'));
        invalid[0].focus();
        return showStatus('error', invalid.length === 1 && invalid[0] === f.email && email
          ? 'L\'adresse email ne semble pas valide.'
          : 'Merci de renseigner votre nom, une adresse email valide et votre message.');
      }

      status.hidden = true;
      submit.disabled = true;
      submitLabel.textContent = 'Envoi en cours…';
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: 'Portfolio · ' + (subject || projectType) + ' — ' + name,
            _template: 'table',
            _captcha: 'false',
            Nom: name,
            email: email,
            'Type de projet': projectType,
            Sujet: subject || '—',
            Message: message,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'Envoi refusé');
        form.reset();
        showStatus('success', 'Merci, votre message a bien été envoyé. Je vous réponds par email dans les meilleurs délais.');
      } catch (error) {
        showStatus('error', 'Le message n\'a pas pu être envoyé.', true);
      } finally {
        submit.disabled = false;
        submitLabel.textContent = 'Envoyer le message';
      }
    });
  }

  /* =========================================================
     Animations (GSAP + ScrollTrigger)
     ========================================================= */
  function prepareIntro() {
    if (!hasGsap) return;
    // Sur un appareil lent, les animations sautent des images au lieu de ralentir :
    // le contenu apparaît toujours à l'heure.
    gsap.ticker.lagSmoothing(0);
    gsap.set('.hero-title .word', { yPercent: 115, rotate: 4 });
    gsap.set('[data-intro]', { y: 30, opacity: 0 });
    gsap.set('#hero-visual', { scale: 0.7, opacity: 0 });
  }

  function playIntro() {
    if (!hasGsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero-title .word', { yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.07 })
      .to('#hero-visual', { scale: 1, opacity: 1, duration: 1.6 }, 0.1)
      .to('[data-intro]', { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 }, 0.5);
  }

  function initScrollAnimations() {
    if (!hasGsap) {
      // Sans animation : tout est affiché, les étapes sont marquées comme atteintes
      $$('.process-steps li, .t-item').forEach((li) => li.classList.add('is-active'));
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // Intro : le texte s'éloigne au défilement
    gsap.to('.hero-text', {
      yPercent: -18, opacity: 0.15, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Apparitions génériques
    $$('[data-reveal]:not(.section-title)').forEach((el) => {
      gsap.from(el, {
        y: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    // Texte qui s'illumine mot à mot
    const words = splitWords($('#statement'));
    gsap.to(words, {
      opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: '#statement', start: 'top 80%', end: 'bottom 40%', scrub: true },
    });

    // Compteurs
    $$('.about-keys strong').forEach((el) => {
      const target = Number(el.dataset.value) || 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
        onUpdate: () => { el.textContent = Math.round(obj.v); },
      });
    });

    // Parallaxe de la photo
    gsap.to('.about-photo-inner img', {
      yPercent: -14, ease: 'none',
      scrollTrigger: { trigger: '.about-photo', start: 'top bottom', end: 'bottom top', scrub: true },
    });

    // Projets : défilement horizontal sur grand écran, apparitions sinon
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const section = $('#projets');
      const track = $('#projects-track');
      section.classList.add('is-horizontal');
      const distance = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: {
          trigger: '#projects-pin', start: 'top top', end: () => '+=' + distance(),
          pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        },
      });
      $$('.project-card', track).forEach((card) => {
        gsap.from($('.project-media img', card), {
          xPercent: 12, ease: 'none',
          scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        });
      });
      return () => section.classList.remove('is-horizontal');
    });
    mm.add('(max-width: 1023px)', () => {
      $$('.project-card').forEach((card) => {
        gsap.from(card, { y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: card, start: 'top 90%' } });
      });
    });

    // Listes : apparition en cascade
    ['.other-row', '.service', '.skill-card'].forEach((sel) => {
      gsap.set(sel, { y: 60, opacity: 0 });
      ScrollTrigger.batch(sel, {
        start: 'top 92%',
        onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'expo.out', overwrite: true }),
        once: true,
      });
    });

    // Lignes de progression (méthode et parcours)
    [['#process-progress', '.process-steps', '.process-steps li'], ['#timeline-progress', '.timeline', '.t-item']].forEach(([bar, wrap, items]) => {
      gsap.to(bar, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top 65%', end: 'bottom 65%', scrub: true },
      });
      $$(items).forEach((li) => {
        ScrollTrigger.create({ trigger: li, start: 'top 65%', end: 'max', toggleClass: { targets: li, className: 'is-active' } });
        gsap.from(li, { x: 40, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: li, start: 'top 85%' } });
      });
    });

    // Titres de section : glissement
    $$('.section-title').forEach((t) => {
      if (t.closest('.track-intro')) return;
      gsap.from(t, { yPercent: 40, opacity: 0, skewY: 4, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: t, start: 'top 88%' } });
    });

    // Titre du contact mot à mot
    gsap.from('.contact-title .word, .contact-title .red-dot', {
      yPercent: 115, duration: 1.3, stagger: 0.08, ease: 'expo.out',
      scrollTrigger: { trigger: '.contact-title', start: 'top 85%' },
    });

    // Nom géant du pied de page lettre par lettre
    const chars = splitChars($('#footer-giant'));
    gsap.from(chars, {
      yPercent: 100, opacity: 0, duration: 1, stagger: 0.03, ease: 'expo.out',
      scrollTrigger: { trigger: '.site-footer', start: 'top 85%' },
    });

    // Bandeau : accélère avec la vitesse de défilement
    const track = $('#marquee-track');
    ScrollTrigger.create({
      onUpdate: (self) => {
        const v = Math.min(Math.abs(self.getVelocity()) / 1000, 4);
        track.style.animationDuration = Math.max(32 / (1 + v), 8) + 's';
      },
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());
  }

  /* =========================================================
     Écran d'entrée
     ========================================================= */
  function runLoader(done) {
    const loader = $('#loader');
    const counter = $('#loader-count');
    const duration = reduceMotion ? 200 : 1500;
    const start = performance.now();

    (function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      counter.textContent = Math.round((1 - Math.pow(1 - p, 3)) * 100);
      if (p < 1) return requestAnimationFrame(tick);
      loader.classList.add('done');
      document.body.classList.remove('is-loading');
      setTimeout(done, 350);
      setTimeout(() => loader.remove(), 1000);
    })(start);
  }

  /* =========================================================
     Démarrage
     ========================================================= */
  function start() {
    bindProfile();
    renderMarquee();
    renderProjects();
    renderServices();
    renderSkills();
    renderTimeline();
    initTheme();
    initHeader();
    initDialogs();
    initCV();
    initContact();
    initCursor();
    initMagnetic();
    initTilt();
    prepareIntro();
    initScrollAnimations();
    runLoader(playIntro);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
