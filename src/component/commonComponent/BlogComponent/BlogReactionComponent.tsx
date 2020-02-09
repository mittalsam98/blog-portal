import React from "react";
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
export interface Props { }

const BlogReactionComponent: React.FC<Props> = () => {
  return (
    <div className="col-lg-2">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn bg-danger " >
          <FaHeart color={'white'} />
          <span className="badge badge-danger">4</span>
        </button>
        <button type="button" className="btn btn-info">
          <FaHeartBroken />
          <span className="badge badge-info">4</span>
        </button>
      </div>
    </div>
  );
}

export default BlogReactionComponent;
