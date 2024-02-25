import { ApiFootball } from "../api/api";
export const authApi = ApiFootball.injectEndpoints({
  endpoints: (builder) => ({
    filters: builder.query({
      query: () => ({
        url: `fixtures?include=participants;venue&filters=todayDate`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFiltersQuery } = authApi;
