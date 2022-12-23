
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
    Button, Image, Shadows, Text, View
} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';

import { ScreenProps } from '@/types/screens';
import Header from '@/components/Header';
import { s } from '@/styles';
import TextField from '@/components/TextField';
import Divider from '@/components/Divider';
import NewPostImage from '@/components/NewPost/NewPostImage';
import { NewPostType, PostTypes } from '@/types/activity';

import styles from './styles';
import { ImageFile } from '@/components/ImageSelector';
import SubToggle from '@/components/NewPost/SubToggle';

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
];

const initialPost: NewPostType = {
    title: '',
    description: '',
    type: PostTypes.Post,
}

export default function NewPost({ navigation }: ScreenProps<'NewPost'>) {
    const [post, setPost] = useState<NewPostType>(initialPost);
    
    const handleTitle = (text: string) => {
        setPost(
            prev => ({
                ...prev,
                title: text
            })
        )
    }

    const handleDescription = (text: string) => {
        setPost(
            prev => ({
                ...prev,
                description: text
            })
        )
    }

    const handleImage = (imgURL?: ImageFile) => {
        setPost(
            prev => ({
                ...prev,
                image: imgURL
            })
        )
    }

    const handleExclusive = (isExclusive: boolean) => {
        setPost(
            prev => ({
                ...prev,
                isExclusive
            })
        )
    }
    
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
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingVertical: 20,
                        paddingBottom: 200,
                        paddingHorizontal: 32
                    }}
                >
                    <TextField 
                        placeholder='Add Title'
                        value={post.title}
                        onChangeText={handleTitle}
                    />
                    <TextField 
                        marginT-24
                        multiline
                        placeholder='Add a Description'
                        value={post.description}
                        onChangeText={handleDescription}
                    />
                    <NewPostImage 
                        image={post.image}
                        onImage={handleImage}
                    />

                    <Divider 
                        marginT-48
                        label='Attatchments'
                    />

                    {
                        post.type === PostTypes.Post && attatchments.map(
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
                                            ...Shadows.elev2.bottom
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

                <View 
                    absH 
                    absB 
                    bg-bgColor 
                    paddingH-32 
                    paddingB-64 
                    style={{
                        ...Shadows.elev2.top
                    }}
                >
                    <SubToggle 
                        isExclusive={post.isExclusive}
                        setExclusive={handleExclusive}
                    />
                    <Button 
                        label='Post'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
