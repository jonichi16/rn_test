import {DefaultTheme} from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0f172a',
    card: '#0f172a',
    text: '#f8fafc',
    secondary: '#fff',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#1e293b',
    card: '#0f172a',
    text: '#f8fafc',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
