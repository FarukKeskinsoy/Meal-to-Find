import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safeArea.component";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { useContext } from "react";
import { RestaurantsContext } from "../../../components/services/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
 
