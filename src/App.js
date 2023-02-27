
import './App.css';
import {useEffect, useState} from 'react';


const URL = "https://api.chucknorris.io/jokes/random"

function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(()=>{
    async function getJoke(){
      try{
        const response = await fetch(URL);
        if (response.ok) {
          const json = await response.json();
          const joke = json.contents.chucknorris[0].joke;
          setTitle(joke.title)
          setText(joke.text)
        }
        else{
          alert("Sorry, no Chuck Norris today!")
        }
      }
        catch(err){
          alert(err)
        }
        }
        getJoke()
      },[])
    
  
  return (
    <div style={{margin: 50}}>
      <h1>Chuck Norris</h1>
      <h3>{title}</h3>
      <p>{text}</p>   
    </div>


  );
}

export default App;
