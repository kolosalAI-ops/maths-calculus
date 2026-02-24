/* ============================================
   REDDIT MODE — Doom Scroll Edition
   Transforms chapters into Reddit-style posts
   with full concept content preserved
   ============================================ */

const REDDIT_CONFIG = {
  subreddit: 'r/KolosalMath',
  members: '2.4m',
  online: '14.2k',
  usernames: [
    'mathsEnjoyer42', 'calc_wizard_69', 'derivative_deez', 'integralGang',
    'prof_euler_', 'limit_pusher', 'tangent_queen', 'NotYourTAButActuallyYes',
    'PythagoreanDreams', 'FundamentalTheoremFan', 'epsilon_delta_grind',
    'riemannSumSimp', 'LaplacianLord', 'fourier_transform_this',
    'JacobianJake', 'nabla_nerd', 'chain_rule_chad', 'divergence_daddy',
    'stokes_is_goated', 'MatrixMorpheus', 'IPassedCalc3AMA',
    'lhopital_my_beloved', 'TaylorSwiftSeries', 'GradientDescentGod',
    'partial_to_partials', 'eigenvalue_enjoyer', 'uSubstitutionKing',
    'green_theorem_gang', 'ProofByContradiction_', 'series_converger420'
  ],
  timeAgo: [
    '2h', '3h', '5h', '7h', '8h', '10h', '12h', '14h', '16h', '1d',
    '1d', '1d', '2d', '2d', '3d', '3d', '4d', '5d', '6d', '1w',
    '1w', '1w', '2w', '2w', '2w', '3w', '3w', '1mo', '1mo', '2mo'
  ],
  flairMap: {
    'ch-number-systems': { text: 'Foundations', cls: 'reddit-flair-foundations' },
    'ch-algebra-basics': { text: 'Foundations', cls: 'reddit-flair-foundations' },
    'ch-equations': { text: 'Foundations', cls: 'reddit-flair-foundations' },
    'ch-functions-intro': { text: 'Functions', cls: 'reddit-flair-functions' },
    'ch-linear-quadratic': { text: 'Functions', cls: 'reddit-flair-functions' },
    'ch-polynomial': { text: 'Functions', cls: 'reddit-flair-functions' },
    'ch-exponential-log': { text: 'Functions', cls: 'reddit-flair-functions' },
    'ch-trig-basics': { text: 'Trigonometry', cls: 'reddit-flair-trig' },
    'ch-trig-identities': { text: 'Trigonometry', cls: 'reddit-flair-trig' },
    'ch-limits': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-derivatives': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-diff-rules': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-applications-deriv': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-integrals': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-ftc': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-applications-int': { text: 'Calc 1', cls: 'reddit-flair-calc1' },
    'ch-integration-tech': { text: 'Calc 2', cls: 'reddit-flair-calc2' },
    'ch-improper-integrals': { text: 'Calc 2', cls: 'reddit-flair-calc2' },
    'ch-sequences-series': { text: 'Calc 2', cls: 'reddit-flair-calc2' },
    'ch-power-series': { text: 'Calc 2', cls: 'reddit-flair-calc2' },
    'ch-parametric-polar': { text: 'Calc 2', cls: 'reddit-flair-calc2' },
    'ch-vectors': { text: 'Calc 3', cls: 'reddit-flair-calc3' },
    'ch-vector-functions': { text: 'Calc 3', cls: 'reddit-flair-calc3' },
    'ch-partial-deriv': { text: 'Calc 3', cls: 'reddit-flair-calc3' },
    'ch-multiple-integrals': { text: 'Calc 3', cls: 'reddit-flair-calc3' },
    'ch-vector-calculus': { text: 'Calc 3', cls: 'reddit-flair-calc3' },
    'ch-diff-equations': { text: 'Calc 4', cls: 'reddit-flair-calc4' },
    'ch-matrix-calculus': { text: 'Calc 4', cls: 'reddit-flair-calc4' },
    'ch-surface-integrals': { text: 'Calc 4', cls: 'reddit-flair-calc4' },
    'ch-applications-advanced': { text: 'Calc 4', cls: 'reddit-flair-calc4' },
  },
  // Reddit-style post titles that still describe the actual math concept
  titleOverrides: {
    'ch-number-systems': 'This is your foundation. Number systems explained so cleanly even my cat could understand it.',
    'ch-algebra-basics': 'Algebra basics but actually explained well for once. Factoring, polynomials, the whole thing.',
    'ch-equations': 'The quadratic formula is lowkey the most satisfying thing in math. Full breakdown inside.',
    'ch-functions-intro': 'Functions & Graphs explained — if you don\'t get this, nothing else will make sense (not gatekeeping, just facts)',
    'ch-linear-quadratic': 'Linear & Quadratic functions: why parabolas are everywhere and slopes actually matter',
    'ch-polynomial': 'Polynomial & Rational functions — asymptotes are wild when you actually understand them',
    'ch-exponential-log': 'Exponentials and Logs finally clicked for me. Sharing the breakdown that made it work.',
    'ch-trig-basics': 'I memorized the unit circle in one sitting. Here\'s the complete trig functions guide.',
    'ch-trig-identities': 'ALL the trig identities in one place. Double angle, half angle, sum/difference, law of sines/cosines. Saved my GPA.',
    'ch-limits': '[CALC 1 STARTS HERE] Limits & Continuity — the gateway concept. This is where it gets real.',
    'ch-derivatives': 'Derivatives from the definition. The "aha" moment when you realize it\'s just a slope of a tangent line.',
    'ch-diff-rules': 'Every differentiation rule in one post: power, product, quotient, chain rule. Print this.',
    'ch-applications-deriv': 'L\'Hopital\'s Rule, optimization, related rates — applications of derivatives that actually show up on exams',
    'ch-integrals': 'Integrals explained from Riemann sums to u-substitution. The reverse of derivatives (kind of).',
    'ch-ftc': 'The Fundamental Theorem of Calculus is genuinely beautiful. Here\'s why it connects everything.',
    'ch-applications-int': 'Volumes of revolution (disk, washer, shell) — I made this so you don\'t suffer like I did.',
    'ch-integration-tech': '[CALC 2] Integration by parts, trig sub, partial fractions — the unholy trinity explained',
    'ch-improper-integrals': 'Improper integrals: when infinity shows up and you just have to deal with it',
    'ch-sequences-series': 'Series convergence tests ranked by how often they appear on exams. You\'re welcome.',
    'ch-power-series': 'Taylor and Maclaurin series — every important expansion + remainder theorem',
    'ch-parametric-polar': 'Parametric & polar curves. Cardioids and roses and spirals, oh my.',
    'ch-vectors': '[CALC 3] Vectors in 2D and 3D — dot product, cross product, projections, planes. We\'re in 3D now.',
    'ch-vector-functions': 'Vector-valued functions, curvature, TNB frame — motion in space is kinda sick ngl',
    'ch-partial-deriv': 'Partial derivatives, gradients, Lagrange multipliers — multivariable optimization hits different',
    'ch-multiple-integrals': 'Double and triple integrals with every coordinate system (Cartesian, polar, cylindrical, spherical)',
    'ch-vector-calculus': 'Green\'s theorem, divergence, curl — vector calculus is where calc gets its final form',
    'ch-diff-equations': '[CALC 4] Differential equations from separable to second-order linear. ODE to ODE.',
    'ch-matrix-calculus': 'Matrix differentiation: gradients, Jacobians, Hessians — if you\'re into ML this is literally mandatory',
    'ch-surface-integrals': 'Stokes\' and Divergence theorems explained. The grand unification of calculus.',
    'ch-applications-advanced': 'Fourier series, Laplace transforms, PDEs, calculus of variations — endgame math content',
  },
  // Comments that sound like Reddit
  commentBank: [
    { user: 'calc_survivor_2024', text: 'Bro this is better than my $200 textbook wtf', ups: 847 },
    { user: 'studying_at_3am', text: 'saving this for finals week, absolute godsend', ups: 623 },
    { user: 'ProfSmithUCLA', text: 'I teach this course and even I bookmarked this. Well organized.', ups: 1204 },
    { user: 'freshmanPanic', text: 'i literally have an exam tomorrow and just found this sub. there is a god', ups: 445 },
    { user: 'mathIsBroken', text: 'wait it actually makes sense when you explain it like this???', ups: 567 },
    { user: 'gradschoolGhost', text: 'I wish I had this when I took real analysis. Would have saved me 200 hours of suffering.', ups: 389 },
    { user: 'khan_academy_dropout', text: 'this is the notes i pretended to take in lecture', ups: 902 },
    { user: 'NotABot_Promise', text: 'L\'Hopital supremacy. that is all.', ups: 267 },
    { user: 'epsilon_enjoyer', text: 'the fact that this is free is insane. bless this community', ups: 734 },
    { user: 'dropoutRecovery', text: 'just passed calc 2 because of posts like this. faith in humanity restored.', ups: 511 },
    { user: 'tenured_but_tired', text: 'The formatting alone makes this better than 90% of textbooks. Nicely done.', ups: 678 },
    { user: 'neverDoingMathAgain', text: 'me reading this at 4am pretending I\'ll actually study tomorrow', ups: 1589 },
    { user: 'linAlgLover', text: 'the matrix differentiation section is *chefs kiss* finally someone explains the Jacobian properly', ups: 423 },
    { user: 'highschoolSenior', text: 'wait you\'re telling me I\'m learning calc 3 concepts for free on reddit rn', ups: 356 },
    { user: 'TAgrindset', text: 'linking this in every office hours email from now on', ups: 891 },
  ],
};

let redditFeedBuilt = false;

function initRedditMode() {
  const toggleBtn = document.getElementById('redditToggle');
  const stored = localStorage.getItem('kolosal-math-reddit');

  if (stored === 'true') {
    enableRedditMode();
  }

  toggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('reddit-mode')) {
      disableRedditMode();
    } else {
      enableRedditMode();
    }
  });
}

function enableRedditMode() {
  document.body.classList.add('reddit-mode');
  localStorage.setItem('kolosal-math-reddit', 'true');

  if (!redditFeedBuilt) {
    buildRedditFeed();
    redditFeedBuilt = true;
  }

  // Re-render KaTeX in reddit feed
  setTimeout(() => {
    if (typeof renderMathInElement === 'function') {
      const feed = document.querySelector('.reddit-feed');
      if (feed) renderMathInElement(feed, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    }
  }, 200);

  window.scrollTo(0, 0);
}

function disableRedditMode() {
  document.body.classList.remove('reddit-mode');
  localStorage.setItem('kolosal-math-reddit', 'false');
}

function buildRedditFeed() {
  const feed = document.querySelector('.reddit-feed');
  const chapters = document.querySelectorAll('.chapter');

  chapters.forEach((chapter, i) => {
    const id = chapter.id;
    const flair = REDDIT_CONFIG.flairMap[id] || { text: 'Math', cls: 'reddit-flair-foundations' };
    const titleOverride = REDDIT_CONFIG.titleOverrides[id] || '';
    const user = REDDIT_CONFIG.usernames[i % REDDIT_CONFIG.usernames.length];
    const time = REDDIT_CONFIG.timeAgo[i % REDDIT_CONFIG.timeAgo.length];
    const upvotes = Math.floor(Math.random() * 15000) + 800;
    const comments = Math.floor(Math.random() * 300) + 40;

    // Get the original heading
    const h2 = chapter.querySelector('.chapter-header h2');
    const chapterTitle = h2 ? h2.textContent : `Chapter ${i + 1}`;

    // Get preview text from first paragraph
    const firstP = chapter.querySelector('.content-card > p, .content-card > .definition-box p');
    const previewText = firstP ? firstP.textContent.substring(0, 200) + '...' : '';

    // Clone the actual content card (preserving all math concepts)
    const contentCard = chapter.querySelector('.content-card');
    const contentClone = contentCard ? contentCard.cloneNode(true) : null;

    // Random awards
    const awards = generateAwards(upvotes);

    // Random comments for this post
    const postComments = getRandomComments(2);

    const post = document.createElement('div');
    post.className = 'reddit-post';
    post.innerHTML = `
      <div class="reddit-vote">
        <button class="reddit-vote-btn upvote-btn" aria-label="Upvote">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
        </button>
        <span class="reddit-vote-count">${formatNumber(upvotes)}</span>
        <button class="reddit-vote-btn downvote-btn" aria-label="Downvote">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l8-8h-5V4H9v8H4z"/></svg>
        </button>
      </div>
      <div class="reddit-post-body">
        <div class="reddit-post-meta">
          <span class="reddit-subreddit">${REDDIT_CONFIG.subreddit}</span>
          <span>&middot;</span>
          <span class="reddit-user">Posted by u/${user}</span>
          <span>&middot;</span>
          <span>${time}</span>
        </div>
        <div class="reddit-post-title">
          <span class="reddit-flair ${flair.cls}">${flair.text}</span>
          ${awards}
          ${titleOverride || chapterTitle}
        </div>
        <div class="reddit-post-preview">${previewText}</div>
        <span class="reddit-post-expand">Read full post...</span>
        <div class="reddit-post-content"></div>
        <div class="reddit-comments-peek">
          ${postComments.map(c => `
            <div class="reddit-comment">
              <div class="reddit-comment-avatar">${c.user[0].toUpperCase()}</div>
              <div class="reddit-comment-body">
                <div class="reddit-comment-meta"><strong>${c.user}</strong> &middot; ${Math.floor(Math.random() * 12) + 1}h &middot; ${c.ups} points</div>
                <div class="reddit-comment-text">${c.text}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="reddit-actions">
          <div class="reddit-mobile-votes">
            <button class="reddit-vote-btn upvote-btn" aria-label="Upvote">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
            </button>
            <span class="reddit-vote-count">${formatNumber(upvotes)}</span>
            <button class="reddit-vote-btn downvote-btn" aria-label="Downvote">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l8-8h-5V4H9v8H4z"/></svg>
            </button>
          </div>
          <button class="reddit-action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            ${comments} Comments
          </button>
          <button class="reddit-action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            Share
          </button>
          <button class="reddit-action-btn reddit-save-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            Save
          </button>
        </div>
      </div>
    `;

    // Insert actual math content into the expand area
    const contentArea = post.querySelector('.reddit-post-content');
    if (contentClone) {
      contentArea.appendChild(contentClone);
    }

    // Wire up expand/collapse
    const expandBtn = post.querySelector('.reddit-post-expand');
    const previewEl = post.querySelector('.reddit-post-preview');

    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      post.classList.add('expanded');
      // Re-render KaTeX in expanded content
      setTimeout(() => {
        if (typeof renderMathInElement === 'function') {
          renderMathInElement(contentArea, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '\\[', right: '\\]', display: true },
              { left: '\\(', right: '\\)', display: false },
              { left: '$', right: '$', display: false },
            ],
            throwOnError: false,
          });
        }
      }, 50);
    });

    previewEl.addEventListener('click', (e) => {
      if (!post.classList.contains('expanded')) {
        e.stopPropagation();
        post.classList.add('expanded');
        setTimeout(() => {
          if (typeof renderMathInElement === 'function') {
            renderMathInElement(contentArea, {
              delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false },
                { left: '$', right: '$', display: false },
              ],
              throwOnError: false,
            });
          }
        }, 50);
      }
    });

    // Wire up vote buttons
    post.querySelectorAll('.upvote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = btn.classList.contains('upvoted');
        // Reset all vote buttons in this post
        post.querySelectorAll('.upvote-btn').forEach(b => b.classList.toggle('upvoted', !isActive));
        post.querySelectorAll('.downvote-btn').forEach(b => b.classList.remove('downvoted'));
        post.querySelectorAll('.reddit-vote-count').forEach(el => {
          el.textContent = formatNumber(isActive ? upvotes : upvotes + 1);
        });
      });
    });

    post.querySelectorAll('.downvote-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = btn.classList.contains('downvoted');
        post.querySelectorAll('.downvote-btn').forEach(b => b.classList.toggle('downvoted', !isActive));
        post.querySelectorAll('.upvote-btn').forEach(b => b.classList.remove('upvoted'));
        post.querySelectorAll('.reddit-vote-count').forEach(el => {
          el.textContent = formatNumber(isActive ? upvotes : upvotes - 1);
        });
      });
    });

    // Save button toggle
    post.querySelectorAll('.reddit-save-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isSaved = btn.textContent.trim().startsWith('Unsave');
        btn.innerHTML = isSaved
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Save'
          : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Unsave';
      });
    });

    feed.appendChild(post);
  });
}

function generateAwards(upvotes) {
  const awards = [];
  if (upvotes > 10000) awards.push('<span class="reddit-award reddit-award-gold" title="Gold">&#9733;</span>');
  if (upvotes > 5000) awards.push('<span class="reddit-award reddit-award-helpful" title="Helpful">&#10003;</span>');
  if (upvotes > 3000) awards.push('<span class="reddit-award reddit-award-wholesome" title="Wholesome">&#9829;</span>');
  if (upvotes > 7000) awards.push('<span class="reddit-award reddit-award-silver" title="Silver">&#9679;</span>');

  if (awards.length === 0) return '';
  return `<span class="reddit-awards">${awards.join('')}</span>`;
}

function getRandomComments(count) {
  const shuffled = [...REDDIT_CONFIG.commentBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function formatNumber(n) {
  if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

// Export for use in main.js
window.initRedditMode = initRedditMode;
