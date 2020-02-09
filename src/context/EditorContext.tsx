import { createContext } from "react";
import { EditorState } from "react-draft-wysiwyg";

export class CreateBlogState {
  editorState: any = {};
  isPreviewTabVisible: boolean = false;
  blogTitle: string = "";
}
export interface ICreateBlog {
  tooglePreview(): void;
  reInit(): void;
  onEditorChange(editorState: EditorState): void;
  formState: CreateBlogState;
  updateFormState(state: any): void;
}

export const CreateBlogContext = createContext<ICreateBlog>({
  tooglePreview: () => {},
  reInit: () => {},
  onEditorChange: () => {},
  formState: new CreateBlogState(),
  updateFormState: () => {}
});
