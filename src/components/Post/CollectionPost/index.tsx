import { Linking } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';

import { CollectionPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import Chart from '@/components/Chart';
import dayjs from 'dayjs';


interface Props {
    post: CollectionPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

const openseaURL = 'https://opensea.io/collection';

export default function CollectionPost({
    post,
    toggleFollow
}: Props) {
    const {
        collection
    } = post;
    const {
        name,
        image,
        openseaSlug,
        chartData
    } = collection;
    const {
        prices
    } = chartData;
    const today = dayjs().format('MMMM D YYYY');
    const currentValue = prices[prices.length - 1].toFixed(2);
    const oldestValue = prices[0];
    const change = (prices[prices.length - 1] - oldestValue) / oldestValue * 100;
    const isPositiveChange = change > 0;

    const openCollection = async () => {
        const url = `${openseaURL}/${openseaSlug}`;
        const canOpen = await Linking.canOpenURL(url);

        if (!canOpen) {
            return;
        }
        await Linking.openURL(url);
    }
    
    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View style={styles.container}>
                
                <Chart
                    marginT-24
                    chartData={chartData}
                >
                    <View row spread flexG>
                        <TouchableOpacity 
                            row
                            onPress={openCollection}
                        >
                            <Image
                                source={{
                                    uri: image
                                }}
                                style={styles.collectionImage}
                            />
                            <View marginL-8>
                                <Text bold>
                                    {name.toUpperCase()}
                                </Text>
                                <Text bodySm marginT-2>
                                    {today}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View right>
                            <Text bold>
                                {currentValue} ETH
                            </Text>
                            <View 
                                bg-secondary={isPositiveChange}
                                bg-error={!isPositiveChange}
                                marginT-2
                                paddingH-8 
                                paddingV-2
                                rounded-md
                                center
                            >
                                <Text 
                                    bodySm
                                    bold
                                    bgColor={!isPositiveChange}
                                >
                                    {(isPositiveChange ? '+ ' : '') + change.toFixed(1)}%
                                </Text>
                            </View>
                        </View>
                    </View>
                </Chart>
            </View>
        </BasePost>
    )
}