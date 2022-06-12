import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import NetInfo from "@react-native-community/netinfo";
import Title from '@components/Atomics/Title';




export function NoNetworkConnection(){
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
          const offline = !(state.isConnected && state.isInternetReachable);
          setOfflineStatus(offline);
        });
      
        
      
        return () => removeNetInfoSubscription();
      }, []);
    
    if(!isOffline){
       return null
    }

    return(
        <Container testID='NoNetworkConnection'>
            <Title size='small' style={styleText}>No network connection</Title>
        </Container>
    )
}

const styleText = {
    color: "#FFF",
    fontSize: 24,
    paddingTop: 20
}