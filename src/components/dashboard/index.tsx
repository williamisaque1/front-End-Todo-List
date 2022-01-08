import { createContext } from "react";
import { TransactionsProvider } from "../hooks/usehook";
import { Input } from "../Input";
import { Lista } from "../lista";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <TransactionsProvider>
      <Container>
        <Input />

        <Lista />
      </Container>
    </TransactionsProvider>
  );
}
