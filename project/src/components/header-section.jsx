function HeaderSection({ header }) {
  return (
    <section className="header-section">
      <div className="text-header">
        <h1>{header.title}</h1>
        <h3>{header.subheading}</h3>
        <p>{header.paragraph}</p>
        <button>{header.button}</button>
      </div>
      <div>
        <img src="../../public/estu.png" alt="students" />
      </div>
    </section>
  )
}

export default HeaderSection
