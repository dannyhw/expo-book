import React, { forwardRef } from "react";
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

export interface ButtonProps extends PressableProps {
  children?: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
}

export const Button = forwardRef<View, ButtonProps>(
  (
    { children, onPressIn, onPressOut, onPress, style, ...rest }: ButtonProps,
    ref,
  ) => {
    const opacity = useSharedValue(0);

    const pressIn = (e: GestureResponderEvent) => {
      onPressIn?.(e);

      opacity.value = withSpring(0.25);
    };

    const pressOut = (e: GestureResponderEvent) => {
      onPressOut?.(e);

      if (opacity.value !== 0.25) {
        // for some reason with delay doesn't work on web
        if (Platform.OS === "web") {
          setTimeout(() => {
            opacity.value = withSpring(0);
          }, 300);
        } else {
          opacity.value = withDelay(300, withSpring(0));
        }
      } else {
        opacity.value = withSpring(0);
      }
    };

    const animatedStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        ...StyleSheet.absoluteFillObject,
        opacity: opacity.value,
      };
    }, [opacity]);

    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        style={[style, { overflow: "hidden" }]}
        {...rest}
      >
        {children}
        <Animated.View style={animatedStyle} pointerEvents="none" />
      </Pressable>
    );
  },
);
