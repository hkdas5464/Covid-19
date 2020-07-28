import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Test from './Test';
//
import axios from 'axios';
import './tablestyle.css';
function App() {
  const [data, setBooks] = useState(null);
  useEffect(async () => {
    const response = await axios(
      'https://api.covidindiatracker.com/state_data.json',[]
    );

    setBooks(response.data);
  }, []);

  return (
    <div className="App">
    
      {/* Fetch data from API */}
      
        <div>
        <Table className="table">
      <Thead>
        <Tr>
          <Th className="header">Sl.No.</Th>
          <Th className="header1">State</Th>
          <Th className="header2">Confirmed</Th>
          <Th className="header3">Active</Th>
          <Th className="header4">Recovered</Th>
          <Th className="header5">Death</Th>
        </Tr>
      </Thead>
      <Tbody>
      {data &&
                data.map((report, index) => {
                  return (
         <Tr>
          <Td>{index + 1}</Td>
          <Td>{report.state}</Td>
          <Td>{report.confirmed}</Td>
          <Td>{report.active}</Td>
          <Td>{report.recovered}</Td>
          <Td>{report.deaths}</Td>
        </Tr>
        );
                })}
      </Tbody>
    </Table>

        </div>

        {/* Display data from API */}

      
    </div>
  );
}

export default App