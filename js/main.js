/* ============================================
   MAIN JS — Kolosal Math Learning Platform
   ============================================ */

/* Shared KaTeX delimiter config */
const KATEX_DELIMITERS = [
  { left: '$$', right: '$$', display: true },
  { left: '\\[', right: '\\]', display: true },
  { left: '\\(', right: '\\)', display: false },
  { left: '$', right: '$', display: false },
];

function renderKaTeXIn(el) {
  if (typeof renderMathInElement === 'function' && el) {
    renderMathInElement(el, { delimiters: KATEX_DELIMITERS, throwOnError: false });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initKaTeX();
  initDarkMode();
  initSidebar();
  initProgressBar();
  initActiveChapterTracking();
  // Difficulty mode (loaded from difficulty-mode.js)
  if (typeof initDifficultyMode === 'function') initDifficultyMode();
  // Reddit mode (loaded from reddit-mode.js)
  if (typeof initRedditMode === 'function') initRedditMode();
});

/* --- KaTeX Auto-Render --- */
function initKaTeX() {
  let attempts = 0;
  const maxAttempts = 50; // 50 * 100ms = 5 seconds
  const waitForKaTeX = setInterval(() => {
    attempts++;
    if (typeof renderMathInElement === 'function') {
      clearInterval(waitForKaTeX);
      renderKaTeXIn(document.body);
    } else if (attempts >= maxAttempts) {
      clearInterval(waitForKaTeX);
    }
  }, 100);
}

/* --- Dark Mode --- */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
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
  if (!sidebar || !overlay || !toggleBtn) return;

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

  // Close sidebar on link click (mobile) + Reddit mode awareness
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }

      // If Reddit mode is active, find and expand the matching post
      if (document.body.classList.contains('reddit-mode')) {
        e.preventDefault();
        const chapterId = link.getAttribute('data-chapter') || link.getAttribute('href')?.replace('#', '');
        if (!chapterId) return;

        const feed = document.querySelector('.reddit-feed');
        if (!feed) return;

        // Find the post whose content originated from this chapter
        const posts = feed.querySelectorAll('.reddit-post');
        for (const post of posts) {
          const contentCard = post.querySelector('.content-card');
          // Match by checking if the cloned content-card came from this chapter
          // We store chapter ID as a data attribute during build
          if (post.dataset.chapterId === chapterId) {
            // Expand the post if not already
            if (!post.classList.contains('expanded')) {
              post.classList.add('expanded');
              const contentArea = post.querySelector('.reddit-post-content');
              if (contentArea) {
                setTimeout(() => renderKaTeXIn(contentArea), 50);
              }
            }
            post.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Brief highlight
            post.style.boxShadow = '0 0 0 2px var(--reddit-blue)';
            setTimeout(() => { post.style.boxShadow = ''; }, 1500);
            break;
          }
        }
      }
    });
  });
}

/* --- Reading Progress Bar --- */
function initProgressBar() {
  const bar = document.getElementById('readingProgress');
  const label = document.getElementById('progressLabel');
  if (!bar || !label) return;

  function updateProgress() {
    let progress;

    if (document.body.classList.contains('reddit-mode')) {
      // In Reddit mode, calculate based on feed scroll
      const feed = document.querySelector('.reddit-feed');
      if (feed) {
        const feedRect = feed.getBoundingClientRect();
        const feedHeight = feed.scrollHeight - window.innerHeight;
        const scrolled = -feedRect.top + window.innerHeight;
        progress = feedHeight > 0 ? Math.min(Math.max((scrolled / feed.scrollHeight) * 100, 0), 100) : 0;
      } else {
        progress = 0;
      }
    } else {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    }

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
