import React, { useEffect, useRef } from "react";
import { ItemSelected, SelectOption, Title } from "./styles";
import { Animated } from "react-native";

interface TabOptionProps {
  title?: string;
  icon?: string;
  onPress: () => void;
  isSelected?: boolean;
}

const TabOption: React.FC<TabOptionProps> = ({
  title,
  icon,
  onPress,
  isSelected,
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: isSelected ? 1.2 : 1,
      useNativeDriver: true,
    }).start();

    Animated.spring(opacity, {
      toValue: isSelected ? 1 : 1.2,
      useNativeDriver: true,
    }).start();
  }, [isSelected, scale, opacity]);

  return (
    <SelectOption onPress={onPress}>
      {isSelected ? (
        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <ItemSelected>{icon}</ItemSelected>
        </Animated.View>
      ) : (
        <>{icon}</>
      )}
    </SelectOption>
  );
};

export default TabOption;
