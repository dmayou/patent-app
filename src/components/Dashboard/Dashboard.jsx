import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import ApplicationTable from './ApplicationTable';
import NewAppDialog from './NewAppDialog';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',

    },
    paper: {
        marginTop: theme.spacing.unit * 15,
        minWidth: 1040,
        height: 500
    },
    title: {
        padding: `${theme.spacing.unit * 2}px 0 0`
    },
    button: {
        margin: theme.spacing.unit,
    },
    titleInfo: {
        padding: `0 ${theme.spacing.unit * 3}px`
    },
    fullWidth: {
        width: '100%',
    },
    addNew: {
        margin: theme.spacing.unit * 3,
        minHeight: '100%',
    },
    formControl: {
        margin: `0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    alignLegend: {
        
    }
})


class Dashboard extends Component {
    state = {
        dialogOpen: false,
        displayAllApps: 'false',
    };

    handleChange = event => {
        this.setState({ displayAllApps: event.target.value });
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleNewApp = () => {
        this.setState({ dialogOpen: true})
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container justify='center'>
                        <Grid item className={classes.title}>
                            <Typography color='primary' variant='h4' align='center'>
                                Applications
                            </Typography>
                        </Grid>
                        <Grid className={classes.fullWidth}>
                            <Grid container justify='space-between' item className={classes.titleInfo}>
                                <Grid item className={classes.filter}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <div className={classes.fullWidth}>
                                            <FormLabel component="legend">
                                                <Typography variant='h6' align='center'>
                                                    Display
                                                </Typography>
                                            </FormLabel>
                                        </div>
                                        <RadioGroup
                                            aria-label="display"
                                            name="display"
                                            className={classes.group}
                                            value={this.state.displayAllApps}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value='true' control={<Radio />} label="All Applications" />
                                            <FormControlLabel value='false' control={<Radio />} label="My Applications" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item className={classes.addNew}>
                                    <Grid container style={{height: '100%'}} alignItems='center'>
                                        <Grid item>
                                            <Button 
                                                color='primary' variant="contained" 
                                                size='large'
                                                onClick={this.handleNewApp}
                                                className={classes.button}>
                                                Add Application
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <ApplicationTable />
                    <NewAppDialog open={this.state.dialogOpen} handleClose={this.handleClose} />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));