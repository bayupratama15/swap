import { INIT_CODE_HASH } from '../src/constants'



describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
       it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5')
    })
  })
})
