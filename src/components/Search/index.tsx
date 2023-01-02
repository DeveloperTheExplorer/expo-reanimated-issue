import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Incubator, Shadows, Text, TouchableOpacity, View } from 'react-native-ui-lib';

import { useDebounce } from '@/hooks/useDebounce';
import { User } from '@/types';
import { Collection } from '@/types/activity';
import { SearchResult, SearchResultTypes } from '@/types/search';
import { Feather } from '@expo/vector-icons';
import SearchCollection from '../SearchCollection';
import SearchProfile from '../SearchProfile';
import constants from '@/resources/data/constants';


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

    const debounceLoading = useDebounce(search, [searchText], 1500);
    
    return (
        <View
            flexS
        >
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
                searchText.length >= 3 && !isLoading && !debounceLoading && searchResults.length === 0 && (
                    <View marginT-16>
                        <Text h5>
                            No Results Found.
                        </Text>
                    </View>
                )
            }
            {
                searchText.length >= 3 &&  !isLoading && searchResults.length > 0 && (
                    <View 
                        flexS
                        style={{
                            height: constants.screenHeight - 225,
                        }}
                    >
                        <Text h6 marginT-32>
                            Search Results: 
                        </Text>
                        <ScrollView
                            style={{
                                marginTop: 12
                            }}
                            contentContainerStyle={{
                                paddingBottom: 100
                            }}
                        >
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
                        </ScrollView>
                    </View>
                )
            }
        </View>
    )
}