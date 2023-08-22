import styles from "./Header.module.css";
import MenuIcon from "@/Imagens/menu_icon";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <MenuIcon />
      </div>
    </>
  );
}

export default Header;
