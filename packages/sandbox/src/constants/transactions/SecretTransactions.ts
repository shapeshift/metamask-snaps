export const SecretTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 529, 0x80000000 + 0, 0, 0],
  },
  send: {
    addressNList: [0x80000000 + 44, 0x80000000 + 529, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'secret-4',
    sequence: '17',
    tx: {
      fee: {
        gas: '80000',
      },
      memo: 'foobar',
      msg: [
        {
          type: 'cosmos-sdk/MsgSend',
          value: {
            amount: [
              {
                amount: '10000',
                denom: 'uscrt',
              },
            ],
            from_address: 'secret1vhtdhfmttwxlvu4ewueqt73tt8y9zv385fagty',
            to_address: 'secret1vhtdhfmttwxlvu4ewueqt73tt8y9zv385fagty',
          },
        },
      ],
      signatures: null,
    },
  },
}
