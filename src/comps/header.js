import React from 'react';



function Header(props) {



    return (
        <div className="container text-center">
            <h2 className="class_h2_header">Products shipping</h2>
            <div className=" class_key d-flex justify-content-between ">
                <input type="text" placeholder="Search"></input>

                <select className="select_class" name="select" >
                    <option value="sort">sort by</option>
                    <option value="name">name</option>
                    <option value="price">price</option>

                </select>
            </div>

        </div>
    );
}

export default Header;