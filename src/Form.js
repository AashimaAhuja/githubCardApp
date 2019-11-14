import React, { useState } from "react";

const axios = require("axios");

export const Form = props => {
  const [user, setUser] = useState({ name: "", company: "", image: "" });

  const handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${user.name}`);
    console.log(resp.data.name);

    props.addProfile({
      id: resp.data.id,
      name: resp.data.name,
      comapny: resp.data.comapny,
      image: resp.data.avatar_url
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={event => {
            setUser({ name: event.target.value });
          }}
        />
        <button> Add </button>
      </form>
    </div>
  );
};
