import {Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

type BounceProps = {children: React.ReactNode};

const Bounce = ({children}: BounceProps) => {
  const bounce = useRef(new Animated.Value(0)).current;

  const bounceUp = () => {
    Animated.timing(bounce, {
      toValue: -8,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      bounceDown();
    });
  };

  const bounceDown = () => {
    Animated.timing(bounce, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      bounceUp();
    });
  };

  useEffect(() => {
    bounceUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={{transform: [{translateY: bounce}]}}>
      {children}
    </Animated.View>
  );
};

export default Bounce;
