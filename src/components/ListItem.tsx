import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../colors";
import { Car } from "../models/Cars";

interface ButtonProps {
  text: string
  onClick: () => void
}

function Button({ text, onClick}: ButtonProps) {
  return (
    <Pressable style={{backgroundColor: 'rgba(45, 33, 73, 1)', padding: 10, borderRadius: 5, width: '45%'}} onPress={onClick}>
      <Text style={{color: 'rgba(138, 92, 244, 1)', textAlign: 'center'}}>{text}</Text>
    </Pressable>
  )
}


interface ListItemProps {
  car: Car
  onEdit: (car: Car) => void
  onDelete: (car: Car) =>  void
}

export function ListItem({ car, onDelete, onEdit }: ListItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{car.nome}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Cor: {car.cor}</Text>
        <Text style={styles.label}>Ano: {car.ano}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <Button text="Editar" onClick={() => onEdit(car)}/>
        <Button text="Deletar" onClick={() => onDelete(car)} />
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