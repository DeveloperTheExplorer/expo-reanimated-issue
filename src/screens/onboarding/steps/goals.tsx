import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInLeft, FadeOutLeft, FadeOutRight } from 'react-native-reanimated';
import {
    Checkbox,
    View,
    Text
} from 'react-native-ui-lib';

import { colors } from '@/styles';
import TextField from '@/components/TextField';

const options = [
    'I want to make friends',
    'I want to share my NFT collection',
    'I want to learn more about NFTs',
    'I want to teach about NFTs',
    'Other',
]

interface Props {

}

export default function GoalsStep({ }: Props) {
    const [checks, setChecks] = useState<string[]>([]);
    const [other, setOther] = useState('');

    const handleSelect = (option: string) => {
        const checksCopy = [...checks];
        const optionIndex = checksCopy.indexOf(option);

        if (optionIndex !== -1) {
            checksCopy.splice(optionIndex, 1);

            return setChecks(checksCopy);
        }

        checksCopy.push(option);
        setChecks(checksCopy);
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
                What brought you to Mintall?
            </Text>

            <View
                marginT-32
            >
                {
                    options.map(
                        (val) => {

                            return (
                                <Checkbox
                                    key={val}
                                    size={26}
                                    borderRadius={4}
                                    iconColor={colors.secondary}
                                    containerStyle={styles.checkbox}
                                    value={checks.includes(val)}
                                    onValueChange={() => handleSelect(val)}
                                    label={val}
                                />
                            )
                        }
                    )
                }
                {
                    checks.includes('Other') && (
                        <TextField
                            marginT-12
                            bold
                            body
                            value={other}
                            onChangeText={handleOtherTextField}
                            placeholder='I want to...'
                        />
                    )
                }
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create(
    {
        checkbox: {
            marginTop: 24
        }
    }
)