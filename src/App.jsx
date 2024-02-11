import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Users, Main, Posts, HeaderPage, Product, } from "./pages"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderPage />} path="/">
          <Route element={<Main />} path='/' />
          <Route element={<Users />} path="/users" />
          <Route element={<Posts />} path='/posts' />
          <Route element={<Product />} path="/product" />
        </Route>
      </Routes>
    </Router>
  )
}

export default App