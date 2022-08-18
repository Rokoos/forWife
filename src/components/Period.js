import React from 'react'
import { numOfDays} from '../utils'

const Period = ({periods,period}) => {
  const {date, description, differrence} = period
  const time = new Date(date)

  const lalo = time.getTime()
// console.log('timestamp', lalo)

  return (
    <div className='period w-100'>
      <div className='period-date'>
        <span>{time.toLocaleDateString('pl-PL')}</span>
        {date !== differrence && <span>{numOfDays(differrence)} dni od poprzedniej</span>}
      </div>
      {
        description && <span className='period-description w-100 '>{description}</span>
      }
    </div>
  )
}

export default Period
