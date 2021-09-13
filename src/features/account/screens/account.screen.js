
import React ,{useState}from "react";
import LottieView from 'lottie-react-native';
//import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet } from 'react-native'


import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  const [visible,setVisible]=useState(true);

  return (
    <AccountBackground>
    <AccountCover />

    <AnimationWrapper>
          <LottieView
    key="animation"
    autoPlay
    loop
    resizeMode="cover"
    source={require("../../../../assets/location.json")}
    />
    {/* <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        source={require("../../../../assets/location.json")}
        speed={1}
      /> */}
      </AnimationWrapper>
    <Title>Meals To Go</Title>
    <AccountContainer>
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => {
          navigation.navigate("Login")
        }
          }
      >
        Login
      </AuthButton>
      <Spacer size="large">
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
};

const styles = StyleSheet.create({
  lottie: {
   flex:1,
   padding:0
    
  }
});