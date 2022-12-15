import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { Colors, Shadows, TabController, Text, View } from 'react-native-ui-lib';
import constants from 'react-native-ui-lib/src/commons/Constants';
import dayjs from 'dayjs';

interface Props {

}

const durations = [
    {
        label: '1D',
        style: {
            width: 40,
            flexShrink: 1
        },
        key: 'day'
    },
    {
        label: '1W',
        style: {
            width: 40,
            flexShrink: 1
        },
        key: 'week'
    },
    {
        label: '1M',
        style: {
            width: 40,
            flexShrink: 1
        },
        key: 'month'
    },
    {
        label: '3M',
        style: {
            width: 40,
            flexShrink: 1
        },
        key: 'quarter'
    },
    {
        label: '1Y',
        style: {
            width: 40,
            flexShrink: 1
        },
        key: 'year'
    },
];

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            data: new Array(6).fill(0).map(() => Math.random() * 100),
            color: () => Colors.primary, // optional
            strokeWidth: 2 // optional
        }
    ],
};
const chartConfig: AbstractChartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    fillShadowGradientFrom: Colors.primary,
    fillShadowGradientFromOpacity: 0.4,
    fillShadowGradientTo: '#ffffff',
    fillShadowGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};



export default function Portfolio({

}: Props) {
    const today = dayjs().format('MMMM D YYYY');

    return (
        <View paddingV-24>
            <View
                paddingH-32
                style={{
                    overflow: 'hidden'
                }}
            >
                <TabController
                    items={durations}
                    initialIndex={0}
                >
                    <TabController.TabBar 
                        indicatorInsets={0}
                        containerStyle={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}
                        containerWidth={constants.screenWidth - 64}
                    />
                </TabController>
                <View
                    marginV-24
                    paddingT-12
                    paddingB-20
                    paddingH-6
                    bg-bgColor
                    rounded-lg
                    style={{
                        ...Shadows.sh20.bottom,
                    }}
                >
                    <View row paddingH-6 paddingB-12 spread top>
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
                                    Current Value: 1,234 ETH
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
                    </View>
                    <LineChart
                        bezier
                        data={data}
                        width={constants.screenWidth - 84}
                        height={200}
                        chartConfig={chartConfig}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        yLabelsOffset={-constants.screenWidth + 100}
                        xLabelsOffset={8}
                        style={{
                            paddingRight: 12,
                            paddingLeft: 0
                        }}
                        getDotProps={
                            () => ({
                                r: 3
                            })
                        }
                    />
                </View>
            </View>
        </View>
    )
}