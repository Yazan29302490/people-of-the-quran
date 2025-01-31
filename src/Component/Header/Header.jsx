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
        moveIt();
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
        Robot.style.setProperty("opacity", boxMenu.classList.contains("active") ? "0" : "1", "important");
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
    <header className="!z-50">
      <div className="co-menu-dark flex items-center justify-between">
        <button className="btn-menu"><i className="fa-solid fa-bars"></i></button>
        <div className="box-menu">
          <nav className="h-full">
            <button className="close-menu rounded-full bg-gray-200 cursor-pointer !py-2 !px-4"><i className="fa-solid fa-xmark"></i></button>
              <ul className="!mt-8 flex flex-col justify-between">
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">
                    الرئيسية
                  </a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">القرآن</a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">قصص الانبياء</a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">فيديوهات اسلامية</a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="subscription w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">اشتراك</a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="subscription w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">اشتراك</a>
                </li>
                <li className="w-full border-t border-b border-gray-200">
                  <a href="#" className="Login w-full !pr-4 !text-xl text-blue-800 !py-4 !h-auto block">تسجيل الدخول</a>
                </li>
              </ul>
          </nav>
        </div>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          {" "}
        </label>
      </div>
      <nav className="lg:block hidden">
        <ul>
          <li>
            <a href="#" className="active">
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#">القران</a>
          </li>
          <li>
            <a href="#">احاديث</a>
          </li>
          <li>
            <a href="#">قصص الانبياء</a>
          </li>
          <li>
            <a href="#">فيديوهات اسلامية</a>
          </li>
          <li>
            <a href="#" className="subscription">اشتراك</a>
          </li>
          <li>
            <a href="#" className="Login"></a>
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
