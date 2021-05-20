import { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MenuList from "./components/menu_list/menu_list";
import Nav from "./components/nav/nav";

function App() {
  const [showMenu, setShowMenu] = useState(false); //메뉴 아이콘 상태

  //메뉴 아이콘 클릭 시 메뉴 창 표시.
  const handleShowMenu = () => {
    setShowMenu(true);
  };
  // 메뉴 리스트 창 X 클릭시 메뉴 창 닫음.
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const menuList = showMenu ? (
    <MenuList handleCloseMenu={handleCloseMenu} />
  ) : null;

  return (
    <div className={styles.app}>
      <Nav handleShowMenu={handleShowMenu} />
      {menuList}
      <Header />
    </div>
  );
}

export default App;
