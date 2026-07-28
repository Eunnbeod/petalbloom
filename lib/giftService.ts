import { supabase } from "./supabase";

export async function createGift(gift: any) {

  const { data, error } = await supabase
    .from("gifts")
    .insert([gift])
    .select()
    .single();

  if (error) throw error;

  return data;

}

export async function getGift(id: string) {

  const { data, error } = await supabase
    .from("gifts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;

}