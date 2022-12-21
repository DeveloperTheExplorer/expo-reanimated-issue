import { Activity, ActivityTypes, PostTypes, TradeType, TradeTypes } from '@/types/activity';
import { Text, View } from 'react-native-ui-lib';
import BasePost from '../Post/BasePost';
import CollectionPost from '../Post/CollectionPost';
import PollPost from '../Post/PollPost';
import PortfolioPost from '../Post/PortfolioPost';
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
                            
                            return (
                                <Trade 
                                    key={activity.id!}
                                    trade={activity}
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
                        if (activity.type === PostTypes.CollectionPost) {

                            return (
                                <CollectionPost 
                                    key={activity.id!}
                                    post={activity} 
                                    toggleFollow={toggleFollow}
                                />
                            )
                        }
                        if (activity.type === PostTypes.PortfolioPost) {

                            return (
                                <PortfolioPost 
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