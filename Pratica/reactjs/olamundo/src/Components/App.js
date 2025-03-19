import React from "react";
import Header from "./Header/Header";
import NavLink from "./NavLink/NavLink";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import '../App.css'

function App() {
  const myLinks = ["Link 1", "Link 2", "Link 3"]

  return (
    <div>
     <Header titlte="Titulo"/>
     <NavLink links={myLinks} />
     <Content />
     <Footer/>
    </div>
  );
};

export default App;
