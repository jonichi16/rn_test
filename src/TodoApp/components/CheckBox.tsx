import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

type CheckBoxProps = {
  size: number;
  onPress: () => void;
};

const CheckBox = ({size, onPress}: CheckBoxProps) => {
  const [isEnable, setIsEnable] = useState<boolean>(false);

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
          {width: size, height: size, maxHeight: size},
          styles.border,
          styles.container,
        ]}>
        {isEnable ? (
          <Image
            source={require('../assets/images/done.png')}
            style={{width: size, height: size}}
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
