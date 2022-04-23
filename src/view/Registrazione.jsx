import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, Grid, Avatar} from '@mui/material'
import {
    Button,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
    FormControl,
    FormHelperText,
    Snackbar, Slide
} from '@mui/material'
import {AccountCircle, Visibility, VisibilityOff} from "@mui/icons-material";
import {registration} from "../service/RegistrationService";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {makeStyles} from "@mui/styles";
import MuiAlert from "@mui/lab/Alert";


function Registrazione(){


    const loginDispatch = useDispatch()
    const { register, handleSubmit, formState: {errors} } = useForm()
    const history = useNavigate()
    const [states, setStates] = React.useState({
        showPassword: false,
        snackbar: false
    })
    const paperStyle={padding: 20, height: "70vh", width: 280, margin: "20px auto", backgroundColor: "rgba(182,156,61,0.66)"}
    const avatarStyle={backgroundColor: '#1bbd7e'}



    const doRegister = data => {
        registration(data).then(resp => {
            if (resp.data) {
                history('/Login')
            } else {
                return (
                    history('/registrazione')
                )
            }
        })
    }


    return (
        <body backgroundColor={'#9c5822'} height={'100%'}>
            <Paper elevation={10} style={paperStyle} >
                <Grid align={'center'} >
                    <h2>Registrazione</h2>
                </Grid>
                <form onSubmit={handleSubmit(doRegister)}>
                <Grid align={'center'} >
                <FormControl >
                    <InputLabel error={errors.user ? true : false}>Username</InputLabel>
                    <Input
                        {...register("user",{required: 'Campo obbligatorio', pattern:{ value: /^([A-Za-z ])+$/, message:"Solo lettere"}})}
                        error={errors.user ? true : false}
                        autoFocus
                        type='text'
                        width={'100%'}
                    />
                    <FormHelperText error>{errors.user ? errors.user.message : ""}</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel error={errors.password ? true : false}>Password</InputLabel>
                    <Input fullWidth
                        {...register("password",{required: 'Campo obbligatorio', minLength:{ value:8, message:'Minimo 8 caratteri'}})}
                        error={errors.password ? true : false}
                        type='text'
                           width={'100%'}

                    />
                    <FormHelperText error>{errors.recidence ? errors.email.message : ""}</FormHelperText>
                </FormControl>
                    <FormControl>
                        <InputLabel error={errors.recidence ? true : false}>Password</InputLabel>
                        <Input fullWidth
                               {...register("residence",{required: 'Campo obbligatorio', minLength:{ value:8, message:'Minimo 8 caratteri'}})}
                               error={errors.recidence ? true : false}
                               type='text'
                               width={'100%'}

                        />
                        <FormHelperText error>{errors.email ? errors.email.message : ""}</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel error={errors.email ? true : false}>Password</InputLabel>
                    <Input fullWidth
                           {...register("email",{required: 'Campo obbligatorio', minLength:{ value:8, message:'Minimo 8 caratteri'}})}
                           error={errors.email ? true : false}
                           type='text'
                           width={'100%'}

                    />
                    <FormHelperText error>{errors.password ? errors.password.message : ""}</FormHelperText>
                </FormControl>
                    <Button display={'flex'} variant={'contained'} type={'submit'}>submit</Button>
                </Grid>
                </form>
            </Paper>
        </body>

    )
}

export default Registrazione