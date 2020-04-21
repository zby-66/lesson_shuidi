import * as React from 'react';
//给某人打招呼
export const HelloComponent = (props) => {
    return (
    <h2>Hello user: {props.userName}</h2>
    )
}