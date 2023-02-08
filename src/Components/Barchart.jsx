import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Barchart() {
  const [socialName, setsocialName]= useState([]);
  const [socialValue, setSocialValue]= useState([]);

  useEffect( ()=>{

    const socialMedianame=[];
    const socialMedivalue=[];

    const getSocialrecord= async()=>{
      const dataReq= await fetch("http://localhost:4000/products");
      const dataRes= await dataReq.json();
      //console.log(dataRes);

      for(let i=0; i<dataRes.length; i++)
      {
        socialMedianame.push(dataRes[i].category_title);
        socialMedivalue.push(dataRes[i].totalsells);

      }
      setsocialName(socialMedianame);
      setSocialValue(socialMedivalue);
 }
  getSocialrecord();

  },[]);
  
  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>
      
        <Chart
          type="bar"
          width={1300}
          height={500}
          series={[
            {
              name: "Fashions avalaible in Ajio",
              data: socialValue,
            },
          ]}
          options={{
            title: {
              text: "BarChart",
              style: { fontSize: 30,color:"#800080" },
            },
            
            subtitle: {
      
              text: "Total number of sales",
              style: { fontSize: 18},
            },

            colors: ["#FFA500"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: socialName,
              title: {
                text: "Fashions avalaible in Ajio",
                style: { color: "#800080", fontSize: 30 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
                 title: {
                 text: "Total number of sales in the year 2022",
                 style: { color: "#800080", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Barchart;