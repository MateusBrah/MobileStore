// declare module 'react-native-snap-carousel' {
//   import { Component } from 'react';
//   import { FlatListProps, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';

//   export interface PaginationProps {
//     dotsLength: number;
//     activeDotIndex: number;
//     containerStyle?: StyleProp<ViewStyle>;
//     dotStyle?: StyleProp<ViewStyle>;
//     inactiveDotOpacity?: number;
//     inactiveDotScale?: number;
//   }

//   export class Pagination extends Component<PaginationProps> {}

//   export interface CarouselProps<T> extends FlatListProps<T> {
//     sliderWidth?: number;
//     itemWidth?: number;
//     onSnapToItem?: (index: number) => void;
//     firstItem?: number;
//     activeSlideAlignment?: 'center' | 'end' | 'start';
//   }

//   export class Carousel<T> extends Component<CarouselProps<T>> {}
// }