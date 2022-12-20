import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Image, Text, View } from 'react-native-ui-lib';

interface Props {
    userID: string;
    username: string;
}

export default function ExclusiveTeaser({
    userID,
    username
}: Props) {
    const [dims, setDims] = useState({
        width: 0,
        height: 0
    });

    const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
        const { width, height } = nativeEvent.layout;

        setDims({
            width,
            height
        })
    }

    return (
        <View
            absF
            center
            rounded-lg
            paddingH-12
            style={{
                zIndex: 100,
                overflow: 'hidden'
            }}
            onLayout={handleLayout}
        >
            <View
                absF
                bg-bgColor
                style={{
                    width: dims.width,
                    height: dims.height
                }}
            >
                <Image
                    width={dims.width}
                    height={dims.height}
                    source={
                        require('assets/images/auth/bg.png')
                    }
                    blurRadius={15}
                />
            </View>
            <Text h3>
                Exclusive Content.
            </Text>
            <Text bodyLg center marginT-12>
                Subscribe to @{username} to view their exclusive content!
            </Text>
        </View>
    )
}