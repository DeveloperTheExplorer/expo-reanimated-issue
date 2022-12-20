import React, { useContext, useState } from 'react';
import { Button, Colors, Image, Text, View } from 'react-native-ui-lib';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { PostActivity } from '@/types/activity';
import Avatar from '../../Avatar';
import styles from './styles';
import { ago } from '@/resources/format';
import SocialStats from '../../SocialStats';
import { userStore } from '@/hooks/useSession';
import ExclusiveTeaser from '../../ExclusiveTeaser';

interface Props {
    post: PostActivity;
    toggleFollow: (userID: string, isFollowing: boolean) => void,
    children?: React.ReactNode
}

export default function BasePost({
    post,
    toggleFollow,
    children
}: Props) {
    const { user } = useContext(userStore);
    const {
        author,
        title,
        description,
        image,
        commentsCount,
        likesCount,
        isLiked,
        isExclusive,
        date,
    } = post;
    const isUser = author.id === user?.id;
    const [liked, setLiked] = useState(isLiked);
    const timeago = ago(date);

    const handleLike = () => {
        setLiked(prev => !prev);
    }

    const handleFollow = () => {
        toggleFollow(author.id, !!author.isFollowing);
    }

    return (
        <View
            paddingV-16
            paddingH-32
            style={styles.container}
        >
            <View row top>
                <Avatar 
                    uri={author.avatar}
                    size={50}
                />
                <View marginL-16>
                    <Text>
                        @{author.username}
                    </Text>
                    <Text bodySm bold grey30 marginT-6>
                        {timeago}
                    </Text>
                </View>
                {
                    !isUser && (
                        <View row flexG right>
                            {
                                author.isFollowing ? (
                                    <Button 
                                        bg-bgColor
                                        primary
                                        bodySm
                                        paddingV-2
                                        label='Unfollow'
                                        onPress={handleFollow}
                                    />
                                ) : (
                                    <Button 
                                        flexS
                                        bodySm
                                        paddingV-2
                                        label='Follow'
                                        onPress={handleFollow}
                                    />
                                )
                            }
                        </View>
                    )
                }
            </View>
            <View marginT-12>
                {
                    isExclusive && (
                        <ExclusiveTeaser 
                            userID={author.id}
                            username={author.username}
                        />
                    )
                }
                <View flexS>
                    <Text bold>
                        {title}?
                    </Text>
                    <Text 
                        bodySm 
                        marginT-6
                        style={styles.description}
                    >
                        {description}
                    </Text>

                </View>
                <View
                    marginT-12
                >
                    {
                        image && (
                            <Image
                                cover
                                source={{
                                    uri: image
                                }}
                                style={styles.image}
                            />
                        )
                    }
                </View>
                { children }
            </View>
            <View row spread marginT-12>
                <View>
                    {
                        isExclusive && (
                            <View 
                                bg-secondary
                                rounded-md
                                row
                                paddingH-4
                                paddingV-2
                                center
                            >
                                <MaterialCommunityIcons 
                                    name="crown-outline" 
                                    size={24} 
                                    color="black" 
                                />
                                <Text bodySm bold marginL-2>
                                    EXCLUSIVE
                                </Text>
                            </View>
                        )
                    }
                </View>
                <View row centerV>
                    <SocialStats 
                        reverse
                        bodySm
                        onPress={handleLike}
                        label={
                            liked ? (
                                <FontAwesome 
                                    name="heart" 
                                    size={20} 
                                    color={Colors.red30} 
                                />
                            ) : (
                                <FontAwesome 
                                    name="heart-o" 
                                    size={20} 
                                    color="black" 
                                />
                            )
                        }
                        value={likesCount}
                        style={{
                            marginRight: 40
                        }}
                    />
                    <SocialStats 
                        reverse
                        bodySm
                        label={
                            <FontAwesome 
                                name="comment-o" 
                                size={20} 
                                color="black" 
                            />
                        }
                        value={commentsCount}
                    />
                </View>
            </View>
        </View>
    );
}