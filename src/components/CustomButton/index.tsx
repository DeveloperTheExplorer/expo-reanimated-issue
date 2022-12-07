
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import {
    colors,
    ColorVaraints
} from '@/styles';

interface Props extends TouchableOpacityProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    variant?: ColorVaraints;
}

export default function CustomButton({ children, variant, style, ...options }: Props) {
    const selectedVariant: ColorVaraints = variant || 'primary';

    return (
        <TouchableOpacity
            style={
                [
                    {
                        backgroundColor: colors[selectedVariant],
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignSelf: 'stretch',
                        paddingVertical: 16,
                        borderRadius: 5
                    },
                    style
                ]
            }
            {...options}
        >
            {children}
        </TouchableOpacity>
    )
}