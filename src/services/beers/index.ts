import api from "../api";

interface BeerDetails {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
}

interface FilterType {
  food: string;
  beer_name: string;
  abv_gt: number;
}

export const BeersService = {
  getBeersByFilters: async (page: number = 1, perPage: number = 25, filter: FilterType | null) => {
    try {

      let params: any = {};
      if (filter != null) {

        if (filter.abv_gt)
          params.abv_gt = filter.abv_gt;

        if (filter.beer_name)
          params.beer_name = filter.beer_name;

        if (filter.food)
          params.food = filter.food

      }
      params.page = page,
        params.per_page = perPage

        
      const { data } = await api.get(`/beers`, {
        params
      });



      return {
        status: true,
        data,
      };
    } catch (response) {
      return {
        status: false,
        error: "Não foi possível recuperar os dados",
      };
    }
  },
}