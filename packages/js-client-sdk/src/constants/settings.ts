import { getPaperOriginUrl } from "@paperxyz/sdk-common-utilities";

export const ALCHEMY_API_KEY = "k5d8RoDGOyxZmVWy2UPNowQlqFoZM3TX";

export const CHECKOUT_WITH_ETH_IFRAME_URL = "/sdk/2022-08-12/checkout-with-eth";
export const CHECKOUT_WITH_CARD_IFRAME_URL =
  "/sdk/2022-08-12/checkout-with-card";
export const CREATE_WALLET_IFRAME_URL = "/sdk/v2/verify-email";

export const PAPER_APP_URL = getPaperOriginUrl();
export const DEFAULT_BRAND_OPTIONS = {
  colorPrimary: "#cf3781",
  colorBackground: "#ffffff",
  colorText: "#1a202c",
  borderRadius: 12,
  fontFamily: "Open Sans",
};
