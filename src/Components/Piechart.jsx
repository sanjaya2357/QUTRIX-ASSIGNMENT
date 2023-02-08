import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Piechart()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const getStudentdata= async()=>{
       const reqData= await fetch('http://localhost:4000/products');
       const resData= await reqData.json();   
       console.log(resData);     
       for(let i=0; i< resData.length; i++)
       {
        sSubject.push(resData[i].category_title);
        sMarks.push(parseInt(resData[i].totalsells));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
        
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart 
                type="pie"
                width={1349}
                height={550}

                series={ studentMarks }                

                options={{
                        title:{ text:"Total number of sales in  PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:stdudentSubject                     

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Piechart;