import { useSelector } from 'react-redux'
import { map } from 'lodash'

import Counter from '../Counter/Counter';

const Counters = () => {
  const { numberCounters }: any = useSelector((state) => state)

  return (
    <div>
      {map(numberCounters, (item: any, index: number) => {
        const ticker = item.id !== 0 && item.id % 4 === 0 ? true : false
        return (
          <Counter
            ticker={ticker}
            count={item.count}
            id={item.id}
            key={item.id}
          />
        )
      })}
    </div>
  )
}

export default Counters