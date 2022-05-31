import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteData, findDataByName, getData, getDataId } from '../../app/Features/Input/actions';
import './index.scss';

const Home = () => {

  const [search, setSearch] = useState('');
  const item = useSelector((state) =>  state.input);
  const dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch(getData());
  },[dispatch])

  
  const findByTitle = (e) => {
    const search = e.target.value;
    setSearch(search);
    dispatch(findDataByName(search));
  };

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." value={search} onChange={findByTitle}/>
        
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        {item.length > 0 ? item.map((msg,i) =>
            <tr key={i}>
                      <td>{i+1}</td>
                      <td>{msg.name}</td>
                      <td className="text-right">{msg.price}</td>
                      <td className="text-center">
                        <Link to={`/detail/${msg._id}`} className="btn btn-sm btn-info" onClick={()=>dispatch(getDataId(msg._id))}>Detail</Link>
                        <Link to={`/edit/${msg._id}`} className="btn btn-sm btn-warning" onClick={()=>dispatch(getDataId(msg._id))}>Edit</Link>
                        <Link to="#" className="btn btn-sm btn-danger" 
                        onClick={()=> {
                          dispatch(deleteData(msg._id));
                          alert('Data Berhasil dihapus');
                          dispatch(getData())}}>Delete</Link>
                      </td>
                    </tr>
          ) : ('Loading')}
        
        </tbody>
      </table>
    </div>
  )
}

export default Home;

/*
 const item = useSelector((state) => {
    let data = dispatch(getData());
    data.payload = state.input
    //console.log(data.payload); 
  }); 

        {item.payload.map((msg,i) =>
            <tr key={i}>
                      <td>{i+1}</td>
                      <td>{msg.name}</td>
                      <td className="text-right">{msg.price}</td>
                      <td className="text-center">
                        <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
                        <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
                        <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
                      </td>
                    </tr>
          )}

          {item.payload.map((msg,i) =>
            <tr key={i}>
                      <td>{i+1}</td>
                      <td>{msg.name}</td>
                      <td className="text-right">{msg.price}</td>
                      <td className="text-center">
                        <Link to="/detail" className="btn btn-sm btn-info" onClick={()=>dispatch(getDataId(msg._id))} >Detail</Link>
                        <Link to="/edit" className="btn btn-sm btn-warning">Edit</Link>
                        <Link to="#" className="btn btn-sm btn-danger">Delete</Link>
                      </td>
                    </tr>
          )}
        
*/ 