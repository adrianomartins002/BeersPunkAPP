
import { BeerDetails } from '@src/@types/Beer';

export function returnListOfBeersNoDuplications(beerList: BeerDetails[]){
    
    let newList:BeerDetails[] = [];
    let isBackgroundMain: boolean = false;

    for(let beerDetail of beerList){
    
        if(newList.filter(item=>item.id===beerDetail.id).length <= 0){

            newList.push({
                ...beerDetail,
                backgroundColor: isBackgroundMain? "#383838": "#232324"
            });
        
            isBackgroundMain = !isBackgroundMain;
        }
    }

    return newList;
}