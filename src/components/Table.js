import React from "react";
import { Link } from 'react-router-dom';

function Table(props){
    return (
        <tbody>
            <tr>
            <td key={props.post.id}>{props.post.title}</td>
            <td><Link to={`/post/${props.post.id}`}>{props.post.content}</Link></td>
            <td>{props.post.date}</td>
            <td>{props.post.author}</td>
            </tr>
        </tbody>
    );
}

export default Table;