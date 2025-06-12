
import jokesData from './data/jokes.json'
import memesData from './data/meme.json'

import './App.css'
// import { Joke } from './components/JokesComponent'
import { MemeComponent } from './components/MemeComponent'

function App() {

  console.log(jokesData)

  return (
    <>

        {/* {
        jokesData.map((item, id) => (
          <Joke key={id} joke={item.joke} rating={item.rating} />
        ))
        } */}

      {/* {
      jokesData.filter((joke) => joke.rating >3).map((item, id) =>(
        <Joke key={id} joke ={item.joke} rating={item.rating}/>
      ))
       } */}

       {
        memesData.map((item)=>{
          return <MemeComponent key={item.id} title= {item.title} image ={item.imageUrl}/>
        })
       }

    </>
  )
}

export default App
