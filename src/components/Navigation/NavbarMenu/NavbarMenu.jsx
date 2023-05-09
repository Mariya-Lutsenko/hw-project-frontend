import styles from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const NavBarMenu = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={getClassName} to="/contacts">
        My contacts
      </NavLink>
    </div>
  );
};

export default NavBarMenu;
