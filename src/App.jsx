import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/header";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Premium from "./components/Premium";
import Login from "./components/login";
import Signup from "./components/signup";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>

    /*{ <h1>hi</h1>
      <Button colorScheme="blue">click yoy</Button>
      <Button colorScheme={"facebook"}>click me</Button>
      <Button colorScheme={"whatsapp"}>whatsapp</Button>
      <Button colorScheme={"linkedin"}></Button> }*/
  );
}

export default App;
