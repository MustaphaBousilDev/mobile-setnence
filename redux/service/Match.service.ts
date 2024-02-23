import { ApiSuccer } from "../api/api";
export const authApi = ApiSuccer.injectEndpoints({
  endpoints: (builder) => ({
    fixtures: builder.query({
      query: () => ({
        url: `fixtures?include=participants`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFixturesQuery } = authApi;
