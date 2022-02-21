import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Navbar } from "./components/navbar"
import { routes } from "./routes"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="app-content">
        <Routes>
          {routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact} />)}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App