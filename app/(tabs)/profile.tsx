import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "../../styles/auth.styles";
import typography from '../../styles/typography';

export default function Notifications() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={typography.h3}>Profile</Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image} 
        />
      </View>
    </ScrollView>
  );
}