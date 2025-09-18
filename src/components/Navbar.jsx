import { CgMenuGridO } from "react-icons/cg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <h1>LG</h1>
      <div className={styles.text_title}>
        <h2>LUISGUILHERME</h2>
        <h3>DESENVOLVEDOR BACK-END</h3>
      </div>
      <CgMenuGridO className={styles.menu_icon} />
    </div>
  );
}

export default Navbar;
