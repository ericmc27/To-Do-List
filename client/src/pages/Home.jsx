import { authClient } from '../../lib/auth'

const HomePage = ()=>{
  const {data: session, isPending } = authClient.useSession()

  if (isPending){
    return null
  }

  return(
    <>
    {
      session ?
        <h1>This is home and is protected {session.user.name}</h1>
      :
      <h1>Not signed in</h1>
    }
    </>
  )
}

export default HomePage