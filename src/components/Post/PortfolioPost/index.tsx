import { Text, View } from 'react-native-ui-lib';

import { PortfolioPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import Chart from '@/components/Chart';
import dayjs from 'dayjs';
import PortfolioChart from '@/components/Chart/PortfolioChart';


interface Props {
    post: PortfolioPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function PortfolioPost({
    post,
    toggleFollow
}: Props) {
    const {
        portfolio
    } = post;
    const {
        chartData
    } = portfolio;

    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View style={styles.container}>
                <PortfolioChart 
                    chartData={chartData}
                />
            </View>
        </BasePost>
    )
}