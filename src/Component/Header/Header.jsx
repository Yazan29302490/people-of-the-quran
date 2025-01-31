import { useEffect } from "react";
import logo from "../../assets/Pictures/2.png";

function Header() {
  useEffect(() => {
    let body = document.querySelector("body");
    let header = document.querySelector("header");
    let btnMenu = document.querySelector("button.btn-menu");
    let boxMenu = document.querySelector("div.box-menu");
    let closeMenu = document.querySelector("button.close-menu");
    let checkbox = document.getElementById("checkbox");
    let lastScrollTop = 0;
    let Robot = document.querySelector("div.Robot");

    if (!btnMenu || !boxMenu || !closeMenu || !checkbox || !header || !body || !Robot) {
      console.error("خطأ: عنصر غير موجود في DOM");
      return;
    }

    const HeaderUpDown = () => {
      if (header) {
        let currentScrollTop = window.scrollY;
        if (currentScrollTop > lastScrollTop) {
          header.classList.add("up-down");
        } else {
          header.classList.remove("up-down");
        }
        lastScrollTop = currentScrollTop;
      }
    };

    const menuOpen = () => {
      if (boxMenu) {
        boxMenu.classList.add("active")
      };
    };

    const menuClose = () => {
      if (closeMenu) {
        boxMenu.classList.remove("active");
      };
    };

    const toggleDarkMode = () => {
      if (checkbox) {
        const isDarkMode = body.classList.toggle("active");
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
        checkbox.checked = isDarkMode;
      }
    };

    const moveIt = () => {
      if (Robot) {
        Robot.style.opacity = boxMenu.classList.contains("active") ? "0" : "1";
      };
    };

    const menuAndMoveIt = () => {
      menuOpen();
      moveIt();
    };

    window.addEventListener("scroll", HeaderUpDown);

    btnMenu.addEventListener("click", menuAndMoveIt);

    closeMenu.addEventListener("click", menuClose);

    checkbox.addEventListener("click", toggleDarkMode);

    return () => {
      window.removeEventListener("scroll", HeaderUpDown);

      btnMenu.removeEventListener("click", menuAndMoveIt);

      closeMenu.removeEventListener("click", menuClose);

      checkbox.removeEventListener("click", toggleDarkMode);
    };
  }, []);

  return (
    <header>
      <div className="co-menu-dark">
        <button className="btn-menu"><i className="fa-solid fa-bars"></i></button>
        <div className="box-menu">
          <nav>
            <button className="close-menu"><i className="fa-solid fa-xmark"></i></button>
            <ul>
              <li>
                <a href="https://www.google.com/" className="active">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="https://www.google.com/">القران</a>
              </li>
              <li>
                <a href="https://www.google.com/">احاديث</a>
              </li>
              <li>
                <a href="https://www.google.com/">قصص الانبياء</a>
              </li>
              <li>
                <a href="https://www.google.com/">فيديوهات اسلامية</a>
              </li>
              <li>
                <a href="https://www.google.com/" className="subscription">اشتراك</a>
              </li>
              <li>
                <a href="https://www.google.com/" className="Login"></a>
              </li>
            </ul>
          </nav>
        </div>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          {" "}
        </label>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://www.google.com/" className="active">
              الرئيسية
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">القران</a>
          </li>
          <li>
            <a href="https://www.google.com/">احاديث</a>
          </li>
          <li>
            <a href="https://www.google.com/">قصص الانبياء</a>
          </li>
          <li>
            <a href="https://www.google.com/">فيديوهات اسلامية</a>
          </li>
          <li>
            <a href="https://www.google.com/" className="subscription">اشتراك</a>
          </li>
          <li>
            <a href="https://www.google.com/" className="Login"></a>
          </li>
        </ul>
      </nav>
      <div className="box-logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
