import React, { useState } from "react";
import { Tabs, Tab, Card, Nav } from "react-bootstrap";
import {
  DraftBlogTabPanel,
  ApprovedBlogTabPanel,
  RejectedBlogTabPanel
} from "./BlogList";
import BlogMediaList from "./BlogList1";
import BlogPanel from "../../commonComponent/BlogComponent/Panel";
import './style.css';
export interface Props { }

const Blogs: React.FC<Props> = () => {
  const [key, setKey] = useState("draft");
  return <BlogTab />;
};
const BlogTab: React.FC<Props> = () => {
  const [key, setKey] = useState("draft");
  return (
    <div className="blog-tab card border-info">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k: React.SetStateAction<string>) => setKey(k)}
        className=" bg-info shadow card-header"
      >
        <Tab
          eventKey="draft"
          title="Draft"
          tabClassName="text-justify text-white"
        >
          <BlogMediaList />
        </Tab>
        <Tab eventKey="approved" title="Approved" tabClassName="text-white">
          <ApprovedBlogTabPanel />
        </Tab>
        <Tab eventKey="rejected" title="Rejected" tabClassName="text-white">
          <RejectedBlogTabPanel />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Blogs;
