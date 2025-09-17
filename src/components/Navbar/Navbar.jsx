import { CgMenuGridR } from "react-icons/cg";
import style from './Navbar.modules.css';

function Navbar() {
  return (
    <div className={style.navbar_mobile}>
      <h1>LG</h1>
      <CgMenuGridR className={style.menu_icon}/> 
    </div>
  );
}

export default Navbar;