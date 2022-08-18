export const getPeriodList = () => {
 
  if(window.localStorage){
    const periodList = JSON.parse(localStorage.getItem('periodList'))
    // console.log('lalala', periodList)
    if(periodList){
      return periodList 
    }else{
      return []
    }
  }
}

export const savePeriodList = (data) => {
  const list = []

  if(window.localStorage){
    const periodList = JSON.parse(localStorage.getItem('periodList'))
    // console.log('periodList', periodList)



    if(periodList){
      // console.log('dududududu', periodList)
      periodList.push(data)
      window.localStorage.setItem('periodList', JSON.stringify(periodList))
    }else{
      list.push(data)
      // console.log('newList', list)
     window.localStorage.setItem('periodList', JSON.stringify(list))
    }
     
     
  }
}

export const sortDates = arr => {
  arr.sort((a,b) =>{
    if(a.date > b.date) {
      return -1
    }else {
      return 1
    }
  })
  return arr
}

export const numOfDays = num => Math.round(num / (1000 * 3600 * 24))

