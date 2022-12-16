import { formatNumber, nFormatter } from '@/resources/format';
import { ViewStyle } from 'react-native';
import { Text, TouchableOpacity } from 'react-native-ui-lib';

interface Props {
    label: React.ReactNode;
    value?: number;
    onPress?: () => void;
    bold?: boolean;
    bodySm?: boolean;
    reverse?: boolean;
    style?: ViewStyle;
}

export default function SocialStats({
    label,
    value,
    onPress,
    bold,
    bodySm,
    reverse,
    style
}: Props) {

    const labelNode = typeof label === 'string' ? (
        <Text>
            {label}
        </Text>
    ) : label;
    const valueNode = value === undefined ? 0 : nFormatter(value);

    return (
        <TouchableOpacity
            row
            centerV
            onPress={onPress}
            style={style}
        >
            {
                reverse && labelNode
            }
            <Text
                bodySm={bodySm}
                bold={bold}
                marginR-6={!reverse}
                marginL-6={reverse}
            >
                {valueNode}
            </Text>
            {
                !reverse && labelNode
            }
        </TouchableOpacity>
    )
}