import { useMemo } from 'react';
import { Colors, Shadows, TabController, Text, View } from 'react-native-ui-lib'
import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import dayjs from 'dayjs';

import { ChartData } from '@/types/activity'
import constants from 'react-native-ui-lib/src/commons/Constants';

interface Props {
    chartData: ChartData;
    children: React.ReactNode;
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

const chartConfig: AbstractChartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    fillShadowGradientFrom: Colors.primary,
    fillShadowGradientFromOpacity: 0.3,
    fillShadowGradientTo: '#ffffff',
    fillShadowGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};

export default function Chart({
    chartData,
    children,
    ...props
}: Props) {
    const {
        labels,
        prices
    } = chartData;
    const data: LineChartData = useMemo(
        () => {
            return {
                labels: labels,
                datasets: [
                    {
                        data: prices,
                        color: () => Colors.primary, // optional
                        strokeWidth: 2 // optional
                    }
                ],
            }
        }, [chartData.labels[0]]
    )

    return (
        <View
            {...props}
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
                    { children }
                </View>
                {
                    chartData.labels[0] !== 'loading' && (
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
                            withDots={false}
                        />
                    )
                }
            </View>
        </View>
    )
}