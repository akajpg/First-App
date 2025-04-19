import { TextStyle } from 'react-native';

const typography: { [key: string]: TextStyle } = {
  h1: {
    fontSize: 54,
    lineHeight: 54 * 1.5,
    fontWeight: '800',
    paddingBottom: 12,

  },
  h2: {
    fontSize: 48,
    lineHeight: 48 * 1.5,
    fontWeight: '800',
    paddingBottom: 12,

  },
  h3: {
    fontSize: 36,
    lineHeight: 36 * 1.5,
    fontWeight: '800',

  },
  h4: {
    fontSize: 28,
    lineHeight: 28 * 1.5,
    fontWeight: '800',
    paddingBottom: 28,
  },
  bodyCopyMedium: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    fontWeight: '700',
    paddingBottom: 16*2,
  },
  body: {
    fontSize: 18,
    lineHeight: 18 * 1.5,
    paddingBottom: 18*2,
  },
  bodyCopySmall: {
    fontSize: 14,
    lineHeight: 14 * 1.5,
    paddingBottom: 14*2,
  },
  bodyCopyTiny: {
    fontSize: 12,
    lineHeight: 12 * 1.5,
    paddingBottom: 12*2,
  },
};

export default typography;
