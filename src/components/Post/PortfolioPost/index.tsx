import { View } from 'react-native-ui-lib';

import { PortfolioPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';


interface Props {
    post: PortfolioPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function PortfolioPost({
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