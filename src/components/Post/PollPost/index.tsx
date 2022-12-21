import { Button, Colors, Text, TouchableOpacity, View } from 'react-native-ui-lib';

import { PollPostType } from '@/types/activity';
import BasePost from '../BasePost';
import styles from './styles';
import { countText } from '@/resources/format';
import { useMemo, useState } from 'react';
import PollOption from './PollOption';


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
    const [votesCount, setVotesCount] = useState(totalVotesCount);
    const [voteOptions, setVoteOptions] = useState(options);
    const [newVote, setNewVote] = useState(userVote || '');
    const [viewMode, setViewMode] = useState<'VOTE' | 'RESULTS'>(newVote !== '' ? 'RESULTS' : 'VOTE');
    const sortedVoteOptions = useMemo(
        () => {
            const votesCopy = [...voteOptions];

            votesCopy.sort(
                (opA, opB) => opB.votes - opA.votes
            );
            return votesCopy;
        }, [totalVotesCount]
    )

    const handleVote = (text: string) => {
        console.log('text', text);
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
                    votes: (op.votes) + 1
                }
            }
        );

        setVoteOptions(updatedOptions);
        setVotesCount(prev => prev + 1);
        setNewVote(text);
        setViewMode('RESULTS');
    }

    const toggleResults = () => {
        setViewMode(
            prev => prev === 'RESULTS' ? 'VOTE' : 'RESULTS'
        );
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
                    viewMode === 'VOTE' && voteOptions.map(
                        (op) => {
                            const isSelected = op.text === newVote;

                            return (
                                <PollOption 
                                    key={op.text}
                                    pollOption={op}
                                    totalVotesCount={totalVotesCount}
                                    showResults={false}
                                    isSelected={isSelected}
                                    handleVote={handleVote}
                                />
                            )
                        }
                    )
                }
                {
                    viewMode === 'RESULTS' && sortedVoteOptions.map(
                        (op) => {
                            const isSelected = op.text === newVote;
                            
                            return (
                                <PollOption 
                                    key={op.text}
                                    pollOption={op}
                                    totalVotesCount={totalVotesCount}
                                    showResults={true}
                                    isSelected={isSelected}
                                    handleVote={handleVote}
                                />
                            )
                        }
                    )
                }
                <Button 
                    marginT-6
                    bg-bgColor
                    primary
                    label='Toggle Results'
                    onPress={toggleResults}
                />
            </View>
        </BasePost>
    )
}