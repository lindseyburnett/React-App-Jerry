import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export function QuizLayout(){



    function answerCheck (isCorrect) {
        alert(isCorrect ? 'correct' : 'incorrect')
    }
    
    

    return (
        <div>
            <span>Correct Answers = </span>

            

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ImageList sx={{ width: 500, height: 500 }}>
                        <ImageListItem>
                            <img
                            src={'../img/pic.jpg'}
                            />
                         </ImageListItem>

                    </ImageList>

                </Grid>

                <Grid item xs={12}  sm={6}>

                    <Button
                        variant="contained"
                        onClick={() => answerCheck(false)}>Lavendar</Button>
                    <Button
                        variant="contained"
                        onClick={() => answerCheck(true)}>Lawyer</Button>
                    <Button
                        variant="contained"
                        onClick={() => answerCheck(false)}>Listen</Button>
                    <Button
                        variant="contained"
                        onClick={() => answerCheck(false)}>Laptop</Button>


                </Grid>
            </Grid>
        </div>

        
    )
}