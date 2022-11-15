import React, { useState, useEffect } from 'react'
import { Typography } from "@material-ui/core"
import { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

function CountTime(props) {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        let countTime = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearTimeout(countTime)
                    props.history.goBack()
                }
                else {
                    setSeconds(59)
                    setMinutes(minutes - 1);
                }
            }
        }, 1000)
    }, [minutes, seconds])


    return (
        <Fragment>
            <Typography variant="body1">
                {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </Typography>
        </Fragment>
    )
}
export default withRouter(CountTime)