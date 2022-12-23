
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
    Button, Image, Shadows, Text, View
} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';

import { ScreenProps } from '@/types/screens';
import Header from '@/components/Header';
import styles from './styles';
import { s } from '@/styles';
import TextField from '@/components/TextField';
import Divider from '@/components/Divider';

const attatchments = [
    {
        val: 'nftChart',
        text: 'NFT Chart',
        image: require('assets/images/icons/Chart.png')
    },
    {
        val: 'portfolio',
        text: 'Your Portfolio',
        image: require('assets/images/icons/PieChart.png')
    },
    {
        val: 'poll',
        text: 'a Poll',
        image: require('assets/images/icons/Poll.png')
    },
]

export default function NewPost({ navigation }: ScreenProps<'NewPost'>) {
    return (
        <SafeAreaView style={s.safeArea}>
            <StatusBar style="auto" />
            <Header 
                title='Make a post' 
                navigation={navigation}            
            />
            <View 
                flexG
                paddingB-24
                spread
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingVertical: 20,
                        paddingHorizontal: 32
                    }}
                >
                    <TextField 
                        placeholder='Add Title'
                    />
                    <TextField 
                        marginT-24
                        multiline
                        placeholder='Add a Description'
                    />
                    <Button
                        marginT-24
                        bg-bgColor
                        paddingV-10
                        style={{
                            justifyContent: 'flex-start',
                            ...Shadows.elev2
                        }}
                    >
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
                    </Button>

                    <Divider 
                        marginT-48
                        label='Attatchments'
                    />

                    {
                        attatchments.map(
                            (item) => {
                                const {
                                    val,
                                    text,
                                    image
                                } = item;
                                
                                return (
                                    <Button
                                        marginT-24
                                        bg-bgColor
                                        paddingV-10
                                        key={val}
                                        style={{
                                            justifyContent: 'flex-start',
                                            ...Shadows.elev2
                                        }}
                                    >
                                        <Image
                                            marginR-24
                                            width={30}
                                            source={image}
                                        />
                                        <Text bodySm bold>
                                            Attatch {text}
                                        </Text>
                                    </Button>
                                )
                            }
                        )
                    }
                </ScrollView>

                <View paddingH-32>
                    <Button 
                        label='Post'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
