import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '../themes/theme';

import Home from '../pages/home/HomeScreen';
import IProduct from '../pages/items/Products';
import Cart from '../pages/cart/Cart';

import IconHome from '../components/icons/IconHome';
import IconCart from '../components/icons/IconCart';

export type AppStackParamList = {
  Home: undefined;
  IProduct: { productId: number };
  Favorites: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="IProduct"
        component={IProduct}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.pink,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <IconHome color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => <IconCart color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}