import React, { useEffect, useState } from 'react';
import { doApiGet } from "../srvice/serviceApi"



function ReqApi(props) {

    let [prods_arr, setProds] = useState([])

    useEffect(() => {
        let url = "http://localhost:3000";
        doApiGet(url)
            .then(data => {
                console.log(data);
                setProds(data)
            })
    }, [])

    return (
        <div className=" d-flex flex-column mt-2">
            {prods_arr.map(item => {
                if (item.type === 1) {
                    return (
                        <div key={item.fedex.id} className="class_key mt-2 col-lg-6 border">
                            <img className="float-left w-25" src={item.fedex.thumbnailUrl} />
                            <div className="text-center">
                                <h2>{item.fedex.name}</h2>
                                <div>Description: {item.fedex.description}</div>
                            </div>
                        </div>
                    )
                }
                if (item.type === 2) {
                    return (
                        item.ups.map(item => {
                            return (

                                <div key={item.id} className=" class_key mt-2 col-lg-6 border">
                                    <img className="float-left w-25" src={item.thumbnailUrl} />
                                    <div className="text-center">
                                        <h2>{item.name}</h2>
                                        <div>Description: {item.description}</div>
                                    </div>
                                </div>
                            )
                        })

                    )
                }

                if (item.type === 3) {
                    return (
                        <div key={item.id} className="class_key mt-2 col-lg-6 border">
                            <img className="float-left w-25" src={item.thumbnailUrl} />
                            <div className="text-center">
                                <h2>{item.name}</h2>
                                <div>Description: {item.description}</div>
                            </div>
                        </div>
                    )
                }




            })}

        </div>
    );
}



export default ReqApi;