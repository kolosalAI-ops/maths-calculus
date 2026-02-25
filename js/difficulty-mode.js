/* ============================================
   DIFFICULTY MODE — Beginner / All / Advanced
   Beginner: injects conceptual, plain-language
   "think of it like..." cards into each chapter.
   Advanced: injects extra rigor, proofs, and
   formal notes. Nothing is hidden.
   ============================================ */

/* Beginner conceptual notes — plain language analogies */
const BEGINNER_NOTES = {
  'ch-number-systems': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">💡</span><div><strong>Think of it like this:</strong> Numbers are like a family tree. Natural numbers (1, 2, 3...) are the youngest generation. Integers add negatives and zero — like expanding the family. Rationals are any number you can write as a fraction. Irrationals are the rebels — they can't be written as neat fractions, like pi or the square root of 2.</div></div>` },
    { after: '.formula-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎯</span><div><strong>Why does this matter?</strong> Absolute value is just "how far from zero" something is. The number -7 is 7 steps from zero, so |−7| = 7. That's it.</div></div>` },
  ],
  'ch-algebra-basics': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">💡</span><div><strong>Think of it like this:</strong> Algebra is a language where letters stand in for numbers you don't know yet. The expression 3x + 5 is like saying "triple some mystery number and add five." Your job is to figure out what x is.</div></div>` },
    { after: 'h3', index: 2, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🧩</span><div><strong>What is factoring, really?</strong> Factoring is just un-multiplying. If 6 = 2 × 3, then factoring x² − 9 means finding that it's (x+3)(x−3). You're breaking things back into the pieces that were multiplied together.</div></div>` },
  ],
  'ch-equations': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">⚖️</span><div><strong>Think of it like a balance scale.</strong> An equation says "the left side weighs the same as the right side." Whatever you do to one side — add, subtract, multiply, divide — you must do to the other to keep the scale balanced.</div></div>` },
    { after: '.formula-box.highlight', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🔑</span><div><strong>The quadratic formula is your universal key.</strong> It works on ANY quadratic equation. Just plug in a, b, and c. The ± means you get two answers (or sometimes one, or sometimes none that are real numbers).</div></div>` },
  ],
  'ch-functions-intro': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎰</span><div><strong>Think of a function like a machine.</strong> You feed it an input (x), it does something to it, and spits out an output (f(x)). Every input gives exactly ONE output. A vending machine is a function: press B4, always get the same snack.</div></div>` },
    { after: 'h3', index: 2, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🪞</span><div><strong>Transformations are just moving the graph around.</strong> Adding a number shifts it up/down. Changing what's inside the parentheses shifts it left/right. Multiplying stretches or squishes it. A negative sign flips it like a mirror.</div></div>` },
  ],
  'ch-linear-quadratic': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">📈</span><div><strong>Slope is just steepness.</strong> How much does y change when x goes up by 1? That's slope. Positive slope = uphill. Negative slope = downhill. Zero slope = flat. y = mx + b says: start at height b, then go up m for every 1 step to the right.</div></div>` },
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🏔️</span><div><strong>A parabola is a U-shape (or upside-down U).</strong> The vertex is the tip — the lowest or highest point. If the number in front of x² is positive, it opens up like a bowl. Negative, it opens down like a hill.</div></div>` },
  ],
  'ch-polynomial': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🌊</span><div><strong>Polynomials are just smooth, wavy curves.</strong> The degree tells you the maximum number of bumps the graph can have. A degree-2 polynomial (quadratic) has 1 bump. Degree-3 can have 2 bumps. And so on.</div></div>` },
  ],
  'ch-exponential-log': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🚀</span><div><strong>Exponential growth is "doubling" on repeat.</strong> Think of bacteria: 1 becomes 2, 2 becomes 4, 4 becomes 8... It starts slow, then explodes. That's exponential growth. Decay is the same idea in reverse — shrinking by half each time.</div></div>` },
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🔄</span><div><strong>A logarithm just asks: "what exponent do I need?"</strong> If 2³ = 8, then log₂(8) = 3. The log is the inverse of the exponent. It undoes exponentiation, like subtraction undoes addition.</div></div>` },
  ],
  'ch-trig-basics': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">📐</span><div><strong>SOH CAH TOA — that's the whole trick.</strong> Sine = Opposite/Hypotenuse. Cosine = Adjacent/Hypotenuse. Tangent = Opposite/Adjacent. Draw a right triangle, label the sides, and these ratios tell you everything about the angle.</div></div>` },
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎡</span><div><strong>The unit circle is a clock for angles.</strong> Imagine walking around a circle with radius 1. Your x-coordinate at any angle is cosine, your y-coordinate is sine. That's literally it — cos and sin just track your position on a circle.</div></div>` },
  ],
  'ch-trig-identities': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🧮</span><div><strong>Trig identities are cheat codes.</strong> They're equations that are ALWAYS true, no matter what angle you plug in. sin² + cos² = 1 is just the Pythagorean theorem on the unit circle. The rest are shortcuts for simplifying messy trig expressions.</div></div>` },
  ],
  'ch-limits': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎯</span><div><strong>A limit is "where is this heading?"</strong> Imagine walking toward a door. The limit is the door itself — the value you're approaching, even if you never actually touch it. lim as x→3 means: what number does f(x) get super close to as x gets super close to 3?</div></div>` },
  ],
  'ch-derivatives': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🏎️</span><div><strong>The derivative is just the "rate of change."</strong> If you're driving, your position changes over time. The derivative of your position is your speed. The derivative of your speed is your acceleration. It tells you: "how fast is this thing changing, right now, at this exact instant?"</div></div>` },
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">📏</span><div><strong>Visually: the derivative is the slope of the tangent line.</strong> Zoom in on any smooth curve far enough and it looks like a straight line. The slope of that line is the derivative at that point.</div></div>` },
  ],
  'ch-diff-rules': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">⚡</span><div><strong>These rules save you from the limit definition every time.</strong> The power rule alone handles most problems: bring the exponent down, subtract 1. That's it. x⁵ becomes 5x⁴. The other rules handle products, quotients, and nested functions.</div></div>` },
    { after: 'h3', index: 2, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🧅</span><div><strong>The chain rule is for "functions inside functions" — like peeling an onion.</strong> If you have sin(x²), the outer layer is sin(□) and the inner layer is x². Differentiate the outside, then multiply by the derivative of the inside. Peel layer by layer.</div></div>` },
  ],
  'ch-applications-deriv': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🔗</span><div><strong>Related rates: everything is connected.</strong> If you're blowing up a balloon, the radius, volume, and surface area are all changing at the same time. Related rates uses derivatives to figure out how fast one thing changes when you know how fast another is changing.</div></div>` },
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">⛰️</span><div><strong>Finding max and min: where does the slope equal zero?</strong> At a mountain peak or valley bottom, the ground is momentarily flat — the slope is zero. Setting f'(x) = 0 finds those flat spots. Then you check which are peaks and which are valleys.</div></div>` },
  ],
  'ch-integrals': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">📊</span><div><strong>Integration is just fancy addition.</strong> Imagine you want the area under a curve. Slice it into tons of thin rectangles, add up their areas, and make the rectangles infinitely thin. That sum IS the integral. It's the reverse of differentiation — if derivatives break things apart, integrals put them back together.</div></div>` },
  ],
  'ch-ftc': [
    { after: '.formula-box.highlight', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🌉</span><div><strong>This is THE big idea of calculus.</strong> The Fundamental Theorem says: to find the area under a curve, just find the antiderivative and subtract. It connects the two halves of calculus — derivatives (rates) and integrals (accumulation) — into one beautiful relationship.</div></div>` },
  ],
  'ch-applications-int': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🥪</span><div><strong>Area between curves is like a sandwich.</strong> The top function minus the bottom function gives you the "thickness" at each point. Integrate that thickness across the interval and you get the total area squeezed between them.</div></div>` },
  ],
  'ch-integration-tech': [
    { after: '.formula-box.highlight', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🔧</span><div><strong>Integration by parts is the product rule in reverse.</strong> When you have two functions multiplied together inside an integral and u-sub doesn't work, you pick one piece to differentiate and one to integrate. The LIATE trick helps you choose which is which.</div></div>` },
  ],
  'ch-sequences-series': [
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">∞</span><div><strong>A series is "adding forever."</strong> Can you add up infinitely many numbers and get a finite answer? Sometimes yes! 1/2 + 1/4 + 1/8 + ... = 1. That's convergence. If the sum just keeps growing forever, that's divergence. The tests help you figure out which one you've got.</div></div>` },
  ],
  'ch-power-series': [
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🧬</span><div><strong>Taylor series: approximate ANY function with polynomials.</strong> Polynomials are easy to work with. Taylor series lets you write sin(x), eˣ, or any smooth function as an infinite polynomial. The more terms you use, the better the approximation. It's like building a custom polynomial that mimics any function you want.</div></div>` },
  ],
  'ch-vectors': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">➡️</span><div><strong>A vector is an arrow — it has direction AND magnitude.</strong> Regular numbers only have size. Vectors have size AND a direction they point in. Think of it like giving directions: "walk 5 meters northeast" is a vector. Just "5 meters" is a scalar.</div></div>` },
  ],
  'ch-partial-deriv': [
    { after: 'h3', index: 1, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎚️</span><div><strong>Partial derivatives: change one knob at a time.</strong> Imagine a mixing board with sliders for x and y. A partial derivative with respect to x asks: "if I move ONLY the x slider, how does the output change?" You treat y as frozen — a constant — and differentiate only with respect to x.</div></div>` },
    { after: 'h3', index: 3, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🧭</span><div><strong>The gradient is a compass pointing uphill.</strong> At any point on a surface, the gradient vector points in the direction where the function increases the fastest. Its length tells you how steep that climb is. Go opposite the gradient to find the fastest way downhill — that's gradient descent.</div></div>` },
  ],
  'ch-multiple-integrals': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">📦</span><div><strong>Double integrals = volume under a surface.</strong> A single integral gives area under a curve. A double integral gives volume under a surface. A triple integral gives... well, it's used for 3D stuff like mass and charge. Think of stacking layers of area slices to build up volume.</div></div>` },
  ],
  'ch-vector-calculus': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🌬️</span><div><strong>Vector fields are like wind maps.</strong> At every point in space, there's an arrow showing direction and strength. Think of weather maps with wind arrows. Divergence asks "is air being created or destroyed here?" Curl asks "is the air spinning here?"</div></div>` },
  ],
  'ch-diff-equations': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🔮</span><div><strong>Differential equations predict the future.</strong> They describe how things change: population growth, radioactive decay, springs bouncing, circuits charging. You're given the RULE of change (the equation with derivatives) and your job is to find the actual function that follows that rule.</div></div>` },
  ],
  'ch-matrix-calculus': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🤖</span><div><strong>Matrix calculus: derivatives but for vectors and matrices.</strong> In machine learning, you optimize functions of millions of parameters at once. Instead of one derivative, you need the gradient (a vector of all partial derivatives). The Jacobian and Hessian organize even more derivative information. It's regular calculus, scaled up.</div></div>` },
  ],
  'ch-surface-integrals': [
    { after: 'h3', index: 3, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🌀</span><div><strong>Stokes' and Divergence theorems: the grand shortcuts.</strong> They let you swap hard integrals for easier ones. Instead of integrating over a complicated surface, you can sometimes integrate around its boundary (Stokes'). Instead of a surface integral, do a volume integral (Divergence). They're the "work smarter not harder" of calculus.</div></div>` },
  ],
  'ch-applications-advanced': [
    { after: 'h3', index: 0, html: `<div class="concept-card beginner-concept"><span class="concept-card-icon">🎵</span><div><strong>Fourier series: any repeating pattern = sum of sine waves.</strong> Music, signals, heat — anything periodic can be broken down into simple sine and cosine waves at different frequencies. It's like saying any sound is just a mix of pure tones.</div></div>` },
  ],
};

/* Advanced rigor notes */
const ADVANCED_NOTES = {
  'ch-limits': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Formal (ε-δ) Definition:</strong> We say lim<sub>x→a</sub> f(x) = L if for every ε > 0 there exists δ > 0 such that 0 < |x − a| < δ implies |f(x) − L| < ε. This makes the intuitive notion of "getting arbitrarily close" completely rigorous and is the foundation of real analysis.</div></div>` },
  ],
  'ch-derivatives': [
    { after: '.definition-box', index: 0, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Formal Definition via Linear Approximation:</strong> f is differentiable at a if there exists a linear map L such that lim<sub>h→0</sub> |f(a+h) − f(a) − Lh| / |h| = 0. This generalizes to higher dimensions (Fréchet derivative) and is essential for manifold theory.</div></div>` },
  ],
  'ch-ftc': [
    { after: '.callout', index: 0, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Proof Sketch (FTC Part 1):</strong> Let g(x) = ∫<sub>a</sub><sup>x</sup> f(t)dt. Then g(x+h)−g(x) = ∫<sub>x</sub><sup>x+h</sup> f(t)dt. By the Mean Value Theorem for integrals, this equals f(c)·h for some c between x and x+h. As h→0, c→x, so g'(x) = lim f(c) = f(x) by continuity. QED.</div></div>` },
  ],
  'ch-sequences-series': [
    { after: 'h3', index: 0, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Cauchy Criterion:</strong> A sequence {a<sub>n</sub>} converges iff it is a Cauchy sequence: for every ε > 0, there exists N such that |a<sub>m</sub> − a<sub>n</sub>| < ε for all m, n > N. This is equivalent to convergence in ℝ (completeness) and doesn't require knowing the limit in advance.</div></div>` },
  ],
  'ch-partial-deriv': [
    { after: 'h3', index: 7, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Lagrange Multipliers — Geometric Insight:</strong> At a constrained extremum, ∇f must be parallel to ∇g (both perpendicular to the constraint surface). The multiplier λ is the rate of change of the optimal value with respect to the constraint value c. This extends to multiple constraints: ∇f = λ₁∇g₁ + λ₂∇g₂ + ...</div></div>` },
  ],
  'ch-vector-calculus': [
    { after: 'h3', index: 4, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Differential Forms Perspective:</strong> Green's, Stokes', and the Divergence theorems are all special cases of the generalized Stokes' theorem: ∫<sub>∂Ω</sub> ω = ∫<sub>Ω</sub> dω, where ω is a differential form and dω its exterior derivative. This unifies all of vector calculus into a single elegant statement.</div></div>` },
  ],
  'ch-matrix-calculus': [
    { after: 'h3', index: 4, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>Tensor Derivatives & Einstein Notation:</strong> For higher-order tensors, ∂T<sub>ij</sub>/∂X<sub>kl</sub> produces a 4th-order tensor. Using index notation with the Einstein summation convention simplifies these expressions enormously and is standard in physics and differential geometry. The Kronecker delta δ<sub>ij</sub> and the permutation symbol ε<sub>ijk</sub> are essential building blocks.</div></div>` },
  ],
  'ch-surface-integrals': [
    { after: 'h3', index: 5, html: `<div class="concept-card advanced-concept"><span class="concept-card-icon">⚙️</span><div><strong>De Rham Cohomology:</strong> The fundamental theorems relate exact forms (dω) to closed forms (dω = 0). On simply connected domains, every closed form is exact. On domains with "holes," the failure of this is measured by cohomology groups H<sup>k</sup>(M), connecting calculus to topology.</div></div>` },
  ],
};

let notesInjected = false;

function initDifficultyMode() {
  const buttons = document.querySelectorAll('.mode-btn');
  const stored = localStorage.getItem('kolosal-math-difficulty') || 'all';

  // Set initial active button
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === stored);
  });

  setDifficultyMode(stored);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setDifficultyMode(mode);
      localStorage.setItem('kolosal-math-difficulty', mode);

      // Re-render KaTeX in Reddit feed if it's active (concept cards may contain math)
      if (document.body.classList.contains('reddit-mode')) {
        const feed = document.querySelector('.reddit-feed');
        if (feed) {
          setTimeout(() => {
            if (typeof renderKaTeXIn === 'function') {
              renderKaTeXIn(feed);
            } else if (typeof renderMathInElement === 'function') {
              renderMathInElement(feed, {
                delimiters: typeof KATEX_DELIMITERS !== 'undefined' ? KATEX_DELIMITERS : [
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
      }
    });
  });
}

function setDifficultyMode(mode) {
  document.body.classList.remove('mode-beginner', 'mode-all', 'mode-advanced');

  if (mode === 'beginner') {
    document.body.classList.add('mode-beginner');
  } else if (mode === 'advanced') {
    document.body.classList.add('mode-advanced');
  } else {
    document.body.classList.add('mode-all');
  }

  if (!notesInjected) {
    injectNotes();
    notesInjected = true;
  }
}

function injectNotes() {
  // Inject beginner conceptual cards
  Object.entries(BEGINNER_NOTES).forEach(([chapterId, notes]) => {
    const chapter = document.getElementById(chapterId);
    if (!chapter) return;

    notes.forEach(note => {
      const targets = chapter.querySelectorAll(note.after);
      const target = targets[note.index];
      if (target) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = note.html;
        const el = wrapper.firstElementChild;
        target.insertAdjacentElement('afterend', el);
      }
    });
  });

  // Inject advanced rigor cards
  Object.entries(ADVANCED_NOTES).forEach(([chapterId, notes]) => {
    const chapter = document.getElementById(chapterId);
    if (!chapter) return;

    notes.forEach(note => {
      const targets = chapter.querySelectorAll(note.after);
      const target = targets[note.index];
      if (target) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = note.html;
        const el = wrapper.firstElementChild;
        target.insertAdjacentElement('afterend', el);
      }
    });
  });
}

window.initDifficultyMode = initDifficultyMode;
