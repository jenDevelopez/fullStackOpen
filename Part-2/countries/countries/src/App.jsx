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
        <div>
          {filteredCountries.length > 10 ? (
            <p>
              Too many matches, specify another filter
            </p>
          ) : filteredCountries.length === 1 ? (
            <>
              {filteredCountries.map((country) => (
                <div key={country.name.common}>
                  <h1>{country.name.common}</h1>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                  <h2>languages</h2>
                  <ul>
                    {Object.values(country.languages).map((lang) => (
                      <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                  <img src={country.flags.png} alt={country.flags.alt} />
                </div>
              ))}
            </>
          ) : (
            <ul>
              {filteredCountries.map((country) => (
                <li key={country.name.common}>{country.name.common}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
