import React from "react";

export interface CommonElementProps {
    className?: string;
    children: JSX.Element[] | JSX.Element;
    id?: string;
    name?: string;
}
export interface GeneralElementProps {
    className?: string;
    id?: string;
    name?: string;
}
export const NewDiv: React.SFC<CommonElementProps> = (
    props: CommonElementProps
) => {
    return (
        <div className={`row ${props.className}`}>
            <div className="col-12">{props.children}</div>
        </div>
    );
};
export const NewDivContainer: React.SFC<CommonElementProps> = (
    props: CommonElementProps
) => {
    return (
        <NewDiv className={props.className}>
            <div className="container">{props.children}</div>
        </NewDiv>
    );
};

export const TabDiv: React.SFC<CommonElementProps> = (
    props: CommonElementProps
) => {
    return <div className="card-body">{props.children}</div>;
};
export default NewDiv;
