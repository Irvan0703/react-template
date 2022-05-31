import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, getDataId} from "../../app/Features/Input/actions";
import './index.scss';

const Detail = () => {

  const item = useSelector((state) =>  state.input);
  const dispatch = useDispatch();
  const url = window.location.pathname;
  const id = url.split("/detail/");

 useEffect(()=>{
   if(item.length === 0){
     dispatch(getDataId(id[1]));   
    }
 }, [ item, dispatch, id])
  
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary" onClick={()=> {dispatch(getData())}}>Kembali</Link>
      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {item?._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {item?.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {item?.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {item?.stock}</td>
          </tr>
          <tr>
            <td>Image</td>
            <td><img src={item?.image_url} alt="icons" className="image"></img> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;