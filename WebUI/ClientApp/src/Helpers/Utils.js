import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { blueGrey, cyan, teal } from '@mui/material/colors';

export const CardWrapper = ({ children, sx }) => {
    return (
        <Card 
            sx={ sx ?? { 
                width        : { xs: "100%", md: 450 }, 
                minHeight    : { xs: "calc(100vh - 91px)", md:"450px" }, 
                maxHeight    : { xs: "calc(100vh - 91px)", md:"450px" }, 
                boxSizing    : "border-box", 
                padding      : 5, 
                borderRadius : { xs: '0', md: '0px 16px 16px 0px' },
            }}
            >
        { children }
    </Card>
    );
}

export const CardHeaderWrapper = ({ title, subheader, titleVariant, to }) => {
    return (
        <CardHeader 
            title={title}
            titleTypographyProps={{ variant: titleVariant ?? "h4", fontFamily: 'Titillium Web', color: cyan[900] }} 
            subheader={subheader}
            subheaderTypographyProps={{ variant: "subtitle2", fontFamily:'Titillium Web', color: cyan[700], mt: 2 }}
            action={
                to ?
                <IconButton 
                    LinkComponent={Link} 
                    to={to} 
                    aria-label="close" 
                    sx={{ 
                        color: cyan[900] 
                    }}
                    >
                    <CloseIcon />
                </IconButton> :
                null
                }
            />
    );
}

export const CardHeaderWrapperAvatar = ({ title, subheader, source, alt, to }) => {
    return (
        <CardHeader 
            avatar={
                <Avatar 
                    variant={"rounded"} 
                    alt={alt} 
                    src={source} 
                    style={{ 
                        width : 60, 
                        height: 60,
                    }} 
                    />
                }
            title={title}
            titleTypographyProps={{ fontFamily:'Titillium Web', color: cyan[900], variant: "h6" }}
            subheader={subheader}
            subheaderTypographyProps={{ fontFamily:'Titillium Web', color: cyan[900], variant: "subtitle2" }}
            action={
                to ?
                <IconButton 
                    LinkComponent={Link} 
                    to={to} 
                    aria-label="close" 
                    sx={{ 
                        color: cyan[900] 
                    }}
                    >
                    <CloseIcon />
                </IconButton> :
                null
                }
            />
    );
}