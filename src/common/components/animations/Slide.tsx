import React from 'react';
import useSlide from '../../hooks/useSlide';
import {Animated} from 'react-native';

type SlideProps = {children: React.ReactNode};

const Slide = ({children}: SlideProps) => {
  const {slide} = useSlide();

  return (
    <Animated.View style={{transform: [{translateX: slide}]}}>
      {children}
    </Animated.View>
  );
};

export default Slide;
