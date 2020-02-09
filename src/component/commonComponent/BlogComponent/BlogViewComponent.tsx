import React from "react";

import BlogCommentComponent from "./BlogCommentComponent";
import BlogReactionComponent from "./BlogReactionComponent";
import BlogCommentListComponent from "./BlogCommentListComponent";
import TopBlogComponent from "./TopBlogComponent";
import { BlogContextConsumer } from "../../../context/blogContext";

export interface Props { }

const BlogViewComponent: React.FC<Props> = () => {
  return (
    <div className="container mt-3">
      <BlogContextConsumer>
        {(context) => context?.data.map((value, index) => {
          return (
            <div key={value.id} className="card mb-3">
              <TopBlogComponent
                title={value.title}
                image={value.image}
                text={value.text}
                details={value.details}
                bloggerId={value.bloggerId}
              />
              <div className="card-body">
                <div className="row no-gutters">
                  <BlogReactionComponent />
                  <BlogCommentComponent />
                </div>
                <BlogCommentListComponent />
              </div>
            </div>
          )
        })}
      </BlogContextConsumer>
    </div>
  )
}

export default BlogViewComponent;
