import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {useNavigate} from 'react-router'
function Galleria(){

    const history = useNavigate()


    return (
        <AppBar position={'static'} zIndex={1}>
            <Toolbar>
                <Typography variant={'h6'} color={'inherit'} onClick={() => {history('view/Registrazione')}}>registrazione</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Galleria