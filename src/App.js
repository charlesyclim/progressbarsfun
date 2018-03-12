import React, { Component } from 'react';
import ProgressBarFun from './progressBar/ProgressBarFun.jsx';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "buttons": [
                      10,
                      38,
                      -13,
                      -18
                  ],
      "bars": [
          62,
          45,
          62
      ],
      "limit": 230
    }
  }
  render() {
    return (
      <Modal
           isOpen={true}
           style={customStyles}
           contentLabel="Progress Bars Demo"
        >
        <ProgressBarFun buttons={this.state.buttons} bars={this.state.bars} limit={this.state.limit} />
      </Modal>
    )
  }
}

export default App;
