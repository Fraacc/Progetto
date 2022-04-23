import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/action'
import { login } from 'service/LoginService'
import {
    Grid,
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    IconButton,
    FormHelperText,
    Button,
    CardMedia,
    Snackbar,
    Slide,
    Paper
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material'
import MuiAlert from '@mui/lab/Alert'
import logo from 'assets/logo_blu.png'
import photo from 'assets/photo.jpeg'
import { useNavigate } from 'react-router'



const style = makeStyles({

    containers: {
        height: '100%',
        width: '50%',
        position: "fixed",
        zIndex: -1,
        overflowX: 'hidden',
        paddingTop: '20px',
        left: 0,

    },
    containerd: {
        height: '100%',
        width: '50%',
        position: 'fixed',
        zIndex: -1,
        overflowX: 'hidden',
        paddingTop: '20px',
        right: 0,

    },
        gridContainer: {

            '&:before': {
                content: '""',
                backgroundSize: 'contain',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.4,
                position: 'absolute',
                zIndex: 1
            }
        },
        gridLogin: {
            height: '70vh',
            width: 'max-content',
            justifyContent:"center",
        },
        gridInput:{
            height: 80,
            justifyContent:"center",
            alignItems:"center"
        },
        button: {
            margin: 5,
            width: '45%'
        },
        logo:{
            height: 56,
            marginBottom:"20px",
            backgroundSize:"0",
            width: '100%'
        }

}
)
function LoginPage(){

    const history = useNavigate()
    const loginDispatch = useDispatch()
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [states, setStates] = React.useState({
        showPassword: false,
        snackbar: false
    })
    const classes = style()

    const doLogin = data => {
        login(data).then(resp =>{

            if(resp.data){

                loginDispatch(loginAction(resp.data))
            }else{
                setStates({...states,snackbar:true})
            }
        })
    }

    return (
        <>
            <div className={classes.containers} >
                <img height={'auto'} width={'100%'} src={photo}/>
            </div>
            <div className={classes.containerd}>
                <Grid container alignItems='center' justifyContent='center' className={classes.gridContainer}>
                    <Grid container className={classes.gridLogin}>
                        <Paper elevation={5} backGroundColor={'#d7d6da'} >
                        <form style={{width: '600px', justifyContent:"center", alignItems:"center",display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(doLogin)}>

                            <h1 color={'#948e8e'}>LOGIN</h1>


                            <Grid style={{marginTop:"10px"}} className={classes.gridInput}>
                                <FormControl>
                                    <InputLabel error={errors.user ? true : false}>Username</InputLabel>
                                    <Input
                                        {...register("user",{required: 'Campo obbligatorio', pattern:{ value: /^([A-Za-z ])+$/, message:"Solo lettere"}})}
                                        error={errors.user ? true : false}
                                        autoFocus={'onInput'}
                                        type='text'
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton tabIndex={-1} style={{backgroundColor: 'transparent', cursor:'default'}}>
                                                    <AccountCircle />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText error>{errors.user ? errors.user.message : ""}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid   className={classes.gridInput}>
                                <FormControl>
                                    <InputLabel error={errors.password ? true : false}>Password</InputLabel>
                                    <Input
                                        {...register("password",{required: 'Campo obbligatorio', minLength:{ value:8, message:'Minimo 8 caratteri'}})}
                                        error={errors.password ? true : false}
                                        type={states.showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton tabIndex={-1}
                                                            onMouseDown={() => setStates({...states,showPassword:true})}
                                                            onMouseUp={() => setStates({...states,showPassword:false})}>
                                                    {states.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText error>{errors.password ? errors.password.message : ""}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid style={{display:"flex", justifyContent: "space-between"}} className={classes.gridInput}>
                                <Button className={classes.button} variant="contained" color="secondary" onClick={() => history("/registrazione")}>registrati</Button>
                                <Button className={classes.button} variant="contained" color="primary" type="submit">accedi</Button>
                            </Grid>

                        </form>
                        </Paper>
                    </Grid>
                    <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}
                              open={states.snackbar}
                              onClose={() => setStates({...states,snackbar:false})}
                              autoHideDuration={3000}
                              TransitionComponent={Slide} >
                        <MuiAlert variant="filled" severity="error" elevation={6}>Credenziali errate</MuiAlert>
                    </Snackbar>
                </Grid>

            </div>

        </>


    );
}

export default LoginPage