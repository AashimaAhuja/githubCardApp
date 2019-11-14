import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CardList } from "./CardList";
import { Form } from "./Form";
import "./styles.css";

const test_data = [
  {
    name: "Aashima",
    company: "Booking",
    image: "https://avatars3.githubusercontent.com/u/19411796?v=4"
  },
  {
    name: "Naman",
    company: "Adobe",
    image: "https://avatars0.githubusercontent.com/u/810438?v=4"
  },
  {
    name: "Felix",
    company: "Facebook",
    image: "https://avatars3.githubusercontent.com/u/4426?v=4"
  }
];

function App() {
  const [profile, setProfile] = useState(test_data);

  const addProfile = newProfile => {
    setProfile([...profile, newProfile]);
  };
  return (
    <div className="App">
      <h2>Github Card App</h2>
      <Form addProfile={addProfile} />
      <CardList profile={profile} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
