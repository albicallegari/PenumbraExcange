export interface IBlock {
  icon: string;
  blockHeight: string;
  time: string;
  tsx: string;
}

export interface ITransaction {
  icon: string;
  txHash: string;
  blockHeight: {
    value: string;
    icon: string;
  };
  actions: {
    label: string;
    other: string;
  };
}

export interface BlocksTableProps {
    blocks: IBlock[];
}

export interface TransactionsTableProps {
    transactions: ITransaction[];
}