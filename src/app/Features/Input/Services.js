import http from './http-common';
const getAll = () => {
  return http.get("/product");
};
const get = id => {
  return http.get(`/product/${id}`);
};
const create = data => {
  console.log(data)
  return http.post('/product', data);
};
const update = (id, data) => {
  return http.put(`/product/${id}`, data);
};
const remove = id => {
  return http.delete(`/product/${id}`);
};
const removeAll = () => {
  return http.delete(`/product`);
};
const findByTitle = title => {
  return http.get(`/product?search=${title}`);
};
const Services = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default Services;