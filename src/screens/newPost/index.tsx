
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
    Button, Colors, Image, Shadows, Text, TouchableOpacity, View
} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';

import { ScreenProps } from '@/types/screens';
import Header from '@/components/Header';
import TextField from '@/components/TextField';
import Divider from '@/components/Divider';
import NewPostImage from '@/components/NewPost/NewPostImage';
import { NewPostType, PollOption, PostTypes } from '@/types/activity';
import { ImageFile } from '@/components/ImageSelector';
import SubToggle from '@/components/NewPost/SubToggle';

import { s } from '@/styles';
import styles from './styles';
import PollOptions from '@/components/NewPost/PollOptions';
import { AntDesign } from '@expo/vector-icons';

const attatchments = [
    {
        val: 'nftChart',
        text: 'NFT Chart',
        image: require('assets/images/icons/Chart.png'),
        type: PostTypes.CollectionPost
    },
    {
        val: 'portfolio',
        text: 'Your Portfolio',
        image: require('assets/images/icons/PieChart.png'),
        type: PostTypes.PortfolioPost
    },
    {
        val: 'poll',
        text: 'a Poll',
        image: require('assets/images/icons/Poll.png'),
        type: PostTypes.PollPost
    },
];
const sectionTitles = {
    [PostTypes.CollectionPost]: 'Attach an NFT',
    [PostTypes.PortfolioPost]: 'Attach Your Portfolio',
    [PostTypes.PollPost]: 'Attach a Poll',
}

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

    const handleType = (type: PostTypes) => {
        const newPost = {
            ...post,
            type
        };

        if (type === PostTypes.Post) {
            delete newPost.collection;
            delete newPost.portfolio;
            delete newPost.options;
        }

        setPost(newPost)
    }

    const handlePollOptions = (polls: PollOption[]) => {
        setPost(
            prev => ({
                ...prev,
                options: polls
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
                    }}
                >
                    <View paddingH-32>
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
                    </View>
                    {
                        post.type !== PostTypes.Post && (
                            <View
                                marginT-16
                                marginH-16
                                paddingH-16
                                rounded-lg
                                style={{
                                    borderWidth: 1,
                                    borderColor: Colors.grey70
                                }}
                            >
                                <View
                                    row
                                    paddingT-16
                                >
                                    <Text flexG center h5>
                                        {sectionTitles[post.type]}
                                    </Text>
                                    <TouchableOpacity
                                        center
                                        onPress={() => handleType(PostTypes.Post)}
                                        style={{
                                            marginLeft: 'auto'
                                        }}
                                    >
                                        <AntDesign
                                            name="close"
                                            size={24}
                                            color={Colors.grey30}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {
                                    post.type === PostTypes.PollPost && (
                                        <PollOptions 
                                            pollOptions={post.options}
                                            onChange={handlePollOptions}
                                        />
                                    )
                                }
                            </View>
                        )
                    }

                    <View paddingH-32>
                        {
                            post.type === PostTypes.Post && attatchments.map(
                                (item) => {
                                    const {
                                        val,
                                        text,
                                        image,
                                        type
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
                                            onPress={() => handleType(type)}
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
                    </View>
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