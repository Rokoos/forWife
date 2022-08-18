import React from 'react'
import { numOfDays} from '../utils'

const Period = ({periods,period}) => {
  const {date, description, differrence, id} = period
  const time = new Date(date)

  const lalo = time.getTime()
// console.log('timestamp', lalo)

const deletePeriod = () => {
const filteredPeriods = periods.filter(period => {
  return period.id !== id
})
window.localStorage.setItem('periodList', JSON.stringify(filteredPeriods))
}

const confirmWindow = (e) => {
  e.stopPropagation();
     if(window.confirm('Na pewno chcesz usunąć wpis?')) {
      deletePeriod()
      window.location.reload()
     } else {
       return
     }
}

  return (
    <div className='period w-100'>
      <div className='period-date'>
        <span>{time.toLocaleDateString('pl-PL')}</span>
        {date !== differrence ? <span>{numOfDays(differrence)} dni od poprzedniej</span> : <span>Pierwszy wpis</span>}
      </div>
      {
        description && <span className='period-description w-100 '>{description}</span>
      }
      <button onClick={confirmWindow} style={{backgroundColor:'#c95bb5', color:'#fff'}} className="btn">Usuń</button>
    </div>
  )
}

export default Period
