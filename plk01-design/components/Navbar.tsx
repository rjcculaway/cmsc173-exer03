import { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

interface CustomHoverColor extends CSSProperties {
  "--accent-color": String;
};

interface NavbarButtonProps {
  label: String;
  link?: String;
}

const links: { label: String; link: String }[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Apparel",
    link: "",
  },
  {
    label: "Accessories",
    link: "",
  },
  {
    label: "Design System",
    link: "",
  },
];

const NavbarButton: React.FC<NavbarButtonProps> = ({ label, link = "" }) => {
  const router = useRouter();
  const hover_color: CustomHoverColor = { "--accent-color": "yellowgreen" };
  return (
    <Link href={`${link}`}>
      <a
        className={
          router.pathname == link
            ? styles.navbarbutton_active
            : styles.navbarbutton
        }
      >
        {label}
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const hover_color: CustomHoverColor = { "--accent-color": "yellowgreen" };
  return (
    <nav className={styles.navbar} style={hover_color}>
      <h1 className={styles.logotype}>PLK-01</h1>
      <div className={styles.navbarbuttons}>
        {links.map((link, i) => (
          <NavbarButton label={link.label} link={link.link} key={i} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
