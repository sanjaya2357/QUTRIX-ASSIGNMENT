import { Link } from "react-router-dom";

const Home=()=>{

  return(
    <>
    <br />
    <h1 align="center">Welcome to Ajio</h1> <br />
    <p >Ajio is an Indian retail company and a subsidiary of Reliance Industries. Founded in 2006, it is the largest retailer in India in terms of revenue.[4] Its retail outlets offer foods, groceries, apparel, footwear, toys, home improvement products, electronic goods, and farm implements and inputs. Apart from physical outlets, the company also sells products on its e-commerce channels. It has 280,000 employees at 16,700 store locations.</p>
     <br />
     <br />
     <h2 align="center">Add Fashions <Link to="/addfashion" style={{ textDecoration: 'none' }}> <button>ADD</button> </Link>
  </h2> 
    
    </>
    
  ) 
}
export default Home;