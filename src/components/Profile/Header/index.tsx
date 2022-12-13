import { Button, View, Text } from 'react-native-ui-lib';

import Avatar from '@/components/Avatar';
import { Profile } from '@/types';
import styles from './styles';


interface Props {
    profile: Profile | null;
    isUser?: boolean;
}

export default function ProfileHeader({ profile, isUser }: Props) {


    return (
        <View
            paddingH-42
        >
            <View
                row
                spread
                style={styles.avatarContainer}
            >
                <Avatar
                    uri={profile?.avatar}
                    size={84}
                />
                {
                    !isUser && (
                        <Button 
                            paddingV-8
                            marginB-8
                            label='Follow'
                            style={{
                                alignSelf: 'flex-end'
                            }}
                        />
                    )
                }
            </View>
            <Text h3 marginT-10 bold>
                {profile?.username}
            </Text>
            <Text body marginT-10>
                {profile?.bio}
            </Text>
        </View>
    )
}