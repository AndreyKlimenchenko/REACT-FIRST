import React from "react";
import Header from './components/Header/Header';
import Main from './components/Main/Main';


class App extends React.Component {
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
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e, mode) {
    e.stopPropagation();
    this.setState((prevState) => ({
      isOpenFirst: false,
      isOpenSecond: false,
      isOpenThird: false,
      isOpenFourth: false,
      isOpenFifth: false,
      [mode]: !prevState[mode]
      }
    ));
  }
  handleClose(e, mode) {
    e.stopPropagation();
    this.setState({
      [mode]: false
    });
  }
  render() {
    return (
      <div 
        className="App" 
        onClick={() => this.setState({      
          isOpenFirst: false,
          isOpenSecond: false,
          isOpenThird: false,
          isOpenFourth: false,
          isOpenFifth: false,
        })}
      >
        <Header 
          isOpenFirst={this.state.isOpenFirst}
          isOpenSecond={this.state.isOpenSecond}
          isOpenThird={this.state.isOpenThird}
          isOpenFourth={this.state.isOpenFourth}
          isOpenFifth={this.state.isOpenFifth} 
          handleClick={this.handleClick} handleClose={this.handleClose}/>
        <Main />
      </div>
    );
  }
}

export default App;
