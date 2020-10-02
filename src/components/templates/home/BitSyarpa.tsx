import React from 'react';
import styled from 'styled-components'
import { colors } from '../../../assets/colors'
import { Box, makeStyles} from '@material-ui/core'
import Text from '../../Text'
import Grid from '@material-ui/core/Grid'
import Image from '../../Image'
import card from '../../../assets/Images/card.png'
import { images } from '../../../assets/Images'

const useStyles = makeStyles((theme) => ({
    text_header: {

        fontSize: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
            textAlign: 'left',
            

        }
    },

    text_subtitle: {
        fontSize: '23px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',

        }
    },

}));

const Bitsyarpa = styled.div`
    width: 95%;
`
function BitSyarpa() {
    const classes = useStyles();
    return (
        <Bitsyarpa>
            <Box style={{marginTop: '8em'}}>
                <Grid container justifyContent='center' sm={12} spacing={3}>
                    <Grid item xs={10} md={12} lg={3}>
                        
                            <Text color={colors.lightblue} variant='h4'
                                fontWeight='bold'

                                className={classes.text_header} >
                                Why BitSyarpa
                         </Text>

                            <Text
                                variant='subtitle1' marginTop='2em' width='80%'>
                                Sed ut perspiciatis unde omnis iste natus error sit explicabo
                        </Text>

                        
                        
                       
                        
                    </Grid >
                    <Grid item xs={9} md={4} lg={2}  >
                        <Box textAlign='center'>
                            <Image src={card} />
                        </Box>
                        <Text variant='h5'
                            textAlign='center'
                            color={colors.lightblue}
                            className={classes.text_subtitle}
                        >
                           Debit Card
                    </Text>
                        <Text variant='subtitle1' textAlign='center' color={colors.grey} >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                    </Text>
                    </Grid >
                    <Grid item xs={9} md={4} lg={2}  >
                         <Box textAlign='center'>
                                <Image src={card} />
                            </Box>
                        <Text variant='h5' textAlign='center' color={colors.lightblue} className={classes.text_subtitle}>
                            Debit Card
                    </Text>
                        <Text variant='subtitle1' textAlign='center' color={colors.grey}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                    </Text>
                    </Grid>
                    <Grid item  xs={9} md={4} lg={2}  >
                        <Box textAlign='center'>
                            <Image src={card} />
                        </Box>
                        <Text variant='h5' textAlign='center' color={colors.lightblue} className={classes.text_subtitle}>
                            Debit Card
                    </Text>
                        <Text variant='subtitle1' textAlign='center' color={colors.grey}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed consetetur sadipscing elitr, sed
                    </Text>
                    </Grid>

                </Grid>
            </Box>
        </Bitsyarpa>
    );
}

export default BitSyarpa;