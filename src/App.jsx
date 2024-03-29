import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  // console.log("puppyList: ", puppyList);
  console.log(featuredPup);
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                console.log("puppy id: ", puppy.id);
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
