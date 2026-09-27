import Card from '../components/Card.jsx'
import { site, whatsappLink } from '../site.config.js'

export default function Services() {
  return (
    <>
      <section className="section">
        <p className="lead">
          Four things, done properly. Pick one or hand us all of it.
        </p>
        <div className="grid grid-2">
          {site.services.map((s) => (
            <Card key={s.title} image={s.image} title={s.title} text={s.text}>
              <a className="link-arrow" href={whatsappLink(`Hi Astha Provides, I would like to know more about ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                Enquire about this
              </a>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
