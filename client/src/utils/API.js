import axios from 'axios';
//import { userInfo } from 'os';

// set up functions for talking to our backend


//
export const getApiData = () => {
  return axios.get('/api/api-stocks')
}
// getAllNews //get news from external api
export const getAllNews = () => {
  return axios.get('/api/api-news')
}
export const quandlStock = () => {
  return axios.get('/api/api-quandl')
}

// getAllStocks
export const getAllStocks = () => {
  return axios.get('/api/stocks')
}


// getStockById
export const getStockById = (stockId) => {
  return axios.get(`/api/stocks/${stockId}`)
}

// createNewStock
// takes in an object => {code: "code", date: "date"}
export const createNewStock = (stockInfo) => {
  return axios.post('/api/stocks', stockInfo)
}

//this saved an article for the current user
export const createSavednews = (article) => {
  return axios.post('/api/api-news/', article);
};

//this gets saved news for current user
export const getSavednews = () => {
  return axios.get('/api/api-news/');
};

export const removenews = articleId => {
  return axios.delete(`/api/api-news/${articleId}`);
};

// updateStock
// takes in object => {code: "code", date: "date"} AND stock's id
export const updateStock = (stockId, stockInfo) => {
  return axios.put(`/api/stocks/${stockId}`, stockInfo)
}

// removeStock
// takes in stock's id
export const removeStock = (stockId) => {
  return axios.delete(`/api/stocks/${stockId}`);
}

export const registration = (userInfo) => {
  return axios.post(`/api/registration/`, userInfo);
}
export const login = (userInfo) => {
  return axios.post(`/api/login/`, userInfo);
}

// export all functions so if someone needs to import all they can
export default {
  getSavednews,
  getAllStocks,
  getStockById,
  createNewStock,
  updateStock,
  removeStock,
  getApiData,
  registration,
  login,
  removenews
}
