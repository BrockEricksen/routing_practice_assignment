import { useParams } from "react-router";

const UserInputs = (props) => {
  const {userInput, textColor, bgColor} = useParams();
    return(
      <div>
        {
            isNaN(userInput)?
            <h1 style={textColor?{color: textColor, backgroundColor: bgColor}:null}>
                The word is {userInput}.
            </h1>
            :
            <h1>
                The number is {userInput}.
            </h1>
        }
      </div>
    )
  }

export default UserInputs;
