import React, {useRef} from "react";
import {NavLink, useParams} from "react-router-dom";
import Icon from "../components/Icon";

const Tag:React.FunctionComponent=()=>{
    let params = useParams();
    return (
        <div>
            <NavLink to="/tags"><Icon name="left"/></NavLink>
            {params.tag}
        </div>
    );
}

export {Tag}