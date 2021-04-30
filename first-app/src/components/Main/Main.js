import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="bcg"></div>
      <div className="content">
        <h2>Наши преимущества</h2>
        <div>    
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
            <div>
                <p>
                Мы знаем об электромобилях Тесла - все !
                </p>
                <span>
                Отслеживаем все новости по данной тематике , посещаем презентации новых моделей , семинары и сервисные центры Тесламоторс, находимся в контакте , общаемся , обмениваемся опытом с зарубежными клубами любителей Тесла и рядовыми владельцами по всему миру.
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;