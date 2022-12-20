import { Activity, ActivityTypes, PostTypes, TradeType, TradeTypes } from '@/types/activity';
import { Text, View } from 'react-native-ui-lib';
import BasePost from '../Post/BasePost';
import PollPost from '../Post/PollPost';
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
                        console.log('activity.type', activity.type);
                        
                        if (activity.type === TradeTypes.BasicTrade) {
                            const trade = activity as TradeType;
                            
                            return (
                                <Trade 
                                    key={trade.id!}
                                    trade={trade}
                                />
                            )
                        }
                        if (activity.type === PostTypes.PollPost) {

                            return (
                                <PollPost 
                                    key={activity.id!}
                                    post={activity} 
                                    toggleFollow={toggleFollow}
                                />
                            )
                        }

                        return (
                            <BasePost 
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