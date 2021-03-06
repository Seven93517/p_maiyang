import http from '../utils/htttp'

export function getPatientList (data) {
  return http.get(`mo/patient/list?current=${data.current}&size=${data.size}&history=${data.history}&search=${data.search}`)
}

export function unbindPatient (id) {
  return http.put(`/mo/patient/unbind?id=${id}`)
}

export function getPatientInfo (id) {
  return http.get(`/mo/patient/detail?id=${id}`)
}

export function savePatient (data) {
  return http.post('/mo/patient/add', data)
}
export function updatePatient (data) {
  return http.put('/mo/patient/mod', data)
}
