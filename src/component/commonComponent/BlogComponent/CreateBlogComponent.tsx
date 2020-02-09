import React, { useContext } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { GeneralElementProps } from "../../../interface/commonElementInterface";
import {
  ICreateBlog,
  CreateBlogContext,
  CreateBlogState
} from "../../../context/EditorContext";
import BlogEditor from "./BlogEditor";
import BlogPanel from "./Panel";

export interface CreateBlogProps extends GeneralElementProps {}

export interface IFormInput {
  value: any;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export interface Props {}

class CreateBlog extends React.Component<Props, CreateBlogState> {
  initialState = new CreateBlogState();

  constructor(props: Props) {
    super(props);
    this.initialState.editorState = EditorState.createEmpty();
    this.state = { ...this.initialState };
  }
  previewDiv: HTMLElement | null = null;
  reInitEditor = () => {
    this.setState({ editorState: EditorState.createEmpty() }, () => {
      if (this.previewDiv !== null) {
        this.previewDiv.innerHTML = "";
      }
    });
  };
  handleTooglePreview = () => {
    this.setState(
      { isPreviewTabVisible: !this.state.isPreviewTabVisible },
      () => {
        if (this.previewDiv !== null) {
          this.previewDiv.innerHTML = draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          );
        }
      }
    );
  };
  onEditorStateChange = (editorState: EditorState) => {
    this.setState(
      {
        editorState: editorState
      },
      () => {
        if (this.state.isPreviewTabVisible && this.previewDiv !== null) {
          this.previewDiv.innerHTML = draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          );
        }
      }
    );
  };
  updateFormState = (state: any) => {
    this.setState(state);
  };
  componentDidMount() {
    this.previewDiv = document.getElementById("create-blog-preview-Div");
  }
  render() {
    const defaultValue: ICreateBlog = {
      formState: { ...this.state },
      reInit: this.reInitEditor,
      tooglePreview: this.handleTooglePreview,
      onEditorChange: this.onEditorStateChange,
      updateFormState: this.updateFormState
    };
    return (
      <CreateBlogContext.Provider value={defaultValue}>
        <BlogPanel.BlogPanel className="">
          <BlogPanel.BlogPanelHeader
            title="Create Blog"
            className="bg-info text-white"
            titlePosition="L"
          ></BlogPanel.BlogPanelHeader>
          <BlogPanel.BlogPanelBody>
            <CreateBlogForm></CreateBlogForm>
            <PreviewTab></PreviewTab>
          </BlogPanel.BlogPanelBody>
        </BlogPanel.BlogPanel>
        ,
      </CreateBlogContext.Provider>
    );
  }
}

const CreateBlogForm: React.FC<CreateBlogProps> = props => {
  const title = useFormInput("");
  return (
    <form id={props.id} name={props.name} className={props.className}>
      <section id="create-blog-form-blogTitleInput-Ctrl-section">
        <div className="form-group">
          <div className="input-group col-12 ">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-secondary text-white"
                id="basic-addon3"
              >
                Blog Title
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="txt-title-ctrl"
              aria-describedby="basic-addon3"
              placeholder="Write your blog Title here !"
              {...title}
            />
            <div className="input-group-prepend">
              <span className="input-group-text " id="basic-addon3"></span>
            </div>
          </div>
        </div>
      </section>
      <section id="create-blog-form-editor-ctrl-section">
        <div className="form-group">
          <div className="col-12">
            <BlogEditor
              toolbarClassName="toolbar"
              wrapperClassName="border"
              editorClassName=""
            />
          </div>
        </div>
      </section>
      <section id="create-blog-form-ctrl-section">
        <CreateFormFormCtrl />
      </section>
      <section>{props.children}</section>
    </form>
  );
};

const CreateFormFormCtrl: React.FC<Props> = props => {
  const context = useContext(CreateBlogContext);
  return (
    <div className="form-group">
      <div
        className="btn-group input-group col-12"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="col-3 btn btn-info btn btn-outline-success border-light text-white"
          onClick={context.tooglePreview}
        >
          Preview
        </button>
        <button
          type="reset"
          className="col-3 btn btn-secondary btn-outline-danger  border-light text-white"
          onClick={() => {
            context.reInit();
          }}
        >
          Clear
        </button>
        <button
          type="button"
          className=" col-3 btn btn-secondary btn btn-outline-primary border-light text-white "
        >
          Save As Draft
        </button>
        <button
          type="submit"
          className="col-3 btn btn-info btn btn-outline-success border-light text-white"
        >
          Post
        </button>
      </div>
    </div>
  );
};

const PreviewTab: React.FC<Props> = props => {
  const context = useContext(CreateBlogContext);
  return (
    <div
      className={`${"form-group collapse "}${
        context.formState.isPreviewTabVisible ? "show" : "hide"
      }`}
    >
      <div className="col-12 ">
        <div>
          <div className="form-group" id="testDetailsDiv">
            <div className="card">
              <div className="card-header bg-secondary text-white text-justify text-capitalize">
                <header>
                  {" "}
                  {context.formState.blogTitle === ""
                    ? "Title"
                    : context.formState.blogTitle}
                </header>
              </div>
              <div className="card-body">
                <div
                  id="create-blog-preview-Div"
                  className="text-justify"
                ></div>
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer float-right ">
                    Blog By
                    <cite title="Source Title" className="text-capitalize">
                      blogger name
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useFormInput = (initialValue: any): IFormInput => {
  const context = useContext(CreateBlogContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.updateFormState({ blogTitle: e.target.value });
  };
  return {
    value: context.formState.blogTitle,
    onChange: handleChange
  };
};
export default CreateBlog;
