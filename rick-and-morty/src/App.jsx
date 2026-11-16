import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
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