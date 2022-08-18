import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Period from './Period'
import { getPeriodList, sortDates}from '../utils'

const PeriodList = () => {

  const [periods, setPeriods] = useState([])

  useEffect(() => {
    setPeriods(getPeriodList())
  }, [])
// console.log('GetPeriods', getPeriodList())
  return (
    <div className="mt-5 period-list">
      {periods.length > 0 ? <p>Daty początku menstruacji</p> : <p>Nie dodałaś jeszcze żadnych dat</p>}
      <Link style={{backgroundColor:'#ec6bf2'}} className='btn btn-primary mb-3' to="/newPeriodDate" >Dodaj date</Link>
      {periods && sortDates(periods).map(period => (
        <Period key={period.id}
        periods={periods}
        period={period}
        />
      ))}
      
    </div>
  )
}

export default PeriodList