
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ScreenProps } from '@/types/screens';
import { s } from '@/styles';
import Txt from '@/components/Txt';
import Header from '@/components/Header';
import styles from './styles';
import TriangleDecor from '@/components/Triangle/decor';

export default function TermsScreen({ navigation }: ScreenProps<'Terms'>) {

    return (
        <SafeAreaView style={s.safeArea}>
            <Header 
                title='Terms of Use'
                navigation={navigation}
            />
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <Txt>
                    Last updated: November 25th, 2022
                </Txt>
                <Txt 
                    variant='h3'
                    bold
                    style={styles.headerText}
                >
                    Agreement to Terms
                </Txt>

                <Txt>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus nunc. Aenean suscipit justo sit amet eros suscipit, in iaculis magna interdum. Cras sit amet mi ex. Nullam varius ultrices arcu sed consectetur. Curabitur vestibulum porttitor dui, ut vehicula ante congue vel. Ut sapien justo, posuere gravida vestibulum vitae, pretium at quam. Etiam nec diam lobortis, placerat purus nec, convallis leo. In hac habitasse platea dictumst. Proin vel.
                    {'\n\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus nunc. Aenean suscipit justo sit amet eros suscipit, in iaculis magna interdum. Cras sit amet mi ex. Nullam varius ultrices arcu sed consectetur. Curabitur vestibulum porttitor dui, ut vehicula ante congue vel. Ut sapien justo, posuere gravida vestibulum vitae, pretium at quam. Etiam nec diam lobortis, placerat purus nec, convallis leo. In hac habitasse platea dictumst. Proin vel. 
                    {'\n\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus nunc. Aenean suscipit justo sit amet eros suscipit, in iaculis magna interdum. Cras sit amet mi ex. Nullam varius ultrices arcu sed consectetur. Curabitur vestibulum porttitor dui, ut vehicula ante congue vel. Ut sapien justo, posuere gravida vestibulum vitae, pretium at quam. Etiam nec diam lobortis, placerat purus nec, convallis leo. In hac habitasse platea dictumst. Proin vel. 
                </Txt>
            </ScrollView>
            <View
                style={ styles.triangleContainer }
            >
                <TriangleDecor 
                    rotate='-45deg'
                />
                <TriangleDecor 
                    rotate='-15deg'
                />
            </View>
        </SafeAreaView>
    );
}
