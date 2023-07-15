import axios from "axios"
import { useEffect } from "react"

function Home() {
  useEffect(() => {
    const fetchData = async ()=> {
      const res = await axios.get('https://bitcom.onrender.com/hello');
      console.log(res.data);
    }
    fetchData()
  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home