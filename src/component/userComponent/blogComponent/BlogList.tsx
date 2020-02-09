import React from "react";
import CreateBlogService from "../../../service/CreateBlogServices";
import { BlogStatus, BlogInterface } from "../../../interface/blogInterface";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { CommonElementProps } from "../../../commonElement/CommonElement";

import { Guid } from "guid-typescript";
export interface Props { }
export interface ListGroupProps extends CommonElementProps { }
export interface ListGroupItemImgProps {
    image: string;
}
export interface ListGroupItemTitleProps {
    title: string;
}
export interface ListGroupItemDetailsProps {
    createDateTime: string;
}
export const DraftBlogTabPanel: React.FC<Props> = () => {
    return <>{getListGroupItem(BlogStatus.Draft)}</>;
};

export const ApprovedBlogTabPanel: React.FC<Props> = () => {
    return <>{getListGroupItem(BlogStatus.Approved)}</>;
};
export const RejectedBlogTabPanel: React.FC<Props> = () => {
    return <>{getListGroupItem(BlogStatus.Rejected)}</>;
};

const CreateListGroup = (props: ListGroupProps) => {
    return (
        <div className="mt-1">
            <div className="bg-light list-group zoom">{props.children}</div>
        </div>
    );
};
const CreateListItem = (props: ListGroupProps) => {
    return (
        <div className="mt-1">
            <div className="bg-light list-group zoom">
                <div className="d-flex flex-row bd-highlight mb-1 list-group-item  shadow list-group-item-action media border  border-light ">
                    {props.children}
                </div>
            </div>
        </div>
    );
};
const CreateListItemImg = (props: ListGroupItemImgProps) => {
    return (
        <div className="p-2 bd-highlight ">
            <img
                src={props.image}
                className="rounded-sm "
                alt="blog"
                style={{ width: "45px", height: "45px" }}
            />
        </div>
    );
};
const CreateListItemTitle = (props: ListGroupItemTitleProps) => {
    return (
        <div className="p-2 bd-highlight text-truncate text-overflow-none ">
            <OverlayTrigger
                placement="bottom-start"
                trigger="click"
                key={"bottom-start"}
                overlay={
                    <Popover id={`popover-positioned-${"bottom"}`}>
                        <Popover.Title as="p">Your Blog Title</Popover.Title>
                        <Popover.Content>{props.title}</Popover.Content>
                    </Popover>
                }
            >
                <cite
                    title="Blog Title"
                    className="text-capitalize blockquote mb float-left  bl-white"
                >
                    {props.title}
                </cite>
            </OverlayTrigger>
        </div>
    );
};
const CreateListItemDetails = (props: ListGroupItemDetailsProps) => {
    return (
        <div className="p-2 bd-highlight flex-grow-1">
            <span className="float-right">
                Created on :{" "}
                <strong className="text-nowrap text-sm-left">
                    {props.createDateTime}
                </strong>
            </span>
        </div>
    );
};
const BlogList = {
    ListGroup: CreateListGroup,
    ListItem: CreateListItem,
    ListItemImg: CreateListItemImg,
    ListItemTitle: CreateListItemTitle,
    ListItemDetails: CreateListItemDetails
};
// JSX.Element[] | JSX.Element
const getListGroupItem = (blogStatus: BlogStatus) => {
    const dataList = CreateBlogService.getBlogsByStatus(blogStatus);
    if (dataList.length > 0) {
        return <BlogList.ListGroup>{getListItem(dataList)}</BlogList.ListGroup>;
    } else {
        return (
            <li className="list-group-item list-group-item-action card-title text-info">
                No Blog Found!
      </li>
        );
    }
};
const getListItem = (
    dataList: BlogInterface[]
): JSX.Element[] | JSX.Element => {
    if (dataList.length > 0) {
        return dataList.map(x => {
            let imgPath = x.image !== undefined ? x.image : "";
            return (
                <BlogList.ListItem key={`${x.id}-${Guid.create()}`}>
                    <BlogList.ListItemImg image={imgPath}></BlogList.ListItemImg>
                    <BlogList.ListItemTitle title={x.title}></BlogList.ListItemTitle>
                    <BlogList.ListItemDetails createDateTime={x.createDateTime} />
                </BlogList.ListItem>
            );
        });
    } else {
        return (
            <li className="list-group-item list-group-item-action card-title text-info">
                No Blog Found!
      </li>
        );
    }
};
export default DraftBlogTabPanel;
