"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

function SiteHeaderWithParams() {
  const searchParams = useSearchParams();
  return <SiteHeader searchParams={searchParams} />;
}

export function SuspenseSiteHeader() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteHeaderWithParams />
    </Suspense>
  );
}