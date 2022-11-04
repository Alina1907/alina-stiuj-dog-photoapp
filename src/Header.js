import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="App-link">Main</Link>
      <Link to="/info" className="App-link">Info</Link>
    </header>
  );
}