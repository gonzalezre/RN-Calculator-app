import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Button } from '../components/Button'
import { useCalculator } from '../hooks/useCalculator'



export const CalculatorScreen = () => {

    const {
        number,
        previousNumber,
        clean,
        positiveNegative,
        del,
        buildNumber,
        divide,
        multiply,
        substract,
        add,
        calculate
    } = useCalculator();


    return (
        <View style={styles.calculatorContainer}>
            {
                (previousNumber !== "0") && (
                    <Text style={styles.result_xs}>{previousNumber}</Text>
                )
            }

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
                <Button title="/" color="#9B9B9B" action={divide} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="9" action={buildNumber} />
                <Button title="8" action={buildNumber} />
                <Button title="7" action={buildNumber} />
                <Button title="X" color="#FF9427" action={multiply} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="6" action={buildNumber} />
                <Button title="5" action={buildNumber} />
                <Button title="4" action={buildNumber} />
                <Button title="-" color="#FF9427" action={substract} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="3" action={buildNumber} />
                <Button title="2" action={buildNumber} />
                <Button title="1" action={buildNumber} />
                <Button title="+" color="#FF9427" action={add} />
            </View>
            <View style={styles.row}>
                {/* button */}
                <Button title="0" wider={true} action={buildNumber} />
                <Button title="." action={buildNumber} />
                <Button title="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
}
