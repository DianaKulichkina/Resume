import { Language } from '@mui/icons-material';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/system';

const data = [
  {
    name: 'Ukrainian',
    speaking: 100,
    writing: 100,
    understanding: 100,
  },
  {
    name: 'English',
    speaking: 65,
    writing: 70,
    understanding: 75,
  },
  {
    name: 'Portugues',
    speaking: 85,
    writing: 65,
    understanding: 85,
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
          <Bar dataKey="speaking" fill="#26a69a" />
          <Bar dataKey="writing" fill="#82ca9d" />
          <Bar dataKey="understanding" fill="#00838f" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const GraphMobile = () => {
  return (
    <Box sx={{ width: "300px", height: "470px", display: { xs: "block", md: "none" } }}>
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
          <Bar dataKey="speaking" fill="#26a69a" />
          <Bar dataKey="writing" fill="#82ca9d" />
          <Bar dataKey="understanding" fill="#00838f" />
            
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const LanguagesGraph = () => {
  return(
    <>
      <GraphPC />
      <GraphMobile />
    </>
  )
}

export default LanguagesGraph;