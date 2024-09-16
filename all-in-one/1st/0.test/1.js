import React, { useState } from "react";
const Children = (props) => {
    return null;
};
const Parent = () => {
    const [open, setOpen] = useState(false);
    const [a, setA] = useState({
        data: null,
    });
    return (React.createElement(React.Fragment, null, open && a.data && (React.createElement(Children, { data: a.data, onClick: () => {
            open;
            if (a.data) {
                a.data;
            }
            a.data;
        } }))));
};
export default Parent;
