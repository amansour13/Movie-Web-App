import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DetailedMovie from "./pages/DetailedMovie";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailedMovie />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
