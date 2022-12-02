import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = process.env.REACT_APP_API || "http://localhost:3005";

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
    getPostById: builder.query({
      query: (postId) => `/posts/${postId}`
    }),
    addNewPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'post',
        body: newPost
      })
    })
  })
});

export const { useGetPostsQuery, useGetPostByIdQuery, useAddNewPostMutation } = postsApi;