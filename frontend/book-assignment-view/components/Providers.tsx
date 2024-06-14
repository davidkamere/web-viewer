'use client';

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