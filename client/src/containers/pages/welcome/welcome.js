import React, { useState } from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Login from 'components/Forms/login/login'
import Register from 'components/Forms/login/register'
import Modal from 'containers/modal/modal'

const Welcome = (props) => {
    const { classes } = props

    const [loginOpen, setLoginOpen] = useState(false)
    const [registerOpen, setRegisterOpen] = useState(false)
    const handleLoginOpen = () => setLoginOpen(true)
    const handleLoginClose = () => setLoginOpen(false)
    const handleRegisterOpen = () => setRegisterOpen(true)
    const handleRegisterClose = () => setRegisterOpen(false)
    return (
        <div className={classes.root}>
            <Grid
                container
            >
                <Grid item xs={12} sm={6}>

                </Grid>
                <Grid className={classes.menu} item xs={12} sm={6}>
                    <Button
                        className={classes.menuItem}
                        onClick={handleLoginOpen}
                        variant="outlined"
                        color="primary"
                        size="large"
                    >
                        Login
                    </Button>
                    <Button
                        className={classes.menuItem}
                        onClick={handleRegisterOpen}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
            <Modal
                title='Login'
                open={loginOpen}
                onClose={handleLoginClose}
            >
                <Login history={props.history} />
            </Modal>
            <Modal
                title='Sign Up'
                open={registerOpen}
                onClose={handleRegisterClose}
            >
                <Register history={props.history} />
            </Modal>

        </div>
    )
}
export default withStyles(styles)(Welcome)