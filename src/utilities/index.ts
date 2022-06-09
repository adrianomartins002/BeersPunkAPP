
import { BeerDetails } from '@src/@types/Beer';

export function returnListOfBeersNoDuplications(beerList: BeerDetails[]){
    
    let newList:BeerDetails[] = [];

    for(let beerDetail of beerList){
    
        if(newList.filter(item=>item.id===beerDetail.id).length <= 0){
            newList.push(beerDetail);
        }
    }

    return newList;
}