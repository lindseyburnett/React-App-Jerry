import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export function QuizLayout(){


    const Answers = {    questions: [
        {
            options: [
                { answer: 'Lavender', isCorrect: false },
                { answer: 'Lawyer', isCorrect: true },
                { answer: 'Listen', isCorrect: false },
                { answer: 'Laptop', isCorrect: false },

            ]
        }
    ]}

    function answerCheck (isCorrect) {
    if (isCorrect = true) { 
            console.log('correct'); 
        }
            console.log('incorrect')
        }
    
    

    return (
        <div>
            <span>Correct Answers = </span>



            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Image></Image>

                </Grid>

                <Grid item xs={12}  sm={6}>

                    <Button
                        variant="contained"
                        OnClick={(answerCheck) => this.state.isCorrect = false}>Lavendar</Button>
                    <Button
                        variant="contained"
                        OnClick={(answerCheck) => this.state.isCorrect = true}>Lawyer</Button>
                    <Button
                        variant="contained"
                        OnClick={(answerCheck) => this.state.isCorrect = false}>Listen</Button>
                    <Button
                        variant="contained"
                        OnClick={(answerCheck) => this.state.isCorrect = false}>Laptop</Button>


                </Grid>
            </Grid>
        </div>

        
    )
}