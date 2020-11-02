import React, { Component } from "react";
//Stateless Functional Component
const NavBar=(props)=>{
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        You have {props.length} items
      </a>
    </nav>
  );
}
export default NavBar;
