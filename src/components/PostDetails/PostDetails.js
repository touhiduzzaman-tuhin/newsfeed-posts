import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PostImage from '../PostImage/PostImage';

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

const PostDetails = (props) => {
    const classes = useStyles();

    const {postId} = useParams();
    const [selectPost, setSelectPost] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setSelectPost(data))
    })
    
    const [images, setImages] = useState([]);
    useEffect(() => {   
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => setImages(data.results))
    }, []);

    return (
        <div className='post-details'>
            <Card className={classes.root} variant="outlined">
                <CardContent style={{textAlign : 'center'}}>
                    <Typography variant="h5" component="h2">
                      {
                        images.map((images, index) => <PostImage key={index} image={images}></PostImage>)
                      }
                    </Typography>                   
                    <Typography variant="h5" component="h2">
                        {selectPost.title}
                    </Typography>                                    
                    <Typography variant="body2" component="p">
                        {selectPost.body}
                    </Typography>                   
                </CardContent>
                
                <Comment postId = {postId}></Comment>
            </Card>
        </div>
    );
};

export default PostDetails;