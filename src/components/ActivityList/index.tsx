import { Activity, ActivityTypes, TradeType, TradeTypes } from '@/types/activity';
import { Text, View } from 'react-native-ui-lib';
import Post from '../Post';
import Trade from '../Trade';

interface Props {
    activities: Activity[];
}

export default function ActivityList({
    activities
}: Props) {

    return (
        <View paddingV-24 paddingH-32>
            {
                activities.map(
                    (activity, i) => {
                        if (activity.type === TradeTypes.BasicTrade) {
                            const trade = activity as TradeType;
                            
                            return (
                                <Trade 
                                    key={trade.id!}
                                    trade={trade}
                                />
                            )
                        }

                        return (
                            <Post 
                                post={activity}
                            />
                        )
                    }
                )
            }
        </View>
    )
}