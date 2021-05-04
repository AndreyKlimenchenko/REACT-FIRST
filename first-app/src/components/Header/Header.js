import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="positioned">
          <button className="header-btn" onClick={(e) => this.props.handleClick(e, 'isOpenFirst')}>
            <span>Model S</span>
            </button>
            {this.props.isOpenFirst ? (
              <div className="menu">
                <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
                <button className="ok-btn" onClick={(e) => this.props.handleClose(e, 'isOpenFirst')}>ok</button>
              </div>
            ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={(e) => this.props.handleClick(e, 'isOpenSecond')}>
            <span>Model X</span>
          </button>
          {this.props.isOpenSecond ? (
            <div className="menu">
              <p>Первыми автомобиль получат покупатели, резервировавшие его более трёх лет назад и внёсшие депозит в 40 тысяч долларов. Предзаказ оформили около 25 тысяч человек, время ожидания поставок для новых покупателей — от 8 до 12 месяцев[4]. В Tesla ожидают, что половину их будущих продаж составят кроссоверы...</p>
              <button className="ok-btn" onClick={(e) => this.props.handleClose(e, 'isOpenSecond')}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={(e) => this.props.handleClick(e, 'isOpenThird')}>
            <span>Model 3</span>
          </button>
          {this.props.isOpenThird ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={(e) => this.props.handleClose(e, 'isOpenThird')}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={(e) => this.props.handleClick(e, 'isOpenFourth')}>
            <span>Model Y</span>
          </button>
          {this.props.isOpenFourth ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={(e) => this.props.handleClose(e, 'isOpenFourth')}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={(e) => this.props.handleClick(e, 'isOpenFifth')}>
            <span>Roadster</span>
          </button>
          {this.props.isOpenFifth ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={(e) => this.props.handleClose(e, 'isOpenFifth')}>ok</button>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
