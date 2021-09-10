import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
  } from "./restaurant-info-card.styles";



export const RestaurantInfoCard=({restaurant={}})=>{

    const {
        name='Some Restaurant',
        icon=require('../../../../assets/bed.png'),
        photos=require('../../../../assets/food1.jpg'),
        address='100 some Random Street',
        isOpenNow=true,
        rating=4,
        isClosedTemporarily=true
    }=restaurant
const ratingArray=Array.from(new Array(Math.floor(rating)));

    return(
        <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={photos} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={icon} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};