import { Pressable, Text } from "react-native";
import { colors } from "../colors";



export function FabButton() {
  return (
    <Pressable
      style={{
        backgroundColor: colors.primary,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.white, fontSize: 40, marginBottom: 20 }}>
        +
      </Text>
    </Pressable>
  );
}
