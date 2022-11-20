import { ImageSourcePropType } from 'react-native';

export interface AuthSlide {
    title: string;
    img: ImageSourcePropType;
};

export const authSlides: AuthSlide[] = [
    {
        title: 'See what others are investing in',
        img: require('assets/images/intro/slide-1.png')
    },
    {
        title: 'Learn from their thoughts and insights',
        img: require('assets/images/intro/slide-2.png')
    },
    {
        title: 'Earn money to learn about new NFTs',
        img: require('assets/images/intro/slide-3.png')
    },
]