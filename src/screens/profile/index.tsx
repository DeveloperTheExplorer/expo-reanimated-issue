
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { TabController, View, TouchableOpacity, Button } from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { userStore } from '@/hooks/useSession';
import Header from '@/components/Header';
import Banner from '@/components/Profile/Banner';
import constants from '@/resources/data/constants';
import ProfileHeader from '@/components/Profile/Header';
import Portfolio from '@/components/Portfolio';
import NFTs from '@/components/Profile/NFTs';
import ActivityList from '@/components/ActivityList';
import { useActivities } from '@/hooks/useActivities';
import { ScreenProps } from '@/types/screens';
import { Profile } from '@/types';

import { s } from '@/styles';
import styles from './styles';

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
    const profileID = isUser ? user!.id : params.userID;
    const initialProfile = isUser && user || null;
    const [profile, setProfile] = useState<Profile | null>(initialProfile);    
    const { activities, initData, toggleFollow } = useActivities({
        authorID: profileID
    })

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

    const handleTabSelection = (index: number) => {
        console.log('index', index);
        if (index === 1 && activities.length === 0) {
            initData();

            return;
        }
    }
    
    useEffect(
        () => {
            if (profile && profile.followerCount) {
                return;
            }

            getProfileData();
        }, [isUser]
    )
    
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
                        onChangeIndex={handleTabSelection}
                    >
                        <TabController.TabBar 
                            enableShadow
                        />
                        <TabController.PageCarousel>
                            <TabController.TabPage index={0}>
                                <Portfolio />
                            </TabController.TabPage>
                            <TabController.TabPage index={1} lazy>
                                <View>
                                    <Button 
                                        label='Refresh'
                                        onPress={initData}
                                    />
                                    <ActivityList 
                                        activities={activities}
                                        toggleFollow={toggleFollow}
                                    />
                                </View>
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