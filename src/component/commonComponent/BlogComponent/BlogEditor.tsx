import React, { useState, useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import { CreateBlogContext } from "../../../context/EditorContext";
interface Props {
  wrapperClassName?: string;
  editorClassName?: string;
  toolbarClassName?: string;
}

export const BlogEditor: React.FC<Props> = (props: Props) => {
  const context = useContext(CreateBlogContext);

  return (
    <Editor
      editorState={context.formState.editorState}
      wrapperClassName={`wrapper-class ${props.wrapperClassName}`}
      editorClassName={`editor-class ${props.editorClassName}`}
      toolbarClassName={`toolbar-class ${props.toolbarClassName}`}
      editorStyle={{ margin: "3px" }}
      onEditorStateChange={editorState => {
        context.onEditorChange(editorState);
      }}
      placeholder="Welcome into internity blog, please write your blogs !"
      toolbar={{
        image: {
          uploadCallback: uploadImageCallBack,
          alt: { present: true, mandatory: true }
        }
      }}
      hashtag={{
        separator: " ",
        trigger: "#"
      }}
      onFocus={() => {}}
      onTab={() => {}}
    />
  );
};

const uploadImageCallBack = (file: any) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    debugger;
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
};

export default BlogEditor;
