import { useRef, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MenuList from "./components/menu_list/menu_list";
import MyWork1 from "./components/my_work_1/my_work_1";
import MyWork2 from "./components/my_work_2/my_work_2";
import MyWork3 from "./components/my_work_3/my_work_3";
import Nav from "./components/nav/nav";
import { FullPage, Slide } from "react-full-page";
import ThankYou from "./components/thank_you/thank_you";

function App() {
  const [showMenu, setShowMenu] = useState(false); //메뉴 아이콘 상태
  const [scrollIndex, setScrollIndex] = useState({}); //스크롤 페이지 index: from -> to
  const fullPageRef = useRef();

  //full-page 스크롤 인덱스
  const handleAfterChange = (indexes) => {
    setScrollIndex(indexes);
  };

  //메뉴 아이콘 클릭 시 메뉴 창 토글.
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  //메뉴 리스트 클릭시 해당 섹션으로 이동.
  const handleMenuClick = (i) => {
    fullPageRef.current.scrollToSlide(i);
  };

  // showMenu가 true 이면 메뉴 리스트 창 표시.
  const menuList = showMenu ? (
    <MenuList handleMenuClick={handleMenuClick} />
  ) : null;

  return (
    <div className={styles.app}>
      <Nav handleShowMenu={handleShowMenu} showMenu={showMenu} />
      {menuList}
      <FullPage ref={fullPageRef} afterChange={handleAfterChange}>
        <Slide>
          <Header />
        </Slide>
        <Slide>
          <MyWork1 scrollIndex={scrollIndex} />
        </Slide>
        <Slide>
          <MyWork2 scrollIndex={scrollIndex} />
        </Slide>
        <Slide>
          <MyWork3 scrollIndex={scrollIndex} />
        </Slide>
        <Slide>
          <ThankYou scrollIndex={scrollIndex} />
        </Slide>
      </FullPage>
      <p className={styles.email}>poohaha8974@gmail.com</p>
    </div>
  );
}

export default App;
