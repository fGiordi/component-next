export interface Card {
  connectWallet: () => void;

  price: number;
  royalty: number;
  takerFee: number;
  cartItems: number;
  buy?: () => void;
  sell?: () => void;
}
