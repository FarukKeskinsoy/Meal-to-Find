import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea.component";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { useContext } from "react";
import { RestaurantsContext } from "../../../components/services/restaurants.context";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const {isLoading,error,restaurants}=useContext(RestaurantsContext)

  return(
    <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
    data={restaurants}
    renderItem={({item})=>{

    return(<RestaurantInfoCard
    restaurant={item}
    />);
    }}
    keyExtractor={(item)=>item.name}
    contentContainerStyle={{padding:16}}
    />
      
    
  </SafeArea>
  )
}
 
