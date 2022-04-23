import React from 'react'
import { Grid } from '@mui/material'
import {Dashboardpage} from 'view/Dashboard'

function Home(){

    return (
        <>
        <Dashboardpage/>
        <Grid container alignItems='center' justifyContent='center'>
            <h1>Home</h1>
        </Grid>
            </>
    )
}

export default Home