import { site } from '../site.config.js'

export default function Testimonials() {
  return (
    <>
      <section className="section">
        <p className="lead warning">
          SAMPLE DATA. Every name and quote below is invented to show the layout.
          Replace <code>site.testimonials</code> in <code>src/site.config.js</code> with real
          reviews from real customers before publishing.
        </p>
        <div className="grid grid-3">
          {site.testimonials.map((t, i) => (
            <blockquote className="card quote" key={i}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  )
}
