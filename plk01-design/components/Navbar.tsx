import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";

import styles from "./Navbar.module.css";
import { CustomHoverColor } from "../interface/CustomHoverColor";
import { useAtom } from "jotai";
import { accentColorAtom } from "atoms/accentColorAtom";

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
    link: "/design-system",
  },
];

const NavbarButton: React.FC<NavbarButtonProps> = ({ label, link = "" }) => {
  const router = useRouter();

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
  const [ accentColor, setAccentColor ] = useAtom(accentColorAtom);
  const hover_color: CustomHoverColor = { "--accent-color": accentColor };
  
  return (
    <nav className={styles.navbar} style={hover_color}>
      <MenuIcon className={styles.menu_icon} style={hover_color} />
      <h1 className={styles.logotype}>PLK-01</h1>
      <div className={styles.navbarbuttons}>
        {links.map((link, i) => (
          <NavbarButton label={link.label} link={link.link} key={i} />
        ))}
      </div>
      <ShoppingCartIcon className={styles.shopping_cart_icon} style={hover_color} onClick={() => setAccentColor("pink")} />
    </nav>
  );
};

export default Navbar;
