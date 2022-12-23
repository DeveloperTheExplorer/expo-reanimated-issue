import { PollOption } from '@/types/activity';
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { Button, Colors, Incubator, Shadows, Switch, Text, TouchableOpacity, View } from 'react-native-ui-lib';

interface Props {
    pollOptions?: PollOption[];
    onChange: (polls: PollOption[]) => void
}

export default function PollOptions({
    pollOptions,
    onChange
}: Props) {

    const preload = () => {
        const polls: PollOption[] = [
            {
                text: '',
                votes: 0
            },
            {
                text: '',
                votes: 0
            },
        ];
        onChange(polls);
    }

    const handleTextUpdate = (text: string, index: number) => {
        const pollsCopy = [...pollOptions!];
        const poll = { 
            text,
            votes: 0
        };

        poll.text = text;
        pollsCopy.splice(index, 1, poll);

        onChange(pollsCopy);
    }

    const addOption = () => {
        if (pollOptions!.length >= 8) {
            return;
        }
        const poll = {
            text: '',
            votes: 0
        };

        onChange(
            [...pollOptions!, poll]
        )
    }

    const removePoll = (index: number) => {
        if (pollOptions?.length === 2) {
            return;
        }
        const pollsCopy = [...pollOptions!];

        pollsCopy.splice(index, 1);
        onChange(pollsCopy);
    }

    useEffect(
        () => {
            if (!pollOptions) {
                preload();
            }
        }, [!!pollOptions]
    );

    return (
        <View
            paddingV-16
        >
            {
                pollOptions && pollOptions.map(
                    (op, i) => {
                        const {
                            text
                        } = op;

                        return (
                            <View
                                row
                                spread
                                marginT-12
                                paddingR-12
                                bg-bgColor
                                rounded-lg
                                centerV
                                style={{
                                    ...Shadows.elev2.bottom
                                }}
                                key={`option-${i}`}
                            >
                                <Incubator.TextField 
                                    placeholder={`Option #${i + 1}`}
                                    value={text}
                                    onChangeText={(text: string) => handleTextUpdate(text, i)}
                                    containerStyle={{
                                        flexGrow: 1,
                                        padding: 16,
                                        marginRight: 12
                                    }}
                                />
                                <TouchableOpacity
                                    center
                                    onPress={() => removePoll(i)}
                                >
                                    <AntDesign
                                        name="close"
                                        size={24}
                                        color={Colors.grey30}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                )
            }
            <Button
                marginT-12
                bg-bgColor
                primary
                bold
                label='Add Option'
                onPress={addOption}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 15,
    },
    removeImageBtn: {
        position: 'absolute',
        zIndex: 10,
        top: 10,
        right: 10,
        width: 42,
        height: 42,
        borderRadius: 21
    }
})