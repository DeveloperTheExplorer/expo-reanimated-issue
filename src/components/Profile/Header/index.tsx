import { Button, View, Text } from 'react-native-ui-lib';
import { Feather } from '@expo/vector-icons';

import Avatar from '@/components/Avatar';
import { Profile } from '@/types';
import styles from './styles';
import { formatNumber } from '@/resources/format';
import React from 'react';
import SocialStats from '@/components/SocialStats';


interface Props {
    profile: Profile | null;
    isUser?: boolean;
}

export default function ProfileHeader({ profile, isUser }: Props) {

    if (!profile) {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    const {
        avatar,
        username,
        bio,
        followerCount,
        subscribersCount,
        subscriptionEnabled,
        subscriptionPrice,
        isSubscribed,
        isFollowing,
    } = profile;

    return (
        <View
            paddingH-32
        >
            <View
                row
                spread
                style={styles.avatarContainer}
            >
                <Avatar
                    uri={avatar}
                    size={84}
                />
                {
                    !isUser && (
                        <Button 
                            paddingV-6
                            marginB-8
                            bold
                            bg-bgColor={isFollowing}
                            primary={isFollowing}
                            label={isFollowing ? 'Unfollow' : 'Follow'}
                            style={{
                                alignSelf: 'flex-end'
                            }}
                        />
                    )
                }
            </View>
            <Text h3 marginT-10 bold>
                {username}
            </Text>
            <Text body marginT-10>
                {bio}
            </Text>
            <View row marginT-18>
                <View marginR-18>
                    <SocialStats 
                        bold
                        value={followerCount}
                        label='Followers'
                    />
                </View>
                {
                    subscriptionEnabled && (
                        <SocialStats
                            bold
                            value={subscribersCount}
                            label='Subscribers'
                        />
                    )
                }
            </View>
            {
                !isUser && subscriptionEnabled && (
                    <Button 
                        marginT-18
                        paddingV-8
                        bg-secondary
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.10,
                            shadowRadius: 2,

                            elevation: 2,
                        }}
                    >
                        <View absL marginL-16>
                            {
                                isSubscribed && (
                                    <Feather 
                                        name="check-circle" 
                                        size={24} 
                                        color="black" 
                                    />
                                )
                            }
                        </View>
                        <Text bold>
                            {
                                isSubscribed ? 'Subscribed' : `Subscribe for CA$${subscriptionPrice}/month`
                            }
                        </Text>
                    </Button>
                )
            }
        </View>
    )
}