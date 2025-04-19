import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
  },

  containerCenterInline: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    justifyContent: "center", // Center vertical
    alignItems: "center", // Center hori
    flexDirection: 'row', // Inline items
  },

  containerCenterStacked: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    alignItems: "center", // Center hori
  },

  image: {
    width: "100%", // Or any other dimension you want
    height: 300, // You can adjust based on the aspect ratio of the image
    marginVertical: 10,
    borderRadius: 12,
  },

  button: {
    // backgroundColor: "#007AFF",
    // minWidth: 180,
    // minHeight: 50,
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 10,
    // marginTop: 16,
  },
  
  // link: {
  //   color: 'rgba(0, 122, 255, 1)',
  //   fontWeight: "bold",
  //   marginTop: 20,
  //   marginBottom: 20,
  //   backgroundColor: 'transparent', // Remove any background color
  // },
  
  // ICONS ------------
  iconLarge: {
    width: 48,
    height: 48,
  },
  iconMedium: {
    width: 32,
    height: 32,
  },
  iconSmall: {
    width: 24,
    height: 24,

  },
  // ICONS END ------------

  scrollContainer: {
    paddingBottom: 100,
    paddingTop: 8,
  },
  video: {
    width: '100%',
    height: 250,
    backgroundColor: '#000', // Optional for contrast
    marginTop: 20,
    borderRadius: 10,
  },
});
