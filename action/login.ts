"use server";

import * as z from "zod";

import { Loginschema } from "../schema";

export const login = async (values: z.infer<typeof Loginschema>) => {
const validatedFields = Loginschema.safeParse(values);

   if(!validatedFields.success){
    return{ error: "Invalid fields!"};
   }
   return {success: "Email sent"}
};