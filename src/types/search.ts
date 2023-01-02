import { User } from '.';
import { Collection } from './activity';

export enum SearchResultTypes {
    Profile = 'Profile',
    Collection = 'Collection'
}

export interface SearchProfileType extends User {
    type: SearchResultTypes.Profile;
}

export interface SearchCollectionType extends Collection {
    type: SearchResultTypes.Collection;
}

export type SearchResult = SearchCollectionType | SearchProfileType;