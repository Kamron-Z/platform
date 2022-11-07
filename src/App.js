import { useState } from "react";

let user = {
  login: '',
  password: '',
}

function App() {

  const onChangeLogin = (e) => {
    user.login = e.target.value
  }

  const onChangePassword = (e) => {
    user.password = e.target.value
  }

  const [red, setRed] = useState(false)

  const sendDate = () => {
    console.log(user);
    setRed(true)
  }
  return (
    red ? <div>
      Telefon number
      <input placeholder="tel"/>
      <button>Send</button>
    </div> :
    <div>
      <h3>Sing up</h3>
      <div>
        login 
      <input name="login" placeholder="login" onChange={(e) => onChangeLogin(e)}/>
      </div>
      <div> 
        password 
      <input name="password" placeholder="password" onChange={(e) => onChangePassword(e)}/>
      </div>
      <div>
        <button onClick={sendDate}>sing up</button>
      </div>
    </div>
  );
}

export default App;
