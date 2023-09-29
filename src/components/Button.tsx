import React from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props {
    title: String;
    color?: String;
    wider?: Boolean;
    action: (numberText: String) => void;
}

export const Button = ({ title, color = "#2D2D2D", wider = false, action }: Props) => {
    return (


        <TouchableOpacity onPress={() => action(title)}>

            <View style={[
                styles.button,
                {
                    backgroundColor: color,
                    width: (wider) ? 180 : 80
                }
            ] as ViewStyle}>
                <Text style={[
                    styles.buttonText,
                    { color: (color === '#9B9B9B') ? 'black' : 'white' }
                ] as ViewStyle}>
                    {title}
                </Text>
            </View>

        </TouchableOpacity>


    )
}


