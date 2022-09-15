export const TerraTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 330, 0x80000000 + 0, 0, 0],
  },
  send: {
    addressNList: [0x80000000 + 44, 0x80000000 + 330, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'columbus-5',
    sequence: '17',
    tx: {
      msg: [
        {
          type: 'bank/MsgSend',
          value: {
            from_address: 'terra1ls33ayg26kmltw7jjy55p32ghjna09zp7kgw2a',
            to_address: 'terra1lqk43hvysuzymrgg08q45234z6jzth32wsx6y3',
            amount: [
              {
                denom: 'uluna',
                amount: '100000',
              },
            ],
          },
        },
      ],
      fee: {
        gas: '79695',
        amount: [
          {
            denom: 'uluna',
            amount: '1404',
          },
        ],
      },
      signatures: [],
      memo: 'testmemo',
    },
  },
}
