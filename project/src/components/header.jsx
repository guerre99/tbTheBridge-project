import Navbar from './navbar'
import HeaderSection from './header-section'

function Header({ navbar, header }) {
  return (
    <header>
      <Navbar navbar={navbar} />
      <HeaderSection header={header} />
    </header>
  )
}

export default Header
