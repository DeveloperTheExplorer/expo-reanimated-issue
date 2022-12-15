
import React, { useContext, useEffect, useState } from 'react';

import { ScreenProps } from '@/types/screens';
import { userStore } from '@/hooks/useSession';
import Header from '@/components/Header';
import { StatusBar } from 'expo-status-bar';
import { s } from '@/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Banner from '@/components/Profile/Banner';
import styles from './styles';
import constants from '@/resources/data/constants';
import { Profile, User } from '@/types';
import ProfileHeader from '@/components/Profile/Header';
import { Colors, TabController, View } from 'react-native-ui-lib';
import Portfolio from '@/components/Portfolio';
import NFTs from '@/components/Profile/NFTs';
import ActivityList from '@/components/ActivityList';

const tabs = [
    {
        label: 'Portfolio'
    },
    {
        label: 'Activity'
    },
    {
        label: 'NFTs'
    },
]

export default function ProfileScreen({ navigation, route }: ScreenProps<'Profile'>) {
    const { user, dispatch } = useContext(userStore);
    const { params } = route;
    const isUser = !params || !params.userID || params.userID === user?.id;
    const initialProfile = isUser && user || null;

    const [profile, setProfile] = useState<Profile | null>(initialProfile);

    const logout = () => {
        dispatch(
            {
                type: 'LOGOUT'
            }
        );
    }

    const handleSettingsMenu = () => {
        console.log('pressed!');
    }

    const getProfileData = async () => {
        const profile: Profile = {
            ...user!,
            followerCount: 1234,
            subscribersCount: 111,
            subscriptionEnabled: true,
            subscriptionPrice: 8.99,
            isFollowing: false,
            isSubscribed: false,
        };

        setProfile(profile);
    }
    
    useEffect(
        () => {
            if (profile && profile.followerCount) {
                return;
            }

            getProfileData()
        }, [isUser]
    )

    console.log('profile', profile);
    
    return (
        <SafeAreaView style={s.safeArea}>
            <StatusBar style="auto" />
            <Header
                float
                hideBack={isUser}
                navigation={navigation}
            >
                <TouchableOpacity
                    onPress={handleSettingsMenu}
                    style={{
                        padding: 12
                    }}
                >
                    <Ionicons
                        name="ios-settings-sharp"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </Header>
            <Banner 
                uri={profile && profile.banner} 
            />

            <ScrollView
                style={[
                    styles.mainScrollView,
                    {
                        paddingTop: constants.screenWidth / 2
                    }
                ]}
                contentContainerStyle={styles.main}
            >
                <ProfileHeader 
                    profile={profile}
                    isUser={isUser}
                />
                <View marginT-24>
                    <TabController
                        asCarousel
                        items={tabs}
                        initialIndex={0}
                    >
                        <TabController.TabBar 
                            enableShadow
                        />
                        <TabController.PageCarousel>
                            <TabController.TabPage index={0}>
                                <Portfolio />
                            </TabController.TabPage>
                            <TabController.TabPage index={1} lazy>
                                <ActivityList 
                                    activities={[]}
                                />
                            </TabController.TabPage>
                            <TabController.TabPage index={2} lazy>
                                <NFTs />
                            </TabController.TabPage>
                        </TabController.PageCarousel>
                    </TabController>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}