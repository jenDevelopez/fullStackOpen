import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div>
      <div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {filteredCountries.length > 10 ? (
          <p>
           To many matches, specify antoher filter
          </p>
        ) : (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.name.common}>{country.name.common}</li>
            ))}
          </ul>
        )}
       
      </div>
    </div>
  );
}

export default App;
