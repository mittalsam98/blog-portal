import React from "react";
import ProfileImage from '../../../asset/profile-img.jpg';
import BlogListComponent from "./BlogListComponent";

export interface Props {
  image: string,
  title: string,
  text: string,
  details: string,
  bloggerId: string,
}

const ImageContainer = (image_url) => {
  return (
    <div className="col-lg-4">
      <img className="img-fluid"
        style={{ width: "300px", height: "300px", paddingTop: "20px" }}
        src={image_url} alt="profile"
      />
    </div>
  )
}


const TopBlogComponent: React.FC<Props> = ({ image, title, text, details, bloggerId }) => {
  return (
    <div className="container">
      <div className="row">
        {image ? ImageContainer(image) : ''}
        <div className={image ? 'col-lg-8' : 'col-lg-12'}>
          <div className="pt-5">
            <div className="row no-gutters">
              <div className="col-lg-1" >
                <img
                  style={{ height: '70px', width: '70px' }}
                  src={ProfileImage}
                  alt="Post"
                  className="rounded-circle" />
              </div>
              <div className={image ? "col align-self-center pl-4" : "col align-self-center"}>
                <h3>{bloggerId}</h3>
              </div>
            </div>
            <BlogListComponent
              view={"BlogView"}
              title={title}
              text={text}
              details={details}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default TopBlogComponent;
