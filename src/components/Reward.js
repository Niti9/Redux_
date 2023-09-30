import { useDispatch, useSelector } from 'react-redux';
import { increment,incrementByAmount} from '../reducers/rward';
function Reward() {
 
const point = useSelector(state=>state.reward.points)
const dispatch = useDispatch();
  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        {/* yahan globally getState work karega */}
        <h3>Total point : {point}</h3>
        
        {/* yahan  incrementBonus ACTION ko dispatch ki help 
        se reducer tak apne aap pahunchayega */}
        <button onClick={()=>dispatch(increment())}>Increment + </button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount + </button>
      </div>
    </div>
  );
}

export default Reward;