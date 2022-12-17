import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";
import { FabButton } from "../components/FabButton";
import { ListItem } from "../components/ListItem";

export function Home() {
  return (
    <>
      <ScrollView>
        <Text style={styles.label}>Veiculos</Text>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ScrollView>
      <View style={{position: 'absolute', right: 30, bottom: 30}}>
      <FabButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.white,
  },
});
