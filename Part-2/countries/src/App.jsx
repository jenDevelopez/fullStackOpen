import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  const getDataCountry = (name) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => setCountry(response.data[0]))
      .catch((error) => console.error(error));
  };

  const api_key = import.meta.env.VITE_APP_API_KEY;

  const getDataWeather = async () => {
    if (country) {
      const options = {
        method: "GET",
        url: `https://open-weather13.p.rapidapi.com/city/${country.capital}`,
        headers: {
          "X-RapidAPI-Key": api_key,
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setDataWeather(response.data);

      } catch (error) {
        console.error(error);
      }
    }
  };

  const getDataCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  };



  useEffect(() => {
    getDataCountries();
    getDataWeather();
  }, [country]);

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
          <p>Too many matches, specify another filter</p>
        ) : filteredCountries.length === 1 ? (
          filteredCountries.map((country) => (
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
          ))
        ) : (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => getDataCountry(country.name.common)}>
                  show
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {country && (
        <div>
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
      )}
      {dataWeather && (
        <div>
          <h3>Weather in {dataWeather.name}</h3>
          <p>Temperature {dataWeather.main.temp.toFixed()} Celsius</p>
          <img src={`http://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png`} alt="" />
          <p>wind: {dataWeather.wind.speed.toFixed()} mph</p>
        </div>
       
      )}
    </div>
  );
}

export default App;
