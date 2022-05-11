import './App.css';
import './components/Tag.jsx';
import './components/Cat.jsx';
import { useEffect, useState } from 'react';
import { Tag } from './components/Tag.jsx';
import { Cat } from './components/Cat.jsx';


function App() {
  const [data, setData] =useState([]);
  const [photo, setPhoto] = useState("/src/images/eoscat2a.png")
  const [tag, setTag] = useState('');

 
  const fetchData = () => {
    fetch('https://cataas.com/api/tags')
      .then(res => res.json())
      .then(data => setData(data) );
    };  
    
    useEffect(fetchData, [])

   

    const onChangeValue = (e) => {
      console.log(e.target.value);
      let newTag = e.target.value;
      setTag(newTag);
      e.preventDefault();
  };
    
   


  return (
    <div className="App">
     <h1>Every Day is Better with a Cat</h1> 
     
     <div id='catPic'>
       {
         tag && <Cat tagProp={tag}></Cat>
       }
      </div >

      <div id="options" onChange={onChangeValue}>
        <legend>Choose Your Cat Pic Type</legend>          
          {
            data.sort(() => .5 - Math.random()).slice(0,5).map((item, i) => (
              <Tag itemProp={item} key={i} id={i}/>
            ))
          }      
      </div>
     
      <footer>photo frame by cyndikirkpatrick.com</footer>
    </div>
  );
}

export default App;
