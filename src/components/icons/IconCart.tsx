import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconCart: React.FC<{ color: string; size: number }> = ({ color, size }) => {
  return <Icon name="shopping-cart" color={color} size={size} />;
};

export default IconCart;