import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CourseCard from './CourseCard';

const CourseCatalog = () => {
  // This would come from API
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn React fundamentals' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript' },
    { id: 3, title: 'Node.js Backend Development', description: 'Build server-side applications' }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 3, mb: 4 }}>
        Course Catalog
      </Typography>
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseCatalog;