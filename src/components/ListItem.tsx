import { StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export function ListItem() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Honda Civic</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Tipo:</Text>
        <Text style={styles.label}>Cor: </Text>
        <Text style={styles.label}>Ano:</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.dark,
    marginTop: 20,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    color: colors.white,
  },
});