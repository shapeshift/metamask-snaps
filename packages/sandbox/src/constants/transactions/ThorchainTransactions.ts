export const ThorchainTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 931, 0x80000000 + 0, 0, 0],
  },
  send: {
    fee: {
      amount: [
        {
          amount: '3000',
          denom: 'rune',
        },
      ],
      gas: '200000',
    },
    memo: '',
    msg: [
      {
        type: 'thorchain/MsgSend',
        value: {
          amount: [
            {
              amount: '100',
              denom: 'rune',
            },
          ],
          from_address: 'thor1ls33ayg26kmltw7jjy55p32ghjna09zp74t4az',
          to_address: 'thor1wy58774wagy4hkljz9mchhqtgk949zdwwe80d5',
        },
      },
    ],
    signatures: [],
  },
  swap: {
    fee: {
      amount: [
        {
          amount: '0',
          denom: 'rune',
        },
      ],
      gas: '350000',
    },
    memo: '',
    msg: [
      {
        type: 'thorchain/MsgDeposit',
        value: {
          coins: [
            {
              asset: 'THOR.RUNE',
              amount: '50994000',
            },
          ],
          memo: 'SWAP:BNB.BNB:bnb12splwpg8jenr9pjw3dwc5rr35t8792y8pc4mtf:348953501',
          signer: 'thor1ls33ayg26kmltw7jjy55p32ghjna09zp74t4az',
        },
      },
    ],
    signatures: [],
  },
}
