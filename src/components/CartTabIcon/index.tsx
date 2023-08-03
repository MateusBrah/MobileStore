import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '../../context/CartContext';

type CartIconProps = {
  color: string;
  size: number;
};

type IconStyle = {
  position: 'absolute';
  top: number;
  right: number;
  backgroundColor: string;
  color: string;
  fontSize: number;
  paddingHorizontal: number;
  borderRadius: number;
};

export default function CartTabIcon({ color, size }: CartIconProps) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.length;

  const iconStyle: IconStyle = {
    position: 'absolute',
    top: 0,
    right: -4,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 4,
    borderRadius: 8,
  };

  return (
    <>
      <MaterialCommunityIcons name="cart" color={color} size={size} />
      {cartTotal > 0 && (
        <Text style={iconStyle}>
          {cartTotal <= 99 ? cartTotal : '99+'}
        </Text>
      )}
    </>
  );
}
