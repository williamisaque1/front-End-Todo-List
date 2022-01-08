import { List, ItemLista } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTrasactions } from "../hooks/usehook";
interface Tarefas {
  id: number;
  conteudo: string;
  realizada: boolean;
}
interface R {
  texto: string;
}

export function Lista() {
  const [dados, Setdados] = useState<Tarefas[]>([]);
  const [loading, Setloading] = useState(true || false || undefined);
  const { tarefa, carregar, deletar } = useTrasactions();
  useEffect(() => {
    Setloading(true);
    Setdados(tarefa);
    Setloading(false);
    console.log("tarefa", tarefa);
  }, [tarefa]);

  return (
    <>
      <List>
        {(loading == false && dados.length) != 0 ? (
          dados.map((tarefa) => (
            <ItemLista key={tarefa.id}>
              {tarefa.conteudo}
              <FaTrashAlt onClick={() => deletar(tarefa.id)} />
            </ItemLista>
          ))
        ) : (
          <ItemLista>nenhuma tarefa, por favor adicione uma tarefa.</ItemLista>
        )}
      </List>
    </>
  );
}
