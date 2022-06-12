
import { BeerDetails } from '@src/@types/Beer';
import theme from '../theme/index';

type OrderBy = "Name" | "ABV";

export function returnListOfBeersNoDuplications(beerList: BeerDetails[], orderBy:OrderBy){
    
    let newList:BeerDetails[] = [];
    let isBackgroundMain: boolean = false;

    for(let beerDetail of beerList){
    
        if(newList.filter(item=>item.id===beerDetail.id).length <= 0){

            newList.push({
                ...beerDetail,
                backgroundColor: isBackgroundMain? theme.COLORS.BACKGROUND : theme.COLORS.BACKGROUND
            });
        
            isBackgroundMain = !isBackgroundMain;
        }
    }
    
    return newList.sort((a, b) => {
        if(orderBy === "ABV" && (a.abv && b.abv)){
            return a?.abv - b?.abv;
        }
            return a.name.localeCompare(b.name)     
    });
}