import { Link } from "react-router";
import logo from "../assets/logo-tesla.png";
import { CircleUser } from "lucide-react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <CircleUser size={40} />
    </nav>
  );
}
export default NavBar;
