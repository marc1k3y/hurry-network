import "./App.css"
// import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Welcome } from "./components/welcome"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Welcome />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App