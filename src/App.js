import React, { useState } from "react";
import axios from "axios";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  // setting the state object's initial values
  const [state, setState] = useState({
    search: "",
    results: ""
  });
  // the url for the cat info
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";

  // use setstate to take in the search query
  //****************************************/
  const handleInput = e => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, search: s };
    });
  };

  // Async Await function to make a call to the api using axios.
  //  Set the results to the state using setState
  //**********************************************************/
  async function search(e) {
    try {
      if (e.key === "Enter") {
        const results = await axios(url + state.search);
        if (!results.data.length) {
          setState(prevState => {
            return {
              ...prevState,
              results: "Error! No such cat can be found. Please try another search!"
            };
          });
        } else {
          //console.log("description is:", description)
          setState(prevState => {
            return { ...prevState, results: results.data["0"].description };
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>The Cat Information App</h1>
      </header>
      <main>
        {
          //handle the search , displaying the results
        }
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
