import React, { useRef, useState, useEffect,useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { IconButton, Colors } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../components/services/authentication/authentication.context";



const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({navigation}) => {
  const [isFront,setFront]=useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const {user}=useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`,photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    
      <ProfileCamera 
      style={{alignItems:'center',justifyContent:'flex-end',paddingBottom:16}}
      ref={(camera) => (cameraRef.current = camera)} type={isFront? Camera.Constants.Type.front:Camera.Constants.Type.back} ratio={"16:9"}>
         <View style={{flexDirection:'row',alignItems:'center'}}>
         
         
         <IconButton
         
    icon="camera"
    color="grey"
    size={50}
    onPress={snap}
    animated={true}
  />
         <IconButton
    style={{position:'absolute',left:170}}
    icon="camera-switch-outline"
    color="grey"
    size={50}
    onPress={()=>setFront(!isFront)}
    animated={true}
  />
  </View>

      </ProfileCamera>
    
  );
};