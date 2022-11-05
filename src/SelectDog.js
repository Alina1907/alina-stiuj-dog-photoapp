import { useEffect, useState } from "react";
var apiUrl = "https://dog.ceo/api/breeds/list/all";
function SelectDog() {
  const [dogs, setDogs] = useState([]);
  // Cerem datele de la server si actualizam state-ul.
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDogs(Object.keys(data.message)));
  }, []);

  const [selection, setSelection] = useState([]);
  function handleSelect(event) {
    setSelection(event.target.value);
  }

  const [url, setUrl] = useState([]);
  function handleSubmit(event) {
    setUrl("https://dog.ceo/api/breed/" + selection + "/images/random");
    console.log("https://dog.ceo/api/breed/" + selection + "/images/random");
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="dogs">Choose a dog:</label>
        <select name="dogs" id="dogs" onChange={handleSelect}>
          <option value="" id="0"></option>
          {dogs.map((dog) => (
            <option value={dog}>{dog}</option>
          ))}
        </select>
        <input type="submit" />
      </form>
      <p> The dog you selected: {selection}</p>
      <p>Find random pictures of your selection here: {url}</p>
    </div>
  );
}
export default SelectDog;
