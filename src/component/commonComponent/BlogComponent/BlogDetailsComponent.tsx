import React from "react";

export interface Props {
  detail: string,
}

const BlogDetailsComponent: React.FC<Props> = ({ detail }) => {
  return (
    <div className="container pt-3">
      <p>
        {detail}
      </p>
    </div>
  )
}



export default BlogDetailsComponent;

// import React from "react";

// export interface Props {
//   title: string,
//   detail: string,
//   preview: boolean,

// }

// const BlogDetailsComponent: React.FC<Props> = ({ title, detail, preview }) => {
//   return (
//     <div className={preview === true ? "form-group" : "form-group collapse"} id="collapseExample">
//       <div className="col-12 ">
//         <div>
//           <div
//             className={preview === true ? "form-group" : "form-group collapse"}
//             id="testDetailsDiv"
//           >
//             <div className="card">
//               <div
//                 className="card-header bg-secondary text-white text-justify text-capitalize"
//               >
//                 <header>{title}</header>
//               </div>
//               <div className="card-body">
//                 <blockquote className="blockquote mb-0">
//                   <p>{detail}</p>

//                   <footer className="blockquote-footer float-right ">
//                     Blog By
//                       <cite title="Source Title" className="text-capitalize"
//                     >blogger name</cite>
//                   </footer>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// export default BlogDetailsComponent;
