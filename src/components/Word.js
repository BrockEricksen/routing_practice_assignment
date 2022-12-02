import { useParams } from "react-router";

    const Word = (props) => {
    const {userWord} = useParams();
        return(
        <div>
            <h1>The word is: {userWord}</h1>
        </div>
        )
    }

export default Word;