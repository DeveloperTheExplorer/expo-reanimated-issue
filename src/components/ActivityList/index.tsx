import { Activity, ActivityTypes, TradeType, TradeTypes } from '@/types/activity';
import { Text, View } from 'react-native-ui-lib';
import Post from '../Post';
import Trade from '../Trade';

interface Props {
    activities: Activity[];
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function ActivityList({
    activities,
    toggleFollow
}: Props) {

    return (
        <View paddingV-24>
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
                                key={activity.id!}
                                post={activity}
                                toggleFollow={toggleFollow}
                            />
                        )
                    }
                )
            }
        </View>
    )
}