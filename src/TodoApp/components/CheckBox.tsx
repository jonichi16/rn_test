import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

type CheckBoxProps = {
  size: number;
  onPress: () => void;
};

const CheckBox = ({size, onPress}: CheckBoxProps) => {
  const [isEnable, setIsEnable] = useState<boolean>(false);
  const {colors} = useTheme();

  const handlePress = () => {
    setIsEnable(prevState => !prevState);
    // setTimeout(onPress, 100);
    onPress();
  };

  return (
    <View>
      <Pressable
        onPress={handlePress}
        style={[
          {
            width: size,
            height: size,
            maxHeight: size,
            borderColor: colors.border,
          },
          styles.border,
          styles.container,
        ]}>
        {isEnable ? (
          <Image
            source={require('../assets/images/done.png')}
            style={{width: size, height: size, tintColor: colors.text}}
          />
        ) : (
          <></>
        )}
      </Pressable>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 2,
    borderRadius: 3,
  },
});
