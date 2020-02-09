import React from "react";
import DialogComponent from "../../dialogComponent/DialogComponent";

export interface Props {
  view: string,
  title: string,
  text: string,
  details: string,
}

const BlogListComponent: React.FC<Props> = ({ title, text, details, view }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className={view === 'UserView' ? 'pt-4' : ''}>
      <div className={view === 'UserView' ? 'p-3 border' : 'pt-4'} >
        {
          view === 'UserView' ?
            <a href="JavaScript:Void(0)">
              {title}
            </a> :
            <h3>{title}</h3>
        }
        <span className="text-monospace">11 Jan 2020</span>
        <p>{text}
          <span onClick={() => setModalShow(true)} className="font-italic"
            style={{ cursor: 'pointer', color: 'blue' }}>
            <DialogComponent
              view={view}
              show={modalShow}
              size={"5"}
              data={details}
              title={title}
              centered={true}
              btnClass={""}
              btnText={"show more"}
              showFooter={false}
            />
          </span>
        </p>

      </div>
    </div>
  );
}

export default BlogListComponent;
