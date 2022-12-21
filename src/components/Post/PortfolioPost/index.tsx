import { Text, View } from 'react-native-ui-lib';

import { PortfolioPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import Chart from '@/components/Chart';
import dayjs from 'dayjs';


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
    const {
        prices
    } = chartData;
    const today = dayjs().format('MMMM D YYYY');
    const currentNetWorth = prices[prices.length - 1].toFixed(2);

    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View style={styles.container}>
                <Chart
                    chartData={chartData}
                >
                    <Text
                        style={{
                            fontSize: 10
                        }}
                    >
                        {today}
                    </Text>
                    <View>
                        <View bg-primary paddingV-2 paddingH-4 rounded-md>
                            <Text bgColor bodySm bold>
                                Current Value: {currentNetWorth} ETH
                            </Text>
                        </View>
                        <Text
                            center
                            marginT-4
                            style={{
                                fontSize: 10
                            }}
                        >
                            Calculation based on Floor Price
                        </Text>
                    </View>
                </Chart>
            </View>
        </BasePost>
    )
}