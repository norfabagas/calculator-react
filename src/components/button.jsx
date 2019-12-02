import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return (
            <div className="col-8">
                <div className="row">
                    <button 
                        className="btn btn-md btn btn-primary col-2"
                        onClick={() => this.props.onNumberClick(7)}
                    >
                        {"7"}
                    </button>
                    <button
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(8)}
                    >
                        {"8"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(9)}
                    >
                        {"9"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onExpressionClick('+')}
                    >
                        {"+"}
                    </button>
                </div>

                <div className="row mt-3">
                    <button
                        className="btn btn-md btn btn-primary col-2"
                        onClick={() => this.props.onNumberClick(4)}
                    >
                        {"4"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(5)}
                    >
                        {"5"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(6)}
                    >
                        {"6"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onExpressionClick('-')}
                    >
                        {"-"}
                    </button>
                </div>

                <div className="row mt-3">
                    <button 
                        className="btn btn-md btn btn-primary col-2"
                        onClick={() => this.props.onNumberClick(1)}
                    >
                        {"1"}
                    </button>
                    <button
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(2)}
                    >
                        {"2"}
                    </button>
                    <button
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onNumberClick(3)}
                    >
                        {"3"}
                    </button>
                    <button
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onExpressionClick('/')}
                    >
                        {"/"}
                    </button>
                </div>

                <div className="row mt-3">
                    <button
                        className="btn btn-md btn btn-primary col-2"
                        onClick={() => this.props.onNumberClick(0)}
                    >
                        {"0"}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onCommaClick('.')}
                    >
                        {"."}
                    </button>
                    <button
                        className="btn btn-md btn btn-secondary col-2 ml-2"
                        onClick={() => this.props.onEqualClick(this)}
                    >
                        {"="}
                    </button>
                    <button 
                        className="btn btn-md btn btn-primary col-2 ml-2"
                        onClick={() => this.props.onExpressionClick('*')}
                    >
                        {"x"}
                    </button>
                </div>
            </div>
        );
    }
}

export default Button;