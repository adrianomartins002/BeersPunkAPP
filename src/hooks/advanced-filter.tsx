import React from 'react';
import { createContext, ReactNode, useContext, useState } from "react";

interface BeerFilter {
    food: string;
    beer_name: string;
    abv_gt: number;
    order_by: "name" | "abv" 
}

interface BeerFilterContextType {
    beerFilter: BeerFilter | null;
    setBeerFilter: Function
}

const initialFilter: BeerFilterContextType = {
    beerFilter: null,
    setBeerFilter: ()=>{}
}

export const BeerFilterContext = createContext<BeerFilterContextType>(initialFilter);

type FeedProviderProps = {
    children: ReactNode;
}

function BeerFilterProvider({ children }: FeedProviderProps) {
    const [beerFilter, setBeerFilter] = useState(null);

    return (
        <BeerFilterContext.Provider value={{
            beerFilter,
            setBeerFilter
        }}>
            {children}
        </BeerFilterContext.Provider>
    )

}

function useBeerFilter() {
    const { beerFilter, setBeerFilter } = useContext(BeerFilterContext);
    return { beerFilter, setBeerFilter };
}


export { BeerFilterProvider, useBeerFilter };