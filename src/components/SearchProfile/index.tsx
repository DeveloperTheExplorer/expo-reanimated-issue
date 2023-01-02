import { SearchProfileType, SearchResult } from '@/types/search';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import Avatar from '../Avatar';

interface Props {
    onPress: (searchRes: SearchResult) => void;
    profile: SearchProfileType;
}

export default function SearchProfile({
    profile,
    onPress
}: Props) {

    const {
        avatar,
        username,
        bio
    } = profile;
    
    return (
        <TouchableOpacity
            row
            padding-16
            bg-grey70
            marginT-16
            style={{
                borderRadius: 10,
            }}
            onPress={onPress}
        >
            <Avatar 
                size={42}
                uri={avatar}
            />
            <View 
                flexS 
                marginL-12
                style={{
                    overflow: 'hidden'
                }}
            >
                <Text bold>
                    {username}
                </Text>
                <Text 
                    marginT-6
                    bodySm 
                    numberOfLines={1}
                >
                    {bio}
                </Text>
            </View>
        </TouchableOpacity>
    )
}