import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZmQwYTM3ZTBjMmU0ZjYyOGNlMWUwNDQ5Yzk0OWI4MyIsImlhdCI6MTY4MTgyODYwMCwiZXhwIjoxOTk3MTg4NjAwfQ.iLxoaZ3MzthjjtU7uQO5O_6y-kByvKthHoy6SpTTZFE"

export const statesApi = createApi({
    reducerPath: "statesApi",
    tagTypes: ["States"],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ec2-13-50-251-209.eu-north-1.compute.amazonaws.com:8123/api/',
        headers: { Authorization: `Bearer ${token}` }
    }),
    endpoints: (build) => ({
        getStates: build.query({
            query: () => "states",
            providesTags: ["States"]
        }),
        getState: build.query({
            query: (entity_id) => `states/${entity_id}`,
            providesTags: ['States']
        }),
        getHistory: build.query({
            query: (entity_id) => `history/period?filter_entity_id=${entity_id}`,
            providesTags: ['States']
        }),
        changeState: build.mutation({
            query: ({ body, entity_id }) => {
                return {
                    url: `states/${entity_id}`,
                    method: "POST",
                    body,
                }
            },
            invalidatesTags: ["States"]
        }),
    })
});

export const { useGetStatesQuery, useGetStateQuery, useGetHistoryQuery, useChangeStateMutation } = statesApi;