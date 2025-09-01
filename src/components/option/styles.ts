import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors";
import { setBackgroundColorAsync } from "expo-system-ui";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  primaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.green[300]
  },
  secondaryTitle: {
   fontSize: 16,
    fontWeight: "600",
    color: colors.gray[400]
  },
});