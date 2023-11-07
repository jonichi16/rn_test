import {useRef} from 'react';
import {Animated} from 'react-native';

const useSlide = () => {
  const slide = useRef(new Animated.Value(0)).current;

  const slideToRight = () => {
    return Animated.timing(slide, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    });
  };

  return {slide, slideToRight};
};

export default useSlide;
