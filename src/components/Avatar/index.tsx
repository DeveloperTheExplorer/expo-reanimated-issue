import { Avatar as RNUIAvatar, Colors, View } from 'react-native-ui-lib';


interface Props {
    uri?: string;
    size: number;
    label?: string;
}

export default function Avatar({ uri, size, label }: Props) {

    if (!uri) {
        return (
            <View>
            </View>
        )
    }

    return (
        <RNUIAvatar
            animate
            // style={styles['tabBar-avatar']}
            ribbonLabel={label}
            ribbonStyle={{backgroundColor: Colors.primary}}
            size={size}
            source={
                {
                    uri
                }
            }
        />
    )
}