import logo from './logo.svg';
import './App.css';

function Header () {
  return (
    <header classname="header">
      <h1 >My First Header </h1>
    </header>
  )
}
function Content () {
  return (
    <div classname="content">
      <p >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  )
}
function Footer () {
  return (
    <div classname="footer">
      <p>
        &copy; My Self -2201
      </p>
    </div>
  )
}

function App() {
  return (
    <div classname="App">
      <Header></Header>
      <hr></hr>
      <Content></Content>
      <hr></hr>
      <Footer></Footer>
      <hr></hr>
    </div>
  )
}

export default App