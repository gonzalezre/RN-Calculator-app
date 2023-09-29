import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Button } from '../components/Button'

export const CalculatorScreen = () => {

    const [number, setNumber] = useState("0");
    const [previousNumber, setPreviousNumber] = useState("0");

    const clean = () => {
        setNumber("0");
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
            setPreviousNumber(number.slice(0, 1));
        }
        else {
            setPreviousNumber(number);
        }
        setNumber("0")
    }


    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.result_xs}>{previousNumber}</Text>
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {number}
            </Text>


            <View style={styles.row}>
                {/* button */}
                <Button title="c" color="#9B9B9B" action={clean} />
                <Button title="+/-" color="#9B9B9B" action={positiveNegative} />
                <Button title="del" color="#9B9B9B" action={del} />
                <Button title="/" color="#9B9B9B" action={alterNumber} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="9" action={buildNumber} />
                <Button title="8" action={buildNumber} />
                <Button title="7" action={buildNumber} />
                <Button title="X" color="#FF9427" action={alterNumber} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="6" action={buildNumber} />
                <Button title="5" action={buildNumber} />
                <Button title="4" action={buildNumber} />
                <Button title="-" color="#FF9427" action={alterNumber} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="3" action={buildNumber} />
                <Button title="2" action={buildNumber} />
                <Button title="1" action={buildNumber} />
                <Button title="+" color="#FF9427" action={alterNumber} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="0" wider={true} action={buildNumber} />
                <Button title="." action={buildNumber} />
                <Button title="=" color="#FF9427" action={clean} />
            </View>
        </View>
    )
}
