import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../colors";
import { Car } from "../models/Cars";
import { createCar, updateCar } from "../services/CarService";

interface FormProps {
  onClose: () => void;
  onCarUpdated: (car: Car) =>  void
  onSave: (car: Car) => void
  editCar: Car
}

export function Form({ onClose, editCar, onCarUpdated, onSave }: FormProps) {
  const [form, setForm] = useState<Partial<Car>>({
    nome: editCar? editCar.nome : '',
    cor: editCar? editCar.cor : '',
    ano: editCar? editCar.ano : '',
  });

  const action = editCar ? 'Atualizar' : 'Salvar'

  const onChangeForm = (key: string, value: any) => {
    setForm((curent) => {
      return {
        ...curent,
        [key]: value,
      };
    });
  };

  const isFormInvalid = () => {
    return Object.values(form).some((v) => v?.toString().length === 0);
  };

  const isEditMode = () => {
    return editCar
  }

  const createNewCar = () => {
    const car = {
      id: Date.now(),
      ano: form.ano,
      cor: form.cor,
      nome: form.nome,
    }
    createCar(car)
    .then(() => onSave(car))
    .catch(() => alert("Erro ao salvar"));
  }

  const updateExistingCar = () => {
    const car = {
      id: editCar.id,
      ano: form.ano,
      cor: form.cor,
      nome: form.nome,
    }

    updateCar(car)
    .then(() => onCarUpdated(car))
    .catch(() => alert("Erro ao atualizar"));
  }

  const handleOnSave = () => {
    if (isFormInvalid()) {
      alert("Formulario Invalido");
      return
    }

    if (isEditMode()) {
      updateExistingCar()
      return
    }

    createNewCar()
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"white"}
          placeholder="Nome"
          value={form.nome}
          onChangeText={(e) => onChangeForm("nome", e)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholderTextColor={"white"}
          placeholder="Cor"
          value={form.cor}
          onChangeText={(e) => onChangeForm("cor", e)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholderTextColor={"white"}
          placeholder="Ano"
          keyboardType="numeric"
          value={form.ano}
          onChangeText={(e) => onChangeForm("ano", e)}
        ></TextInput>

        <Pressable
          style={[
            styles.button,
            { backgroundColor: "rgba(138, 92, 244, 1)", marginBottom: 20 },
          ]}
          onPress={handleOnSave}
        >
          <Text style={styles.textStyle}>{action}</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={onClose}>
          <Text style={styles.textStyle}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.white,
  },
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.79)",
  },
  modalView: {
    backgroundColor: "rgba(32, 32, 36, 1)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    width: "50%",
    borderWidth: 1,
    borderColor: "rgba(138, 92, 244, 1)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    color: "white",
    backgroundColor: "rgba(18, 18, 20, 1)",
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
});
