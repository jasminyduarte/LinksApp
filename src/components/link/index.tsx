import {View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '@/styles/colors';

type LinkProps = {
  name: string;
  url: string;
  onDetailsPress: () => void;
}

export function Link({ name, url, onDetailsPress }: LinkProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {name}
        </Text>
        <Text style={styles.url} numberOfLines={1} ellipsizeMode="tail">
            {url}
        </Text>
      </View>

    <TouchableOpacity onPress={onDetailsPress}>
      <MaterialIcons
        name="more-horiz"
        size={20}
        color={colors.gray[400]}
      />
    </TouchableOpacity>
    </View>
  );
}
