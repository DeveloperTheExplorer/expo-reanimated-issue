import {
    Colors,
    Shadows,
    TextFieldProps,
    Incubator
} from 'react-native-ui-lib';
import constants from 'react-native-ui-lib/src/commons/Constants';


export default function TextField({
    multiline,
    ...props
}: TextFieldProps) {

    return (
        <Incubator.TextField
            padding-16={constants.isIOS}
            padding-12={constants.isAndroid}
            multiline={multiline}
            containerStyle={{
                minHeight: multiline ? 100 : 'auto',
                borderWidth: 2,
                borderColor: Colors.grey80,
                backgroundColor: Colors.bgColor,
                borderRadius: 10,
                textAlignVertical: 'top',
                multiline: true,
                ...Shadows.elev2.bottom
            }}
            {...props}
        />
    )
}