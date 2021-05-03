import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://emp.kimdragon50.ml/api/v1/employees";

app.get('/api/hello', (req, res) => {
    res.send("안녕하세요 !")
})

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
  addEmployee(employee) {

    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }
  updateEmployee(employee) {
    return axios.put(EMPLOYEE_API_BASE_URL, employee);
  }
  deleteEmployee(employee) {
    return axios({
                  Access-Control-Allow-Origin : "*"
                }).post(EMPLOYEE_API_BASE_URL + "/delete", employee);
  }
  deleteById(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }
}

export default new EmployeeService();
