// import React from 'react';

// const Listing = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-bold">Listings</h1>
//       <p className="mt-4">Browse through our amazing listings.</p>
//     </div>
//   );
// };

// export default Listing;

import React, { useEffect, useState } from 'react';
import { fetchListings } from '../Api';
import { List, Card } from 'antd';
import moment from 'moment';



const Listing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await fetchListings();
        setListings(data);
      } catch (error) {
        console.error('Error loading listings:', error);
      }
    };

    loadListings();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Listings</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={listings}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <p>{item.description}</p>
              <p>Check-in: {moment (item.checkin).format('MMMM Do YYYY')}</p>
              <p>Check-out: {moment (item.checkout).format('MMMM Do YYYY')}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Listing;
