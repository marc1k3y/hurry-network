import "./App.css"
// import { About } from "./components/about"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { HowWork } from "./components/howWork"
import { Start } from "./components/start"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <HowWork />
        {/* <About /> */}
        <Start />
      </div>
      <Footer />
    </div>
  )
}

export default App