import { getToday, nFormatter } from '@/resources/format';
import { SearchCollectionType, SearchResult } from '@/types/search';
import { Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import Avatar from '../Avatar';

interface Props {
    onPress: (searchRes: SearchResult) => void;
    collection: SearchCollectionType;
}

export default function SearchCollection({
    collection,
    onPress
}: Props) {

    const {
        image,
        name,
        chartData
    } = collection;
    const {
        prices
    } = chartData;
    const currentPrice = prices[prices.length - 1];
    const today = getToday();
    
    return (
        <TouchableOpacity
            row
            padding-16
            bg-grey70
            marginB-16
            style={{
                borderRadius: 10
            }}
            onPress={onPress}
        >
            <Image 
                source={{
                    uri: image
                }}
                style={{
                    width: 42,
                    height: 42,
                    borderRadius: 5
                }}
            />
            <View flexG marginL-12>
                <Text bold>
                    {name}
                </Text>
            </View>
            <View right>
                <Text bold>
                    {nFormatter(currentPrice)} ETH
                </Text>
                <Text bodySm>
                    {today}
                </Text>
            </View>
        </TouchableOpacity>
    )
}