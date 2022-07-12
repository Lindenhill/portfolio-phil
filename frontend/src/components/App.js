import React from 'react';
import '../css/App.css';
import { Body } from "./Body"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Home";
import { Blog } from "./Blog";
import { About } from "./About";

import {Header} from "./Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"element={<Body />}>
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
