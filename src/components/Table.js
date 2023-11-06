import React from "react";
import { Link } from 'react-router-dom';

// <Table post={post} key={post.id} cellStyles={{ ...TableCellStyles }} />
function Table(props) {
    const { post, cellStyles } = props;

    return (
        <tr>
            <td key={post.id} style={cellStyles}>{post.title}</td>
            <td style={cellStyles}><Link to={`/post/${post.id}`}>{post.content}</Link></td>
            <td style={cellStyles}>{post.date}</td>
            <td style={cellStyles}>{post.author}</td>
        </tr>
    );
}

export default Table;
