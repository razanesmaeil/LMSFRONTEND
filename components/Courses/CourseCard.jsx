import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300x140"
        alt={course.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
      <Button size="small" sx={{ m: 2 }}>View Course</Button>
    </Card>
  );
};

export default CourseCard;