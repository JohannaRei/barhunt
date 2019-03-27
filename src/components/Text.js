// @flow
import React from 'react';
import { Text as RNText } from 'native-base';
import i18n from '@lang';

type Props = {
  children?: string,
  tx?: ?string
};

const Text = ({ children, tx }: Props) => <RNText>{tx ? i18n(tx) : children}</RNText>;

export default Text;
