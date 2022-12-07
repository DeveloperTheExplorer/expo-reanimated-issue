import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// export type RootStackParamList = {
//     Intro: undefined;
//     Auth: undefined;
//     Terms: undefined;
//     Profile: undefined;
//     // Profile: { userId: string };
//     // Feed: { sort: 'latest' | 'top' } | undefined;
// };
// export type TabParamList = {
//     Home: undefined;
//     Search: undefined;
//     Blog: undefined;
//     Profile: undefined;
//     // Profile: { userId: string };
//     // Feed: { sort: 'latest' | 'top' } | undefined;
// };

// export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
// export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<TabParamList, T>;

export type AllScreensParamList = {
    // Tabs
    Tabs: undefined;
    Home: undefined;
    Search: undefined;
    Blog: undefined;
    Profile: undefined;

    // Non Tabs
    Intro: undefined;
    Auth?: {
        token?: string
    };
    Terms: undefined;

};

export type ScreenProps<T extends keyof AllScreensParamList> = CompositeScreenProps<
    BottomTabScreenProps<AllScreensParamList, T>,
    NativeStackScreenProps<AllScreensParamList, T>
>;