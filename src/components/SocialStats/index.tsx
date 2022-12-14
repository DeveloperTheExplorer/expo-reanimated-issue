import { formatNumber } from '@/resources/format';
import { Text, TouchableOpacity } from 'react-native-ui-lib';

interface Props {
    label: string | React.ReactNode;
    value?: number;
    onPress?: () => void;
    bold?: boolean;
    reverse?: boolean;
}

export default function SocialStats({
    label,
    value,
    onPress,
    bold,
    reverse
}: Props) {

    const labelNode = typeof label === 'string' ? (
        <Text>
            {label}
        </Text>
    ) : label;
    const valueNode = value === undefined ? 0 : formatNumber(value);

    return (
        <TouchableOpacity
            row
            onPress={onPress}
        >
            {
                reverse && labelNode
            }
            <Text
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