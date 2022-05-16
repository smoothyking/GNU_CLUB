import React from 'react';
import {View,Text} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    align-items: center;
`;

const Posted = styled.View`
    width: 70%;
    height: 100px;
    margin-top: 10%;
    border: 1px solid black;
`;

const Posting = styled.Text`
    position: absolute;
    display: flex;
    font-size: 30px;
`

const Notice = ({navigation}) => {
    return (
        <Main>
            <Posted>
                <Text onPress={() => navigation.navigate('Watch')}>공지1</Text>
            </Posted>
            <Posted>
                <Text onPress={() => navigation.navigate('Watch')}>공지2</Text>
            </Posted>
            <Posting onPress={() => navigation.navigate('Posting')}>+</Posting>
        </Main>
    );
};

export default Notice;