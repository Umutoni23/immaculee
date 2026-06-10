import { NavLink } from "react-router-dom";
import {
  HiAcademicCap,
  HiDocumentText,
  HiEnvelope,
  HiHome,
  HiIdentification,
  HiLightBulb,
} from "react-icons/hi2";
import { BsPassport } from "react-icons/bs";
import profileImage from "../passport.png";


const navItems = [
  { to: "/", label: "Home", icon: HiHome },
  { to: "/about", label: "About", icon: HiIdentification },
  { to: "/skills", label: "Skills", icon: HiLightBulb },
  { to: "/certificates", label: "Certificates", icon: HiAcademicCap },
  { to: "/reference", label: "Reference", icon: HiDocumentText },
  { to: "/contact", label: "Contact", icon: HiEnvelope },
];

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <NavLink to="/" className="site-brand">
          <img
            src={profileImage}
            alt="Immaculee Uwiduhaye"
            className="site-brand__image"
          />
          Immaculee's Portfolio
        </NavLink>

        <nav className="site-menu" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-menu__link${isActive ? " site-menu__link--active" : ""}`
              }
            >
              <item.icon aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
