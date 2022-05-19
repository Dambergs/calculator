import React, { useState } from "react"         //react hook useState
import { Button, Container, CurrentNumber, Screen } from "./Styled"

export default function Calculator(){

    const [current, setCurrent] = useState('');     //state variables
    const [previous, setPrevious] = useState('');
    const [operation, setOperation] = useState('');

    
    const appendValue = (element) => {
        const value = element.target.getAttribute('data')

        if(value === ',' && current.includes(',')) return
        
        setCurrent(current + value)
    }

    const handleClear = () => {
        setCurrent('')
        setPrevious('')
        setOperation('')
    }

    const percentage = () => {
        var value
        
        if(current !== ''){
            value = current / 100;
        }
        else{
            return
        }

        setCurrent(value)
    }

    const positiveNegative = () => {
        var value

        if(current !== '' || current > 0) value = -current;
        setCurrent(value)
    }

    const chooseOperation = (element) => {
        if(current === '') return
        if(previous !== ''){
            let value = compute()
            setPrevious(value)
        }
        else{
            setPrevious(current)
        }
        setCurrent('')
        setOperation(element.target.getAttribute('data'))
    }

    const equals = () => {
        let value = compute();
        if(value === undefined || value == null) return

        setCurrent(value)
        setPrevious('')
        setOperation('')
    }

    const compute = () => {

        let result
        let currentNumber = parseFloat(current)     //convert string to float
        let previousNumber = parseFloat(previous)   

        if(isNaN(previousNumber) || isNaN(currentNumber)) return
        
        switch(operation){
            case '÷':
                result = previousNumber / currentNumber;
                break;
            case 'x':
                result = previousNumber * currentNumber;
                break;
            case '-':
                result = previousNumber - currentNumber;
                break;
            case '+':
                result = previousNumber + currentNumber;
                break;
            default:
                return
        }
        return result;
    }



    return (
        <Container>
            <Screen>
                <CurrentNumber>{current}</CurrentNumber>
            </Screen>
            <Button onClick={handleClear} special>C</Button>
            <Button data={'+/-'} onClick={positiveNegative} special>+/-</Button>
            <Button data={'%'} onClick={percentage} special>%</Button>
            <Button data={'÷'} onClick={chooseOperation} operation>÷</Button>
            <Button data={7} onClick={appendValue}>7</Button>
            <Button data={8} onClick={appendValue}>8</Button>
            <Button data={9} onClick={appendValue}>9</Button>
            <Button data={'x'} onClick={chooseOperation} operation>x</Button>
            <Button data={4} onClick={appendValue}>4</Button>
            <Button data={5} onClick={appendValue}>5</Button>
            <Button data={6} onClick={appendValue}>6</Button>
            <Button data={'-'} onClick={chooseOperation} operation>-</Button>
            <Button data={1} onClick={appendValue}>1</Button>
            <Button data={2} onClick={appendValue}>2</Button>
            <Button data={3} onClick={appendValue}>3</Button>
            <Button data={'+'} onClick={chooseOperation} operation>+</Button>
            <Button data={0} gridSpan={2} onClick={appendValue} zero>0</Button>
            <Button data={','} onClick={appendValue}>,</Button>
            <Button operation onClick={equals} equals>=</Button>
        </Container>
    )
}