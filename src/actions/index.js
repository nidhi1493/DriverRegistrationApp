import { ADD_DRIVER } from './actionTypes'

let nextId = 0

export const addDriver = (driver) => ({
  type: ADD_DRIVER,
  id: nextId++,
  name: driver.name,
  drivingLicence: driver.drivingLicence,
  registrationDate: driver.date
})
