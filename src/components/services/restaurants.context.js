import React,{useState,createContext,useEffect,useMemo, Children} from 'react';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { restaurantsRequest,restaurantsTransform } from './restaurants.service';

export const RestaurantsContext=createContext();
export const RestaurantsContextProvider=({children})=>{
    const [restaurants,setRestaurants]=useState([]);
    const [isLoading,setIsloading]=useState(false);
    const [error,setError]=useState(null);

    const retrieveRestaurants=()=>{
        setIsloading(true);
        setTimeout(()=>{
            restaurantsRequest()
            .then(restaurantsTransform)
            .then((results)=>{
                setIsloading(false);
                setRestaurants(results);
            }).catch(err=>{
                setIsloading(false);
                setError(err);
            })
        },2000)
    };

    useEffect(()=>{
        retrieveRestaurants();
    },[])
    
    return(
        <RestaurantsContext.Provider
        value={{
            restaurants,
            isLoading,
            error,
        }}>
            {children}
        </RestaurantsContext.Provider>
    )

}
