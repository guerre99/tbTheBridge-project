import Header from './components/header'

import db from './data.json'

function App() {
  return (
    <>
      <Header navbar={db.navbar} header={db.header} />
    </>
  )
}

export default App
