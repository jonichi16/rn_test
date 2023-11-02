import 'react-native';
import React from 'react';
import ServiceType from '.';

import {it, describe, expect} from '@jest/globals';

import {create} from 'react-test-renderer';

describe('Service Types', () => {
  it('renders correctly', () => {
    const page = create(<ServiceType />).toJSON();

    expect(page).toBeTruthy();
  });
});
