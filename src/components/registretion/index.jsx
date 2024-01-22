import { useEffect, useState } from "react";

const RegistrationForm = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      console.log('Registration successfully');
    }
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <pre>{flag ? <h2> Hello {inputData.name}, you registered successfully</h2> : ""}</pre>
      <form onSubmit={handleSubmit}>
        <div>Registration Form</div>
        <div>
          <input type="text" placeholder="Enter Name" name="name" value={inputData.name} onChange={handleData} />
          <input type="email" placeholder="Enter Email" name="email" value={inputData.email} onChange={handleData} />
          <input type="password" placeholder="Enter Password" name="password" value={inputData.password} onChange={handleData} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegistrationForm;
