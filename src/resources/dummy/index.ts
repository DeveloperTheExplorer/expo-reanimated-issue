import { faker } from '@faker-js/faker';

import { Activity, Author, BasePost, ChartData, CollectionPost, PortfolioPost, PostType, PostTypes, TradeType, TradeTypes } from '@/types/activity';

export const createTrade = (): TradeType => {

    return {
        id: faker.random.alphaNumeric(8),
        NFT: {
            collectionName: faker.random.word(),
            collectionAddress: '0x' + faker.random.alphaNumeric(40),
            tokenID: faker.random.numeric(4),
            image: faker.image.abstract(256, 256),
            name: '#' + faker.random.numeric(4)
        },
        type: TradeTypes.BasicTrade,
        author: createAuthor(),
        date: Date.now()
    }
}

export const createBasePost = (): BasePost => {
    return {
        id: faker.random.alphaNumeric(8),
        title: faker.random.words(),
        description: faker.hacker.phrase(),
        image: faker.image.abstract(1600, 900),
        type: PostTypes.Post,
        author: createAuthor(),
        date: Date.now(),
        isLiked: false,
        commentsCount: faker.datatype.number({ min: 5, max: 899 }),
        likesCount: faker.datatype.number({ min: 50, max: 9855 })
    }
}

export const createPost = (): PostType => {

    return {
        ...createBasePost(),
        type: PostTypes.Post,
    }
}

export const createChartData = (): ChartData => {

    return {
        prices: new Array(6).fill(0).map(() => Math.random() * 100),
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    }
}

export const createAuthor = (): Author => {

    return {
        id: faker.random.alphaNumeric(8),
        username: faker.internet.userName().substring(0, 12),
        avatar: faker.internet.avatar(),
        isFollowing: Math.random() < 0.5,
        isSubscribed: Math.random() < 0.5,
    }
}

export const createCollectionPost = (): CollectionPost => {

    return {
        ...createBasePost(),
        type: PostTypes.CollectionPost,
        collection: {
            name: faker.random.word(),
            address: '0x' + faker.random.alphaNumeric(40),
            image: faker.image.abstract(256, 256),
            chartData: createChartData()
        },
    }
}

export const createPortfolioPost = (): PortfolioPost => {

    return {
        ...createBasePost(),
        type: PostTypes.PortfolioPost,
        portfolio: {
            chartData: createChartData(),
            nftsBought: faker.datatype.number({ min: 500, max: 1500 }),
            nftsSold: faker.datatype.number({ min: 100, max: 499 }),
            totalProfit: Math.random() * 5
        },
    }
}

export const createActivities = (count: number): Activity[] => {
    const funcs = [createTrade, createPost, createCollectionPost, createPortfolioPost];

    return new Array(count).fill(0).map(
        () => funcs[faker.datatype.number({ max: funcs.length - 1 })]()
    );
}