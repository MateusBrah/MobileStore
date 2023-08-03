import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const SlideContainer = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: 200px;
`;

export const SlideImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 200px;
  padding: 0 16px;
  resize-mode: contain;
`;