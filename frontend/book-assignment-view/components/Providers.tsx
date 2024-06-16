'use client';

/* 
This acts as a use client client parent for the apollo provider wrapper
apollo provider docs have not upgraded their provider to a use client component
*/

import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client"
import client from "@/utils/apollo/client";

interface ProvidersProps {
    children: ReactNode;
}


export function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}