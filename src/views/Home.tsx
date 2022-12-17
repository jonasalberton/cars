import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../colors";
import { FabButton } from "../components/FabButton";
import { Form } from "../components/Form";
import { ListItem } from "../components/ListItem";
import { Car } from "../models/Cars";
import { deleteCar, getCars } from "../services/CarService";

export function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [editandoCarro, setEditandoCarro] = useState<Car>(undefined);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getCars()
      .then(({ data }) => {
        setCars(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  const handleFabButtonClick = () => {
    setModalVisible(true);
  };

  const handleOnDeleteCar = (car: Car) => {
    deleteCar(car.id).then(() => {
      setCars(cars.filter(({id}) => id !== car.id))
    })
    .catch(() => {
      alert('Erro ao deletar o vaiculo')
    })
  };

  const handleOnEditCar = (car: Car) => {
    setEditandoCarro(car)
    setModalVisible(true)
  };

  const handleOnCarUpdated = (car: Car) => {
    setCars((current) => {
      return current.map((item) => item.id === car.id ? car : item )
    })
    setEditandoCarro(undefined)
    setModalVisible(false)
  }

  const handleOnSave = (car: Car) => {
    setCars((current) => {
      return [...current, car]
    })
    setModalVisible(false)
  }

  return (
    <>
      <ScrollView>
        <Text style={styles.label}>Veículos</Text>
        {cars.map((car) => (
          <ListItem
            key={car.id}
            car={car}
            onEdit={handleOnEditCar}
            onDelete={handleOnDeleteCar}
          />
        ))}
      </ScrollView>
      <View style={{ position: "absolute", right: 30, bottom: 30 }}>
        <FabButton onClick={handleFabButtonClick} />
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
        >
          <Form editCar={editandoCarro} onCarUpdated={handleOnCarUpdated} onClose={() => setModalVisible(false)} onSave={handleOnSave} />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.white,
  },
});
