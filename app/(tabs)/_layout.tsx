import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
// import YourCustomIcon from '../../assets/images/icon.png'; // must be configured with SVGR or Expo

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            // tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: "white",
                borderTopWidth: 0,
                position: "absolute",
                bottom: -12,
                borderTopLeftRadius: 0,   // Top-left corner
                borderTopRightRadius: 0,  // Top-right corner
                borderBottomLeftRadius: 0, // Bottom-left corner
                borderBottomRightRadius: 0, // Bottom-right corner
                elevation: 0,
                height: 72,
                paddingTop: 8,
            },
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                tabBarIcon: ({ size, color}) => <Ionicons name="home" size={size} color={color} />,
            }}
        />
        <Tabs.Screen name="bookmarks"
            options={{
                tabBarIcon: ({ size, color}) => <Ionicons name="bookmark" size={size} color={color} />,
            }}
         />
        <Tabs.Screen name="create"
            options={{
                tabBarIcon: ({ size, color}) => <Ionicons name="add-circle" size={size} color={COLORS.accent} />,
        }}
        />
        <Tabs.Screen name="notifications"/>
        <Tabs.Screen name="profile"/>  
    </Tabs>
  );
}