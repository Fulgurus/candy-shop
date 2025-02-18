import { NftAttribute } from '../nft';
import { Side, Status, ShopStatusType } from '../response';

export interface SortBy {
  column: string;
  order: 'asc' | 'desc';
}

export interface OrderSortBy extends SortBy {}

type attributeType = { [key: string]: string };

interface CommonQuery {
  offset?: number;
  limit?: number;
}

export interface OrdersFilterQuery extends CommonQuery {
  sortBy?: SortBy | SortBy[];
  identifiers?: number[];
  sellerAddress?: string;
  attribute?: attributeType | attributeType[];
  candyShopAddress?: string;
  collectionId?: string;
  nftName?: string;
}

export interface TradeQuery extends CommonQuery {
  identifiers?: number[];
  sortBy?: SortBy[] | SortBy;
}

export interface OrderQs extends CommonQuery {
  filterArr?: OrderFilter[];
}

export interface OrderFilter {
  side: Side;
  status: Status;
  attribute?: NftAttribute;
  candyShopAddress?: string;
}

export interface TradeQs extends CommonQuery {}

export interface ShopQs extends CommonQuery {}

export interface ShopStatusQuery {
  walletAddress?: string;
  targets?: ShopStatusType[];
}

export interface CollectionQuery extends CommonQuery {
  shopId?: string;
  name?: string;
}

export interface ShopQuery extends CommonQuery {
  name?: string;
}

export interface DropQuery extends CommonQuery {}
export interface AuctionBidQuery extends CommonQuery {
  orderByArr?: SortBy;
}
