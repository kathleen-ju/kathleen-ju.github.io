import './App.css';
import Typewriter from 'typewriter-effect';
import { AppBar, Grid, Toolbar, Typography, Avatar, Box, Divider, Container, Card, CardContent, CardMedia, Stack, ImageList, ImageListItem, ImageListItemBar, CardActions, Button, Paper } from '@mui/material';
import avatar from './static/images/peyto_lake.png';
import reactLogo from './static/images/react-icon.png';
import jsLogo from './static/images/javaScript-logo.png';
import tsLogo from './static/images/typescript_logo.png';
import csharpLogo from './static/images/csharp-logo.png';
import dotnetLogo from './static/images/dotnetcore.png';
import postgresLogo from './static/images/postgresql.png';
import mysqlLogo from './static/images/mySQL-logo.png';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro,sans-serif',
      'cursive',
    ].join(','),
  },
});


function SelfAdjectivesTypewriter() {
  return <Typewriter
    options={{
      strings: ['frontend developer', 'backend developer', 'full stack developer'],
      autoStart: true,
      loop: true,
    }} />;;
}

function SplashPage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
        xs={8}
      >
        <Grid item>
          <Avatar
            alt="Kathleen Jumamoy"
            src={avatar}
            sx={{ width: 200, height: 200 }}
            style={{
              border: '10px solid pink'
            }}
          /></Grid>
        <Grid item><Typography variant="h4">
          Hello, World! <strike>I'm a</strike> I was a <SelfAdjectivesTypewriter />
        </Typography></Grid>
        <Grid item><Typography variant="h5">
          Women want to be me, men want to be with me and companies want to hire me.
        </Typography></Grid>
      </Grid>

    </Grid>
  );
}

// function WorkTimeline() {
//   return (

//   );
// }
const frontendData = [
  {
    img: reactLogo,
    title: 'React',
    description: 'Preferred web framework'
  },
  {
    img: jsLogo,
    title: 'JavaScript',
    description: 'JavaScript is a great language. It has a simple syntax, large ecosystem, a great community but also \"11\" + 1 => \"111\" and \"11\" - 1 => 10'
  },
  {
    img: tsLogo,
    title: 'TypeScript',
    description: 'Worked on TS for a project and what\'s not to love about TS!. You can\'t pretend that TypeScript isn\'t just JavaScript in a nice outfit.'
  }
];

const backendData = [
  {
    img: csharpLogo,
    title: 'C#',
    description: 'Preferred web framework'
  },
  {
    img: dotnetLogo,
    title: '.NET Core',
  },
  {
    img: postgresLogo,
    title: 'PostgreSQL',
  },
  {
    img: mysqlLogo,
    title: 'MySQL',
  }
];

function AboutMe() {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={5}
        xs={10}
      >
        <Grid item id="aboutme">
          <Typography variant="h4">
            About me
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            I'm Kathleen Jumamoy from New Zealand, software developer based in Alberta, Canada. As a full stack developer, I'm jack of all trades, master of none.
            Saving the world, one code at a time.
            Able to sit in my chair for extended periods of time without numbness or fatigue.
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid>
            <Typography variant="h5">
              Tech Stack
            </Typography>
          </Grid> */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={5}
      >
        {[...frontendData, ...backendData].map((item) => (
          <Grid item>
            <Card
              style={{ backgroundColor: '#FEEFF1' }}
              sx={{ width: 180, height: 180, borderRadius: '10px', }}
              elevation={3}
            >
              <CardContent>
                <img
                  src={item.img}
                  alt={item.title}
                  maxWidth='100px'
                  height='100px'
                />
              </CardContent>
              <CardContent><Typography variant="subtitle1">
                {item.title}
              </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>);
}

function Portfolio() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      style={{ minHeight: "100vh" }}
    >
      <Grid xs={8}>
        <Box id='aboutme'>
          <Grid item>
            <Typography>
              About me
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              I'm Kathleen Jumamoy, software developer based in Alberta, Canada. As a full stack developer, I'm jack of all trades, master of none.
              Saving the world, one code at a time.
              Able to sit in my chair for extended periods of time without numbness or fatigue.
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" style={{ background: 'pink' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              kathleen jumamoy
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <SplashPage />
          <Divider variant="middle" />
          <AboutMe />
          <Divider variant="middle" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
