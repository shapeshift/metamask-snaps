export const OsmosisTransactions: any = {
  address: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
  },
  delegate: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '95421',
    chain_id: 'osmosis-1',
    sequence: '36',
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
          type: 'cosmos-sdk/MsgDelegate',
          value: {
            delegator_address: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            validator_address: 'osmovaloper1cyw4vw20el8e7ez8080md0r8psg25n0cq98a9n',
            amount: {
              denom: 'uosmo',
              amount: '1000',
            },
          },
        },
      ],
    },
  },
  lp_add: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '45',
    tx: {
      fee: {
        amount: [
          {
            amount: '0',
            denom: 'uosmo',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'osmosis/gamm/join-pool',
          value: {
            sender: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            poolId: '1',
            shareOutAmount: '402238349184328773',
            tokenInMaxs: [
              {
                denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
                amount: '8198',
              },
              {
                denom: 'uosmo',
                amount: '28619',
              },
            ],
          },
        },
      ],
    },
  },
  lp_remove: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '46',
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
          type: 'osmosis/gamm/exit-pool',
          value: {
            sender: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            poolId: '1',
            shareOutAmount: '78719426289889034',
            tokenOutMins: [
              {
                denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
                amount: '1532',
              },
              {
                denom: 'uosmo',
                amount: '5304',
              },
            ],
          },
        },
      ],
    },
  },
  lp_stake: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '46',
    tx: {
      fee: {
        amount: [
          {
            amount: '0',
            denom: 'uosmo',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'osmosis/lockup/lock-tokens',
          value: {
            owner: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            duration: '86400000000000',
            coins: [
              {
                denom: 'gamm/pool/1',
                amount: '10000000000000000',
              },
            ],
          },
        },
      ],
    },
  },
  lp_unstake: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '47',
    tx: {
      fee: {
        amount: [
          {
            amount: '0',
            denom: 'uosmo',
          },
        ],
        gas: '290000',
      },
      memo: '',
      msg: [
        {
          type: 'osmosis/lockup/begin-unlock-period-lock',
          value: {
            owner: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            ID: '382614',
          },
        },
      ],
    },
  },
  redelegate: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '95421',
    chain_id: 'osmosis-1',
    sequence: '37',
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
            delegator_address: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            validator_src_address: 'osmovaloper1cyw4vw20el8e7ez8080md0r8psg25n0cq98a9n',
            validator_dst_address: 'osmovaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4ep88n0y4',
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
    account_number: '95421',
    chain_id: 'osmosis-1',
    sequence: '38',
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
          type: 'cosmos-sdk/MsgWithdrawDelegationReward',
          value: {
            delegator_address: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            validator_address: 'osmovaloper1cyw4vw20el8e7ez8080md0r8psg25n0cq98a9n',
            amount: {
              denom: 'uosmo',
              amount: '100',
            },
          },
        },
      ],
    },
  },
  swap: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '40',
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
          type: 'osmosis/gamm/swap-exact-amount-in',
          value: {
            routes: [
              {
                poolId: '1',
                tokenOutDenom:
                  'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
              },
            ],
            sender: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            tokenIn: {
              amount: '6500',
              denom: 'uosmo',
            },
            tokenOutMinAmount: '8204',
          },
        },
      ],
    },
  },
  transfer: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    chain_id: 'osmosis-1',
    account_number: '95421',
    sequence: '35',
    tx: {
      fee: {
        amount: [
          {
            denom: 'uosmo',
            amount: '2800',
          },
        ],
        gas: '80000',
      },
      msg: [
        {
          type: 'cosmos-sdk/MsgSend',
          value: {
            from_address: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            to_address: 'osmo1qjwdyn56ecagk8rjf7crrzwcyz6775cj07qz9r',
            amount: [
              {
                denom: 'uosmo',
                amount: '1000',
              },
            ],
          },
        },
      ],
    },
  },
  undelegate: {
    addressNList: [0x80000000 + 44, 0x80000000 + 118, 0x80000000 + 0, 0, 0],
    account_number: '95421',
    chain_id: 'osmosis-1',
    sequence: '39',
    tx: {
      fee: {
        amount: [
          {
            denom: 'uosmo',
            amount: '0',
          },
        ],
        gas: '250000',
      },
      msg: [
        {
          type: 'cosmos-sdk/MsgUndelegate',
          value: {
            delegator_address: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
            validator_address: 'osmovaloper1clpqr4nrk4khgkxj78fcwwh6dl3uw4ep88n0y4',
            amount: {
              denom: 'uosmo',
              amount: '3000',
            },
          },
        },
      ],
    },
  },
  broadcast: {
    serialized:
      'CpkBCokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKK29zbW8xNWNlbnlhMHRyN25tM3R6MnduM2gzendraHQycnhycTdnOXlwbXESK29zbW8xcWp3ZHluNTZlY2FnazhyamY3Y3JyendjeXo2Nzc1Y2owN3F6OXIaDQoFdW9zbW8SBDEwMDASC2hlbGxvIHdvcmxkEmcKUApGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQO+468w5Tpz84q8Wi/NrEJtewTrcqjr07AZkuLSBuJK2BIECgIIARgjEhMKDQoFdW9zbW8SBDI4MDAQgPEEGkAK+GLz+zi1n4Oi+4azQxMrpIPHI0Tr7N5xxszk+2DsNkIy0suWL5JpK5o7wb8kvpQN/q2lU/lsWzx5q9H/oqM0',
    body: 'CokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKK29zbW8xNWNlbnlhMHRyN25tM3R6MnduM2gzendraHQycnhycTdnOXlwbXESK29zbW8xcWp3ZHluNTZlY2FnazhyamY3Y3JyendjeXo2Nzc1Y2owN3F6OXIaDQoFdW9zbW8SBDEwMDASC2hlbGxvIHdvcmxk',
    authInfoBytes:
      'ClAKRgofL2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleRIjCiEDvuOvMOU6c/OKvFovzaxCbXsE63Ko69OwGZLi0gbiStgSBAoCCAEYIxITCg0KBXVvc21vEgQyODAwEIDxBA==',
    signatures: [
      'Cvhi8/s4tZ+DovuGs0MTK6SDxyNE6+zeccbM5Ptg7DZCMtLLli+SaSuaO8G/JL6UDf6tpVP5bFs8eavR/6KjNA==',
    ],
  },
}
