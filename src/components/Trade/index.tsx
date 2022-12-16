import { TradeType } from '@/types/activity';
import dayjs from 'dayjs';
import React from 'react';
import { Image, Text, View } from 'react-native-ui-lib';
import styles from './styles';

interface Props {
    trade: TradeType;
}

export default function Trade({
    trade
}: Props) {
    const {
        NFT,
        date,
        author
    } = trade;
    const tradeDate = dayjs(date).format('MMMM D, YYYY');

    return (
        <View 
            row 
            paddingT-16
            paddingH-32
            paddingB-32
            style={styles.container}
        >
            <Image 
                source={{
                    uri: NFT.image
                }}
                style={styles.nftImage}
            />
            <View marginL-24>
                <Text bodyLg bold>
                    @{author.username}
                    {'\n'}
                    Bought {NFT.collectionName} {NFT.name}
                </Text>
                <Text bodySm marginT-12>
                    {tradeDate}
                </Text>
            </View>
        </View>
    );
}