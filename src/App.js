
import { TextField } from '@mui/material';
import './App.css';
import './MyApp';
import MyApp from './MyApp';
import Box from '@mui/material/Box';



function App() {
  return (
    <div className="App">
    <h1> NoteTakey </h1>
    <MyApp></MyApp>
    <TextField id="outlined-required" label="write your thoughts" variant="filled" />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
        </Box>
    </div>
  );
}

export default App;
