import React, { useContext } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import { MainContext } from '../../context/mainContext';
import {
  AcUnit as AcUnitIcon,
  NightsStay as NightsStayIcon,
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  options: {},

  relative: {
    position: 'relative',
  },
  fixed: {
    position: 'fixed',
    top: '50%',
    right: '30px',
    transform: 'translate(0, -50%)',
    zIndex: theme.zIndex.appBar,
  },
  vertical: {
    flexDirection: 'column',
    width: '60px',
    border: '2px solid ' + theme.palette.primary.main,
  },
  row: {
    flexDirection: 'row',
    width: '240px',
    border: 'none',
  },
  firstList: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    color: theme.palette.text.secondary,
    fontFamily: 'Open Sans, sans-serif',
    background: theme.palette.background.modeBg,
  },
  verticalListItem: {
    borderTop: '2px solid ' + theme.palette.background.mode,
    borderBottom: '2px solid ' + theme.palette.background.mode,
    borderLeft: '4px solid ' + theme.palette.background.mode,
    borderRight: '4px solid ' + theme.palette.background.mode,
    '&:first-child': {
      borderTopWidth: '4px',
    },
    '&:last-child': {
      borderBottomWidth: '4px',
    },
  },
  rowListItem: {
    border: 'none',
  },

  listItem: {
    paddingTop: '8px',
    paddingBottom: '8px',
    flexDirection: 'column',

    background: theme.palette.background.header,

    '&$selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      },
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  listItemIcon: {
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  listItemText: {
    textTransform: 'uppercase',
    fontSize: '0.6rem',
    color: theme.palette.text.secondary,
  },
  listItemTextOption: {
    fontSize: '0.7rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  svgIcon: {
    fontSize: '1.6rem',
  },
  svgIconOption: {
    fontSize: '1.2rem',
  },
}));

const Options = ({ direction = 'vertical', position = 'fixed' }) => {
  const classes = useStyles();
  const {
    snowActive,
    changeSnowActive,
    darkMode,
    changeDarkMode,
    audioPlayerStatus,
    changeAudioPlayerStatus,
  } = useContext(MainContext);

  return (
    <div
      className={classNames(
        classes.options,
        position === 'fixed' ? classes.fixed : classes.relative
      )}>
      <List
        className={classNames(
          classes.firstList,
          direction === 'vertical' ? classes.vertical : classes.row
        )}>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          classes={{
            root: classNames(
              classes.listItem,
              direction === 'vertical'
                ? classes.verticalListItem
                : classes.rowListItem
            ),
          }}
          onClick={(event) => changeSnowActive()}>
          <ListItemIcon className={classes.listItemIcon}>
            <AcUnitIcon className={classes.svgIconOption} />
          </ListItemIcon>
          <ListItemText
            classes={{ secondary: classes.listItemTextOption }}
            secondary={snowActive ? 'Snow: On' : 'Snow: Off'}
          />
        </ListItem>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          classes={{
            root: classNames(
              classes.listItem,
              direction === 'vertical'
                ? classes.verticalListItem
                : classes.rowListItem
            ),
          }}
          onClick={(event) => changeAudioPlayerStatus()}>
          <ListItemIcon className={classes.listItemIcon}>
            {audioPlayerStatus ? (
              <VolumeUpIcon className={classes.svgIconOption} />
            ) : (
              <VolumeOffIcon className={classes.svgIconOption} />
            )}
          </ListItemIcon>
          <ListItemText
            classes={{ secondary: classes.listItemTextOption }}
            secondary={audioPlayerStatus ? 'Music: On' : 'Music: Off'}
          />
        </ListItem>
        <ListItem
          disableGutters={true}
          dense={true}
          button
          classes={{
            root: classNames(
              classes.listItem,
              direction === 'vertical'
                ? classes.verticalListItem
                : classes.rowListItem
            ),
          }}
          onClick={(event) => changeDarkMode((prevState) => !prevState)}>
          <ListItemIcon className={classes.listItemIcon}>
            <NightsStayIcon className={classes.svgIconOption} />
          </ListItemIcon>
          <ListItemText
            classes={{ secondary: classes.listItemTextOption }}
            secondary={darkMode ? 'Dark Mode: On' : 'Dark Mode: Off'}
          />
        </ListItem>
      </List>
    </div>
  );
};
export default Options;
