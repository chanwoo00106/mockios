import mockios from 'mockios'
import api from './api'
import mockData from './mockData'

const query = process.env.NODE_ENV === 'development' ? mockios(mockData) : api

export default query
