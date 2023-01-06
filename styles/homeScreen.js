import { StyleSheet } from 'react-native';

import { responsiveScreenHeight, responsiveScreenWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 0,
        padding: 0,
        margin: '5%'
    },
    image: {
        //Height is roughly 1.4x the width.
        width: 300,
        height: 420,
        alignSelf: 'center'
    }
});
export default styles;