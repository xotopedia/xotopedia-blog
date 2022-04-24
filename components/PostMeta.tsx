import React from 'react';
import { PostData } from '../model/PostData';
import { Meta } from './Meta';

export const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  return (<Meta meta={{ title: post.title, desc: post.description, link: post.canonicalUrl, image: post.bannerPhoto, }} />);
};
