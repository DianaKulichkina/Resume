import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Box } from '@mui/system';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const data = [
  {
    name: 'Adobe Photoshop',
    uv: 90,
    
  },
  {
    name: 'GIT',
    uv: 60,
   
  },
  {
    name: 'Adobe Lightroom',
    uv: 95,
  
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const GraphPC = () => {
  return (
    <Box sx={{ width: "350px", height: "305px", display: { xs: "none", md: "block" } }}>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={400}
          height={300}
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
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`other-skill-${index}-pc`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const GraphMobile = () => {
  return (
    <Box sx={{ width: "315px", height: "470px", display: { xs: "block", md: "none" } }}>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
         
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -28,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`other-skill-${index}-mobile`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const OtherGraph = () => {
  return(
    <>
      <GraphPC />
      <GraphMobile />
    </>
  )
}

export default OtherGraph;
