import React from 'react';
import {Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const Main = styled.View`
    display: flex;
    align-items: center;
`;

const Header = styled.View`
    width: 75%;
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const List = styled.ScrollView`
    width: 100%;
    margin-left: 30%;
`;

const Posted = styled.View`
    width: 70%;
    height: 100px;
    margin-top: 10%;
    border: 1px solid black;
`;

const Posting = styled.Text`
    font-size: 40px;
`;

const GoBack = styled.Text`
    font-size: 40px;
`;

const Notice = ({navigation}) => {
    return (
        <Main>
            <Header>
                <GoBack onPress={() => navigation.goBack()}>&lt;</GoBack>
                <Posting onPress={() => navigation.navigate('Posting')}>+</Posting>
            </Header>   
            <List>
                <Posted>
                    <Text onPress={() => navigation.navigate('Watch')}>공지1</Text>
                </Posted>
                <Posted>
                    <Text onPress={() => navigation.navigate('Watch')}>공지2</Text>
                </Posted>
            </List>
        </Main>
    );
};

export default Notice;