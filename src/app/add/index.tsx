import { View , Text, TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./style"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"



export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
        <Text style={styles.label}>Selecione uma categoria</Text>
        <Categories />
    </View>
  )
}   