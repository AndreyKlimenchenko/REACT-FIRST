import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFirst: false,
      isOpenSecond: false,
      isOpenThird: false,
      isOpenFourth: false,
      isOpenFifth: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(mode) {
    this.setState((prevState) => ({
      ...prevState,
      [mode]: !prevState[mode]
      }
    ));
  }
  render() {
    return (
      <header className="header">
        <div className="positioned">
          <button className="header-btn" onClick={() => this.handleClick('isOpenFirst')}>
            <span>Model S</span>
            </button>
            {this.state.isOpenFirst ? (
              <div className="menu">
                <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
                <button className="ok-btn" onClick={() => this.setState({isOpenFirst: false})}>ok</button>
              </div>
            ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={() => this.handleClick('isOpenSecond')}>
            <span>Model X</span>
          </button>
          {this.state.isOpenSecond ? (
            <div className="menu">
              <p>Первыми автомобиль получат покупатели, резервировавшие его более трёх лет назад и внёсшие депозит в 40 тысяч долларов. Предзаказ оформили около 25 тысяч человек, время ожидания поставок для новых покупателей — от 8 до 12 месяцев[4]. В Tesla ожидают, что половину их будущих продаж составят кроссоверы...</p>
              <button className="ok-btn" onClick={() => this.setState({isOpenSecond: false})}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={() => this.handleClick('isOpenThird')}>
            <span>Model 3</span>
          </button>
          {this.state.isOpenThird ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={() => this.setState({isOpenThird: false})}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={() => this.handleClick('isOpenFourth')}>
            <span>Model Y</span>
          </button>
          {this.state.isOpenFourth ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={() => this.setState({isOpenFourth: false})}>ok</button>
            </div>
          ) : null}
        </div>
        <div className="positioned">
          <button className="header-btn positioned" onClick={() => this.handleClick('isOpenFifth')}>
            <span>Roadster</span>
          </button>
          {this.state.isOpenFifth ? (
            <div className="menu">
              <p>Базовая модель S использует жидкостное охлаждение двигателя переменного тока, который имеет мощность 362 лошадиные силы...</p>
              <button className="ok-btn" onClick={() => this.setState({isOpenFifth: false})}>ok</button>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
