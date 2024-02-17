import { View } from "react-native";

import { PressableWithOverlay } from "../ButtonExamples/PressableOverlay/PressableWithOverlay";
import { ButtonProps } from "../ButtonExamples/button-types";

export interface CardProps extends ButtonProps {}

export const Card = ({
  children,
  className,
  style,
  disabled,
  onPress,
}: CardProps) => {
  return (
    <View className="rounded-md shadow-sm">
      <PressableWithOverlay
        className={`rounded-md bg-white p-4 ${className}`}
        disabled={disabled || !onPress}
        style={style}
      >
        {children}
      </PressableWithOverlay>
    </View>
  );
};
