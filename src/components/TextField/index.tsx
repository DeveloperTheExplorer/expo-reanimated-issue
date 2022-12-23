import {
    Colors,
    Shadows,
    TextFieldProps
} from 'react-native-ui-lib';
import constants from 'react-native-ui-lib/src/commons/Constants';
import { TextField as Input } from 'react-native-ui-lib/src/incubator';


export default function TextField({
    multiline,
    ...props
}: TextFieldProps) {

    return (
        <Input
            padding-16={constants.isIOS}
            padding-12={constants.isAndroid}
            containerStyle={{
                minHeight: multiline ? 100 : 'auto',
                borderWidth: 2,
                borderColor: Colors.grey80,
                backgroundColor: Colors.bgColor,
                borderRadius: 10,
                ...Shadows.elev2
            }}
            {...props}
        />
    )
}