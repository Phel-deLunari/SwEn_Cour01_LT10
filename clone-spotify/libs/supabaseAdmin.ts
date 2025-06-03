import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function upsertProductRecord(product: any) {
  const { data, error } = await supabaseAdmin
    .from('products')
    .upsert([
      {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        metadata: product.metadata
      }
    ]);
  if (error) {
    console.log(error);
  }
}

export async function upsertPriceRecord(price: any) {
  const { data, error } = await supabaseAdmin
    .from('prices')
    .upsert([
      {
        id: price.id,
        product_id: price.product_id,
        currency: price.currency,
        unit_amount: price.unit_amount,
        recurring: price.recurring,
        metadata: price.metadata
      }
    ]);
  if (error) {
    console.log(error);
  }
}

export async function manageSubscriptionStatusChange(
  subscriptionId: string,
  customerId: string,
  isCreated: boolean
) {
  const { data, error } = await supabaseAdmin
    .from('subscriptions')
    .upsert([
      {
        id: subscriptionId,
        customer_id: customerId,
        status: isCreated ? 'active' : 'incomplete_expired',
        metadata: {
          isCreated
        }
      }
    ]);
  if (error) {
    console.log(error);
  }
}

export async function createOrRetrieveCustomer({
  uuid,
  email
}: {
  uuid: string;
  email: string;
}) {
 
  return uuid;
}