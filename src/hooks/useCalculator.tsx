import React, { useRef, useState } from 'react'

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {

    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");
    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber("0");
        setPreviousNumber("0");
    }

    const buildNumber = (newNumber: String) => {

        //ignoring multiple decimal points
        if (number.includes(".") && newNumber === ".") return;

        if (number.startsWith("0") || number.startsWith("-0")) {

            if (number === ".") {
                //adding decimal point
                setNumber(number + newNumber);
            }
            else if (newNumber === "0" && number.includes(".")) {
                //if there is another zero and exists a point
                setNumber(number + newNumber);
            }
            else if (newNumber !== "0" && !number.includes(".")) {
                //if it's different of zero and there isn't a point
                setNumber(newNumber.toString());
            }
            else if (newNumber === '0' && !number.includes('.')) {
                //preventing 0000.000
                setNumber(number);
            }
            else {
                setNumber(number + newNumber);
            }
        }
        else {
            setNumber(number + newNumber);
        }

    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        }
        else {
            setNumber('-' + number);
        }
    }

    const del = () => {
        if (number.length == 1 || (number.length == 2 && number.includes("-"))) {
            setNumber('0');
        }
        else {
            setNumber(number.slice(0, -1))
        }
    }

    const alterNumber = () => {
        if (number.endsWith(".")) {
            setPreviousNumber(number.slice(0, -1));
        }
        else {
            setPreviousNumber(number);
        }
        setNumber("0")
    }

    const divide = () => {
        alterNumber();
        lastOperation.current = Operators.divide;
    }

    const multiply = () => {
        alterNumber();
        lastOperation.current = Operators.multiply;
    }

    const substract = () => {
        alterNumber();
        lastOperation.current = Operators.substract;
    }

    const add = () => {
        alterNumber();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {
        const firstOperator = Number(number);
        const secondOperator = Number(previousNumber)

        switch (lastOperation.current) { //.current is type operators or undefined
            case Operators.add:
                setNumber(`${firstOperator + secondOperator}`);
                break;
            case Operators.substract:
                setNumber(`${secondOperator - firstOperator}`);
                break;
            case Operators.multiply:
                setNumber(`${firstOperator * secondOperator}`);
                break;
            case Operators.divide:
                setNumber(`${secondOperator / firstOperator}`);
                break;
        }
        setPreviousNumber("0")
    }


    return {
        number,
        setNumber,
        previousNumber,
        setPreviousNumber,
        clean,
        positiveNegative,
        buildNumber,
        del,
        divide,
        multiply,
        substract,
        add,
        calculate
    }
}
