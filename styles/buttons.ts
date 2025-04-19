import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    marginHorizontal: 0,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTextLight: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },

  buttonTextDark: {
    fontSize: 16,
    color: 'rgba(0, 122, 255, 1)',
    fontWeight: '600',
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: 'rgba(0, 122, 255, 0.3)',
  },
  tertiary: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  link: {
    color: 'rgba(0, 122, 255, 1)',
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default ButtonStyles;
