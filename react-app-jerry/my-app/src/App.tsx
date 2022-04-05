import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { QuizLayout } from './features/QuizPage.js';



export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="body">
        <Typography variant="h4" component="h1" gutterBottom>
          Kyle's Super Fancy Knowledge Quiz
        </Typography>
        <QuizLayout/>
      </div>
    </Container>
  );
}
