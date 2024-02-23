import { ApiSuccer } from "../api/api";
export const authApi = ApiSuccer.injectEndpoints({
  endpoints: (builder:any) => ({
    Players: builder.query({
      query: () => ({
        url: `players?include=nationality;position`,
        method: "GET",
      }),
    }),
    search: builder.query({
      query: (query:any) => ({
        url: `players/search/${query}?include=nationality;position`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePlayersQuery, useSearchQuery } = authApi;
