import React from 'react';

const FooterColumn = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="text-white">{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="list-unstyled mt-10">
                {
                    props.menuItems.map((item, index) => <li key={index}>{item.name}</li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterColumn;