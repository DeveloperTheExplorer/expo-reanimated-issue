import { useContext, useEffect, useState } from 'react';

import { ChartData, TradeType } from '@/types/activity';
import { createTrade, fakePromise } from '@/resources/dummy';
import { userStore } from './useSession';
import { Portfolio } from '@/types';
import constants from '@/resources/data/constants';

interface Params {
    userID?: string;
    autoLoad?: boolean;
}

const chartData: ChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    prices: new Array(6).fill(0).map(() => Math.random() * 100)
};
const initialData: Portfolio = {
    chartData: constants.emptyChartData,
    totalProfit: 0,
    nftsBought: 0,
    nftsSold: 0
}

export const usePortfolio = ({
    autoLoad,
    userID,
}: Params) => {
    const { user } = useContext(userStore);
    const [portfolio, setPortfolio] = useState<Portfolio>(initialData);

    const getPortfolio = async () => {
        const portfolioUserID = userID || user?.id;

        // TODO: fetch portfolio data here
        const portfolioData: Portfolio = await fakePromise({
            chartData,
            totalProfit: 3.2,
            nftsBought: 156,
            nftsSold: 85,
        });
        
        setPortfolio(portfolioData);
    };

    /**
     * Initialize trades
     */
    const initData = () => {
        getPortfolio();
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
        portfolio,
        initData
    }
}