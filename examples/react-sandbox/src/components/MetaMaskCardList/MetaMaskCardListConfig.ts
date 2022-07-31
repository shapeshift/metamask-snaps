import {
  snapConfirm,
  snapGetBIP44Entropy,
  snapManageState,
  snapNotify,
  walletEnable,
  walletGetSnaps,
  walletInstallSnaps,
  walletInvokeSnap,
  walletSnap,
} from '../../utils/metamask/MetaMaskRPCRequests'
import { CardActionProps, CardProps } from '../Card/Card'

export const MetaMaskCardListConfig: Array<CardProps> = [
  {
    name: 'Unrestricted Methods',
    icon: 'metamask.png',
    actions: new Map<string, CardActionProps>([
      [
        'wallet_enable',
        {
          callback: walletEnable,
          params: undefined,
          description:
            "This is a convenience method for requesting the user's accounts and connecting to / installing snaps. You can think of it as a combination of eth_requestAccounts, wallet_installSnaps, and wallet_requestPermissions.",
        },
      ],
      [
        'wallet_getSnaps',
        {
          callback: walletGetSnaps,
          params: undefined,
          description:
            "This method returns the IDs of the caller's permitted snaps and some relevant metadata.",
        },
      ],
      [
        'wallet_installSnaps',
        {
          callback: walletInstallSnaps,
          params: undefined,
          description:
            'This method attempts to install the requested snaps, if they are permitted. If the installation of any snap fails, its object value on the result will contain an error property with the error that caused the installation to fail.',
        },
      ],
      [
        'wallet_invokeSnap',
        {
          callback: walletInvokeSnap,
          params: undefined,
          description:
            "Invokes the specified JSON-RPC method of the specified snap. The snap must be installed and the caller must have the permission to communicate with the snap, or the request will be rejected. Snaps are fully responsible for implementing their JSON-RPC API; consult the snap's documentation for available methods, their parameters, and return values.",
        },
      ],
    ]),
  },
  {
    name: 'Restricted Methods',
    icon: 'metamask.png',
    hasInputField: true,
    actions: new Map<string, CardActionProps>([
      [
        'wallet_snap_*',
        {
          callback: walletSnap,
          params: null,
          description:
            'Invokes the specified JSON-RPC method of the snap corresponding to the specified permission name. The snap must be installed and the caller must have the permission to communicate with the snap, or the request will be rejected.',
          inputFieldDescription: 'wallet_snap_npm:@metamask/example-snap',
        },
      ],
      [
        'snap_confirm',
        {
          callback: snapConfirm,
          params: undefined,
          description:
            "Calling this method causes a confirmation to be displayed in the MetaMask UI. The contents of the confirmation depend on the parameters, see above for their meaning and format. The user can either approve or reject the confirmation, which will be indicated by the method's return value.",
        },
      ],
      [
        'snap_getBip44Entropy_*',
        {
          callback: snapGetBIP44Entropy,
          params: undefined,
          description:
            "If you call this method, you will receive the user's parent key for the protocol that they requested. When that happens, you are now managing a person's keys, and whatever assets they control, on their behalf. Their safety is your responsibility. Gets the BIP-44 (opens new window)coin_type key for the coin_type number specified by the method name. This is the 'key management' permission of Snaps; use it with the utmost care. For the authoritative list of available protocols and their coin_type values, see SLIP-44.",
        },
      ],
      [
        'snap_manageState',
        {
          callback: snapManageState,
          params: undefined,
          description:
            'This method allows the snap to persist some data to disk in plaintext form and retrieve it at will. Since the data is in plaintext, the method should never be used to store secrets of any kind.',
        },
      ],
      [
        'snap_notify',
        {
          callback: snapNotify,
          params: undefined,
          description:
            "Calling this method displays a notification in MetaMask or natively in the browser. The notification type and content are determined by the method's parameters. See above for their meaning and format.",
        },
      ],
    ]),
  },
]
