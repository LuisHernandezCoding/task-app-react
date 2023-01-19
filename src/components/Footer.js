import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Made with <span className="heart">❤</span> by{" "}
          <a href="http://github.com/LuisHernandezCoding">Luis Hernandez</a>
        </p>
      </div>
    );
  }
}