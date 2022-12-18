// function component 
import React, { useRef } from 'react'

const App = () => {

  const my_input = useRef()
  const showOnConsole = () => {
    if (my_input.current.value != "") {
      if (my_input.current.value === "rizan") { console.log('welcome rizan') }
      console.log(my_input.current.value)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col text-center'>
        <input ref={my_input} type="text" placeholder='username' className='p-4 border-2 border-blue-100' />
        <button onClick={showOnConsole} className='bg-blue-400 p-4 rounded-full my-4 hover:bg-blue-500 hover:text-white'>Show on console</button>

      </div>
    </div>
  )
}

export default App


// class component 
// import React, { Component, createRef } from 'react'

// export default class z extends Component {

//   constructor(props) {
//     super(props);
//     this.my_input = createRef();
//     this.showOnConsole = () => {
//       if (this.my_input.current.value != "") {
//         console.log(this.my_input.current.value)
//       }
//     }
//   }

//   render() {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <div className='flex flex-col text-center'>
//           <input ref={this.my_input} type="text" placeholder='username' className='p-4 border-2 border-blue-100' />
//           <button onClick={this.showOnConsole} className='bg-blue-400 p-4 rounded-full my-4 hover:bg-blue-500 hover:text-white'>Show on console</button>

//         </div>
//       </div>
//     )
//   }
// }
