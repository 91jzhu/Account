import React from "react";
import {NavLink, useParams} from "react-router-dom";
import Icon from "../components/Icon";
import {useTags} from "../useTags";

const Tag:React.FunctionComponent=()=>{
    let params = useParams();
    let {findTag}=useTags()
    let tagName=findTag(parseInt(params.id!)).name
    return (
        <div>
            <NavLink to="/tags"><Icon name="left"/></NavLink>
            {tagName}
        </div>
    );
}

export {Tag}