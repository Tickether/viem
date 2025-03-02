import { publicClient } from '../../_test/utils.js'
import { createEventFilter } from './createEventFilter.js'
import { expectTypeOf, test } from 'vitest'

test('fromBlock/toBlock', async () => {
  const filter = await createEventFilter(publicClient)
  expectTypeOf(filter.fromBlock).toBeUndefined()
  expectTypeOf(filter.toBlock).toBeUndefined()

  const filter_fromBlock = await createEventFilter(publicClient, {
    fromBlock: 69n,
  })
  expectTypeOf(filter_fromBlock.fromBlock).toMatchTypeOf<69n | undefined>()
  expectTypeOf(filter_fromBlock.toBlock).toBeUndefined()

  const filter_toBlock = await createEventFilter(publicClient, {
    toBlock: 69n,
  })
  expectTypeOf(filter_toBlock.toBlock).toMatchTypeOf<69n | undefined>()
  expectTypeOf(filter_toBlock.fromBlock).toBeUndefined()
})
