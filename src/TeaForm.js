import React,{useState} from "react"

function TeaForm ({onAddTea}) {
const [name,setName] = useState("")
const [image,setImage]=useState('')
const [taste,setTaste]= useState("")
const [benefit,setBenefit] = useState("")

function handleSubmit (e){
    e.preventDefault()
    const teaData = {
        name:name,
        image:image,
        taste:taste,
        benefits:benefit

    }
    fetch("http://localhost:3000/tea",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(teaData)
    })
    .then((r)=>r.json())
    .then((newTea)=>onAddTea(newTea))
}
return (
    <div className="container">
      <form className="add-tea-form" onSubmit={handleSubmit}>
        <h2 style={{color:'orangered'}} className="center">Add a Tea!</h2>
        <input
          type="text"
          name= {name}
          placeholder="Enter the tea's name..."
          className="input-text"
          onChange={(e)=>setName(e.target.value)}
          
        />
        <br />
        <input
          type="text"
          name= {image}
          placeholder="Enter a teas's image URL..."
          className="input-text"
          onChange={(e)=>setImage(e.target.value)}
         
        />
        <br />
        <input
          type="text"
          name= {taste}
          placeholder="What does it taste like?"
          className="input-text"
          onChange={(e)=>setTaste(e.target.value)}
         
        />
        <br />
        <input
          type="text"
          name= {benefit}
          placeholder="What kind of health benefits does it provide?"
          className="input-text"
          onChange={(e)=>setBenefit(e.target.value)}
         
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit New Tea"
          className="submit"
        />
      </form>
    </div>
)

}

export default TeaForm