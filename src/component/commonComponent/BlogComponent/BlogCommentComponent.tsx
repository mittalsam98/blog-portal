import React, { useState } from "react";
import useWindowDimension from "../useWindowDimension";
import { FaComment, FaShareAlt } from 'react-icons/fa'

export interface Props { }

type FormElem = React.FormEvent<HTMLFormElement>;

const BlogCommentComponent: React.FC<Props> = () => {
  const [comment, setComment] = useState<string>('');
  const submitComment = (e: FormElem): void => {
    e.preventDefault()
    console.log(comment);
    setComment('');
  }
  const { width } = useWindowDimension();

  return (
    <>
      <div className="col-lg-8 ">
        <div className={width <= 800 ? 'py-2' : ''}>
          <input
            style={{
              /*TODO: style comment input here*/
            }}
            value={comment}
            onChange={(e) => { setComment(e.target.value) }}
            className="form-control"
            placeholder="Write Your Comment Here"
          />
        </div>
      </div>
      <div className="col-lg-2 " >
        <div className={width <= 900 ? '' : 'float-right'}>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              onClick={() => submitComment}
              className="btn btn-primary">
              <FaComment />
              <span className="badge badge-info">4</span>
            </button>
            <button
              type="button"
              className="btn btn-success"
            >
              <FaShareAlt />
              <span className="badge badge-success">4</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCommentComponent;
