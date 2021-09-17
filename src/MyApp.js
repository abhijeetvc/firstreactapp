import MyApp1 from './MyApp1'

let message="Helloooo!!!!"

function MyApp(){
  return( 
    <div>
      <h1>Welcome to ReactJS</h1>
      <p>{message}</p>
      <MyApp1/>
    </div>  
  )
}

export default MyApp