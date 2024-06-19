import React, { Component } from 'react';

class Input extends Component {
    setInput = (text, result) => {
        if (text === '') {
            return result;
        } else {
            return text;
        }
    }
    render() { 
        let setInput = this.setInput(this.props.inputText, this.props.inputResult);
        
        return (
            <div
                className="form-group form-inline"
            >
                <input
                    className="form-control col-8"
                    value={setInput}
                    readOnly
                />
                <button
                    className="btn btn-danger col-4"
                    onClick={this.props.onClearInput}
                >
                    clear
                </button>
            </div>
        );
    }
}
 
export default Input;