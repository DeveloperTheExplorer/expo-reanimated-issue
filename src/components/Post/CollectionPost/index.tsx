import { View } from 'react-native-ui-lib';

import { CollectionPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';


interface Props {
    post: CollectionPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function CollectionPost({
    post,
    toggleFollow
}: Props) {

    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View style={styles.container}>
                
            </View>
        </BasePost>
    )
}