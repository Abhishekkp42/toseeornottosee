import axios from "axios";
import { useEffect, useState } from "react";
// import "./styles.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const[rating,setRating]=useState([])

  const perPage = 5;

  const fetchData = (page, perPage) => {
    setLoading(true);
    setErr(false);
    axios("http://localhost:5000/restaurants", {
      method: "GET",
      params: {
        _page: page,
        _limit: perPage
      }
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch(() => {
        setLoading(false);
        setData([]);
        setErr(true);
      });
  };

  useEffect(() => {
    fetchData(page, perPage);
  }, [page, perPage]);
  console.log(data);

  const handleSort=(x)=>{
    data.sort((a,b)=>{
  
      if(x=="asc"){
        return a[costForTwo]-b[costForTwo]
      }
     
        return b[costForTwo]-a[costForTwo]
      
      
    })
    setData([...sortdata])
  }

  return (
    <div>
		<h1>My Restaurant</h1>
      
      <div>
        <button>4 and above</button>
        <button>3 and above</button>
        <button>2 and above</button>
        <button>1 and above</button>
      </div>

      <div>
        <button>Cash</button>
		<button>Card</button>
		<button>All</button>      
      </div>

      <div>
        <button onClick={()=>handleSort(asc)}>asc</button>
        <button onClick={()=>handleSort(dsc)}>dsc</button>     
      </div>

      {err && <div className="error"> Something went wrong! Try again </div>}
      <div>
        {data.map((item) => (
          <div style={{ display: "flex", gap: "1rem", height: "300px", backgroundColor:"brown", marginTop:"30px" }} key={item.id}>
            <div></div>
			<img src={item.src} style={{height: "200px",width: "300px", marginTop:"30px"}} />
            <div>
				<h2>{item.name}</h2>
				<p>Rating: {item.rating}</p>

				<p>Cost for Two: {item.costForTwo}</p>
        Accepts: {item.cash && item.card ? 'Cash and Card' : item.card ? 'Card' : 'Cash'}
        </div>
          </div>
        ))}
      </div>
      {loading && <div>...loading</div>}
      <button
        disabled={loading || page === 1}
        onClick={() => setPage((page) => page - 1)}
      >
        PREV
      </button>
      <button disabled={loading} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
      <div>Current page: {page}</div>
    </div>
  );
}
