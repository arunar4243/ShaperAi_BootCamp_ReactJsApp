import React from "react";

function Footer() {
  var curYear = new Date().getFullYear();
  return (
    <footer>
      <h1>Copy right @ {curYear}</h1>
    </footer>
  );
}
export default Footer;
