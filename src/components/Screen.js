// @flow
import React from 'react';
import { StyleProvider, Container, Content } from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

type Props = {
  children: any
};

const Screen = ({ children }: Props) => (
  <StyleProvider style={getTheme(platform)}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </StyleProvider>
);

export default Screen;
