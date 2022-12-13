export interface User {
    id: string;
    username: string;
    bio?: string;
    walletAddress: `0x${string}`;
    avatar: string;
    banner: string;
    isNew?: boolean;
}

export interface Profile extends User {
    followerCount?: number;
    subscribers?: number;
    subscriptionEnabled?: boolean;
}