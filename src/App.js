import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  return (
    <div >
      <header >
       <p>
         Hello world
        </p>
        <h1>h1</h1>
        <h2>h2</h2>
      </header>
<body>
<form>
<fieldset>
  <legend>Basic Info</legend>
First Name<input type="text"></input>
Surname<input type={"text"}></input></fieldset><br></br>
Password<input type="password"></input>
<p>Select Gender</p> 
<label>Male</label><input type="radio" value="Male" name="Gender"></input><label>Female</label>
<input type="Radio" VAlue="Female" Name="Gender"></input>
<p>Favourite Subject</p>
<label>HTML</label><input type="checkbox" Value="html" name='Subject'></input><br/>
<label>CSS</label><input type="checkbox" Value="CSS" name='Subject'></input><br/>
<label>JAVA</label><input type="checkbox" Value="JAVA" name='Subject'></input><br/>
<label>REACT</label><input type="checkbox" Value="REACT" name='Subject'></input><br/>
<label>Favorite Car</label>
<select>
<option Value="Audi" name='Car'>Audi</option>
<option Value="Jaguar" name='Car'>Jaguar</option>
<option Value="BMW" name='Car'>BMW</option>
  </select><br></br><br></br>
  <label>Feedback</label><br></br>
  <textarea column="3" rows={5}></textarea><br></br>
<input type={"reset"} Value='reset'></input>
<input type='submit' value={"submit"}></input>
</form>

</body>

    </div>
  );
}

export default App;
