import "./SterneBewertung.css";
import {FaStar} from "react-icons/fa";
import {useState} from "react";


export default function SterneBewertung() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="sterne">
            {[...Array(5)].map((stern, index) => {
                const currentRating = index + 1;
                return(
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className='stern'
                            size={30}
                            color={currentRating <= (hover || rating) ? "var(--primePink)" : "var(--primePink2)"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    )
}