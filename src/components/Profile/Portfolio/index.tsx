import { font } from '@/styles';
import { TabController, Text, View } from 'react-native-ui-lib';

interface Props {

}

const durations = [
    {
        label: '1D',
        key: 'day'
    },
    {
        label: '1W',
        key: 'week'
    },
    {
        label: '1M',
        key: 'month'
    },
    {
        label: '3M',
        key: 'quarter'
    },
    {
        label: '1Y',
        key: 'year'
    },
];

export default function Portfolio({

}: Props) {

    return (
        <View paddingV-24 paddingH-42>
            <View
                style={{
                    overflow: 'hidden'
                }}
            >
                <TabController
                    items={durations}
                    initialIndex={0}
                >
                    <TabController.TabBar 
                        spreadItems={true}
                        // containerWidth={300}
                    />
                </TabController>
            </View>
        </View>
    )
}