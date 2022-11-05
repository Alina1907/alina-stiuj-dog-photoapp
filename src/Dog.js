import { useEffect, useState } from "react";
var apiUrl = "https://dog.ceo/api/breeds/image/random";
function Dog() {
  const [dog, setDog] = useState([]);
  // Cerem datele de la server si actualizam state-ul.
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDog(data.message));
  }, []);
  return <img src={dog} alt="Picture of reandom dog" className="App-image"></img>;
}
export default Dog;
