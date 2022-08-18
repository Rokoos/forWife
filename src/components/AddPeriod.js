import React, { Fragment, useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { savePeriodList, getPeriodList, sortDates } from '../utils'
import { v4 as uuidv4 } from 'uuid'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
import Form from './Form'

const AddPeriod = () => {
  const history = useHistory()

  const [periods, setPeriods] = useState([])
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [lastDate, setLastDate] = useState({})

  // console.log('periods', periods)
  // console.log('lastDate', lastDate)
  

  useEffect(() => {
    setPeriods(sortDates(getPeriodList()))
    // setLastDate(getLastTimestamp())
    
    
  }, [])

  // console.log('startDate', startDate)
  // console.log('opis', description)
  // const getLastTimestamp = () => {
  //   if(periods){
  //     return sortDates(periods)[0]
  //   }
  // }

  // console.log('firstTimestamp', periods[0])

  const getPeriods = () => {
    if(periods.length > 0){
      // console.log('liczba')
      return periods[0].date
    }else {
      // console.log('jajco')
      return 0
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(e.target)
    // console.log('lastDate', lastDate)
    const date = new Date(startDate)
    const newPeriod = {
      id: uuidv4(),
      date:date.getTime(),
      description,
      differrence: date.getTime() - getPeriods()
    }
    
    // console.log('nowyokres', newPeriod)
    // console.log('ilość dni', numOfDays)
    savePeriodList(newPeriod)
    history.push('/')
  }

  return (
    <div className='mt-5'>
      
        <h6>Dodaj date</h6>
        
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <DatePicker
          
          dateFormat={'dd/MM/yyyy'} 
          className="form-control mb-4 mt-3 datePicker-style" selected={startDate} onChange={date => setStartDate(date)} />
        </div>
        
          <div className="form-group">
            <textarea 
            style={{backgroundColor: 'beige', fontSize:'.8rem'}}
            type="text" 
            placeholder="Uwagi" 
            className="form-control mb-4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div style={{
            display:'flex',
            justifyContent: 'space-evenly'
          }}>
          <Link to="/" className="btn btn-light"  >Wróć do listy</Link>
          <button style={{backgroundColor:'#ec6bf2'}} className=" btn btn-warning">Dodaj date</button>
          </div>
          </form>
    </div>
  )
}

export default AddPeriod
