import { Button, Text, TouchableOpacity, View } from 'react-native-ui-lib';

import { PollPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import { countText } from '@/resources/format';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


interface Props {
    post: PollPostType;
    toggleFollow: (userID: string, isFollowing: boolean) => void
}

export default function PollPost({
    post,
    toggleFollow
}: Props) {
    const {
        options,
        totalVotesCount,
        userVote
    } = post;
    const [votesCount, setVotesCount] = useState(totalVotesCount || 0);
    const [voteOptions, setVoteOptions] = useState(options);
    const [newVote, setNewVote] = useState(userVote || '');

    const handleVote = (text: string) => {
        if (newVote !== '') {
            return;
        }
        const optionsCopy = [...voteOptions];
        const updatedOptions = optionsCopy.map(
            (op) => {
                if (op.text !== text) {
                    return op;
                }

                return {
                    text: op.text,
                    votes: (op.votes || 0) + 1
                }
            }
        );

        setVoteOptions(updatedOptions);
        setVotesCount(prev => prev + 1);
        setNewVote(text);
    }

    const revealResults = () => {
        
    }
    
    return (
        <BasePost
            post={post}
            toggleFollow={toggleFollow}
        >
            <View marginT-12 style={styles.container}>
                <View row>
                    <Text h5 primary marginR-5>
                        {votesCount}
                    </Text>
                    <Text h5>
                        {countText('Participant', votesCount)}
                    </Text>
                </View>
                {
                    voteOptions.map(
                        (op) => {
                            const {
                                text
                            } = op;
                            const isUserVote = newVote === text;
                            
                            return (
                                <TouchableOpacity
                                    row
                                    marginT-12
                                    key={text}
                                    style={[
                                        styles.option,
                                        isUserVote && styles.activeOption
                                    ]}
                                    onPress={
                                        () => handleVote(text)
                                    }
                                >
                                    {
                                        isUserVote && (
                                            <View marginR-6>
                                                <AntDesign 
                                                    name="checkcircle" 
                                                    size={24} 
                                                    color="white" 
                                                />
                                            </View>
                                        )
                                    }
                                    <Text
                                        bgColor={isUserVote}
                                    >
                                        { text }
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
                <Button 
                    marginT-6
                    bg-bgColor
                    primary
                    label='View Results'
                    onPress={revealResults}
                />
            </View>
        </BasePost>
    )
}