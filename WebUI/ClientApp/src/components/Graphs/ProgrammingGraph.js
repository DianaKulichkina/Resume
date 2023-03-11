import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/system';


const data = [
  {
    name: 'HTML',
 
    programming: 85,
  },
  {
    name: 'CSS',
   
    programming: 60,
  },
  {
    name: 'JS',
    
    programming: 75,
  },
  
];

const GraphPC = () => {
  return (
    <Box sx={{ width: "350px", height: "305px", display: { xs: "none", md: "block" } }}>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width={35} />
          <Tooltip />
          <Legend />
          <Bar dataKey="programming" fill="#00695c" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const GraphMobile = () => {
  return (
    <Box sx={{ width: "300px", height: "450px", display: { xs: "block", md: "none" } }}>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width={35} />
          <Tooltip />
          <Legend />
          <Bar dataKey="programming" fill="#00695c" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const ProgrammingGraph = () => {
  return(
    <>
      <GraphPC />
      <GraphMobile />
    </>
  )
}

export default ProgrammingGraph;