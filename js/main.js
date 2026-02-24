/* ============================================
   MAIN JS — Kolosal Math Learning Platform
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initKaTeX();
  initDarkMode();
  initSidebar();
  initProgressBar();
  initActiveChapterTracking();
});

/* --- KaTeX Auto-Render --- */
function initKaTeX() {
  const waitForKaTeX = setInterval(() => {
    if (typeof renderMathInElement === 'function') {
      clearInterval(waitForKaTeX);
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    }
  }, 100);
}

/* --- Dark Mode --- */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const stored = localStorage.getItem('kolosal-math-dark');

  if (stored === 'true' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    localStorage.setItem('kolosal-math-dark', toggle.checked);
  });
}

/* --- Sidebar Toggle (mobile/tablet) --- */
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.querySelector('.sidebar-toggle');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }

  toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener('click', closeSidebar);

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });
}

/* --- Reading Progress Bar --- */
function initProgressBar() {
  const bar = document.getElementById('readingProgress');
  const label = document.getElementById('progressLabel');

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

    bar.style.width = progress + '%';
    label.textContent = Math.round(progress) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* --- Active Chapter Tracking --- */
function initActiveChapterTracking() {
  const chapters = document.querySelectorAll('.chapter');
  const links = document.querySelectorAll('.sidebar-link');
  const headerOffset = 80;

  function updateActive() {
    let currentId = '';

    chapters.forEach(chapter => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top <= headerOffset + 100) {
        currentId = chapter.id;
      }
    });

    links.forEach(link => {
      const target = link.getAttribute('data-chapter');
      if (target === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}
