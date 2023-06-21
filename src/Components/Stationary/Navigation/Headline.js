import './Headline.css';

export default function Headline(props) {
    return (
      <div className="headline">
        <div className='headlineOL'></div>
        <p>
            {props.text}
            <div className='headlineUR'></div>
        </p>
      </div>
    );
}