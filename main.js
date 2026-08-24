/* =====================================================
   1. SETUP INICIAL & SMOOTH SCROLL SEGURO
   ===================================================== */
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll con validación segura contra '#'
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return; // Evita crash por selector vacío
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =====================================================
   2. DICCIONARIOS DE DATOS PARA MODALES
   ===================================================== */
const SERVICIOS_DATA = {
  landing: {
    icon: "fa-solid fa-rocket",
    title: "Landing Page de Conversión",
    tagline: "Una página. Un objetivo. Que te escriban.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&fit=crop",
    imageAlt: "Landing Page de Conversión",
    bullets: [
      "Estructura de alta conversión: Hero → Problema → Solución → CTA",
      "Entrega en 3 a 7 días hábiles",
      "Velocidad de carga menor a 1 segundo",
      "Botón de WhatsApp con mensaje pre-cargado",
      "Hosting + dominio .com.ar incluido",
    ],
    result: { number: "3–7 días", label: "Tiempo de entrega promedio" },
    cta: {
      text: "Quiero mi landing page",
      wa: "5491125371329",
      msg: "Hola!%20Me%20interesa%20una%20Landing%20Page%20de%20Conversi%C3%B3n.",
    },
  },
  institucional: {
    icon: "fa-solid fa-building",
    title: "Web Institucional",
    tagline: "Tu carta de presentación digital que trabaja 24/7.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    imageAlt: "Web Institucional",
    bullets: [
      "Multi-sección: inicio, servicios, galería, testimonios y contacto",
      "Responsive perfecto en mobile, tablet y desktop",
      "Mapa de ubicación integrado para locales físicos",
      "Formulario o redirección directa a WhatsApp",
      "Hosting + dominio .com.ar incluido",
    ],
    result: { number: "2–4 sem.", label: "Entrega promedio para web completa" },
    cta: {
      text: "Quiero mi web institucional",
      wa: "5491125371329",
      msg: "Hola!%20Me%20interesa%20una%20Web%20Institucional.",
    },
  },
  catalogo: {
    icon: "fa-solid fa-store",
    title: "Catálogo Digital",
    tagline: "Tus productos en línea. El pedido, por WhatsApp.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&fit=crop",
    imageAlt: "Catálogo Digital",
    bullets: [
      "Fichas de producto con foto, descripción y precio",
      "Sistema de filtros por categoría",
      "Botón de pedido individual por WhatsApp por producto",
      "Sin carrito ni pasarela: flujo rápido y seguro",
      "Hosting + dominio .com.ar incluido",
    ],
    result: { number: "3–6 sem.", label: "Entrega promedio según catálogo" },
    cta: {
      text: "Quiero mi catálogo digital",
      wa: "5491125371329",
      msg: "Hola!%20Me%20interesa%20un%20Cat%C3%A1logo%20Digital.",
    },
  },
};

const PROBLEMA_DATA = {
  invisible: {
    icon: "fa-solid fa-eye-slash",
    title: "Negocio invisible",
    body: [
      "Publicás en Instagram tres veces por semana, respondés mensajes, subís stories. Pero cuando alguien que no te conoce necesita lo que ofrecés, te busca en Google... y no te encontrás.",
      'Las redes son para quien <strong>ya te conoce</strong>. Un sitio web es para todos los demás: los que buscan, comparan y evalúan la confianza de tu marca.',
      "Sin presencia propia, cada cliente nuevo es una casualidad. Con tu web, es un sistema constante.",
    ],
    cta: {
      text: "Quiero ser visible online",
      wa: "5491125371329",
      msg: "Hola!%20Quiero%20que%20mi%20negocio%20tenga%20mejor%20presencia%20online.",
    },
  },
  improvisada: {
    icon: "fa-solid fa-brush",
    title: "Imagen improvisada",
    body: [
      "Una foto pixelada, logo en Canva, colores al azar y tipografías mezcladas. Quizás ofrecés un servicio excelente, pero tu imagen proyecta otra cosa.",
      "La percepción visual tarda menos de <strong>0.1 segundos</strong> en formarse. En ese lapso, tu cliente potencial ya decidió si confía en vos o sigue de largo.",
      "Una presencia digital sólida es el argumento silencioso que cierra o pierde ventas antes de que hables con el cliente.",
    ],
    cta: {
      text: "Quiero una imagen profesional",
      wa: "5491125371329",
      msg: "Hola!%20Quiero%20mejorar%20la%20imagen%20digital%20de%20mi%20negocio.",
    },
  },
  desconectada: {
    icon: "fa-solid fa-link-slash",
    title: "Comunicación desconectada",
    body: [
      "Tu web dice una cosa, tu Instagram otra y tu WhatsApp otra distinta. El cliente se confunde y pierde interés.",
      "La coherencia visual y de mensaje es lo que genera credibilidad inmediata. Cuando todo comunica en sintonía, el cliente percibe que trata con un <strong>profesional consolidado</strong>.",
      "Un sistema digital integrado hace que cada punto de contacto refuerce la confianza del negocio.",
    ],
    cta: {
      text: "Quiero unificar mi comunicación",
      wa: "5491125371329",
      msg: "Hola!%20Quiero%20unificar%20la%20comunicaci%C3%B3n%20digital%20de%20mi%20negocio.",
    },
  },
  boca: {
    icon: "fa-solid fa-comments",
    title: "Solo boca a boca",
    body: [
      "Las recomendaciones son excelentes, pero depender solo de ellas es apostar a la suerte en los meses de baja actividad.",
      "Un sitio web <strong>trabaja mientras descansás</strong>: aparece en búsquedas, aclara dudas, exhibe casos de éxito y capta consultas 24/7.",
      "No reemplaza el boca a boca: lo amplifica, porque quien recibe una recomendación siempre busca tu web primero.",
    ],
    cta: {
      text: "Quiero generar consultas online",
      wa: "5491125371329",
      msg: "Hola!%20Quiero%20generar%20m%C3%A1s%20consultas%20online%20para%20mi%20negocio.",
    },
  },
};

/* =====================================================
   3. CURSOR MAGNÉTICO & SMART NAVBAR
   ===================================================== */
(function initUIElements() {
  // Cursor magnético en Desktop
  const cursor = document.getElementById("cursor-glow");
  if (cursor && window.innerWidth > 767) {
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    gsap.ticker.add(() => {
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      gsap.set(cursor, { x: curX - 12, y: curY - 12 });
    });

    document.querySelectorAll(".magnet-target").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { width: 48, height: 48, duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { width: 24, height: 24, duration: 0.3, ease: "power2.out" });
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      });
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        gsap.to(el, {
          x: (e.clientX - cx) * 0.28,
          y: (e.clientY - cy) * 0.28,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }

  // Smart Nav con ScrollTrigger
  const nav = document.getElementById("smart-nav");
  if (nav) {
    let lastScroll = 0;
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: () => {
        const curr = window.scrollY;
        if (curr > lastScroll && curr > 80) {
          gsap.to(nav, { yPercent: -110, duration: 0.35, ease: "power2.in" });
        } else {
          gsap.to(nav, { yPercent: 0, duration: 0.45, ease: "power2.out" });
        }
        lastScroll = curr;
      },
    });
  }
})();

/* =====================================================
   4. MOBILE DRAWER & TOAST
   ===================================================== */
(function initDrawerAndToast() {
  const hamburger = document.getElementById("nav-hamburger");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-overlay");
  const closeBtn = document.getElementById("mobile-drawer-close");

  function toggleDrawer(open) {
    if (!drawer || !overlay) return;
    drawer.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (hamburger) hamburger.addEventListener("click", () => toggleDrawer(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggleDrawer(false));
  if (overlay) overlay.addEventListener("click", () => toggleDrawer(false));
  document.querySelectorAll(".mobile-drawer-link").forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  // Welcome Toast al 30% de scroll
  const toast = document.getElementById("welcome-toast");
  const toastClose = document.getElementById("toast-close");
  if (toast) {
    let shown = false;
    const onScroll = () => {
      if (shown) return;
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (progress >= 0.3) {
        shown = true;
        toast.classList.add("is-visible");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    if (toastClose) toastClose.addEventListener("click", () => toast.classList.remove("is-visible"));
  }
})();

/* =====================================================
   5. CONTROLADOR CENTRALIZADO DE MODALES
   ===================================================== */
(function initModalManager() {
  const modalServices = document.getElementById("modal-services");
  const modalProblem = document.getElementById("modal-problem");

  function openServicesModal(key) {
    const d = SERVICIOS_DATA[key];
    if (!d || !modalServices) return;
    document.getElementById("modal-serv-icon").className = d.icon;
    document.getElementById("modal-serv-title").textContent = d.title;
    document.getElementById("modal-serv-tagline").textContent = d.tagline;

    const bullets = d.bullets.map((b) => `<li><i class="fa-solid fa-circle-check"></i> ${b}</li>`).join("");
    document.getElementById("modal-serv-body").innerHTML = `
      <img src="${d.image}" alt="${d.imageAlt}" loading="lazy" />
      <ul>${bullets}</ul>
      <div class="modal-result">
        <div class="modal-result-number">${d.result.number}</div>
        <div class="modal-result-label">${d.result.label}</div>
      </div>
    `;
    const cta = document.getElementById("modal-serv-cta");
    cta.href = `https://wa.me/${d.cta.wa}?text=${d.cta.msg}`;
    cta.querySelector(".modal-cta-text").textContent = d.cta.text;

    modalServices.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function openProblemModal(key) {
    const d = PROBLEMA_DATA[key];
    if (!d || !modalProblem) return;
    document.getElementById("modal-prob-icon").className = d.icon;
    document.getElementById("modal-prob-title").textContent = d.title;
    document.getElementById("modal-prob-body").innerHTML = d.body.map((p) => `<p>${p}</p>`).join("");

    const cta = document.getElementById("modal-prob-cta");
    cta.href = `https://wa.me/${d.cta.wa}?text=${d.cta.msg}`;
    cta.querySelector(".modal-cta-text").textContent = d.cta.text;

    modalProblem.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeAllModals() {
    if (modalServices) modalServices.classList.remove("is-open");
    if (modalProblem) modalProblem.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  // Listeners de apertura
  document.querySelectorAll("[data-modal]").forEach((el) => {
    el.addEventListener("click", () => openServicesModal(el.dataset.modal));
  });
  document.querySelectorAll("[data-problema]").forEach((el) => {
    el.addEventListener("click", () => openProblemModal(el.dataset.problema));
  });

  // Listeners de cierre
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", closeAllModals);
  });
  [modalServices, modalProblem].forEach((m) => {
    if (m) m.addEventListener("click", (e) => { if (e.target === m) closeAllModals(); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
})();

/* =====================================================
   6. ANIMACIONES HERO & PILLARS
   ===================================================== */
(function initHeroAndPillars() {
  // Hero reveal
  gsap.fromTo(
    [".hero-badge", ".hero-title", ".hero-desc", ".hero-actions", ".hero-scroll-hint"],
    { opacity: 0, y: 45 },
    { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.12, delay: 0.15 }
  );

  // Parallax de fondo
  gsap.to(".parallax-bg", {
    yPercent: 25,
    ease: "none",
    scrollTrigger: { trigger: ".hero", scrub: 1.2 },
  });
  gsap.to(".parallax-grid", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: { trigger: ".hero", scrub: 1.8 },
  });

  // Pillars: Contador optimizado sin fugas de CPU
  const speedEl = document.getElementById("pillar-speed");
  const codeEl = document.getElementById("pillar-code");
  const focusEl = document.getElementById("pillar-focus");
  const focusWords = ["Directo", "Rápido", "Efectivo"];
  let focusIdx = 0;

  function countSpeed() {
    if (!speedEl) return;
    const obj = { val: 0 };
    gsap.fromTo(obj, { val: 0 }, {
      val: 1.0, duration: 1.4, ease: "power2.out",
      onUpdate: () => { speedEl.textContent = `< ${obj.val.toFixed(2)}s`; },
      onComplete: () => { speedEl.textContent = "< 1.0s"; },
    });
  }

  function countCode() {
    if (!codeEl) return;
    const obj = { val: 0 };
    gsap.fromTo(obj, { val: 0 }, {
      val: 100, duration: 1.2, ease: "power2.out",
      onUpdate: () => { codeEl.textContent = `${Math.round(obj.val)}%`; },
      onComplete: () => { codeEl.textContent = "100%"; },
    });
  }

  ScrollTrigger.create({
    trigger: ".pillars",
    start: "top 78%",
    once: true,
    onEnter: () => {
      countSpeed();
      setTimeout(countCode, 250);
      setInterval(() => {
        if (!focusEl) return;
        focusIdx = (focusIdx + 1) % focusWords.length;
        gsap.to(focusEl, {
          opacity: 0, y: -6, duration: 0.2,
          onComplete: () => {
            focusEl.textContent = focusWords[focusIdx];
            gsap.to(focusEl, { opacity: 1, y: 0, duration: 0.2 });
          },
        });
      }, 2400);
    },
  });
})();

/* =====================================================
   7. SECCIONES: PROBLEMA, SERVICIOS, PROCESO & PLANES
   ===================================================== */
(function initSectionsAnimations() {
  // El Problema reveal
  const probCards = document.querySelectorAll(".card-problem");
  if (probCards.length) {
    gsap.fromTo(
      probCards,
      { opacity: 0, y: 55 },
      {
        opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.12,
        scrollTrigger: { trigger: ".problema-grid", start: "top 78%", toggleActions: "play none none reverse" },
      }
    );
  }

  // Servicios reveal + Observer de línea
  const servCards = document.querySelectorAll(".card-service");
  if (servCards.length) {
    gsap.fromTo(
      servCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.15,
        scrollTrigger: { trigger: ".servicios-grid", start: "top 78%", toggleActions: "play none none reverse" },
      }
    );
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); });
    }, { threshold: 0.4 });
    servCards.forEach((c) => obs.observe(c));
  }

  // Proceso: Dibujado de línea + activación de pasos
  const procesoContainer = document.querySelector(".proceso-steps-container");
  const fill = document.querySelector(".proceso-line-fill");
  const steps = document.querySelectorAll(".gs-step");
  if (procesoContainer && fill && steps.length) {
    gsap.to(fill, {
      height: "100%", ease: "none",
      scrollTrigger: { trigger: procesoContainer, start: "top 60%", end: "bottom 60%", scrub: 0.5 },
    });
    steps.forEach((step) => {
      ScrollTrigger.create({
        trigger: step, start: "top 62%", end: "bottom 38%",
        onEnter: () => step.classList.add("active"),
        onLeave: () => step.classList.remove("active"),
        onEnterBack: () => step.classList.add("active"),
        onLeaveBack: () => step.classList.remove("active"),
      });
    });
  }

  // Planes: Efecto Stacking en Desktop
  const planCards = gsap.utils.toArray(".stack-card");
  if (planCards.length && window.innerWidth > 767) {
    planCards.forEach((card, i) => {
      if (i === planCards.length - 1) return;
      gsap.to(card, {
        scale: 0.88, opacity: 0.45, ease: "none",
        scrollTrigger: { trigger: card, start: "top 20vh", endTrigger: planCards[i + 1], end: "top 20vh", scrub: true },
      });
    });
  }
})();

/* =====================================================
   8. PORTFOLIO 3D CILÍNDRICO & DIALOG NATIVO
   ===================================================== */
(function initPortfolio() {
  const stage = document.getElementById("portfolio-stage");
  const viewport = document.getElementById("portfolio-viewport");
  const prevBtn = document.getElementById("portfolio-prev");
  const nextBtn = document.getElementById("portfolio-next");
  const modal = document.getElementById("portfolio-modal");
  const modalTitle = document.getElementById("portfolio-modal-title");
  const modalDesc = document.getElementById("portfolio-modal-desc");
  const modalClose = document.getElementById("portfolio-modal-close");
  if (!stage) return;

  const slots = gsap.utils.toArray(".portfolio-slot");
  const cards = gsap.utils.toArray(".portfolio-card");
  const N = slots.length;
  const ANGLE = 360 / N;
  const RADIUS = 400;
  let currentRot = 0, targetRot = 0, isDragging = false, startX = 0, startRot = 0;

  slots.forEach((slot, i) => {
    gsap.set(slot, { rotateY: ANGLE * i, translateZ: RADIUS });
  });

  function updateCarousel(rot) {
    slots.forEach((slot, i) => {
      const slotAngle = (ANGLE * i + (rot % 360) + 720) % 360;
      const diff = Math.min(slotAngle, 360 - slotAngle);
      const factor = 1 - diff / 180;
      const op = gsap.utils.mapRange(0, 1, 0.32, 1.0, factor);
      const blur = gsap.utils.mapRange(0, 1, 5, 0, factor);
      gsap.set(slot, { opacity: op, filter: `blur(${blur}px)`, zIndex: Math.round(factor * 100) });
    });
  }
  updateCarousel(0);

  function rotateTo(angle, dur = 0.8) {
    targetRot = angle;
    const tween = { val: currentRot };
    gsap.to(tween, {
      val: targetRot, duration: dur, ease: "power2.out",
      onUpdate: () => {
        currentRot = tween.val;
        gsap.set(stage, { rotateY: -currentRot });
        updateCarousel(currentRot);
      },
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", () => rotateTo(targetRot - ANGLE));
  if (nextBtn) nextBtn.addEventListener("click", () => rotateTo(targetRot + ANGLE));

  // Drag Mouse
  if (viewport) {
    viewport.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startRot = targetRot;
      viewport.style.cursor = "grabbing";
    });
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      currentRot = startRot - (e.clientX - startX) * 0.32;
      gsap.set(stage, { rotateY: -currentRot });
      updateCarousel(currentRot);
    });
    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      viewport.style.cursor = "grab";
      targetRot = currentRot;
      rotateTo(Math.round(targetRot / ANGLE) * ANGLE, 0.5);
    });

    // Drag Touch
    viewport.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startRot = targetRot;
    }, { passive: true });
    viewport.addEventListener("touchmove", (e) => {
      currentRot = startRot - (e.touches[0].clientX - startX) * 0.35;
      gsap.set(stage, { rotateY: -currentRot });
      updateCarousel(currentRot);
    }, { passive: true });
    viewport.addEventListener("touchend", () => {
      targetRot = currentRot;
      rotateTo(Math.round(targetRot / ANGLE) * ANGLE, 0.5);
    });
  }

  // Detalle Portfolio Dialog
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!modal) return;
      modalTitle.textContent = card.dataset.title || "";
      modalDesc.textContent = card.dataset.desc || "";
      modal.showModal();
    });
  });
  if (modalClose) modalClose.addEventListener("click", () => modal.close());
  if (modal) {
    modal.addEventListener("click", (e) => {
      const rect = modal.getBoundingClientRect();
      const inBox = rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                    rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
      if (!inBox) modal.close();
    });
  }

  // Pin en Desktop
  if (window.innerWidth > 768) {
    ScrollTrigger.create({
      trigger: "#portfolio", start: "top top", pin: true, end: "+=3000", scrub: 1.5,
      onUpdate: (self) => {
        const rot = self.progress * 360;
        currentRot = rot;
        targetRot = rot;
        gsap.set(stage, { rotateY: -rot });
        updateCarousel(rot);
      },
    });
  }
})();

/* =====================================================
   9. FAQ & REVEALS GLOBALES
   ===================================================== */
(function initFAQAndGlobals() {
  // Acordeón FAQ
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".faq-question").forEach((b) => b.setAttribute("aria-expanded", "false"));
      if (!isOpen) btn.setAttribute("aria-expanded", "true");
    });
  });

  // Reveals genéricos con ScrollTrigger
  gsap.utils.toArray(".gs-reveal-up").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 86%", toggleActions: "play none none reverse" },
      }
    );
  });
})();