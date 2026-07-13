<script>
  export let scrollProgress = 0

  const architectureNodes = [
    { label: 'Frontend', detail: 'React / Next', className: 'front-end' },
    { label: 'Backend', detail: 'Laravel / Node', className: 'back-end' },
    { label: 'AI Layer', detail: 'OpenAI', className: 'ai-layer' },
    { label: 'Database', detail: 'MySQL / MongoDB', className: 'database' },
    { label: 'Cloud', detail: 'AWS / Firebase', className: 'cloud' },
    { label: 'Quality', detail: 'Testing / Docs', className: 'quality' }
  ]

  const codeSnippets = [
    'const app = compose(frontend, api, cloud);',
    'await deploy({ tests: "green", risk: "low" });',
    'assistant.stream({ voice, leads, support });',
    'queue.process("reports.generated");',
    'cache.remember(key, query);',
    'schema.index(["customer_id", "created_at"]);'
  ]

  const dots = [
    { x: 18, y: 18 },
    { x: 28, y: 72 },
    { x: 42, y: 24 },
    { x: 54, y: 82 },
    { x: 66, y: 18 },
    { x: 78, y: 68 },
    { x: 88, y: 34 },
    { x: 12, y: 56 }
  ]

  const clamp = (value) => Math.min(Math.max(value, 0), 1)

  $: appStage = clamp((scrollProgress - 0.13) * 3.2)
  $: architectureStage = 1 - clamp((scrollProgress - 0.02) * 5.2)
  $: handoffStage = clamp((scrollProgress - 0.08) * 4) * (1 - clamp((scrollProgress - 0.34) * 6))
  $: gridShift = `${scrollProgress * -120}px`
  $: snippetShift = `${scrollProgress * -54}px`
  $: architectureLift = `${(1 - architectureStage) * -92}px`
  $: architectureScale = 0.92 + architectureStage * 0.08
  $: handoffOffset = `${(1 - handoffStage) * 90}px`
  $: appOffset = `${(1 - appStage) * 190}px`
</script>

<div
  class="scroll-story-backdrop"
  style={`--app-stage: ${appStage}; --architecture-stage: ${architectureStage}; --handoff-stage: ${handoffStage}; --grid-shift: ${gridShift}; --snippet-shift: ${snippetShift}; --architecture-lift: ${architectureLift}; --architecture-scale: ${architectureScale}; --handoff-offset: ${handoffOffset}; --app-offset: ${appOffset}`}
  aria-hidden="true"
>
  <div class="story-aurora"></div>
  <div class="story-grid"></div>

  <div class="code-snippet-field">
    {#each [0, 1, 2] as column}
      <div class="snippet-column" style={`--column-left: ${column * 34 - 6}%; --column-delay: ${column * -5}s`}>
        {#each [...codeSnippets, ...codeSnippets] as snippet}
          <span>{snippet}</span>
        {/each}
      </div>
    {/each}
  </div>

  <section class="architecture-scene">
    <svg class="architecture-links" viewBox="0 0 100 72" preserveAspectRatio="none">
      <path class="link-base" d="M50 36 L18 14 L14 55 L50 36 L82 15 L88 54 L50 36 L50 8 M50 36 L50 66" />
      <path class="link-pulse pulse-a" d="M18 14 L50 36 L82 15" />
      <path class="link-pulse pulse-b" d="M14 55 L50 36 L88 54" />
      <path class="link-pulse pulse-c" d="M50 8 L50 36 L50 66" />
    </svg>

    <div class="architecture-core">
      <span>Code</span>
      <strong>Architecture</strong>
    </div>

    {#each architectureNodes as node}
      <div class={`architecture-chip ${node.className}`}>
        <strong>{node.label}</strong>
        <span>{node.detail}</span>
      </div>
    {/each}
  </section>

  <div class="handoff-stream">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <section class="app-scene">
    <div class="screen web-screen">
      <div class="screen-top"><i></i><i></i><i></i></div>
      <div class="screen-hero"></div>
      <div class="screen-grid">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <strong>Web Application</strong>
    </div>

    <div class="screen mobile-screen">
      <div class="phone-notch"></div>
      <strong>Mobile App</strong>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>

  <div class="ambient-dots">
    {#each dots as dot, index}
      <span style={`left:${dot.x}%; top:${dot.y}%; --dot-delay:${index * -0.23}s`}></span>
    {/each}
  </div>
</div>
