import React from 'react'
export const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="fa-stack fa-lg mt-3" style={{ color: props.color }}>
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
                            </span>
                        </div>
                        <div className="col">
                            <h1>{props.value}</h1>
                            <h4>{props.status}</h4>
                        </div>
                        <div className="col">
                            <button className="btn card-btn" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                <span className="fas fa-ellipsis-v"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}