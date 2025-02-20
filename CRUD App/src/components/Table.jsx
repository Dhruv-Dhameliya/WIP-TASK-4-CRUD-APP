import React, { useState } from "react";
import "./Table.css";

const countries = [
  { name: "USA", states: ["California", "New York", "Texas"] },
  { name: "India", states: ["Gujarat", "Karnataka", "Delhi", "Maharashtra"] },
  { name: "Australia", states: ["Queensland", "New South Wales", "Victoria"] },
];

function Table({ data, handleDeleteData, handleUpdateData }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEditClick = (item) => {
    setIsEditing(item.id);
    setEditedData({ ...item });
  };

  const handleSaveClick = () => {
    handleUpdateData(editedData);
    setIsEditing(null);
  };

  const handleCancelClick = () => {
    setIsEditing(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setEditedData({ ...editedData, [name]: value, state: "" });
    } else {
      setEditedData({ ...editedData, [name]: value });
    }
  };

  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>
          {isEditing === item.id ? (
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
            />
          ) : (
            item.name
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <input
              type="text"
              name="mobile"
              value={editedData.mobile}
              onChange={handleInputChange}
            />
          ) : (
            item.mobile
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <input
              type="number"
              name="age"
              value={editedData.age}
              onChange={handleInputChange}
            />
          ) : (
            item.age
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <select
              name="gender"
              value={editedData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            item.gender
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <>
              <label>
                <input
                  type="checkbox"
                  name="gaming"
                  checked={editedData.hobbies.gaming}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      hobbies: {
                        ...editedData.hobbies,
                        gaming: e.target.checked,
                      },
                    })
                  }
                />{" "}
                Gaming
              </label>
              <label>
                <input
                  type="checkbox"
                  name="movie"
                  checked={editedData.hobbies.movie}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      hobbies: {
                        ...editedData.hobbies,
                        movie: e.target.checked,
                      },
                    })
                  }
                />{" "}
                Movie
              </label>
              <label>
                <input
                  type="checkbox"
                  name="traveling"
                  checked={editedData.hobbies.traveling}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      hobbies: {
                        ...editedData.hobbies,
                        traveling: e.target.checked,
                      },
                    })
                  }
                />{" "}
                Traveling
              </label>
              <label>
                <input
                  type="checkbox"
                  name="reading"
                  checked={editedData.hobbies.reading}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      hobbies: {
                        ...editedData.hobbies,
                        reading: e.target.checked,
                      },
                    })
                  }
                />{" "}
                Reading
              </label>
            </>
          ) : (
            `${item.hobbies.gaming ? "Gaming " : ""}${
              item.hobbies.movie ? "Movie " : ""
            }${item.hobbies.traveling ? "Traveling " : ""}${
              item.hobbies.reading ? "Reading " : ""
            }`
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <textarea
              name="address"
              value={editedData.address}
              onChange={handleInputChange}
            />
          ) : (
            item.address
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <select
              name="country"
              value={editedData.country}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          ) : (
            item.country
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <select
              name="state"
              value={editedData.state}
              onChange={handleInputChange}
            >
              <option value="">Select State</option>
              {countries
                .find((c) => c.name === editedData.country)
                ?.states.map((s, idx) => (
                  <option key={idx} value={s}>
                    {s}
                  </option>
                ))}
            </select>
          ) : (
            item.state
          )}
        </td>
        <td>
          {isEditing === item.id ? (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEditClick(item)}>Edit</button>
              <button onClick={() => handleDeleteData(item.id)}>Delete</button>
            </>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;
