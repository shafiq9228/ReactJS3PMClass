
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Card, CardContent, Paper } from '@material-ui/core';
import SimpleModal from './MyModal';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const SubApp = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <div>
                <p>My body  is present here</p>



                <Card style={{ width: '300px', backgroundColor: 'green', marginLeft: 20 }}>
                    <CardContent>
                        <p>hello my first card</p>

                    </CardContent>

                </Card>
            </div>

            <div>
                <Paper elevation={3} square style={{width:'400px', padding:'50px', marginLeft:'30px', marginTop:'30px', backgroundColor:'lightblue'}}>
                    <p> Iam paper</p>
                </Paper>
            </div>

            <SimpleModal/>
        </div>
    );
}

export default SubApp
