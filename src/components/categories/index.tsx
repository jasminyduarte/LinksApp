import { FlatList } from "react-native";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

import { styles } from "./styles";


export function Categories() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <Category name={item.name} icon={item.icon} isSelected={false}  />}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}