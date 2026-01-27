const HomePage = ()=>{
  return(
    <div className="h-screen flex justify-center items-center">
       <form className="flex items-center flex-col border border-black h-100 w-50">
      <label>Username</label>
      <input className="border"/>

      <label>Password</label>
      <input className="border"/>
    </form>

    </div>
   
  )
}

export default HomePage