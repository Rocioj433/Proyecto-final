import React from "react";
import './newsletter.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const Newsletter = () => {
    const handleDefault = (e) =>{
        e.preventDefault();
    }
  return (
    <div className="contact-form" id="contact">
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
          label="Name"
        />
        <br/>
        <TextField
          id="outlined-read-only-input"
          label="Email"
          required
        />
        <br/>
        <TextField
          id="outlined-number"
          required
          label="Phone Number"
          type="number"
        />
        <br/>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          required
        />
        <br/>
        <br/>
        <button  onClick={handleDefault} className="btn">Enviar</button>
        </div>
      </Box>
    </div>
  );
};

export default Newsletter;
