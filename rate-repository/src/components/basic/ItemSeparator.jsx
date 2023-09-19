import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: '#b7f3ff'
    },
})

const ItemSeparator = () => <View style={styles.separator} />;

export default ItemSeparator