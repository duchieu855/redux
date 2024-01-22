import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const containerApi = createApi(
    {
        reducerPath: "containerApi",
        baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
        endpoints: (builder) => ({
            getDataContainer: builder.query({
                query: ()=>'products'
            })
        })
    }
)



export  const {useGetDataContainerQuery} = containerApi
