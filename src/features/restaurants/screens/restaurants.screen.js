import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info.card.component';
import styled from 'styled-components/native';


const SafeArea=styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SearchContainer=styled.View`
padding:16px;
`;
const RestaurantListContainer=styled.View`
padding:16px;
flex:1;
`;

export const RestaurantsScreen=()=>(

    <SafeArea>
      <SearchContainer>
        <Searchbar/>
      </SearchContainer>    
      <RestaurantListContainer>
      <RestaurantInfoCard/>
      </RestaurantListContainer>
    </SafeArea>
)

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      marginTop: StatusBar.currentHeight
    },
    listView:{
      flex:1,
      padding:16
    }
  
  });