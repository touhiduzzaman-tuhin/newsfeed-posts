import React from 'react';
import './Post.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Post = (props) => {
    const { title, body, id, image } = props.post;
    const classes = useStyles();   
    return (        
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Card style ={{float: 'left', width: '80%', padding: '10px', margin: '10px auto', textAlign : 'center', backgroundColor: '#f0f2f5'}} className={classes.root} variant="outlined">                   
                    <CardContent>                      
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <img src={image} alt=""/>
                        </Typography>                                             
                        <Typography variant="body2" component="p">
                            {body}
                            <Button size="small">
                                <Link to={`/post/${id}`}>See More</Link>
                            </Button>                            
                        </Typography>
                    </CardContent>
                    <Grid  container direction="row" justify="center" alignItems="center">
                        <CardActions>
                            <Button className='like-button' size="small" variant="contained" color="primary">
                                <FontAwesomeIcon icon={faThumbsUp} /> &nbsp;  Like
                            </Button>
                            <Button size="small" variant="contained" color="primary">
                                <FontAwesomeIcon icon={faCommentAlt} /> &nbsp; <Link style={{color : 'white', textDecoration : 'none'}} to={`/post/${id}`}>Comment</Link>
                            </Button>
                            <Button size="small" variant="contained" color="primary">
                                <FontAwesomeIcon icon={faShareAlt} /> &nbsp; Share
                            </Button>
                        </CardActions>
                    </Grid>                                      
                </Card>
            </Container>
        </React.Fragment>

        
    );
};

export default Post;