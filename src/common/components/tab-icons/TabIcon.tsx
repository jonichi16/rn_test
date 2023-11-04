import {Image} from 'react-native';
import React from 'react';

type TabIconProps = {
  iconName: string;
  color: string;
  size: number;
};

const TabIcon = ({iconName, color, size}: TabIconProps) => {
  let sourceIcon;

  if (iconName === 'Todo') {
    sourceIcon = require('../../assets/images/todo.png');
  } else if (iconName === 'Weather') {
    sourceIcon = require('../../assets/images/weather.png');
  }

  return (
    <Image
      source={sourceIcon}
      style={{width: size, height: size, tintColor: color}}
    />
  );
};

export default TabIcon;
