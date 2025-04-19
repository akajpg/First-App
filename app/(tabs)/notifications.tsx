import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "../../styles/auth.styles";
import typography from '../../styles/typography';

export default function Notifications() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={typography.h3}>Notifications</Text>
        <Image
          source={{
            uri: "https://framerusercontent.com/images/bxI5fyqzx9jF7fcgnPvcBqhKZxQ.png",
          }}
          style={styles.image} 
        />
      </View>
    </ScrollView>
  );
}