import React from "react";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";

export interface Props { }

const BlogMediaList: React.SFC<Props> = () => {
    return (
        <div className="mt-1">
            <div className="bg-light list-group zoom">
                <div className="d-flex flex-row bd-highlight mb-1 list-group-item  shadow list-group-item-action media border  border-light ">
                    <div className="p-2 bd-highlight ">
                        <img
                            src="https://i.imgur.com/ksyQDUc.jpg"
                            className="rounded-sm "
                            alt="blog"
                            style={{ width: "45px", height: "45px" }}
                        />
                    </div>
                    <div className="p-2 bd-highlight text-truncate text-overflow-none ">
                        <OverlayTrigger
                            placement="bottom-start"
                            trigger="click"
                            key={"bottom-start"}
                            overlay={
                                <Popover id={`popover-positioned-${"bottom"}`}>
                                    <Popover.Title as="p">Your Blog Title</Popover.Title>
                                    <Popover.Content>
                                        Blog Title FHjkgh lsdkjflkd gflskdjg; sdkjgskd ls;
                                        lfgjskdlgjsdljg xjkdgsgnsdgSdgsdfk;sd
                                        sdsdhgkjsdhgsdg'sdkjgskdsdghsdghsd sdhkgdhgksdhgkshdgh
                                    </Popover.Content>
                                </Popover>
                            }
                        >
                            <cite
                                title="Blog Title"
                                className="text-capitalize blockquote mb float-left  bl-white"
                            >
                                Blog Title FHjkgh lsdkjflkd gflskdjg;
                            </cite>
                        </OverlayTrigger>
                    </div>
                    <div className="p-2 bd-highlight flex-grow-1">
                        <span className="float-right">
                            Created on :{" "}
                            <strong className="text-nowrap text-sm-left">
                                {new Date().toDateString()}
                            </strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMediaList;
