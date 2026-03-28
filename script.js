/* ═══════════════════════════════════════════
   UMANG KUWAR — Portfolio JS
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── CUSTOM CURSOR ──
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY });
  function animateCursor() {
    if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // ── NAVBAR SCROLL ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── HAMBURGER / MOBILE MENU ──
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham?.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    });
  });

  // ── TYPING ANIMATION ──
  const phrases = [
    'Senior .NET Developer',
    'Automation Specialist',
    'AutoCAD Plugin Engineer',
    'Full Stack Developer',
    'Cloud & Azure Enthusiast',
    'Industrial Software Engineer'
  ];
  const el = document.getElementById('typingText');
  let pi = 0, ci = 0, deleting = false, paused = false;
  function type() {
    if (!el) return;
    const cur = phrases[pi];
    if (paused) { setTimeout(type, 60); return }
    if (!deleting) {
      el.textContent = cur.slice(0, ci + 1);
      ci++;
      if (ci === cur.length) { paused = true; setTimeout(() => { paused = false; deleting = true }, 2200) }
      setTimeout(type, 80);
    } else {
      el.textContent = cur.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      setTimeout(type, 40);
    }
  }
  type();

  // ── PARTICLE CANVAS ──
  const canvas = document.getElementById('particleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    const N = 70;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.2 + 0.3;
        this.vx = (Math.random() - .5) * .3;
        this.vy = (Math.random() - .5) * .3;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > .6 ? '0,255,136' : Math.random() > .5 ? '0,212,255' : '255,255,255';
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < N; i++) particles.push(new Particle());

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${(1 - d/130) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw() });
      drawLines();
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target) }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  // ── SKILL BARS ANIMATION ──
  const bars = document.querySelectorAll('.sb-fill');
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('animated'); barObs.unobserve(e.target) }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => barObs.observe(b));

  // ── SMOOTH SCROLL FOR NAV LINKS ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = document.getElementById('navbar').offsetHeight + 8;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  // ── ACTIVE NAV LINK ──
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  function setActiveNav() {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id });
    navAs.forEach(a => {
      const match = a.getAttribute('href') === '#' + cur;
      a.style.color = match ? 'var(--neon)' : '';
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });

  // ── PROJECT CARD GLOW ON HOVER ──
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  // ── CONTACT FORM ──
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<span class="btn-bg"></span><span class="btn-text">✓ Message Sent!</span>';
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = origHTML; btn.disabled = false; form.reset() }, 3000);
  });

  // ── STAGGERED TECH CARD ANIMATION ──
  const techCards = document.querySelectorAll('.tech-card');
  const tcObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }, i * 50);
        tcObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  techCards.forEach(tc => {
    tc.style.opacity = '0';
    tc.style.transform = 'translateY(12px)';
    tc.style.transition = 'opacity .4s ease, transform .4s ease, border-color .2s, background .2s, color .2s';
    tcObs.observe(tc);
  });

  // ── HERO STATS COUNTER ──
  document.querySelectorAll('.hstat-num').forEach(el => {
    const target = parseFloat(el.textContent);
    if (isNaN(target)) return;
    const suffix = el.textContent.replace(/[\d.]/g, '');
    const prefix = '';
    let start = null;
    const duration = 1800;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          function tick(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + Math.round(ease * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = prefix + target + suffix;
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 1 });
    obs.observe(el);
  });

});
