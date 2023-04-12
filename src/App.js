import "./App.css";

function App() {
  const title = "Welcome to the new blog:";
  const like = 50;
  const link = "https://www.google.com";
  // const person ={
  //   name: 'jayen';
  //   age: 30
  // }
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {like} times</p>
        <p>{10}</p>
        <p>{"hellow world "}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 20}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
