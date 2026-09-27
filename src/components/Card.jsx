export default function Card({ image, title, text, children }) {
  return (
    <article className="card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <div className="card-body">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {children}
      </div>
    </article>
  )
}
