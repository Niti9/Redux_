import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  //reducer path is define here
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    //here query is used to read or get the data
    //getAccounts given by us and then HOOK name
    //will be getAccounts
    getAccounts: builder.query({
      query: () => `accounts`, //accounts is the path of api or url
      
      // Transform used to transform data like sort the amount or id
      //here sorting is by javascript normally 
      //yahan mein id ko sort kar rha hun ascending order mein 
      // " descending order mein hum (b.id -a.id)" likhenge
      transformResponse:(response) =>response.sort((a,b)=>a.id-b.id),
      providesTags: ["accounts"], // to remove 'CACHED QUERIES'
      //kabhi kabhi server se cached version le rha tha baar baar chalane par
      // baar baar data copy show hokar show ho rha tha iss tags se wo remove ho jaayega
      
    }),
    //let's add account
    //mutation used for post , put ,delete
    //get is only a "query"
    addAccount: builder.mutation({
      // parenthesis used befor curly bracket({})
      //to return object not function body
      query: (amount, id) => ({
        url: "accounts",
        method: "POST",
        //body:{amount:amount, id:id}
        //or both are same we use ES6 version where
        //KEY AND VALUE AUTOMATICALLY ASSIGN
        body: { amount, id },
      }),
      invalidatesTags: ["accounts"], //isse puraani caching waale record hat jaayenge
      //to fetch old tags or remove old tags like providesTags will remove
      // invalidatesTags se new value add karne par
      //bina page reload kiye hi kaam karne lagega
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["accounts"],
    }),
    //to update the data we have to destructured id and amount using curly brackets
    updateAccount: builder.mutation({
        query: ({id,amount}) => ({
          url: `accounts/${id}`,
          method: "PATCH",
          body:{amount}
        }),
        invalidatesTags: ["accounts"],
      }),
  }),
});

//auto generated hooks with same name of getAccounts
//here use-Query will be default add in front and end
export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
