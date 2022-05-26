import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  padding-top: 5%
  `;

const List = styled.View`
  display: flex;
  justify-content: center;
  border: 3px;
  border-color: #9a9a9a;
  margin: 5% 10%;
  max-height: 180px;
`;

const CategoryContainer = styled.View`
  background-color: #CED1CE;
  height: 50px;
  justify-content: center;
`;
const Category = styled.Text`
  margin-left: 5%;
  font-size: 25px;
  color: #4B4B4B;
`;

const ClubList = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState([]);

  // 유저 데이터 가져오기
  const getUserDate = async () => {
    try {
      // const memberPk = AsyncStorage.getItem(pk);
      const response = await fetch(
        `http://15.165.169.129/api/member/1/my_page`
      );
      const json = await response.json();

      //redux 저장 필요
    } catch (error) {
      console.log("error in get Category List: " + error);
    }
  };

  // 카테 고리 가져오기
  const getCategoryList = async () => {
    try {
      const response = await fetch(`http://15.165.169.129/api/categories`);
      const json = await response.json();
      setCategoryList(json.data);
    } catch (error) {
      console.log("error in get Category List: " + error);
    }
  };

  // 시작 시 실행 함수
  useEffect(() => {
    getCategoryList();
    getUserDate();
  }, []);

  return (
    <Container>
      {categoryList.map((category, key) => {
        return (
          <List key={key}>
            <CategoryContainer>
              <Category
                onPress={() =>
                  navigation.navigate("ClubCategory", {
                    categoryName: category.categoryName,
                    categoryPk: category.categoryPk,
                  })
                }
              >
                {category.categoryName} 분야
              </Category>
            </CategoryContainer>
          </List>
        );
      })}
    </Container>
  );
};

export default ClubList;
