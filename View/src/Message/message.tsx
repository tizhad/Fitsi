import React, {useEffect, useState} from "react";

function Message(props: any) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 5000);
        return () => clearTimeout(timeoutId)
    })


    return visible? (
        <div>
            {props.errorMessage && (
                <div className="alert alert-danger">{props.errorMessage}</div>
            )}
            {props.message && (
                <div className="alert alert-success">{props.message}</div>
            )}
        </div>
    ) : null;
}

export default Message;