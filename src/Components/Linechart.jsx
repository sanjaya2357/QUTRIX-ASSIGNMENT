import React,{useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

function Linechart()
{
    const [sData, setSdata]= useState([]);
    useEffect( ()=>{
        const getvaluedata= async()=>{
            const newvalue=[];
            const reqData= await fetch('http://localhost:4000/products');
            const resData= await reqData.json();
            //console.log(resData);
            for(let i=0; i < resData.length; i++)
            {
                newvalue.push({name:resData[i].category_title, data:resData[i].value });   

            }
            setSdata(newvalue);

        }
        getvaluedata();
    },[]);   

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
          <h2>Line Chart- Using Apexcharts in React </h2>          
          <Chart type='line'
          width={1300}
          height={550}
          series={sData}
          options={{
            title:{ text:"Product sales in 2022"},
            xaxis:{
                title:{text:"Product Sell in Months"},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Product in K"}                 
            }          

        }}
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;