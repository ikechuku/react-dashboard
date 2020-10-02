import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../assets/colors'
import { Box, makeStyles } from '@material-ui/core'
import Text from '../../Text'
import Button from '../../Button'
import Grid from '@material-ui/core/Grid'
import Image from '../../Image'
import card from '../../../assets/Images/card.png'


const useStyles = makeStyles((theme) => ({
    text_header: {

        fontSize:'30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px'
        }
    },
    text_subtitle:{
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        
        }
    },
    Image: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '1em'

        }
    }
}));

const TradingOptions = styled.div`
        width: 80%;
        margin: 0 auto;
        overflow: hidden;

`
function Tradingoptions() {
    const classes = useStyles();
    return (
        <TradingOptions>
            <Box style={{marginTop: '8rem'}}>
                <Text color={colors.lightblue} variant='h4'
                    textAlign='center' 
                    fontWeight='bold'
                    
                    className={classes.text_header} >
                    Start Trading easily 
                </Text>

                <Text
                    variant='subtitle1' textAlign='center' marginTop='2em'  >
                    Sed ut perspiciatis unde omnis iste natus error sit explicabo
                </Text>

                <Box marginTop='3em'>
                    <Grid container justifyContent='space-evenly' spacing={6}>
                        <Grid item sm={12} md={3} >
                            <Box textAlign='center'>
                                <Image src={card} />
                            </Box>
                            
                            <Text variant='h5' 
                                textAlign='center'
                                color={colors.lightblue}
                                className={classes.text_subtitle}
                                    >
                                Step 1
                             </Text>
                            <Text variant='subtitle1' textAlign='center' color={colors.grey} >
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                            </Text>
                        </Grid >
                        <Grid item sm={12} md={3}  >
                            <Box textAlign='center'>
                                <Image src={card} />
                            </Box>
                            <Text variant='h5' textAlign='center' color={colors.lightblue} className={classes.text_subtitle}>
                                Step 2
                        </Text>
                            <Text variant='subtitle1' textAlign='center' color={colors.grey}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                        </Text>
                        </Grid>
                        <Grid item sm={12} md={3}  >
                            <Box textAlign='center'>
                                <Image src={card} />
                            </Box>
                            <Text variant='h5' textAlign='center' color={colors.lightblue} className={classes.text_subtitle} >
                                Step 3
                        </Text>
                            <Text variant='subtitle1' textAlign='center' color={colors.grey}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                        </Text>
                        </Grid>

                    </Grid>
                </Box>

                <Box textAlign='center' mt={3}>
                    <Button bgColor={colors.peach} color={colors.white} variant='contained' >
                        Get Started
                </Button>
                </Box>
               
               
            </Box>
        </TradingOptions>
    );
}

export default Tradingoptions;