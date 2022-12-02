import { useParams } from "react-router";

const Num = (props) => {
  const {userNum} = useParams();
    return(
      <div>
        <h1>The number is: {userNum}</h1>
      </div>
    )
  }

export default Num;