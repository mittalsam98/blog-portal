import React from 'react';
import { BlogProviderContextInterface } from '../interface/BlogProviderInterface';
import { BlogService } from '../service/blogService';

export const initialState = {
    data: BlogService.getBlogList(),
    comment: BlogService.getCommentList(),
};

export const BlogContext = React.createContext<BlogProviderContextInterface | null>(
    initialState,
);

export const BlogContextProvider = BlogContext.Provider;
export const BlogContextConsumer = BlogContext.Consumer;


