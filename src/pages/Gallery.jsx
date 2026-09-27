import { site } from '../site.config.js'

export default function Gallery() {
  return (
    <>
      <section className="section">
        <p className="lead">
          These are PLACEHOLDER images standing in for real photos of our work.
          Replace the files in <code>public/images/</code>, or edit the paths in{' '}
          <code>src/site.config.js</code>.
        </p>
        <div className="grid grid-3">
          {site.gallery.map((item) => (
            <figure className="card tile" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption className="card-body">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
