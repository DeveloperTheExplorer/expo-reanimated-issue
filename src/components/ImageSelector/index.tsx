import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageEditor } from 'expo-image-editor';

import constants from '@/resources/data/constants';

interface CroppedImage {
    height: number;
    width: number;
    uri: string;
}

export interface ImageFile extends CroppedImage {
    name: string;
    type: string;
}

interface Props {
    setImage: (img: ImageFile) => void;
    aspect?: [number, number];
    quality?: number;
    children: React.ReactNode;
}

export default function ImageSelector({
    setImage,
    aspect,
    quality,
    children
}: Props) {
    const [localImage, setLocalImage] = useState<ImagePicker.ImagePickerAsset>();
    const [editorVisible, setEditorVisible] = useState(false);

    const pickImage = async () => {
        const imagePickerOptions: ImagePicker.ImagePickerOptions = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: aspect && constants.isAndroid,
        }

        if (aspect) {
            imagePickerOptions.aspect = aspect;
        }
        if (quality) {
            imagePickerOptions.quality = quality;
        }

        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);

        console.log(result);

        if (!result.canceled) {
            const resImage = result.assets[0];
            setLocalImage(resImage);

            if (constants.isIOS && aspect) {
                setEditorVisible(true);

                return;
            }
            formatAndReturnImg(resImage.uri, resImage.width, resImage.height);
        }
    };

    const formatAndReturnImg = (imgUri: string, width: number, height: number) => {
        const filename = imgUri.split('/').pop();

        if (!filename) {
            return;
        }
        // Infer the type of the image
        const match = /\.(\w+)$/.exec(filename || '');
        const type = match ? `image/${match[1]}` : `image`;
        const imageFileObj = {
            uri: imgUri,
            name: filename,
            type,
            width,
            height
        };

        console.log('imageFileObj', imageFileObj);
        
        setImage(imageFileObj);
    }

    return (
        <React.Fragment>
            <TouchableOpacity
                onPress={pickImage}
                style={{
                    flexGrow: 1
                }}
            >
                {children}
            </TouchableOpacity>
            {
                aspect && (
                    <ImageEditor
                        visible={editorVisible}
                        onCloseEditor={() => setEditorVisible(false)}
                        allowedTransformOperations={['crop']}
                        allowedAdjustmentOperations={[]}
                        imageUri={localImage?.uri}
                        fixedCropAspectRatio={aspect[0] / aspect[1]}
                        lockAspectRatio={true}
                        minimumCropDimensions={{
                            width: 100,
                            height: 100,
                        }}
                        onEditingComplete={(result: CroppedImage) => {
                            const {
                                uri,
                                width,
                                height
                            } = result;
        
                            formatAndReturnImg(uri, width, height);
                            setEditorVisible(false);
                        }}
                        mode="crop-only"
                    />
                )
            }
        </React.Fragment>
    )
}