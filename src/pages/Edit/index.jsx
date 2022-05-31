import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import Services from "../../app/Features/Input/Services";
import { getDataId, updateData } from "../../app/Features/Input/actions";
import Input from "../../components/Input";

const Edit = () => {

  const initialInputState = {
    name: '',
    price: '',
    stock:'',
    status: false,
    image_url:null
  };

  const item = useSelector((state) =>  state.input);
  const dispatch = useDispatch();
  const url = window.location.pathname;
  const id = url.split("/edit/");
  const [update, setUpdate] = useState(initialInputState);

  const getTutorial = id => {
    Services.get(id)
      .then(response => {
        setUpdate(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  useEffect(()=>{
    if(item.length === 0 || update.name === ''){
      dispatch(getDataId(id[1]));
      getTutorial(id[1])   
     }
  }, [ item, dispatch, id, update.name])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  const updateContent = () => {
    const formData = new FormData();
      formData.append('name', update.name);
      formData.append('price', update.price);
      formData.append('stock', update.stock);
      formData.append('status', update.status);
      formData.append('image_url', update.image_url);

    dispatch(updateData(id[1], formData))
    alert('Data sudah di update');
    setUpdate(initialInputState);
  };

console.log(update);
console.log(item);

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={update.name} onChange={handleInputChange}/>
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={update.price} onChange={handleInputChange} />
          <Input name="stock" type="number" placeholder="Stock Produk..." label="Stock" value={update.stock} onChange={handleInputChange} />
          <Input name="image_url" type="file"  label="Image" onChange={(event)=>{
              setUpdate({ ...update, [event.target.name]: event.target.files[0] });
        }}/>
          <Input name="status" type="checkbox" label="Active" checked={update.status}
          onChange={(event) =>{
            setUpdate({ ...update, [event.target.name]: event.target.checked });
          }}/>
          <button type="button" className="btn btn-primary" onClick={updateContent}>Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;