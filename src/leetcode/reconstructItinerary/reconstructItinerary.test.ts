import {findItinerary} from './reconstructItinerary'

test('reconstructItinerary0', () => {
  const result = findItinerary([
    ['MUC', 'LHR'],
    ['JFK', 'MUC'],
    ['SFO', 'SJC'],
    ['LHR', 'SFO'],
  ])
  expect(result).toStrictEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC'])
})

test('reconstructItinerary1', () => {
  const result = findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ])
  expect(result).toStrictEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'])
})

test('reconstructItinerary2', () => {
  const result = findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK'],
  ])
  expect(result).toStrictEqual(['JFK', 'NRT', 'JFK', 'KUL'])
})
