import * as React from 'react';
import type { ComponentType } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

export type IconTypes = keyof typeof iconRegistry | undefined;

interface IconProps extends TouchableOpacityProps {
  icon?: IconTypes;
  color?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: TouchableOpacityProps['onPress'];
}

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View;

  if (!icon) return null;
  return (
    <Wrapper
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color ? { tintColor: color } : undefined,
          size ? { width: size, height: size } : undefined,
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  );
}

export const iconRegistry = {
  ladybug: require('../assets/icons/ladybug.png'),
};

const $imageStyle: ImageStyle = {
  resizeMode: 'contain',
};
