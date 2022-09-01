export const CosmosTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
  },
  delegate: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'cosmoshub-4',
    account_number: '16359',
    sequence: '18',
    tx: {
      fee: {
        amount: [
          {
            amount: '2800',
            denom: 'uatom',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgDelegate',
          value: {
            delegator_address: 'cosmos1dhg0fmtthguze5n8d0tcdfnj9qeumagjgf60k8',
            validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
            amount: {
              denom: 'uatom',
              amount: '1000',
            },
          },
        },
      ],
    },
  },
  ibcTransfer: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '27',
    tx: {
      fee: {
        amount: [
          {
            amount: '2800',
            denom: 'uatom',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgTransfer',
          value: {
            receiver: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            sender: 'cosmos1dhg0fmtthguze5n8d0tcdfnj9qeumagjgf60k8',
            source_channel: 'channel-141',
            source_port: 'transfer',
            timeout_height: {
              revision_height: '9339851',
              revision_number: '1',
            },
            token: {
              amount: '100',
              denom: 'uatom',
            },
          },
        },
      ],
    },
  },
  redelegate: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '19',
    tx: {
      fee: {
        amount: [
          {
            amount: '2800',
            denom: 'uosmo',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgBeginRedelegate',
          value: {
            delegator_address: 'cosmos1dhg0fmtthguze5n8d0tcdfnj9qeumagjgf60k8',
            validator_src_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
            validator_dst_address: 'cosmosvaloper1qs8tnw2t8l6amtzvdemnnsq9dzk0ag0z52uzay',
            amount: {
              denom: 'uosmo',
              amount: '100',
            },
          },
        },
      ],
    },
  },
  rewards: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '19',
    tx: {
      fee: {
        amount: [
          {
            amount: '2800',
            denom: 'uatom',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgWithdrawDelegatorReward',
          value: {
            delegator_address: 'cosmos1dhg0fmtthguze5n8d0tcdfnj9qeumagjgf60k8',
            validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
            amount: {
              denom: 'uatom',
              amount: '100',
            },
          },
        },
      ],
    },
  },
  transfer: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '17',
    tx: {
      fee: {
        amount: [
          {
            amount: '100',
            denom: 'uatom',
          },
        ],
        gas: '100000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgSend',
          value: {
            amount: [
              {
                amount: '1000',
                denom: 'uatom',
              },
            ],
            from_address: 'cosmos1dhg0fmtthguze5n8d0tcdfnj9qeumagjgf60k8',
            to_address: 'cosmos1qjwdyn56ecagk8rjf7crrzwcyz6775cj89njn3',
          },
        },
      ],
    },
  },
  undelegate: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '20',
    tx: {
      fee: {
        amount: [
          {
            denom: 'uatom',
            amount: '0',
          },
        ],
        gas: '250000',
      },
      memo: '',
      msg: [
        {
          type: 'cosmos-sdk/MsgUndelegate',
          value: {
            delegator_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
            validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
            amount: {
              denom: 'uatom',
              amount: '3000',
            },
          },
        },
      ],
    },
  },
}
