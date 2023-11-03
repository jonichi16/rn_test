import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {jest, it, describe, expect} from '@jest/globals';

import {NavigationContainer} from '@react-navigation/native';
import ServiceTypeNavigator from '../../../navigators/ServiceTypeNavigator';
import ServiceType from '.';

import {Colors, Typography} from '../../../common/styles';

describe('Service Types', () => {
  it('should have a header', () => {
    const {getByRole} = render(
      <NavigationContainer>
        <ServiceTypeNavigator />
      </NavigationContainer>,
    );

    const heading = getByRole('heading');

    const headingStyle = {
      ...Typography.header.xl,
      color: Colors.primary.dark,
    };

    expect(heading.children[0]).toEqual('List of Service Type');
    expect(heading.props.style).toEqual(headingStyle);
  });

  it('should have a add service type button', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <ServiceTypeNavigator />
      </NavigationContainer>,
    );

    const button = getByTestId('ButtonText');

    expect(button.children[0]).toEqual('Add new Service Type');
  });

  it('should navigate to Add when add button is press', () => {
    const {getByRole} = render(
      <NavigationContainer>
        <ServiceTypeNavigator />
      </NavigationContainer>,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    const text = screen.getByTestId('AddText');

    expect(text.children[0]).toEqual('AddServiceType');
  });

  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn(),
    },
    ...props,
  });

  it('should pass', () => {
    let props: any;
    props = createTestProps({});

    const {getByRole} = render(<ServiceType {...props} />);

    const button = getByRole('button');
    fireEvent.press(button);

    expect(props.navigation.navigate).toHaveBeenCalledWith('Add');
  });
});
