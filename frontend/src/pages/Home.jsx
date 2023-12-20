import NavBar from "../components/Navbar.jsx";
import LocationInput from "../components/LocationInput.jsx";
import WeatherInfo from "../components/WeatherInfo.jsx";
import GeoMap from "../components/GeoMap.jsx";

const Home = () => {
  return (
    <div>
      <section id="title">
        <div className="container-fluid">
          <NavBar />
        </div>
      </section>
      <section id="infor">
        <div id="container-first">
          <LocationInput />
          <img src="tempicons/clouds.svg" alt="" id="tempIcon" />
          <WeatherInfo />
          <GeoMap />
        </div>
      </section>
    </div>
  );
};
export default Home;
