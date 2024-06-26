import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { LinkOutlined } from '@mui/icons-material';
import { ViewAgenda } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import { useState } from 'react';
import { ModalInfo } from './modalInfo';

const ExpandMore = styled((props) => {


  const { expand, ...other } = props;
  return <IconButton sx={{color:'white'}} {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function ProjectsAbs({ tools, mode, herramientas, tittle, avatar, description, presentation, urlproyect, viewproyect}) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLinkProyect = ()=> {
 
    window.open(urlproyect, '_blank');
    
  }
  const handleViewProject= ()=> {
    window.open(viewproyect, '_blank');
  }
  const handleOpen = () => setOpen(true);
if (mode===true)
return ( 
    <>
    <Card elevation={0} sx={{ fontFamily: 'monospace', backgroundColor:grey[100], maxWidth:300, minWidth:300,    color:'black'}} >
      <CardHeader
      sx={{fontFamily: 'monospace'}}
      avatar={<Avatar src={presentation}></Avatar>}    
      title={tittle}  
        
      />
      <CardMedia

        component="img"
        height="150"
        width="200"
        image={avatar}
        
      />  
      <CardActions disableSpacing>
        <IconButton title="View Project" onClick={handleViewProject} sx={{color:'black'}}   >   
        <LinkOutlined ></LinkOutlined>                
        </IconButton>
        <IconButton title="Repository"  onClick={handleLinkProyect} sx={{color:'black'}}  >
        <ViewAgenda></ViewAgenda>
        </IconButton>
        <IconButton title="Information Project"  onClick={handleOpen} sx={{color:'black'}}>
      <Info ></Info>
        </IconButton>

      </CardActions>
     
    </Card>
    <ModalInfo  urlproyect={urlproyect} tools={tools} avatar={avatar} open={open} setOpen={setOpen} tittle={tittle} description={description}></ModalInfo>
    </>
  );
  if (mode===false)
  return ( 
    <>
    <Card elevation={0} sx={{ fontFamily: 'monospace', backgroundColor:'black', maxWidth:300, minWidth:300,    color:'white'}} >
      <CardHeader
      sx={{fontFamily: 'monospace'}}
      avatar={<Avatar src={presentation}></Avatar>}    
      title={tittle}  
        
      />
      <CardMedia

        component="img"
        height="150"
        width="200"
       
        image={avatar}
        
      />  
      <CardActions disableSpacing>
      <IconButton title="View Project" onClick={handleViewProject} sx={{color:'white'}}   >   
        <LinkOutlined ></LinkOutlined>                
        </IconButton>
        <IconButton title="Repository"  onClick={handleLinkProyect} sx={{color:'white'}}  >
        <ViewAgenda></ViewAgenda>
        </IconButton>
        <IconButton title="Information Project"  onClick={handleOpen} sx={{color:'white'}}>
      <Info ></Info>
        </IconButton>

      </CardActions>
     
    </Card>
    <ModalInfo urlproyect={urlproyect} tools={tools}  avatar={avatar} open={open} setOpen={setOpen} tittle={tittle} description={description}></ModalInfo>
    </>
  );



}