import { useState } from "react"
import Card from "./component/card";


function App(){
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')

  const [copy,setCopy] = useState([]);


  function addNote(e){
    e.preventDefault();
    if(title=='' || description==''){
      alert('Please enetr both title and description')

    }
    else{
  
    let copyarr=[...copy];
    copyarr.push({title,description})
    setCopy(copyarr)
    console.log(copy)
      setTitle('');
    setDescription('');
    }


   

  }
  function deletetask(idx){
    let deletarr=[...copy];
    deletarr.splice(idx,1)
    setCopy(deletarr);
  }




  return(
    <>
    <div className="bg-black lg:flex justify-between p-5 h-screen overflow-auto lg:full ">
      <form className="flex flex-col gap-5 w-1/2 items-center mt-45" >
      <h1 className="border-white text-white text-5xl font-medium">Enter Your Task</h1>

      {/* Inputing the title of teh task */}

        <input  value={title} onChange={(e)=>{
          
          setTitle(e.target.value)
        }} type="text" className="border-white border-2 bg-black text-white w-100  lg:w-150  rounded-3xl items-center p-3"  placeholder="Enter the Title"/>


      {/* Input teh description of the task */}
        <textarea value={description} onChange={(e)=>{
        
          setDescription(e.target.value)}}  type="text" className="border-white border-2 w-100 bg-black  text-white lg:w-150 rounded-3xl items-center p-3 h-25" placeholder="Description  of the task"/>
{/* 
        button to add teh task in teh list */}

        <button onClick={addNote} className="border-2 active:scale-95 border-white bg-gray-900  hover:bg-white hover:border-gray  hover:text-black text-white lg:w-1/3 rounded-3xl item-cente p-3 ">Add Note</button>



      </form>



      <div className=" w-1/2 shadow-amber-100 h-auto rounded-2xl p-5 border-l-2 border-white overflow-auto">
            <h1 className="border-white text-white text-5xl font-medium">Your Tasks</h1>
      <div className="flex gap-5 overfow-auto flex-wrap mt-10" >{copy.map((elem,idx)=>{
        return(
          <div className="h-62 w-50 bg-gray-500 flex flex-col rounded items-center justify-between p-3 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/009/313/629/small_2x/torn-paper-clip-art-free-png.png')]">
            <div><h1>{elem.title}</h1>
            <p>{elem.description}</p></div>
            <button onClick={()=>{
              deletetask(idx)
            }} className="bg-red-600 p-1 rounded active:scale-95">Delete</button>
            
          
          </div>
        )


      }
    )
      }


      </div>

      <img src="" alt="" />


      </div>
    </div>
    
    
    
    </>
  )
}
export default App