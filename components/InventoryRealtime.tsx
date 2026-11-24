"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

export default function InventoryRealtime() {
  const router = useRouter();
  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;
    const channel = supabase.channel("vitrine-veiculos")
      .on("postgres_changes", { event: "*", schema: "public", table: "veiculos" }, () => router.refresh())
      .subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [router]);
  return null;
}
