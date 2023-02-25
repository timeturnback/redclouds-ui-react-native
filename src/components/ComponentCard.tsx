import React, { FC } from 'react';

import { TextStyle, View, ViewStyle } from 'react-native';
import { Text } from './Text';

export interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
}

export const ComponentCard: FC<ComponentCardProps> = ({ children, title }) => {
  return (
    <View style={$componentCard}>
      <Text style={$itemTitle} text={title} />
      {children}
    </View>
  );
};

const $componentCard: ViewStyle = {
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 10,
  padding: 16,
  margin: 8,
};
const $itemTitle: TextStyle = {
  fontWeight: '500',
  fontSize: 20,
  marginBottom: 16,
};
