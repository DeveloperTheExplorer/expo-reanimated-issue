import { useDebounce } from '@/hooks/useDebounce';
import { User } from '@/types';
import { Collection } from '@/types/activity';
import { SearchResult, SearchResultTypes } from '@/types/search';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Incubator, Shadows, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import SearchCollection from '../SearchCollection';
import SearchProfile from '../SearchProfile';


interface Props {
    children?: React.ReactNode;
    placeholder?: string;
    setResult: (res: SearchResult) => void
    searchFunc: (searchText: string) => Promise<SearchResult[]>;
}

export default function Search({
    children,
    placeholder,
    searchFunc,
    setResult,
}: Props) {
    const placeholderText = placeholder || 'Search for people or NFT Collections';
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const search = async (text: string) => {
        if (text.length < 3) {
            return;
        }

        setIsLoading(true);
        try {
            const results = await searchFunc(text);
            
            setSearchResults(results);
        } catch (error) {
            console.log('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    useDebounce(search, [searchText], 1500);
    
    return (
        <View>
            <View
                row
                spread
                marginT-12
                paddingL-12
                bg-bgColor
                rounded-lg
                centerV
                style={{
                    ...Shadows.elev2.bottom
                }}
            >
                <TouchableOpacity
                    center
                    onPress={() => {}}
                >
                    <Feather 
                        name="search" 
                        size={24} 
                        color="black" 
                    />
                </TouchableOpacity>
                <Incubator.TextField
                    placeholder={placeholderText}
                    value={searchText}
                    onChangeText={(text: string) => setSearchText(text)}
                    containerStyle={{
                        flexGrow: 1,
                        padding: 16
                    }}
                />
            </View>
            {
                searchText.length >= 3 &&  !isLoading && searchResults.length === 0 && (
                    <View>
                        <Text h5>
                            No Results Found.
                        </Text>
                    </View>
                )
            }
            {
                searchText.length >= 3 &&  !isLoading && searchResults.length > 0 && (
                    <View>
                        <Text h6 marginT-16>
                            Search Results: 
                        </Text>
                        {
                            searchResults.map(
                                (res) => {
                                    if (res.type === SearchResultTypes.Profile) {
                                        return (
                                            <SearchProfile
                                                key={res.id}
                                                profile={res}
                                                onPress={() => setResult(res)}
                                            />
                                        )
                                    }

                                    if (res.type === SearchResultTypes.Collection) {
                                        return (
                                            <SearchCollection
                                                key={res.address}
                                                collection={res}
                                                onPress={() => setResult(res)}
                                            />
                                        )
                                    }
                                }
                            )
                        }
                    </View>
                )
            }
        </View>
    )
}