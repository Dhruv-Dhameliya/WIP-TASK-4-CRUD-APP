import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ handleAddData }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState({
    gaming: false,
    movie: false,
    traveling: false,
    reading: false,
  });
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const countries = [
    { name: "USA", states: ["California", "New York", "Texas"] },
    { name: "India", states: ["Gujarat", "Karnataka", "Delhi", "Maharashtra"] },
    {
      name: "Australia",
      states: ["Queensland", "New South Wales", "Victoria"],
    },
  ];

  const handleHobbyChange = (e) => {
    setHobbies({
      ...hobbies,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: uuidv4(),
      name,
      mobile,
      age,
      gender,
      hobbies,
      address,
      country,
      state,
    };

    handleAddData(newData);

    setName("");
    setMobile("");
    setAge("");
    setGender("");
    setHobbies({
      gaming: false,
      movie: false,
      traveling: false,
      reading: false,
    });
    setAddress("");
    setCountry("");
    setState("");
  };

  const selectedCountry = countries.find((c) => c.name === country);

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Form</h1>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Mobile No.:</label>
        <input
          type="number"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Hobbies:</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="gaming"
              checked={hobbies.gaming}
              onChange={handleHobbyChange}
            />
            Gaming
          </label>
          <label>
            <input
              type="checkbox"
              name="movie"
              checked={hobbies.movie}
              onChange={handleHobbyChange}
            />
            Movie
          </label>
          <label>
            <input
              type="checkbox"
              name="traveling"
              checked={hobbies.traveling}
              onChange={handleHobbyChange}
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={hobbies.reading}
              onChange={handleHobbyChange}
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="none"
              checked={hobbies.none}
              onChange={handleHobbyChange}
            />
            None
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Address:</label>
        <textarea
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Country:</label>
        <select value={country} onChange={handleCountryChange} required>
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>State:</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {selectedCountry &&
            selectedCountry.states.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
        </select>
      </div>

      <button type="submit">Add Data</button>
    </form>
  );
}

export default Form;
