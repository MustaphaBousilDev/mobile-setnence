import { ApiSuccer } from "../api/api";
export const authApi = ApiSuccer.injectEndpoints({
  endpoints: (builder) => ({
    leagues: builder.query({
      query: () => ({
        url: `leagues`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLeaguesQuery } = authApi;
