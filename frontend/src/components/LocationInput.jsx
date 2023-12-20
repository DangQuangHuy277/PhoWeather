const LocationInput = () => {
  return (
    <div id="location">
      <input type="text" id="country" placeholder="Country" />
      <input type="text" id="city" placeholder="City" />
      <input type="submit" id="check" value="Go" />
    </div>
  );
};
export default LocationInput;