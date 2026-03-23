export default function Home() {
  return (
    <div className="page">
      <div className="glow" />

      <main className="card">
        <div className="corner top-right" />
        <div className="corner bottom-left" />

        <div className="badge">⚒️ Site in Progress</div>

        <h1 className="title">
          <span className="accent">ST Heros</span>
          <br />
          Under Construction
        </h1>

        <p className="subtitle">
          Welcome to <strong>st-heros</strong> — a future build hub for{' '}
          <em>Shop Titans</em> players who want more than surface-level advice.
          This site is being forged to help with nuanced hero building, class
          choices, gear priorities, team composition, and all the little details
          that actually matter.
        </p>

        <section className="grid">
          <article className="panel">
            <h3>Planned Content</h3>
            <p>
              Hero builds, stat priorities, skill synergy, roster planning, and
              practical guidance for early, mid, and late game players.
            </p>
          </article>

          <article className="panel">
            <h3>Why This Site</h3>
            <p>
              Because building heroes in Shop Titans gets complicated fast, and
              most advice misses the nuanced tradeoffs that matter long term.
            </p>
          </article>

          <article className="panel">
            <h3>Coming Soon</h3>
            <p>
              Clean guides, easy-to-scan recommendations, and deeper
              explanations for players who want to optimize with confidence.
            </p>
          </article>
        </section>

        <div className="ctaRow">
          <a
            className="btn btnPrimary"
            href="https://github.com/coding-stars-xl/st-heros"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

          <a className="btn btnSecondary" href="mailto:coreypellizzari1102@gmail.com">
            Contact
          </a>
        </div>

        <p className="mini">
          Replace the GitHub and email links with your real repo and contact
          info.
        </p>

        <div className="status">
          <span>
            <strong>Status:</strong> Forging the workshop
          </span>
          <span>
            <strong>Focus:</strong> Shop Titans hero strategy
          </span>
          <span>
            <strong>Next:</strong> First build guides
          </span>
        </div>
      </main>
    </div>
  )
}