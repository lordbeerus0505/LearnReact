import './App.css';
import { PrintUsers } from './User'; // Exporting to another file and importing.
import { ButtonStateHandler, TextStateHandler } from './States';

function App() {
  var name = <h1>Abhiram Natarajan</h1>
  const names = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5']
  const users = [{name:'Name1', age:22}, {name: 'Name2', age:23}, {name:'Name3', age:24}, {name:'Name4', age:24}, {name: 'Name5', age:25}]
  return (
    <div className="App">
      {/* {name} */}
      <BasicComponent name="Abhiram" age="24"/> {/* This is how a component is called */}
      <BasicComponent name="Aishu" age="40"/>
      <ButtonStateHandler/>
      <TextStateHandler/>
      {/* JSX allows you to put Javascript inside HTML */}
      {
        users.map((val, key) => {
          return <PrintUsers name= {val.name} age = {val.age} />;
        }
      )};
    </div>
  );
}

// Can also use it like this  
// function BasicComponent (props) {
//   return <h1>Component 456</h1>
// }
const BasicComponent = (props ) => {
  if (props.age > 25) {
    return (
      <div>
        <h1>Over Age</h1>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
    )
  }
  return (
    <div>
      <h2>Under Age</h2>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
    
  );
};



export default App;
