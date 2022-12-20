import './App.css';
import Typewriter from 'typewriter-effect';
import { AppBar, Grid, Toolbar, Typography, Avatar } from '@mui/material';
import avatar from './static/images/peyto_lake.png';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro,sans-serif',
      'cursive',
    ].join(','),
  },});


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
    direction="row"
    style={{ minHeight: "100vh" }}
  >
        {/* <header className="App-header">
          <p>Hello, World! <strike>I'm a</strike> I was a <SelfAdjectivesTypewriter/></p>
          <p>Women want to be me, men want to be with me and companies want to hire me.</p>
        </header> */}
          <Grid xs={8}>
          <Grid item display="flex" justifyContent="center" alignItems="center">
              <Avatar 
                alt="Kathleen Jumamoy"
                src={avatar}
                sx={{ width: 200, height: 200 }}
                />            
            </Grid>
            <Grid item>
              <Typography variant="h4">
                Hello, World! <strike>I'm a</strike> I was a <SelfAdjectivesTypewriter/>
              </Typography>
              <Typography variant="h5">
                Women want to be me, men want to be with me and companies want to hire me.
              </Typography>
            </Grid>
          </Grid>      
  </Grid> 
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              kathleen jumamoy
            </Typography>
          </Toolbar>
        </AppBar>
        <SplashPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
