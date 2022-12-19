import React, { useContext, useState } from 'react';
import { Button, Colors, Image, Text, View } from 'react-native-ui-lib';
import { FontAwesome } from '@expo/vector-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { PostActivity } from '@/types/activity';
import Avatar from '../Avatar';
import styles from './styles';
import { ago } from '@/resources/format';
import SocialStats from '../SocialStats';
import { userStore } from '@/hooks/useSession';

interface Props {
    post: PostActivity;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function Post({
    post,
    toggleFollow
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
            <View>
                <View flexS>
                    <Text bold marginT-12>
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
            </View>
            <View row centerV right marginT-12>
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
    );
}