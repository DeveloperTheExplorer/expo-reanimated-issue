import ImageSelector, { ImageFile } from '@/components/ImageSelector';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, Image, Shadows, Text, TouchableOpacity, View } from 'react-native-ui-lib';

interface Props {
    onImage: (imgURL?: ImageFile) => void;
    image?: ImageFile;
}

export default function NewPostImage({
    onImage,
    image
}: Props) {
    const [loading, setLoading] = useState(false);

    return (
        <View
            marginT-24
        >
            <ImageSelector
                setImage={onImage}
                setLoader={setLoading}
            >
                {
                    !image && (
                        <View
                            row
                            spread
                            bg-bgColor
                            paddingV-10
                            paddingH-20
                            centerV
                            rounded-md
                            style={{
                                ...Shadows.elev2.bottom
                            }}
                        >
                            <View row centerV>
                                <Image
                                    marginR-24
                                    width={30}
                                    source={
                                        require('assets/images/icons/Image.png')
                                    }
                                />
                                <Text bodySm bold>
                                    Add an Image
                                </Text>
                            </View>
                            {
                                loading && (
                                    <ActivityIndicator />
                                )
                            }
                        </View>
                    )
                }
            </ImageSelector>
            {
                image && (
                    <View
                        style={styles.imageContainer}
                    >
                        <TouchableOpacity
                            center
                            bg-bgColor
                            style={styles.removeImageBtn}
                            onPress={
                                () => onImage(undefined)
                            }
                        >
                            <AntDesign 
                                name="close" 
                                size={24} 
                                color="black" 
                            />
                        </TouchableOpacity>
                        <Image
                            cover
                            source={{
                                uri: image.uri
                            }}
                        />
                    </View>
                )
            }
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