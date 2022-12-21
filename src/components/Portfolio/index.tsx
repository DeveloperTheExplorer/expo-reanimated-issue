import dayjs from 'dayjs';
import { Text, View } from 'react-native-ui-lib';

import Chart from '../Chart';

interface Props {

}

const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    prices: new Array(6).fill(0).map(() => Math.random() * 100)
};

export default function Portfolio({

}: Props) {
    const today = dayjs().format('MMMM D YYYY');
    const currentNetWorth = chartData.prices[chartData.prices.length - 1].toFixed(2);

    return (
        <View paddingV-24>
            <Chart
                paddingH-32
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
                            3.8K
                        </Text>
                    </View>
                    <View center>
                        <Text marginB-8 bodySm>
                            Total profit
                        </Text>
                        <Text h4 primary>
                            5.2 ETH
                        </Text>
                    </View>
                    <View center>
                        <Text marginB-8 bodySm>
                            NFTs sold
                        </Text>
                        <Text h4 primary>
                            1.2K
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}