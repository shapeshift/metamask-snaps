import { BinanceSigner } from './BinanceSigner'

describe('BinanceSigner', () => {
  describe('constructor', () => {
    it('should return an uninitialized BinanceSigner instance', () => {
      // TODO: Mock wallet object with snap_getBip32Entropy call
      const binanceSigner = new BinanceSigner()
      expect(binanceSigner.initialized).toBe(false)
    })
  })
})
