import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconHome: React.FC<{ color: string; size: number }> = ({ color, size }) => {
  return <Icon name="home" color={color} size={size} />;
};

export default IconHome;
