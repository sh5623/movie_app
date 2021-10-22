import React from "react";

function Food({ fav }) {
  return <h3>I Love {fav} for App.js</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="hambuger" />
      <Food fav="pizza" />
    </div>
  );
}

export default App;
