import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ChiSiamo } from './pages/ChiSiamo'
import { Progetti } from './pages/Progetti'
import { Trasparenza } from './pages/Trasparenza'
import { Contatti } from './pages/Contatti'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/progetti" element={<Progetti />} />
          <Route path="/trasparenza" element={<Trasparenza />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
