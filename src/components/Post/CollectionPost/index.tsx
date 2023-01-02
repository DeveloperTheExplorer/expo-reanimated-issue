import { Linking } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';

import { CollectionPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import Chart from '@/components/Chart';
import dayjs from 'dayjs';
import CollectionChart from '@/components/Chart/CollectionChart';


interface Props {
    post: CollectionPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}


export default function CollectionPost({
    post,
    toggleFollow
}: Props) {
    const {
        collection
    } = post;
    
    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View style={styles.container}>
                
                <CollectionChart 
                    collection={collection}
                />
            </View>
        </BasePost>
    )
}