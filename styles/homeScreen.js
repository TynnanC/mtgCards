import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        border: 0
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 0,
        padding: '5%',
        border: 0
    },
    image: {
        //Height is roughly 1.4x the width.
        width: 300,
        height: 420,
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center'
    }
});
export default styles;