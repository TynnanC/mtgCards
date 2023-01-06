import { Text } from 'react-native';
import styles from '../styles/textStyles.js';

function BoldText(props) {
    return (
        <Text style={styles.bold}>
            {props.children}
        </Text>
    )
}
export default BoldText;