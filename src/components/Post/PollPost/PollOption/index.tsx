import Animated, { Easing, FadeInLeft, FadeOutRight, useAnimatedStyle, useSharedValue, withDelay, withTiming, WithTimingConfig } from 'react-native-reanimated';
import { Colors, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { AntDesign } from '@expo/vector-icons';

import { PollOption as PollOptionType } from '@/types/activity';
import styles from '../styles';
import { useEffect } from 'react';

interface Props {
    pollOption: PollOptionType;
    totalVotesCount: number;
    isSelected?: boolean;
    showResults?: boolean;
    handleVote: (text: string) => void
}

export default function PollOption({
    pollOption,
    totalVotesCount,
    isSelected,
    showResults,
    handleVote
}: Props) {
    const {
        votes,
        text
    } = pollOption;
    const voteRatio = votes / (totalVotesCount || 1);
    const ratioWidth = (voteRatio * 100).toFixed(1);
    const widthValue = 0;
    const animConfig: WithTimingConfig = {
        duration: 750,
        easing: Easing.out(Easing.ease)
    };
    const width = useSharedValue(widthValue);
    const animatedStyle = useAnimatedStyle(
        () => {
            return {
                width: withDelay(250, withTiming(`${width.value}%`, animConfig))
            }
        }
    );

    useEffect(
        () => {
            width.value = showResults ? Number(ratioWidth) : 0;
        }, [showResults]
    )

    return (
        <Animated.View
            entering={FadeInLeft}
            exiting={FadeOutRight}
        >
            <TouchableOpacity
                row
                spread
                marginT-12
                style={[
                    styles.option,
                    isSelected && styles.activeOption
                ]}
                onPress={
                    () => handleVote(text)
                }
            >
                {
                    showResults && (
                        <Animated.View
                            style={[
                                styles.optionRatioView,
                                animatedStyle
                            ]}
                        />
                    )
                }
                <View row flexS centerV marginR-12>
                    {
                        isSelected && (
                            <View marginR-6>
                                <AntDesign
                                    name="checkcircle"
                                    size={18}
                                    color={Colors.primary}
                                />
                            </View>
                        )
                    }
                    <Text flexG>
                        {text}
                    </Text>
                </View>
                {
                    showResults && (
                        <View 
                            row 
                            centerV
                        >
                            <Text primary marginR-4 bodySm>
                                {votes}
                            </Text>
                            <Text grey30 bodySm>
                                ({ratioWidth}%)
                            </Text>
                        </View>
                    )
                }
            </TouchableOpacity>
        </Animated.View>
    )
}