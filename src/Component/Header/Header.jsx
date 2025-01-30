import { useEffect } from "react";
import logo from "../../assets/Pictures/2.png";

function Header() {
  useEffect(() => {
    let body = document.querySelector("body");
    let header = document.querySelector("header");
    let checkbox = document.getElementById("checkbox");
    let lastScrollTop = 0;

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

    const toggleDarkMode = () => {
      const isDarkMode = body.classList.toggle("active");
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
      checkbox.checked = isDarkMode;
    };

    window.addEventListener("scroll", HeaderUpDown);

    checkbox.addEventListener("click", toggleDarkMode);

    return () => {
      window.removeEventListener("scroll", HeaderUpDown);

      checkbox.removeEventListener("click", toggleDarkMode);
    };
  }, []);

  return (
    <header>
      <div className="co-dark-mode">
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
        </ul>
      </nav>
      <div className="box-logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
