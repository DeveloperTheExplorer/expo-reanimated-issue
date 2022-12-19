import { useEffect, useState } from 'react';

import { Activity } from '@/types/activity';
import { createActivities } from '@/resources/dummy';

interface Params {
    followingOnly?: boolean;
    authorID?: string;
    autoLoad?: boolean;
}

export const useActivities = ({
    autoLoad,
    followingOnly,
    authorID,
}: Params) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    /**
     * Temporary function to mimick content is loaded from certain autho
     */
    const assignID = (items: Activity[]) => {
        if (!authorID) {
            return items;
        }
        const author = items[0].author;
        
        author.id = authorID;

        return items.map(
            (act) => {
                return {
                    ...act,
                    author
                }
            }
        ) as Activity[];
    }
    /**
     * Temporary function to mimick content is loaded from certain autho
     */
    const assignFollowing = (acts: Activity[]) => {
        return acts.map(
            (act) => {
                return {
                    ...act,
                    author: {
                        ...act.author,
                        isFollowing: true
                    }
                }
            }
        ) as Activity[];
    }

    const getActivities = (prepend = false, append = false) => {
        let acts = createActivities(12);

        // TODO: this is only for dummy data
        if (authorID) {
            acts = assignID(acts);
        }
        if (followingOnly) {
            acts = assignFollowing(acts);
        }
        if (prepend) {
            acts = [...acts, ...activities];
        }
        if (append) {
            acts = [...activities, ...acts];
        }

        setActivities(acts);
    };

    /**
     * 
     * @param userID The Author's ID
     * @param isFollowing The current status of follow
     */
    const toggleFollow = (userID: string, isFollowing: boolean) => {
        const newIsFollwing = !isFollowing;
        const updatedActivities = activities.map(
            (act) => {
                if (act.author.id !== userID) {
                    return act;
                }

                return {
                    ...act,
                    author: {
                        ...act.author,
                        isFollowing: newIsFollwing
                    }
                }
            }
        );

        setActivities(updatedActivities);
    }
    
    /**
     * Initialize activities
     */
    const initData = () => {
        getActivities();
    }

    /**
     * Prepend new activities if any to the activities array
     */
    const refreshData = () => {
        getActivities(true);
    }

    /**
     * Append new activities if any to the activities array
     */
    const loadMoreData = () => {
        getActivities(false, true);
    }

    useEffect(
        () => {
            if (!autoLoad) {
                return;
            }

            initData();
        }, []
    );

    return {
        activities,
        initData,
        refreshData,
        loadMoreData,
        toggleFollow
    }
}