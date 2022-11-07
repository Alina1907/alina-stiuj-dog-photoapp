import { useEffect, useState } from "react";
function Dog(props) {
  var apiUrl = "https://dog.ceo/api/breeds/image/random";
  // Suprascriem url-ul default cu cel din proprietati daca este prezent.
  if (props.url) apiUrl = props.url;
  const [dog, setDog] = useState([]);
  // Cerem datele de la server si actualizam state-ul.
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDog(data.message));
  }, [apiUrl]);
  return <img src={dog} alt="Picture of reandom dog" className="App-image"></img>;
}
export default Dog;
