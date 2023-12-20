const Map = () => {
  return (
    <div id="map">
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=console.debug&libraries=maps,marker&v=beta"></script>
      <gmp-map
        center="21.03705596923828,105.7823257446289"
        zoom="14"
        map-id="DEMO_MAP_ID">
        <gmp-advanced-marker
          position="21.03705596923828,105.7823257446289"
          title="My location"></gmp-advanced-marker>
      </gmp-map>
    </div>
  );
};

export default Map;