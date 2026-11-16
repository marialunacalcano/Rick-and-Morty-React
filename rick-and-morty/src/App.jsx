import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App