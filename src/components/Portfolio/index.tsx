import { Text, View } from 'react-native-ui-lib';

import { usePortfolio } from '@/hooks/usePortfolio';
import { nFormatter } from '@/resources/format';

import PortfolioChart from '../Chart/PortfolioChart';

interface Props {

}

export default function Portfolio({

}: Props) {
    const { portfolio } = usePortfolio({
        autoLoad: true
    });
    const {
        chartData
    } = portfolio;

    return (
        <View paddingV-24>
            <View paddingH-32>
                <PortfolioChart 
                    chartData={portfolio.chartData}
                />
            </View>
            <View marginT-24 paddingH-32>
                <Text h4 center>
                    Performance Stats
                </Text>
                <View row spread marginT-20>
                    <View center>
                        <Text marginB-8 bodySm>
                            NFTs bought
                        </Text>
                        <Text h4 primary>
                            {portfolio && nFormatter(portfolio.nftsBought)}
                        </Text>
                    </View>
                    <View center>
                        <Text marginB-8 bodySm>
                            Total profit
                        </Text>
                        <Text h4 primary>
                            {portfolio && nFormatter(portfolio.totalProfit)} ETH
                        </Text>
                    </View>
                    <View center>
                        <Text marginB-8 bodySm>
                            NFTs sold
                        </Text>
                        <Text h4 primary>
                            {portfolio && nFormatter(portfolio.nftsSold)}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}