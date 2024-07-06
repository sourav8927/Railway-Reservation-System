import React,{useState} from 'react'

const TrainSearchForm = ({onSearch}) => {
    const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ fromStation, toStation });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        From:
        <input
          type="text"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
        />
      </label>
      <label>
        To:
        <input
          type="text"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
        />
      </label>
      <button type="submit">Search Trains</button>
    </form>
    </div>
  )
}

export default TrainSearchForm
