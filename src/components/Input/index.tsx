import { useTrasactions } from "../../hooks/usehook";
import { Botao, InputTarefa, Secao } from "./styles";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
export function Input() {
  const { adicionar } = useTrasactions();
  const [dadosInput, setDadosInput] = useState("");

  return (
    <Secao>
      <InputTarefa
        value={dadosInput}
        onChange={(text) => setDadosInput(text.currentTarget.value)}
        placeholder="adicione uma tarefa !!!"
      />
      <Botao
        onClick={() => {
          adicionar(uuidv4(), dadosInput, false);
        }}
      >
        adicionar
      </Botao>
    </Secao>
  );
}
