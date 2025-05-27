import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = process.env.REACT_APP_HASS_TOKEN;

export const statesApi = createApi({
  reducerPath: "statesApi",
  tagTypes: ["States"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_HASS_URL}/api`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getStates: build.query({
      query: () => "states",
      providesTags: ["States"],
    }),
    getState: build.query({
      query: (entity_id) => `states/${entity_id}`,
      providesTags: ["States"],
    }),
    getHistory: build.query({
      query: (entity_id) => `history/period?filter_entity_id=${entity_id}`,
      providesTags: ["States"],
    }),
    changeState: build.mutation({
      query: ({ body, entity_id }) => {
        return {
          url: `states/${entity_id}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["States"],
    }),
    turnLight: build.mutation({
      query: ({ body }) => {
        return {
          url: `/services/light/toggle`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["States"],
    }),
    setHeatTepm: build.mutation({
      query: ({ body }) => {
        return {
          url: `/services/climate/set_temperature`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["States"],
    }),
    turnHeatPump: build.mutation({
      query: ({ body, action }) => {
        return {
          url: `/services/climate/${action}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["States"],
    }),
    controlMusic: build.mutation({
      query: ({ body, action }) => {
        return {
          url: `/services/media_player/${action}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["States"],
    }),
  }),
});

export const {
  useGetStatesQuery,
  useGetStateQuery,
  useGetHistoryQuery,
  useChangeStateMutation,
  useTurnLightMutation,
  useSetHeatTepmMutation,
  useTurnHeatPumpMutation,
  useControlMusicMutation,
} = statesApi;
