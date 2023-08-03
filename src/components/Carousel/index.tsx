import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { SlideContainer, SlideImage } from './styles';

export interface CarouselItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface CustomCarouselProps {
  data: CarouselItem[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ data }) => {
  const carouselRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let newIndex = activeIndex + 1;
      if (newIndex >= data.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
      carouselRef.current?.scrollTo({ x: Dimensions.get('window').width * newIndex, animated: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex, data.length]);

  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SlideContainer style={{ flex: 1 }}>
      <ScrollView
        ref={carouselRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) =>
          handleSnapToItem(Math.floor(e.nativeEvent.contentOffset.x / Dimensions.get('window').width))
        }
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={{ width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center' }}
          >
            <SlideImage source={{ uri: item.imageUrl }} style={{ width: 200, height: 200 }} />
          </View>
        ))}
      </ScrollView>
    </SlideContainer>
  );
};

export default CustomCarousel;
