import React, { useEffect } from "react";
import Detail from "../../components/list/Detail";
import { useAuth } from "../../context/AuthContext";
import { useWatchList} from "../../context/WatchListContext"
import { useState } from "react";
import useAsyncStorage from "../../hooks/useAsyncStorage"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadingBar } from "@aws-amplify/ui";

export default function DetailCtrl({
  // Properties
  crypto,
  navigation,
}) {
  const AuthContext = useAuth();
  const WatchListContext = useWatchList();
  const { isAuthenticated } = AuthContext;

  const [isWatchList, setIsWatchList] = useState();
  const [watchListData, setWatchListData] = useState([]);  

  const evaluateWatchList = ()=>{
    const idArray = watchListData
    if(idArray.length < 1) return
    const id = crypto.id    
    const bool = idArray.includes(id)

    if(bool === true) setIsWatchList(true)
    if(bool === false) setIsWatchList(false)

  }

  // Save / update async storage watchListData
  const save = async () => {
    try{
      await AsyncStorage.setItem("watchListData", JSON.stringify(watchListData))
    }catch(err){
      console.log(err)
    }
  }

  // Load / retrieves watchListData storage
  const load = async () => {
    try{
      const getData = await AsyncStorage.getItem('watchListData')
      if(getData !== null){
        setWatchListData(JSON.parse(getData))
      }
    }catch(err){
      console.log(err)
    }
  }

  const toggleSwitch = () => {
    setIsWatchList(previousState => !previousState)
    // If switch is turned on saves crypto.id to async storage
    if(isWatchList === false){
      const id = crypto.id
      const existingArray = [...watchListData]
      const isCoinInArray = existingArray.includes(id)
      if(isCoinInArray === false){
        const updatedArray = [...watchListData, id]
        setWatchListData(updatedArray)
        save()
        console.log("Added",watchListData)
      }
    }
    
     // If switch is turned off removes crypto.id to async storage
    if(isWatchList === true){
      const id = crypto.id
      let existingArray = [...watchListData]
      
      for( var i = 0; i < existingArray.length; i++){ 
        if ( existingArray[i] == crypto.id) {     
          existingArray.splice(i, 1); 
        }
      }
      setWatchListData(existingArray)
      save()
      console.log("Removed",watchListData)
    }
  }

  const showBuy = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Buy", company);
  };

  const showSell = (company) => {
    if (!isAuthenticated) return null;
    navigation.navigate("Sell", company);
  };

  //load / set state of watchListData for first render
  useEffect(()=> {
    load()
  },[])

  useEffect(()=>{
    evaluateWatchList()
  },[watchListData])

  return (
    <Detail
      // METHOD
      showBuy={showBuy}
      showSell={showSell}
      toggleSwitch = {toggleSwitch}
      // PROPERTIES
      crypto={crypto}
      isAuthenticated={isAuthenticated}
      isWatchList = {isWatchList}
      
    />
  );
}
