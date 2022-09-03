export const TerraTransactions: any = {
  send: {
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
}