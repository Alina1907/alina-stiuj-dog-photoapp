import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="App-link">Main</Link>
      <Link to="/info" className="App-link">Info</Link>
      <Link to="/dog" className="App-link">Dog</Link>
      <Link to="/select-dog" className="App-link">SelectDog</Link>
    </header>
  );
}