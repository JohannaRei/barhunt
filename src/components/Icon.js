// @flow
import React from 'react';
import { Platform } from 'react-native';
import RNIcon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string,
  size?: number
};

const Icon = ({ name, size = 20 }: Props) => {
  const plat = Platform.OS === 'ios' ? 'ios' : 'md';
  return <RNIcon name={`${plat}-${name}`} size={size} />;
};

export default Icon;
