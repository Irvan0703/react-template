//import axios from 'axios';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { createData } from '../../app/Features/Input/actions'
import './index.scss';

const Tambah = () => {

  const initialInputState = {
    name: '',
    price: '',
    stock:'',
    status: false,
    image_url: null
  };

  const [insert, setInsert] = useState(initialInputState);
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setInsert({ ...insert, [name]: value });
  };
   
  const saveInsert = () => {
    const { name, price, stock, status, image_url} = insert;

    dispatch(createData(name, price, stock, status, image_url));
    alert('Data sudah ditambahkan');
    setInsert(initialInputState);
  };


  return (
    <div className="main">      
      <div className="card">
      <h2>Tambah Produk</h2>
      <br />
      <form >
        <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={insert.name} onChange={handleInputChange}/>
        <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={insert.price} onChange={handleInputChange}/>
        <Input name="stock" type="number" placeholder="Stock Produk..." label="Stock" value={insert.stock} onChange={handleInputChange}/>
        <Input name="image_url" type="file"  label="Image" onChange={(event)=>{
              setInsert({ ...insert, [event.target.name]: event.target.files[0] });
        }}/>
        <Input name="status" type="checkbox" label="Active" value={insert.status} onClick={(event)=>{
              setInsert({ ...insert, [event.target.name]: event.target.checked });
        }}/>
        <button type="button" className="btn btn-primary" 
        onClick={saveInsert}>Simpan</button>
      </form>
    </div>
      
    </div>
  )
}

export default Tambah;