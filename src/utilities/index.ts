
import { BeerDetails } from '@src/@types/Beer';
import theme from '../theme/index';


export function returnListOfBeersNoDuplications(beerList: BeerDetails[]){
    
    let newList:BeerDetails[] = [];
    let isBackgroundMain: boolean = false;

    for(let beerDetail of beerList){
    
        if(newList.filter(item=>item.id===beerDetail.id).length <= 0){

            newList.push({
                ...beerDetail,
                backgroundColor: isBackgroundMain? theme.COLORS.BACKGROUND : theme.COLORS.BACKGROUND_SECONDARY
            });
        
            isBackgroundMain = !isBackgroundMain;
        }
    }

    return newList;
}