import React, {Component} from 'react'
import JSON from './drones.json'
class App extends Component {

  state ={
    drones:JSON,
    requests:[
      {
        requested_drone: 10,
        requested_height:15,
        permitted:true,
        altitude_given:'45km'
      },
      {
        requested_drone: 11,
        requested_height:15,
        permitted:true,
        altitude_given:'95km'
      }
    ],
  
  }


  controller = ()=>{




    
    const current_id_array = this.state.requests.map((el, i)=>el.requested_drone)

      console.log(current_id_array);
      const alt = this.state.requests.map(el=>el.altitude_given)

      

    if(this.state.requests.map(el=>el.permitted)){
      current_id_array.map((el, i)=>JSON[i].post = `Air at an altitude of ${alt[i]}`)   
    }
    //else{
          // const remaining_drones = JSON.filter((el, i)=>el.id !== JSON[current_id_array[i]])
          // console.log(remaining_drones);
    //   JSON[EachIds].post = "Ground"
    // }
   
  }
  



  render(){
    this.controller()
    return (
      <React.Fragment>
          {JSON.map(el=>{
            return(
              <div  key={el.id}>
                  <div>{`Drone ${el.id} is on ${el.post}`}</div>
                  {el.post== 'ground'? `Time left to take off is ${Math.random()*15} minute's time`:`Drone will land in ${Math.random()* 30} minute's time`} <br></br>
                  <br/>
              </div>
            )
              
            })
          }
      </React.Fragment>
    )
  }
  
}

export default App;
