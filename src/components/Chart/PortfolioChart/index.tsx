import { Text, View } from 'react-native-ui-lib';
import dayjs from 'dayjs';

import { ChartData } from '@/types/activity';
import Chart from '..';

interface Props {
    chartData: ChartData;
}

export default function PortfolioChart({
    chartData
}: Props) {
    const {
        prices
    } = chartData;
    const today = dayjs().format('MMMM D YYYY');
    const currentNetWorth = prices[prices.length - 1].toFixed(2);

    return (
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

    )
}