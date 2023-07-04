import './Headline.css';

export default function Headline(props) {
    return (
      <div className="headline">
        <div className="headlineBufferUpper">
          <div className='headlineOL'></div>
          <div className='headlineBuffer'></div>
        </div>
        <p>
            {props.text}
        </p>
        <div className="headlineBufferLower">
          <div className='headlineBuffer'></div>
          <div className='headlineUR'></div>
        </div>
      </div>
    );
}