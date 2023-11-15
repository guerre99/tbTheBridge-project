import Enlace from './link'

function Navbar({ navbar }) {
  return (
    <section className="navbar">
      <img src={navbar.img}></img>

      {navbar.links.map((link) => (
        <Enlace>{link}</Enlace>
      ))}
    </section>
  )
}

export default Navbar
