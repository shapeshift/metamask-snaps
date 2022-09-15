export const ThorchainTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 931, 0x80000000 + 0, 0, 0],
  },
  send: {
    addressNList: [0x80000000 + 44, 0x80000000 + 931, 0x80000000 + 0, 0, 0],
    tx: {
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
            from_address: 'thor1swmedrczhnn6j94lhve4zqhjwj9hpk24c6klyw',
            to_address: 'thor1wy58774wagy4hkljz9mchhqtgk949zdwwe80d5',
          },
        },
      ],
    },
  },
  swap: {
    addressNList: [0x80000000 + 44, 0x80000000 + 931, 0x80000000 + 0, 0, 0],
    tx: {
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
            signer: 'thor1swmedrczhnn6j94lhve4zqhjwj9hpk24c6klyw',
          },
        },
      ],
    },
  },
  broadcast: {
    serialized:
      'Ck0KSwoOL3R5cGVzLk1zZ1NlbmQSOQoU/CMekQrVt/W70pEpQMVIvKfXlEESFHEof3qu6glb2/IRd4vcC0WLUomuGgsKBHJ1bmUSAzEwMBJmClAKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleRIjCiEDFRlxO4tCvcNnES0zEyzxTO35KKxXcdREukWblJcRe6MSBAoCCAEYAhISCgwKBHJ1bmUSBDMwMDAQwJoMGkAGyFdyCS09a72IfAkTkcwVPCWT65upkhCLrDNOs0S6/DvBqpV8ESts25HueBK3cojskaEM8hsMr9vy8qcftWLl',
    body: 'CksKDi90eXBlcy5Nc2dTZW5kEjkKFPwjHpEK1bf1u9KRKUDFSLyn15RBEhRxKH96ruoJW9vyEXeL3AtFi1KJrhoLCgRydW5lEgMxMDA=',
    authInfoBytes:
      'ClAKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleRIjCiEDFRlxO4tCvcNnES0zEyzxTO35KKxXcdREukWblJcRe6MSBAoCCAEYAhISCgwKBHJ1bmUSBDMwMDAQwJoM',
    signatures: [
      'BshXcgktPWu9iHwJE5HMFTwlk+ubqZIQi6wzTrNEuvw7waqVfBErbNuR7ngSt3KI7JGhDPIbDK/b8vKnH7Vi5Q==',
    ],
  },
}
