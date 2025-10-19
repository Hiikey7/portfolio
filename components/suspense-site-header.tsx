"use client";

import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";

export function SuspenseSiteHeader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteHeader />
    </Suspense>
  );
}