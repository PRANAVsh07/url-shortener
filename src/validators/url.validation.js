import { z } from "zod";

const urlSchema = z.object({
    originalUrl: z.string().url()
});

export default urlSchema;