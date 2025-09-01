import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
   flexDirection: "row",
   alignItems: "center",
   gap: 12,
  },
  details: {
   flex: 1,
  },
  name: {
   fontSize: 16,
   fontWeight: "600",
   color: colors.gray[100],
  },
  url: {
   fontSize: 14,
   fontWeight: "400",
   color: colors.gray[400],
  },
});