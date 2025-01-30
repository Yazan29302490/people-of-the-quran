import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

function Robot() {
  // const location = useLocation();
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ? JSON.parse(localStorage.getItem("userName")) : "زائر"
  );
  useEffect(() => {

    let allDirections = document.querySelectorAll("header nav ul li a,main div.box-int button");
    let allWords = document.querySelectorAll("div.Robot div.box-Robot div.box-robot-talk p");
    let boxName = document.querySelector("div.Robot div.box-Robot div.box-robot-talk div.box-name");
    let butName = document.querySelector("div.Robot div.box-Robot div.box-robot-talk div.box-name button");

    const noTkrar = () => {
      if (localStorage.getItem("userName") !== null) {
        boxName.style.display = "none";
      }
    };

    let originalTexts = Array.from(allWords).map(element => element.textContent)
    const handleScroll = () => {
      allWords.forEach((element, index) => {
        element.style.display = "none";
        if (window.scrollY >= 0 && window.scrollY <= 600 && index == 0) {
          element.style.display = "block";
        } else if (window.scrollY > 600 && window.scrollY <= 1200 && index == 7) {
          element.style.display = "block";
        }
      });
    };

    handleScroll();

    allDirections.forEach((directing, index) => {
      allWords.forEach((paragraph, i) => {
        directing.addEventListener("mouseover", () => {
          paragraph.style.display = "none";
          if (index === i - 1) {
            paragraph.style.display = "block";
          }
        });
        directing.addEventListener("mouseout", () => {
          if (index === i) {
            paragraph.textContent = originalTexts[i];
          }
        })
      });
    });

    const handleNameSubmit = () => {
      const inpName = document.querySelector("div.Robot div.box-Robot div.box-robot-talk div.box-name input");
      if (inpName.value.trim() !== "") {
        setUserName(inpName.value);
        localStorage.setItem("userName", JSON.stringify(inpName.value));
        boxName.style.display = "none";
      };
    };

    window.addEventListener("load", noTkrar);

    window.addEventListener("scroll", handleScroll);

    butName.addEventListener("click", handleNameSubmit);

    // if (location.pathname === "/") {

    // } else {
    
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Robot">
      <div className="box-Robot">
        <div className="box-robot-talk">
          <p dir="rtl">مرحبا يا {userName || "زائر"} انا مرشدك ومساعدك في هذا الموقع ان شاء الله</p>
          <p className="directing" dir="rtl">هذا الزر يأخدك الى الصفحة الرئيسية</p>
          <p className="directing" dir="rtl">هذا الزر يأخذك الى صفحة قراءة القران</p>
          <p className="directing" dir="rtl">هذا الزر يأخذك الى صفحة الاحاديث الشريفة</p>
          <p className="directing" dir="rtl">هذا الزر يأخذك الى صفحة قصص الانبياء</p>
          <p className="directing" dir="rtl">هذا الزر يأخذك الى صفحة فيديوهات اسلامية</p>
          <p className="directing" dir="rtl">هذا الزر يأخذك الى صفحة قراءة القران</p>
          <p>هذا جزء المنوعة وهنا فيديوهات متنوعة دينية اذا لا تريدها استمر بالنزول</p>
          <div className="box-name">
            <input type="text" placeholder="من فضلك اكتب اسمك" />
            <button>ادخل</button>
          </div>
        </div>
        <div className="loader">
          <div className="modelViewPort">
            <div className="eva">
              <div className="head">
                <div className="eyeChamber">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
              </div>
              <div className="body">
                <div className="hand"></div>
                <div className="hand"></div>
                <div className="scannerThing"></div>
                <div className="scannerOrigin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robot;