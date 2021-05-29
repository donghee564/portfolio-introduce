import { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MenuList from "./components/menu_list/menu_list";
import MyWork1 from "./components/my_work_1/my_work_1";
import MyWork2 from "./components/my_work_2/my_work_2";
import MyWork3 from "./components/my_work_3/my_work_3";
import Nav from "./components/nav/nav";
import { FullPage, Slide } from "react-full-page";

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
  // showMenu가 true 이면 메뉴 리스트 창 표시.
  const menuList = showMenu ? (
    <MenuList handleCloseMenu={handleCloseMenu} />
  ) : null;

  return (
    <div className={styles.app}>
      <Nav handleShowMenu={handleShowMenu} />
      {menuList}
      <FullPage>
        <Slide>
          <Header />
        </Slide>
        <Slide>
          <MyWork1 />
        </Slide>
        <Slide>
          <MyWork2 />
        </Slide>
        <Slide>
          <MyWork3 />
        </Slide>
      </FullPage>
      <p className={styles.email}>poohaha8974@gmail.com</p>
    </div>
  );
}

export default App;
