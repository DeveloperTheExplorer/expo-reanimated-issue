import { Switch, Text, View } from 'react-native-ui-lib';

interface Props {
    setExclusive: (bool: boolean) => void;
    isExclusive?: boolean;
}

export default function SubToggle({
    isExclusive,
    setExclusive
}: Props) {

    return (
        <View
            row
            spread
            paddingV-16
        >
            <View>
                <Text bold>
                    Subscription Content
                </Text>
                <Text bodySm>
                    Only visible to subscribers.
                </Text>
            </View>
            <Switch 
                value={!!isExclusive}
                onValueChange={setExclusive}
                thumbSize={36}
                height={42}
                width={64}
            />
        </View>
    )
};