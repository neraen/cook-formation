import styles from './HeaderMenuXs.module.scss';
import {useState} from "react";
function HeaderMenuXs({ menuItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
        <ul className={ `card ${styles.menuContainer} p-20` }>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
  );
}

export default HeaderMenuXs;