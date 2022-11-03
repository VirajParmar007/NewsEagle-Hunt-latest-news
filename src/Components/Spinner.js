import React, { Component } from 'react'
import loading1 from './loading1.gif'

const Spinner = () => {

    return (
        <div className="container d-flex justify-content-center my-3" height="4" width="130"><img src={loading1} alt="loading" />
        </div>
    )
}
export default Spinner