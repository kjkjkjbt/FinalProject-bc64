import axios from 'axios';

const API_URL = 'https://airbnbnew.cybersoft.edu.vn'; 

const api = axios.create({
  baseURL: API_URL,
});

export const fetchListings = async () => {
  try {
    const response = await api.get('/listings');
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
};

export const createListing = async (listingData) => {
  try {
    const response = await api.post('/listings', listingData);
    return response.data;
  } catch (error) {
    console.error('Error creating listing:', error);
    throw error;
  }
};

// Add other API methods as needed
