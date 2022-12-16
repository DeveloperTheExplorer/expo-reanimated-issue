import React, { useState } from 'react';
import dayjs from 'dayjs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { PostActivity } from '@/types/activity';
import { Colors, Text, View } from 'react-native-ui-lib';
import Avatar from '../Avatar';
import styles from './styles';
import { ago } from '@/resources/format';
import SocialStats from '../SocialStats';

interface Props {
    post: PostActivity;
}

export default function Post({
    post
}: Props) {
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
    const [liked, setLiked] = useState(isLiked);
    const timeago = ago(date);

    const handleLike = () => {
        setLiked(prev => !prev);
    }

    return (
        <View
            row
            paddingV-16
            paddingH-32
            style={styles.container}
        >
            <Avatar 
                uri={author.avatar}
                size={60}
            />
            <View flexS marginL-12>
                <View row spread centerV>
                    <Text>
                        @{author.username}
                    </Text>
                    <Text bodySm bold grey30>
                        {timeago}
                    </Text>
                </View>
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
        </View>
    );
}