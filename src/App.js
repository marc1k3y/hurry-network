import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Start } from "./components/start"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="*" element={<Start />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App