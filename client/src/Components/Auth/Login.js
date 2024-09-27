import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import LoadingButton from '@mui/lab/LoadingButton';


const Login = () => {
    const [fields, setFields] = useState({ username: '', password: '' })
    const [visibility, setVisibility] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)

    const navigate = useNavigate()





    const handleLogin = (e) => {
        e.preventDefault()
        setLoadingButton(true)
        // axios.post('/api/login', fields)
        //   .then(res => {
        //     navigate('/home')

        //   })
        //   .catch((err)=>{
        //     setLoadingButton(false)
        //     swal({
        //       title:err.response.data,
        //       text:'Please enter valid username and password',
        //       icon:'error'
        //     })
        //   })

    }

    return (
        <>
            <Box sx={{ height: '100vh', width: '100%', backgroundImage: 'url(12244.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Grid spacing={1} container sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid size={{ xs: 12, lg: 5 }}>
                        <Grid size={12}>

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    // if odd index card,slide from right instead of left
                                    x: -50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, // Slide in to its original position
                                    transition: {
                                        duration: 1 // Animation duration
                                    }
                                }}
                                viewport={{ once: false }}
                            >

                                <Typography textAlign={'center'} component={'h1'} variant='p'>
                                    Login to your account

                                </Typography>
                            </motion.div>



                        </Grid>
                        <Paper elevation={24} sx={{ m: 2, }}>
                            <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Box sx={{ p: 'auto' }}>
                                    <Stack component={'form'} onSubmit={handleLogin} direction={'column'} spacing={2}>
                                        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src='x1.gif' alt='back' style={{ width: '100%', maxHeight: '250px', objectFit: 'cover' }} />
                                        </Box>
                                        <TextField
                                            label='Username'
                                            size='small'
                                            fullWidth
                                            type='text'
                                            name='Username'
                                            value={fields.username}
                                            onChange={e => setFields({ ...fields, username: e.target.value })}
                                            required />
                                        <TextField
                                            label='Password'
                                            required
                                            type={visibility ? 'text' : 'password'}
                                            size='small'
                                            name='password'
                                            value={fields.password}
                                            onChange={e => setFields({ ...fields, password: e.target.value })}
                                            InputProps={{
                                                endAdornment: <IconButton size='small' edge="end" onClick={() => setVisibility(!visibility)}>{visibility ? <VisibilityOff /> : <Visibility />}</IconButton>
                                            }}
                                        />
                                        <LoadingButton
                                            type='submit'
                                            loading={loadingButton}
                                            color='info'
                                            variant="contained"

                                        >
                                            Submit
                                        </LoadingButton>
                                        <Button style={{ color: '#002db3', }} onClick={() => navigate('/forgotpassword')} >forgot password?</Button>
                                    </Stack>

                                </Box>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login