import React from "react";

function Message(props: any) {
    return (
        <div>
            {props.errorMessage && (
                <div className="alert alert-danger">{props.errorMessage}</div>
            )}
            {props.message && (
                <div className="alert alert-success">{props.message}</div>
            )}
            <button className='btn btn-primary'>Hey</button>
        </div>
    );
}

export default Message;