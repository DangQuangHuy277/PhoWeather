const WeatherInfo = () => {
  return (
    <div className="flex">
      <h2 id="weatherCountry">Cityname</h2>
      <h2 id="temperature">
        0°<strong>C</strong>
      </h2>
      <h2
        id="weatherDescription"
        style={{ height: "10rem", marginTop: "17%", top: "40%" }}>
        Description
      </h2>
      <br />
      <ul>
        <div className="features">
          <li id="feelsLike">Feels Like 0°C</li>
          <li id="humidity">Humidity 0</li>
          <li id="longtitude"> Longtitude 0</li>
          <li id="latitude">Latitude 0</li>
        </div>
      </ul>
    </div>
  );
};
export default WeatherInfo;