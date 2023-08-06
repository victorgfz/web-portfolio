import React from "react";
import styles from "./Header.module.css";
import logo from "./assets/Logo.png";
import search from "./assets/search-icon.png";
import searchActive from "./assets/search-icon-2.png";
import useMedia from "./useMedia";
import menuMobile from "./assets/menu-mobile.png";

const Header = () => {
  const [value, setValue] = React.useState("");
  const [bar, setBar] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [fixed, setFixed] = React.useState(styles.normal);
  const searching = React.useRef();
  const nav = React.useRef();
  const mobile = useMedia("(max-width: 1100px)");

  React.useEffect(() => {
    function handleSearch({ target }) {
      if (!searching.current.contains(target)) setBar(false);
    }
    function handleMenu({ target }) {
      if (mobile) {
        if (!nav.current.contains(target)) setMenu(false);
      }
    }
    function handleWheel(event) {
      if (event.deltaY < 0 && window.scrollY > 100) {
        //if scroll up
        setFixed(styles.fixed);
      } else if (event.deltaY < 0 && window.scrollY <= 100) {
        setFixed(styles.normal);
      } else if (event.deltaY > 0 && window.scrollY > 0) {
        setFixed(styles.unfixed);
      }
    }
    let clickY;
    function handleTouch(event) {
      clickY = event.changedTouches[0].clientY;
    }
    function handleTouchEnd(event) {
      if (clickY < event.changedTouches[0].clientY && window.scrollY > 100) {
        setFixed(styles.fixed);
      } else if (
        clickY < event.changedTouches[0].clientY &&
        window.scrollY <= 100
      ) {
        setFixed(styles.normal);
      } else if (
        clickY > event.changedTouches[0].clientY &&
        window.scrollY > 0
      ) {
        setFixed(styles.unfixed);
        setMenu(false);
      }
    }

    /* const portfolio = document.querySelector("#portfolio").offsetTop - 96;
    const home = document.querySelector("#home").offsetTop - 96;
    const pricing = document.querySelector("#pricing").offsetTop - 96;
    const blog = document.querySelector("#blog").offsetTop - 96;
    const clients = document.querySelector("#clients").offsetTop - 96;
    const contact = document.querySelector("#contact").offsetTop - 96; */

    window.addEventListener("mousedown", handleSearch);
    window.addEventListener("mousedown", handleMenu);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousedown", handleSearch);
      window.removeEventListener("mousedown", handleMenu);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  });

  return (
    <section className={`${styles.wrapper} ${fixed} wrapper`}>
      {!mobile && (
        <header className={`${styles.header} container`}>
          <div className={styles.logo}>
            <a href="./ ">
              <img src={logo} alt="Logo - WePro." />
            </a>
          </div>
          <nav>
            <ul className={styles.ul}>
              <li
                onClick={() => {
                  const home = document.querySelector("#home").offsetTop - 96;
                  window.scroll({
                    top: home,
                    behavior: "smooth",
                  });
                  setFixed(styles.normal);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Home
              </li>
              <li
                onClick={() => {
                  const portfolio =
                    document.querySelector("#portfolio").offsetTop - 96;
                  window.scroll({
                    top: portfolio,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Portfolio
              </li>
              <li
                onClick={() => {
                  const pricing =
                    document.querySelector("#pricing").offsetTop - 96;
                  window.scroll({
                    top: pricing,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Pricing
              </li>
              <li
                onClick={() => {
                  const blog = document.querySelector("#blog").offsetTop - 96;
                  window.scroll({
                    top: blog,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Blog
              </li>
              <li
                onClick={() => {
                  const clients =
                    document.querySelector("#clients").offsetTop - 96;
                  window.scroll({
                    top: clients,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Clients
              </li>
              <li
                onClick={() => {
                  const contact =
                    document.querySelector("#contact").offsetTop - 96;
                  window.scroll({
                    top: contact,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={styles.li}
              >
                Contact us
              </li>
              <li className={styles.li}>
                <label className={styles.label}>
                  <input
                    ref={searching}
                    className={`${styles.searchBar} ${
                      bar ? styles.active : styles.inactive
                    }`}
                    placeholder="Search"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                  />
                  <img
                    onClick={() => setBar(true)}
                    className={`${styles.img} ${
                      bar ? styles.active : styles.inactive
                    }`}
                    src={bar ? searchActive : search}
                    alt="Search Icon"
                  />
                </label>
              </li>
            </ul>
          </nav>
        </header>
      )}
      {mobile && (
        <header className={`${styles.header} container`}>
          <div className={styles.logo}>
            <a href="./ ">
              <img src={logo} alt="Logo - WePro." />
            </a>
          </div>
          <div onClick={() => setMenu(true)} className={styles.menuMobile}>
            <img
              className={styles.iconMobile}
              src={menuMobile}
              alt="Menu Mobile"
            />
          </div>
          <nav
            ref={nav}
            className={`${styles.nav} ${
              menu ? styles.active : styles.inactive
            }`}
          >
            <ul className={styles.ul}>
              <li
                onClick={() => {
                  const home = document.querySelector("#home").offsetTop - 96;
                  window.scroll({
                    top: home,
                    behavior: "smooth",
                  });
                  setFixed(styles.normal);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Home
              </li>
              <li
                onClick={() => {
                  const portfolio =
                    document.querySelector("#portfolio").offsetTop - 96;
                  window.scroll({
                    top: portfolio,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Portfolio
              </li>
              <li
                onClick={() => {
                  const pricing =
                    document.querySelector("#pricing").offsetTop - 96;
                  window.scroll({
                    top: pricing,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Pricing
              </li>
              <li
                onClick={() => {
                  const blog = document.querySelector("#blog").offsetTop - 96;
                  window.scroll({
                    top: blog,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Blog
              </li>
              <li
                onClick={() => {
                  const clients =
                    document.querySelector("#clients").offsetTop - 96;
                  window.scroll({
                    top: clients,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={`${styles.li} ${styles.arrow}`}
              >
                Clients
              </li>
              <li
                onClick={() => {
                  const contact =
                    document.querySelector("#contact").offsetTop - 96;
                  window.scroll({
                    top: contact,
                    behavior: "smooth",
                  });
                  setFixed(styles.fixed);
                }}
                className={styles.li}
              >
                Contact us
              </li>
              <li className={styles.li}>
                <label className={styles.label}>
                  <input
                    ref={searching}
                    className={`${styles.searchBar} ${
                      bar ? styles.active : styles.inactive
                    }`}
                    placeholder="Search"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                  />
                  <img
                    onClick={() => setBar(true)}
                    className={`${styles.img} ${
                      bar ? styles.active : styles.inactive
                    }`}
                    src={bar ? searchActive : search}
                    alt="Search Icon"
                  />
                </label>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </section>
  );
};

export default Header;
