import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  fileUploader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileLabel: {
    width: '100%',
    height: '200px',
    position: 'relative',
    display: 'block',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    cursor: 'pointer',
  },
  fileHeader: {
    marginLeft: theme.spacing(2),
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  hiddenInput: {
    visibility: 'hidden',
    width: 0,
    height: 0,
  },
  titleBox: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    background: 'rgba(255,255,255,0.6)',
  },
  title: {
    color: 'rgba(0, 0, 0, 0.87)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 500,
    textShadow: '1px 1px 1px white',
  },
}));

export default function FileUploader(props) {
  const classes = useStyles();
  const {
    name,
    title,
    value,
    onChange,
    logoRef,
    logoTitleRef,
    url,
    fileUploaderStyle = {},
    fileUploaderImgStyle = {}
  } = props;

  return (
    <div className={classes.fileUploader} style={fileUploaderStyle}>
      <label
        ref={logoRef}
        htmlFor={name}
        className={classes.fileLabel}
        style={fileUploaderImgStyle}>
        {value ? (
          <React.Fragment>
            <img className={classes.img} src={url} alt='Attached file'/>
            <div className={classes.titleBox}>
              <AttachFileIcon className={classes.iconImg} />
              <Typography
                gutterBottom
                ref={logoTitleRef}
                className={classes.title}>
                {title}
              </Typography>
            </div>
          </React.Fragment>
        ) : (
          <div className={classes.titleBox}>
            <AttachFileIcon className={classes.iconImg} />
            <Typography
              gutterBottom
              ref={logoTitleRef}
              className={classes.title}>
              {title}
            </Typography>
          </div>
        )}
      </label>
      <input
        id={name}
        name={name}
        type='file'
        className={classes.hiddenInput}
        onChange={onChange(logoRef, logoTitleRef)}
      />
    </div>
  );
}
