import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
}
