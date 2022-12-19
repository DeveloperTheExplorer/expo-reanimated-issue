import { useEffect, useState } from 'react';

import { TradeType } from '@/types/activity';
import { createTrade } from '@/resources/dummy';

interface Params {
    followingOnly?: boolean;
    authorID?: string;
    autoLoad?: boolean;
}

export const useTrades = ({
    autoLoad,
    followingOnly,
    authorID,
}: Params) => {
    const [trades, setTrades] = useState<TradeType[]>([]);

    /**
     * Temporary function to mimick content is loaded from certain autho
     */
    const assignID = (items: TradeType[]) => {
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
        ) as TradeType[];
    }
    /**
     * Temporary function to mimick content is loaded from certain autho
     */
    const assignFollowing = (acts: TradeType[]) => {
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
        ) as TradeType[];
    }

    const getTrades = (prepend = false, append = false) => {
        let acts = new Array(12).map(createTrade);

        // TODO: this is only for dummy data
        if (authorID) {
            acts = assignID(acts);
        }
        if (followingOnly) {
            acts = assignFollowing(acts);
        }
        if (prepend) {
            acts = [...acts, ...trades];
        }
        if (append) {
            acts = [...trades, ...acts];
        }

        setTrades(acts);
    };

    /**
     * Initialize trades
     */
    const initData = () => {
        getTrades();
    }

    /**
     * Prepend new trades if any to the trades array
     */
    const refreshData = () => {
        getTrades(true);
    }

    /**
     * Append new trades if any to the trades array
     */
    const loadMoreData = () => {
        getTrades(false, true);
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
        trades,
        initData,
        refreshData,
        loadMoreData
    }
}