import { ApiFootball } from "../api/api";
export const authApi = ApiFootball.injectEndpoints({
  endpoints: (builder) => ({
    fixtures: builder.query({
      query: () => ({
        url: `fixtures?filters=todayDate`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFixturesQuery } = authApi;
