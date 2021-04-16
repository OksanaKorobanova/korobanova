import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const images = [
  'https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1490260400179-d656f04de422?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1509878540737-aac7c51cb9a1?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514591404656-22ae99b3261c?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1490260400179-d656f04de422?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1509878540737-aac7c51cb9a1?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514591404656-22ae99b3261c?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1490260400179-d656f04de422?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1509878540737-aac7c51cb9a1?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514591404656-22ae99b3261c?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1509878540737-aac7c51cb9a1?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514591404656-22ae99b3261c?auto=format&fit=crop&w=250&h=250&q=80',
  'https://images.unsplash.com/photo-1514911278673-b33f6439fad3?auto=format&fit=crop&w=250&h=250&q=80',
];

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: 0,
    paddingTop: theme.spacing(10),
    display: 'grid',
    width: '100%',
    gridTemplateColumns:
      'repeat(auto-fill, minmax(20%,1fr) minmax(20%,1fr)) minmax(20%,1fr)',
    overflow: 'hidden',
    listStyle: 'none',
    '@supports ( -moz-appearance:none )': {
      gridTemplateColumns: 'repeat(auto-fill, 33.3333vw)',
    },
  },
  img: {
    width: '100%',
    transform: 'scaleY(1.1547)',
  },
  li: {
    margin: '36% 0 36% 0',
    listStyleType: 'none',
    '&:nth-child(2n+1)': {
      transform: 'skewY(30deg)',
      '&::after': {
        backgroundImage:
          'linear-gradient(225deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%,  rgba(0, 0, 0, 0.6) 100%)',
      },
    },
    '&:nth-child(2n)': {
      transform: 'skewY(-30deg)',
      '&::after': {
        backgroundImage:
          'linear-gradient(135deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6))',
      },
    },

    '&::before': {
      display: 'block',
      position: 'absolute',
      top: '-7.7%',
      left: 0,
      width: '100%',
      height: '114%',
      content: '""',
    },
    '&::after': {
      display: 'block',
      position: 'absolute',
      top: '-7.7%',
      left: 0,
      width: '100%',
      height: '114%',
      content: '""',
    },

    // '&:nth-child(6n)': {
    //   '&::before': {
    //     backgroundColor: theme.palette.background.header,
    //     transformOrigin: '0 0',
    //     transform: 'skewY(30deg) rotatez(-120deg) skewY(-30deg)',
    //   },
    // },

    /* Add coloured gradient to top of each cube */
    /* Colour 1 lightgreen */
    '&:nth-child(6n)': {
      '&::before': {
        // backgroundImage: 'linear-gradient(-45deg, #85A08B, #B1D6B9)',
        backgroundColor: theme.palette.background.header,
        transformOrigin: '0 0',
        transform: 'skewY(30deg) rotatez(-120deg) skewY(-30deg)',
      },
    },
    '&:nth-child(5)': {
      '&::before': {
        // backgroundImage: 'linear-gradient(45deg, #85A08B, #B1D6B9)',
        backgroundColor: theme.palette.background.header,
        transformOrigin: '100% 0',
        transform: 'skewY(-30deg) rotatez(120deg) skewY(30deg) ',
      },
    },
    /* Colour 2 red */
    // '&:nth-child(6n+2)': {
    //   '&::before': {
    //     backgroundImage: 'linear-gradient(-45deg, #CC342E, #FF413A)',
    //     // backgroundColor: theme.palette.background.header,
    //     transformOrigin: '0 0',
    //     transform: 'skewY(30deg) rotatez(-120deg) skewY(-30deg) ',
    //   },
    // },
    '&:nth-child(6n+1)': {
      '&::before': {
        // backgroundImage: 'linear-gradient(45deg, #CC342E, #FF413A)',
        backgroundColor: theme.palette.primary.main,
        transformOrigin: '100% 0',
        transform: 'skewY(-30deg) rotatez(120deg) skewY(30deg) ',
      },
    },
    /* Colour 3 */
    // '&:nth-child(6n+4)': {
    //   '&::before': {
    //     backgroundImage: 'linear-gradient(-45deg, #7EA2AA, #A4D3DD)',
    //     // backgroundColor: theme.palette.background.header,
    //     transformOrigin: '0 0',
    //     transform: 'skewY(30deg) rotatez(-120deg) skewY(-30deg) ',
    //   },
    // },
    '&:nth-child(6n+3)': {
      '&::before': {
        // backgroundImage: 'linear-gradient(45deg, #7EA2AA, #A4D3DD)',
        backgroundColor: theme.palette.background.header,
        transformOrigin: '100% 0',
        transform: 'skewY(-30deg) rotatez(120deg) skewY(30deg) ',
      },
    },

    '@supports ( -moz-appearance:none )': {
      margin: '20% 0 20% 0',
    },
  },
}));

const Gallery = (props) => {
  const classes = useStyles();
  return (
    <ul className={classes.grid}>
      {images.map((item, index) => (
        <li key={index} className={classes.li}>
          <img className={classes.img} src={item} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
