import { faker } from '@faker-js/faker';

import { Activity, Author, BasePost, ChartData, Collection, CollectionPostType, PollOption, PollPostType, PortfolioPostType, PostType, PostTypes, TradeType, TradeTypes } from '@/types/activity';
import { SearchCollectionType, SearchProfileType, SearchResult, SearchResultTypes } from '@/types/search';
import { User } from '@/types';

export const createUser = (): User => {

    return {
        id: faker.random.alphaNumeric(8),
        username: faker.internet.userName().substring(0, 15),
        bio: faker.hacker.phrase(),
        walletAddress: `0x${faker.random.alphaNumeric(40)}`,
        avatar: faker.internet.avatar(),
        banner: faker.image.abstract(1000, 500)
    }
}

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
        image: Math.random() < 0.5 ? faker.image.abstract(1600, 900) : '',
        type: PostTypes.Post,
        author: createAuthor(),
        date: Date.now(),
        isLiked: false,
        commentsCount: faker.datatype.number({ min: 5, max: 899 }),
        likesCount: faker.datatype.number({ min: 50, max: 9855 }),
        // isExclusive: Math.random() < 0.5,
        isExclusive: false,
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

export const createCollection = (): Collection => {
    
    return {
        name: faker.random.word(),
        openseaSlug: faker.random.words().toLowerCase().replaceAll(' ', '-'),
        address: '0x' + faker.random.alphaNumeric(40),
        image: faker.image.abstract(256, 256),
        chartData: createChartData()
    }
}

export const createCollectionPost = (): CollectionPostType => {

    return {
        ...createBasePost(),
        type: PostTypes.CollectionPost,
        collection: createCollection(),
    }
}

export const createPortfolioPost = (): PortfolioPostType => {

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

export const genereatePollOption = (): PollOption => {
    return {
        text: faker.random.words(),
        votes: faker.datatype.number({ min: 5, max: 50 })
    }
}

export const createPollPost = (): PollPostType => {
    const options = new Array(4).fill(0).map(genereatePollOption);
    const totalVotesCount = options.reduce(
        (a, c) => a + c.votes!,
        0
    )

    return {
        ...createBasePost(),
        type: PostTypes.PollPost,
        options,
        totalVotesCount
    }
}

export const createActivities = (count: number): Activity[] => {
    const funcs = [createTrade, createPost, createCollectionPost, createPortfolioPost, createPollPost];

    return new Array(count).fill(0).map(
        () => funcs[faker.datatype.number({ max: funcs.length - 1 })]()
    );
}

export const fakePromise = <T>(value: T, time = 500): Promise<T> => {
    return new Promise(resolve => setTimeout(resolve, time, value));
}

export const createSearchResults = async (): Promise<SearchResult[]> => {
    const options = [createCollection, createUser];

    return new Array(5).fill({}).map(
        () => {
            const rand = Math.round(Math.random());
            const res = options[rand]();

            if (res.id) {
                res.type = SearchResultTypes.Profile;

                return res as SearchProfileType;
            }

            res.type = SearchResultTypes.Collection;

            return res as SearchCollectionType;
        }
    );
}