import React from 'react';
import Carousel from "react-material-ui-carousel"
import Divider from '@material-ui/core/Divider'
import autoBind from "auto-bind"
import '../style/Example.scss';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    Slider,
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "GwapCity",
       
        Caption: "SMARTCITY!!! Enkomponi Siyaztshunela",
        contentPosition: "middle",
        Items: [
            {
                Name: "IT Driven",
                Image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                Name: "GwapCity",
                Image: "https://images.unsplash.com/photo-1530043123514-c01b94ef483b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        Name: "GwapCity",
        Caption: "COMMUNITY WIFI!",
        contentPosition: "left",
        Items: [
            {
                Name: "High",
                Image: "https://images.unsplash.com/photo-1600996203811-e1c1fb5bf522?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdpZml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                Name: "Speed",
                Image: "https://images.unsplash.com/photo-1561474119-1b76f3a79816?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        Name: "Solar Power",
        Caption: "Ugesi Solar Initiative!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Clean Source",
                Image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                Name: "Clean Power",
                Image: "https://images.unsplash.com/photo-1627579815346-01ec58aba8ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ]
    }
   
]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false,
            navButtonsAlwaysInvisible: false,
            cycleNavigation: true
        }

        autoBind(this);
    }

    toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    toggleCycleNavigation() {
        this.setState({
            cycleNavigation: !this.state.cycleNavigation
        })
    }

    changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    render() {
        return (
            <div style={{ marginTop: "10px", color: "#494949" }}>
               
                <Carousel
                    className="Example"
                    autoPlay={this.state.autoPlay}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    cycleNavigation={this.state.cycleNavigation}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                    next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                    // fullHeightHover={false}
                    // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                    // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                    // indicatorContainerProps={{style: {margin: "20px"}}}
                    // NextIcon='next'
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                        })
                    }
                </Carousel>


              
               

               
              

               

              

            </div>

        )
    }
}


export default function Carousel1(){

    return <BannerExample />
    
    } 
