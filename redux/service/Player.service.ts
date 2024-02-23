import { ApiSuccer } from "../api/api";
export const authApi = ApiSuccer.injectEndpoints({
  endpoints: (builder) => ({
    Players: builder.query({
      query: () => ({
        url: `players?include=nationality;position`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePlayersQuery } = authApi;
