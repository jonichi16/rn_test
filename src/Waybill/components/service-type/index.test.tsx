import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {it, describe, expect} from '@jest/globals';
import ServiceTypeNavigator from '../../../navigators/ServiceTypeNavigator';
import {NavigationContainer} from '@react-navigation/native';

describe('Service Types', () => {
  describe('Initial Screen', () => {
    it('navigates to add service type screen', () => {
      const {getByRole} = render(
        <NavigationContainer>
          <ServiceTypeNavigator />
        </NavigationContainer>,
      );

      const addButton = getByRole('button');
      fireEvent.press(addButton);

      const text = screen.getByTestId('AddText');

      expect(text.children[0]).toEqual('AddServiceType');
    });
  });
});
