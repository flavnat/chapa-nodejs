import { z } from 'zod';
import { RefundOptions, VerifyRefundOptions } from '../interfaces';

const refundSchema = z.object({
  tx_ref: z.string(),
  reason: z.string().optional(),
  amount: z.string().optional(),
  meta: z
    .object({
      customer_id: z.string().optional(),
      reference: z.string().optional(),
    })
    .optional(),
});

export const validateRefundOptions = (options: RefundOptions) => {
  return refundSchema.parse(options);
};

const verifyRefundSchema = z.object({
  ref_id: z.string(),
});

export const validateVerifyRefundOptions = (options: VerifyRefundOptions) => {
  return verifyRefundSchema.parse(options);
};
