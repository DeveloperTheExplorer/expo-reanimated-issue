import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated, { FadeInLeft, FadeOutLeft, FadeOutRight } from 'react-native-reanimated';
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native-ui-lib';
import { TextField } from 'react-native-ui-lib/src/incubator';

import { colors } from '@/styles';

const options = [
    'Art',
    'Cards',
    'Collectibles',
    'Crypto',
    'Metaverse',
    'Music',
    'Photography',
    'Sports',
    'Utility',
];
const interestOptions = options.map(
    (op) => {
        return {
            text: op,
            image: 'https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-10/what-is-metaverse.png'
        }
    }
);

interface Props {

}

export default function InterestsStep({ }: Props) {
    const [selected, setSelected] = useState<string[]>([]);
    const [other, setOther] = useState('');

    const handleSelect = (option: string) => {
        const selectedCopy = [...selected];
        const optionIndex = selectedCopy.indexOf(option);

        if (optionIndex !== -1) {
            selectedCopy.splice(optionIndex, 1);

            return setSelected(selectedCopy);
        }

        selectedCopy.push(option);
        setSelected(selectedCopy);
    }

    const handleOtherTextField = (text: string) => {
        setOther(text);
    }

    return (

        <Animated.View
            entering={FadeInLeft.delay(500)}
            exiting={FadeOutRight}
        >
            <Text h4 light>
                Select your interests
            </Text>
            <View 
                marginT-24
                style={styles.optionsContainer}
            >
                {
                    interestOptions.map(
                        ({text, image}) => {
                            const active = selected.includes(text);

                            return (
                                <TouchableOpacity
                                    key={text}
                                    center
                                    bg-fgColor
                                    onPress={() => handleSelect(text)}
                                    style={
                                        [
                                            styles.option,
                                            active && styles.optionActive
                                        ]
                                    }
                                >
                                    <Image
                                        cover
                                        style={styles.optionImg}
                                        source={{
                                            uri: image
                                        }}
                                    />
                                    <Text bold bgColor bodySm>
                                        {text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create(
    {
        optionsContainer: {

            justifyContent: 'space-around',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        option: {
            borderRadius: 50,
            width: 100,
            height: 100,
            marginRight: 10,
            marginBottom: 10,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: 'transparent'
        },
        optionActive: {
            borderColor: colors.primary,
            backgroundColor: colors.primary
        },
        optionImg: {
            position: 'absolute',
            opacity: 0.5,
            width: 100,
            height: 100
        }
    }
);