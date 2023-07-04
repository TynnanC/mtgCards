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
        width: '100%',
        alignItems: 'flex-start'
    },
    image: {
        //Height is roughly 1.4x the width.
        width: 300,
        height: 420,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: '15%'
    },
    initialButton: {
        alignSelf: 'center',
        paddingTop: '50%'
    },
    randomButton: {
        alignSelf: 'center'
    },
    textBox: {
        backgroundColor: "#ebebeb",
        borderRadius: 5,
        width: '100%',
        padding: '1%'
    }
});
export default styles;