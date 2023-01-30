// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./Components/navbar";
// PAGES
import Index from "./Pages";
import NewSnack from "./Pages/newSnack";

function App() {
  return (
    
    <div className="App">
      {/* https://www.bonsaicss.com/ */}
      <link href="https://unpkg.com/bonsai.css@latest/dist/bonsai.min.css" rel="stylesheet"/>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/new" element={<NewSnack/>} />

            <Route path="*" element={<h1>Page not found!</h1>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
