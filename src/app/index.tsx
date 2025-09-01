import { Image,View, TouchableOpacity, FlatList, Modal, Text} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "@/styles/index-styles"
import { colors } from "@/styles/colors"

import { Link } from "@/components/link"
import { Categories } from "@/components/categories"
import { Option}  from "@/components/option"


export default function Index() {
  return (
    <View style={ styles.container }>
     <View style={ styles.header }>
       <Image 
         source={ require("@/assets/logo.png") } 
         style={ styles.logo } 
       />
        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcons name="add" size={32} color={ colors.green[300] } />
        </TouchableOpacity>
     </View>
     <Categories />

      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Link 
            name={`Link ${item}`}
            url={`https://example.com/${item}`}
            onDetailsPress={() => console.log(`Link ${item} details pressed`)}
          />
        )}
        style={ styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
             <Text style={styles.modalTitle}>Modal Title</Text>
             <TouchableOpacity onPress={() => console.log("Close modal")}>
               <MaterialIcons name="close" size={20} color={colors.gray[400]} />
             </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Link.</Text>
            <Text style={styles.modalLinkUrl}>Thttps://example.com/</Text>
            <View style={styles.modalOptions}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
            </View>
          </View>
      </Modal>

    </View>
  )
}