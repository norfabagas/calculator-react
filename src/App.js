/* eslint-disable no-eval */

import React from 'react';
import Input from './components/input';
import Button from './components/button';

class App extends React.Component {
    state = {
        text: '',
        result: 0,
        comma: 0
    }

    handleInput = e => {
        console.log('triggered');
    }

    handleClearInput = e => {
        const text = '';
        const result = 0;

        this.setState({text, result});
    }

    handleNumberButton = number => {
        let text = this.state.text;
        
        if ((text === '') && (number === 0)) {
            return;
        } else {
            text += number;
        }

        this.setState({ text });
    }

    handleExpressionButton = expression => {
        let text = this.state.text;
        let comma = this.state.comma;

        if (text === '') {
            return;
        } else if (text.includes('+') || text.includes('-') || text.includes('/') || text.includes('*')) {
            return;
        } else {
            text += expression;
            comma = 0;
        }
        
        this.setState({ text, comma });
    }

    handleEqualButton = (e) => {
        let text = this.state.text;
        let comma = this.state.comma;

        if (text === '') {
            return;
        } else {
            let result = eval(text);
            text = result.toString();
            comma = 0;
        }

        this.setState({ text, comma });
    }

    handleCommaButton = comma => {
        let text = this.state.text;
        let commaCount = this.state.comma;

        if (commaCount === 0) {
            if (text === '') {
                text = '0.';
            } else {
                text += comma;
            }

            commaCount++;
    
            this.setState({ text, comma: commaCount });
        }
    }

    render() { 
        return (
            <div
                className="col-12 mt-4"
            >
                <Input
                    onClearInput={this.handleClearInput}
                    inputText={this.state.text}
                    inputResult={this.state.result}
                />
                <Button 
                    onNumberClick={this.handleNumberButton}
                    onExpressionClick={this.handleExpressionButton}
                    onCommaClick={this.handleCommaButton}
                    onEqualClick={this.handleEqualButton}
                />
            </div>
        );
    }
}
 
export default App;