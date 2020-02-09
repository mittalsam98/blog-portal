import React from "react";
import  NewDiv,{ CommonElementProps } from "../../../interface/commonElementInterface";

export interface IPanelProps extends CommonElementProps { }

export interface IPanelHeaderProps {
    title: string;
    className?: string;
    titlePosition?: 'L' | 'C' | 'R';
}

export interface IPanelBodyProps extends CommonElementProps {
    body?: any
    bodyTitle?: string;
    bodyTitlePosition?: 'L' | 'C' | 'R'
}

export interface IPanelFooterProps extends CommonElementProps { }

export interface PanelInterface {
    BlogPanel: React.FC<IPanelProps>,
    BlogPanelHeader: React.FC<IPanelHeaderProps>,
    BlogPanelBody: React.FC<IPanelBodyProps>,
    BlogPanelFooter: React.FC<IPanelFooterProps>,
}

const Panel: React.FC<IPanelProps> = (props: IPanelProps) => {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    );
}
const PanelHeader: React.FC<IPanelHeaderProps> = (props: IPanelHeaderProps) => {
    return (
        <div className={`card-header ${props.className}`}>
            <strong className={getPosition(props.titlePosition)}>{props.title}</strong>
        </div>
    );
}
const PanelBody: React.FC<IPanelBodyProps> = (props: IPanelBodyProps) => {
    return (
        <div className={`card-body ${props.className}`}>
            <NewDiv>
                <h5 className={`card-title ${getPosition(props.bodyTitlePosition)}`}><strong>{props.bodyTitle}</strong></h5>
            </NewDiv>
            {props.body !== undefined ? props.body : props.children}
        </div>
    );
}
const PanelFooter: React.FC<IPanelFooterProps> = (props: IPanelFooterProps) => {
    return (
        <div className={`card-header ${props.className}`}>
            {props.children}
        </div>
    );
}
const getPosition = (position: string | undefined): string => {
    if (position === 'L') {
        return "float-left";
    } else if (position === 'R') {
        return "float-right";
    } else {
        return "";
    }
}
const BlogPanel: PanelInterface = {
    BlogPanel: Panel,
    BlogPanelHeader: PanelHeader,
    BlogPanelBody: PanelBody,
    BlogPanelFooter: PanelFooter
};
export default BlogPanel;