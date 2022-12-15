import { Portfolio } from '.';

export interface ChartData {
    labels: string[];
    prices: number[];
}

export interface Collection {
    name: string;
    image: string;
    address: string;
    chartData: ChartData;
}

export interface PollOption {
    text: string;
    votes?: number;
}

export enum PostTypes {
    Post = 'Post',
    CollectionPost = 'CollectionPost',
    PortfolioPost = 'PortfolioPost',
    PollPost = 'PollPost',
};
export enum TradeTypes {
    BasicTrade = 'BasicTrade'
};
export type ActivityTypes = PostTypes | TradeType;

export interface BaseActivity {
    id?: string;
    author: {
        id: string;
        username: string;
        avatar: string;
    };
    date: number;
}

export interface TradeType extends BaseActivity {
    NFT: {
        collectionName: string;
        collectionAddress: string;
        address: string;
        image: string;
        edition: string;
    };
    type: TradeTypes.BasicTrade;
}

export interface BasePost extends BaseActivity {
    title: string;
    description: string;
    image?: string;
    type: PostTypes;
}

export interface PostType extends BasePost {
    type: PostTypes.Post;
}

export interface CollectionPost extends BasePost {
    collection: Collection;
    type: PostTypes.CollectionPost;
}

export interface PortfolioPost extends BasePost {
    portfolio: Portfolio;
    type: PostTypes.PortfolioPost;
}

export interface PollPost extends BasePost {
    options: PollOption[];
    totalVotesCount?: number;
    userVote?: string;
    type: PostTypes.PortfolioPost;
}

export type PostActivity = PostType | CollectionPost | PortfolioPost | PollPost
export type Activity = TradeType | PostActivity;
