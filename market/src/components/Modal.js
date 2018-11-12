import React, { Component } from 'react';



const Modal = ( InnerComponent ) => {


  return class ModalWrapper extends Component {

    constructor(props) {
      super(props);
      this.back = this.back.bind(this);
    }


    back = e => {
      e.stopPropagation();
      this.props.history.goBack();
    };

    render() {
      return (
        <div
          onClick={this.back}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.15)"
          }}
        >
          <div
            className="modal"
            style={{
              position: "absolute",
              background: "#fff",
              top: 25,
              left: "10%",
              right: "10%",
              padding: 15,
              border: "2px solid #444"
            }}
          >
            <div>Test Modal...</div>
            <InnerComponent />
            <button type="button" onClick={this.back}>
              Close
            </button>
          </div>
        </div>
      );
    }
  }
};
export default Modal;




