import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
//import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
//import { members } from '@wix/members';

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
      //orders,
     // members,
    },
    auth: OAuthStrategy({
      clientId: '8779c8c3-bb11-400a-aa21-a4c40d6ff739',
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};