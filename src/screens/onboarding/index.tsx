import React, { useContext, useState } from 'react';
import { 
    SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    Button,
    Wizard
} from 'react-native-ui-lib';
import Animated, { 
    SequencedTransition,
    SlideInLeft,
    SlideOutLeft,
} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

import { ScreenProps } from '@/types/screens';
import { userStore } from '@/hooks/useSession';
import AboutStep from './steps/about';
import InterestsStep from './steps/interests';
import GoalsStep from './steps/goals';

import Logo from 'assets/vectors/logo/vertical.svg';
import { s } from '@/styles';
import styles from './styles';

export default function OnboardingScreen({ navigation }: ScreenProps<'Onboarding'>) {
    const [step, setStep] = useState(0);
    const { user, dispatch } = useContext(userStore);
    const isLastStep = step === 2;

    const logout = () => {
        dispatch(
            {
                type: 'LOGOUT'
            }
        );
    }

    const getStepEnabled = (index: number) => {
        if (step > index) {
            return Wizard.States.COMPLETED;
        }
        if (step === index) {
            return Wizard.States.ENABLED;
        }
        return Wizard.States.DISABLED;
    }

    const goToStep = (newStep: number) => {
        if (newStep === 3) {
            navigation.navigate('Tabs');

            return;
        }

        setStep(newStep);
    }
    
    return (
        <SafeAreaView style={s.safeArea}>
            <View paddingH-0 style={s.container}>
                <StatusBar style="auto" />
                <View
                    flexG
                    centerH
                    paddingH-42
                    style={{
                        maxHeight: '70%'
                    }}
                >
                    <Logo
                        width={83}
                        height={69}
                    />
                    <Text
                        h4
                        marginT-24
                    >
                        Let's get to know you!
                    </Text>
                    <Wizard 
                        containerStyle={styles.wizardContainer}
                        testID={'uilib.wizard'} 
                        activeIndex={step} 
                        onActiveIndexChanged={ (index: number) => setStep(index) }
                    >
                        <Wizard.Step
                            state={getStepEnabled(0)}
                            label={'About You'} 
                        />
                        <Wizard.Step
                            state={getStepEnabled(1)} 
                            label={'Your Goal'} 
                        />
                        <Wizard.Step
                            state={getStepEnabled(2)}
                            label={'Your Interests'} 
                        />
                    </Wizard>

                    <View 
                        row
                    >
                        <View
                            marginT-24
                            style={
                                {
                                    width: '100%'
                                }
                            }
                        >
                            {
                                step === 0 && (
                                    <AboutStep userObj={user!} />
                                )
                            }
                            {
                                step === 1 && (
                                    <GoalsStep />
                                )
                            }
                            {
                                isLastStep && (
                                    <InterestsStep />
                                )
                            }
                        </View>
                    </View>
                </View>

                <View
                    row
                    paddingH-42
                    w-full
                >
                    {
                        step !== 0 && (
                            <Animated.View
                                entering={SlideInLeft}
                                exiting={SlideOutLeft}
                                layout={SequencedTransition}
                                style={
                                    {
                                        marginRight: 12
                                    }
                                }
                            >
                                <Button
                                    bg-bgColor
                                    primary
                                    bold
                                    onPress={() => goToStep(step - 1)}
                                    label='Previous'
                                />
                            </Animated.View>
                        )
                    }
                    <Animated.View
                        layout={SequencedTransition}
                        style={
                            {
                                marginRight: 12,
                                flex: 1
                            }
                        }
                    >
                        <Button
                            flexG
                            onPress={() => goToStep(step + 1)}
                        >
                            {
                                isLastStep && (
                                    <AntDesign 
                                        name="checkcircle" 
                                        size={24} 
                                        color="white"
                                    />
                                )
                            }
                            <Text 
                                marginL-12
                                bgColor={!isLastStep}
                                secondary={isLastStep}
                                bold
                            >
                                {isLastStep ? 'Complete' : 'Continue'}
                            </Text>
                        </Button>
                    </Animated.View>
                </View>
            </View>
        </SafeAreaView>
    );
}