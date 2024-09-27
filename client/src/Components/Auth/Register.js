import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Box, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import { Done, Save } from '@mui/icons-material';


function Register() {
    const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const [otp, setOtp] = useState('')
    const [visibility, setVisibility] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [loadVerify, setLoadVerify] = useState(false)
    const [loadOtpSubmit, setLoadOtpSubmit] = useState(false)
    const [showOtp, setShowOtp] = useState(false)


    const handleVerifyEmail = ()=>{
        setLoadVerify(true)
        // api call 

        setLoadVerify(false)
        //once you get successull response make it true
        setShowOtp(true)


    }
    const handleOtpSubmit = ()=>{
        setLoadOtpSubmit(true)
        // api call 
        setLoadOtpSubmit(false)
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
                                    Register

                                </Typography>
                            </motion.div>



                        </Grid>
                        <Paper elevation={24} sx={{ m: 2, }}>


                            <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>


                                <Box sx={{ p: 2 }}>

                                    <Stack component={'form'} direction={'column'} spacing={2} >
                                        
                                        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
                                            <TextField
                                                label='First Name'
                                                size='small'
                                                fullWidth
                                                type='text'
                                                name='firstName'
                                                value={fields.firstName}
                                                onChange={e => setFields({ ...fields, firstName: e.target.value })}
                                                required
                                            />
                                            <TextField
                                                label='Last Name'
                                                size='small'
                                                fullWidth
                                                type='text'
                                                name='lastname'
                                                value={fields.lastName}
                                                onChange={e => setFields({ ...fields, lastName: e.target.value })}
                                                required
                                            />
                                        </Stack>
                                        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
                                            <TextField
                                                label='Email'
                                                size='small'
                                                fullWidth
                                                type='text'
                                                name='email'
                                                value={fields.email}
                                                onChange={e => setFields({ ...fields, username: e.target.value })}
                                                required />
                                            {!showOtp && <LoadingButton loading={loadVerify} size='small' variant='text' onClick={handleVerifyEmail}>
                                                Verify
                                            </LoadingButton>}
                                            {showOtp && <Stack spacing={1} direction={'row'}  >
                                                <TextField
                                                    label='OTP'
                                                    size='small'
                                                    placeholder='Enter OTP'
                                                    type='number'
                                                    onChange={e=>setOtp(e.target.value)}

                                                />
                                                <LoadingButton
                                                    variant="text"
                                                    loading={loadOtpSubmit}
                                                    onClick={handleOtpSubmit}
                                                >
                                                    Submit
                                                </LoadingButton>
                                            </Stack>}
                                        </Stack>


                                        <TextField
                                            label='Password'
                                            required
                                            type={visibility ? 'text' : 'password'}
                                            size='small'
                                            name='password'
                                            value={fields.password}
                                            onChange={e => setFields({ ...fields, password: e.target.value })}

                                        />
                                        <LoadingButton
                                            type='submit'
                                            loading={loadingButton}
                                            color='info'
                                            variant="contained"

                                        >
                                            Submit
                                        </LoadingButton>

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

export default Register