<script>
  import { onMount } from 'svelte'
  import {
    ArrowUpRight,
    BriefcaseBusiness,
    GraduationCap,
    Link,
    Mail,
    MapPin,
    Phone,
    Sparkles
  } from '@lucide/svelte'
  import CodeBackdrop from './lib/CodeBackdrop.svelte'
  import { profile } from './lib/profile.js'

  let scrollProgress = 0

  $: guideY = `${Math.min(scrollProgress * 66, 66)}vh`

  onMount(() => {
    const updateScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      scrollProgress = Math.min(window.scrollY / maxScroll, 1)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  })
</script>

<svelte:head>
  <title>{profile.name} | {profile.title}</title>
</svelte:head>

<CodeBackdrop {scrollProgress} />

<div class="scroll-guide" style={`--guide-y: ${guideY}`} aria-hidden="true">
  <div class="guide-track">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="guide-avatar">
    <div class="bot-head">
      <span></span>
      <span></span>
    </div>
    <div class="bot-body"></div>
  </div>
</div>

<header class="site-header">
  <a class="brand" href="#top" aria-label="{profile.name} home">
    <span>AS</span>
  </a>
  <nav aria-label="Primary navigation">
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main id="top">
  <section class="hero section-band">
    <div class="hero-copy">
      <p class="eyebrow"><Sparkles size={16} /> Full stack technical leadership</p>
      <h1>{profile.name}</h1>
      <p class="hero-title">{profile.title}</p>
      <p class="hero-summary">{profile.summary}</p>
      <div class="hero-actions" aria-label="Contact actions">
        <a class="button primary" href={`mailto:${profile.email}`}>
          <Mail size={18} />
          Email me
        </a>
        <a class="button icon-link" href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
          <Link size={18} />
          LinkedIn
        </a>
      </div>
    </div>

    <div class="profile-panel">
      <div class="portrait-frame">
        <img src={profile.image} alt="{profile.name}" />
      </div>
      <div class="profile-meta">
        <span>{profile.location}</span>
        <strong>{profile.title}</strong>
        <div class="profile-tags" aria-label="Core strengths">
          <span>Laravel</span>
          <span>OpenAI</span>
          <span>Node.js</span>
          <span>AWS</span>
        </div>
      </div>
    </div>
  </section>

  <section class="metrics section-band" aria-label="Career highlights">
    {#each profile.highlights as item}
      <div class="metric">
        <strong>{item.value}</strong>
        <span>{item.label}</span>
      </div>
    {/each}
  </section>

  <section class="section-band split" id="experience">
    <div class="section-heading">
      <p class="eyebrow"><BriefcaseBusiness size={16} /> Career path</p>
      <h2>Experience</h2>
    </div>
    <div class="timeline">
      {#each profile.experience as job}
        <article class="timeline-item">
          <div class="time-dot"></div>
          <div>
            <div class="item-topline">
              <h3>{job.role}</h3>
              <span>{job.years}</span>
            </div>
            <p class="company">{job.company}</p>
            <p>{job.detail}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="section-band projects" id="projects">
    <div class="section-heading centered">
      <p class="eyebrow"><ArrowUpRight size={16} /> Selected builds</p>
      <h2>Large Projects</h2>
    </div>
    <div class="project-grid">
      {#each profile.projects as project}
        <article class="project-card">
          <h3>{project.name}</h3>
          <p>{project.overview}</p>
          <div class="tech-list">
            {#each project.technologies as tech}
              <span>{tech}</span>
            {/each}
          </div>
          <ul>
            {#each project.role as point}
              <li>{point}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section class="section-band split skills-education" id="skills">
    <div class="skills-column">
      <div class="section-heading">
        <p class="eyebrow"><Sparkles size={16} /> Engineering stack</p>
        <h2>Skills</h2>
      </div>
      <div class="skills-panel">
        <div class="skill-cloud">
          {#each profile.skills as skill}
            <span>{skill}</span>
          {/each}
        </div>
      </div>
    </div>

    <div class="education">
      <div class="section-heading">
        <p class="eyebrow"><GraduationCap size={16} /> Foundation</p>
        <h2>Education</h2>
      </div>
      {#each profile.education as item}
        <article class="education-item">
          <div class="item-topline">
            <h3>{item.degree}</h3>
            <span>{item.years}</span>
          </div>
          <p class="company">{item.school}</p>
          <p>{item.place}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="contact section-band" id="contact">
    <div class="section-heading centered">
      <p class="eyebrow"><MapPin size={16} /> Available from Indore</p>
      <h2>Let us build something useful</h2>
    </div>
    <div class="contact-grid">
      <a href={`tel:${profile.phone.replaceAll('-', '')}`}>
        <Phone size={20} />
        <span>{profile.phone}</span>
      </a>
      <a href={`mailto:${profile.email}`}>
        <Mail size={20} />
        <span>{profile.email}</span>
      </a>
      <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer">
        <Link size={20} />
        <span>{profile.linkedin}</span>
      </a>
    </div>
  </section>
</main>
