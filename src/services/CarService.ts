import axios from 'axios'
import { API } from '../../config'
import { Car } from '../models/Cars'

export function getCars() {
  return axios.get(`${API}/cars`)
}

export function createCar(car: Car) {
  return axios.post(`${API}/cars`, car)
}

export function deleteCar(id: number) {
  return axios.delete(`${API}/cars/${id}`)
}

export function updateCar(car: Car) {
  return axios.put(`${API}/cars/${car.id}`, car)
}