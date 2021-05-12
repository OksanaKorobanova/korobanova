import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Grid } from '@material-ui/core';
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import PdfFile from '../components/cv/korobanova.pdf';
const useStyles = makeStyles((theme) => ({
  cv: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexBasis: '100%',
  },
  pdfContainer: {
    position: 'relative',
  },
  pdfTitle: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: theme.spacing(2),
  },
}));

const Cv = () => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const goToPrevPage = () => {
    setPageNumber((state) => state - 1);
  };
  const goToNextPage = () => {
    setPageNumber((state) => state + 1);
  };
  return (
    <div className={classes.cv}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container={true} justify='center' alignItems='center'>
          <Button
            variant='outlined'
            color='primary'
            disabled={pageNumber <= 1}
            onClick={goToPrevPage}>
            Prev
          </Button>
          <Grid item={true} xs={12} md={10} lg={10}>
            <div className={classes.pdfContainer}>
              <div className={classes.pdfTitle}>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
              <Document
                file={PdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
                renderMode='svg'>
                <Page
                  size='A4'
                  style={{ display: 'flex', justifyContent: 'center' }}
                  pageNumber={pageNumber}></Page>
              </Document>
            </div>
          </Grid>
          <Button
            variant='outlined'
            color='primary'
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}>
            Next
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Cv;
