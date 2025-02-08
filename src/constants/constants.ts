export const UM_PRICE = {
  price: "$0.98",
  performance: "+1.1%",
};

export const MAINNETS = [
  {
    label: "Mainnet",
    value: "mainnet",
  },
  {
    label: "Testnet",
    value: "testnet",
  },
];

export const TABS = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Blocks",
    value: "blocks",
  },
  {
    label: "Transactions",
    value: "transactions",
  },
];

export const CARDS = [
  {
    background:
      "radial-gradient(100% 100% at 0% 0%, rgba(83, 174, 168, 0.25) 0%, rgba(83, 174, 168, 0.025) 100%)",
    icon: "/icon/blocks-icon-card.svg",
    title: "Current Block",
    data: "3,538,663",
    cornerInfo: "Block Time ~12s",
    chart: "blocks-chart",
  },
  {
    background:
      "radial-gradient(100% 100% at 0% 0%, rgba(244, 156, 67, 0.25) 0%, rgba(244, 156, 67, 0.025) 100%)",
    icon: "/icon/trans-icon-card.svg",
    title: "Total Transactions",
    data: "28,057,456",
    cornerInfo: "68,499 new today",
    chart: "bar-chart",
  },
  {
    background:
      "radial-gradient(100% 100% at 0% 0%, rgba(193, 166, 204, 0.25) 0%, rgba(193, 166, 204, 0.025) 100%)",
    icon: "/icon/penumbra-icon-card.svg",
    title: "Total Burn",
    data: "86.99K UM",
    cornerInfo: "Average",
    chart: "custom-chart",
  },
];

export const BLOCKS_LIST = [
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "1s ago",
    tsx: "7",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "3s ago",
    tsx: "10",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "10min ago",
    tsx: "12",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "12min ago",
    tsx: "5",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "3hr ago",
    tsx: "4",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "3hr ago",
    tsx: "6",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "5hr ago",
    tsx: "1",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "12hr ago",
    tsx: "7",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "1d ago",
    tsx: "0",
  },
  {
    icon: "/icon/block-icon.svg",
    blockHeight: "1,057,456",
    time: "1wk ago",
    tsx: "15",
  },
];

export const TRANSACTIONS_LIST = [
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c092",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "swap claim",
      other: "",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c094",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "undelegate claim",
      other: "+2",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c091",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "withdraw from a dutch auction...",
      other: "+9",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c093",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "end a dutch auction",
      other: "+10",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c095",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "withdraw from a dutch auction",
      other: "+3",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c096",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "end a dutch auction",
      other: "+4",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c097",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "undelegate",
      other: "+5",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c098",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "delegate",
      other: "+4",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c099",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "schedule a dutch auction",
      other: "+11",
    },
  },
  {
    icon: "/icon/trans-icon.svg",
    txHash: "f3a4b8d0...76a1c082",
    blockHeight: {
      value: "1,057,456",
      icon: "/icon/block-icon.svg",
    },
    actions: {
      label: "ics20 withdrawal",
      other: "+2",
    },
  },
];
