import { useEffect, useRef, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import MenuList from "./components/menu_list/menu_list";
import MyWork1 from "./components/my_work_1/my_work_1";
import Nav from "./components/nav/nav";

function App() {
  const [showMenu, setShowMenu] = useState(false); //메뉴 아이콘 상태
  const [scrollTop, setScrollTop] = useState(0); //스크롤위치
  const [scrolling, setScrolling] = useState(false);
  const pageRef = useRef();

  useEffect(() => {
    let pageHeight = window.innerHeight;
    let currScroll = window.pageYOffset;
    const onScroll = (e) => {
      setScrollTop(currScroll);
      // setScrolling(e.target.documentElement.scrollTop > scrollTop);
      // pageRef.current.style.transition = "all 1s";
      // pageRef.current.style.transform = `translateY(-${pageHeight}px)`;
      // window.scroll({ top: pageHeight, left: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

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
    <div ref={pageRef} className={styles.app}>
      <Nav handleShowMenu={handleShowMenu} />
      {menuList}
      <Header />
      <MyWork1 />
    </div>
  );
}

export default App;
