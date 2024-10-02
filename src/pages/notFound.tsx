import React from 'react';
import {useParams} from "react-router-dom";

const NotFound = () => {
    const {id}=useParams()
    console.log(id)
    return (
        <div>
            Notfound Page Not Found!
        </div>
    );
};

export default NotFound;