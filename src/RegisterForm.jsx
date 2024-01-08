import React, { useState } from 'react';

const RegistrationForm = () => {
  let [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    gender:'',
    hobbies:''
  });

  let {username,email,password,gender,hobbies} = data

  let handleInputChange = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setData({...data,[name]:value})
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', data);
    setData({
    username: '',
    email: '',
    password: '',
    gender:'',
    hobbies:'',
    })
  };

  
  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>

        <label>
        Gender:
        <select
          name="gender"
          value={gender}
          onChange={handleInputChange}
        >
        <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </label>
        
    
      <div value={hobbies} name="hobbies" onChange={handleInputChange}>
        <label htmlFor="">Hobbies :</label>
          <input type="checkbox" name="hobbies" value="reading" /> Reading
          <input type="checkbox" name="hobbies" value="playing" /> Playing
          <input type="checkbox" name="hobbies" value="singing" /> Singing
      </div>
        
      

        <button type="submit">Submit</button>
      </form>

      <div className="display-values">
        <h3>Current State Values:</h3>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
