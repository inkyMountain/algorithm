import {getFolderNames} from './making-file-name-unique'

describe('making-file-name-unique', () => {
  test('1', () => {
    expect(
      getFolderNames([
        'onepiece',
        'onepiece(1)',
        'onepiece(2)',
        'onepiece(3)',
        'onepiece',
      ])
    ).toStrictEqual([
      'onepiece',
      'onepiece(1)',
      'onepiece(2)',
      'onepiece(3)',
      'onepiece(4)',
    ])

    expect(
      getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)'])
    ).toStrictEqual(['kaido', 'kaido(1)', 'kaido(2)', 'kaido(1)(1)'])

    expect(getFolderNames(['wano', 'wano', 'wano', 'wano'])).toStrictEqual([
      'wano',
      'wano(1)',
      'wano(2)',
      'wano(3)',
    ])
  })
})
