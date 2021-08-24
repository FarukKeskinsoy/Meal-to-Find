import React from 'react'
import styled from 'styled-components/native'
import { Text,StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'


const RestaurantCard=styled(Card)`
background-color:white;
`;
const RestaurantCardCover=styled(Card.Cover)`
padding:20px;
background-color:white;`;

const Title=styled(Text)`
padding:16px;

`;

export const RestaurantInfoCard=({restaurant={}})=>{

    const {
        name='Some Restaurant',
        icon,
        photos=[require('../../../../assets/food1.jpg')],
        address='100 some Random Street',
        isOpenNow=true,
        rating=4,
        isClosedTemporarily
    }=restaurant
    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={photos[0]}/>
            <Title>{name}</Title>
        </RestaurantCard>
        
    );
}
