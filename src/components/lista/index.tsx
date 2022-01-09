import { List, ItemLista } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useTrasactions } from "../../hooks/usehook";

export function Lista() {
  const { tarefa, deletar, modificar, carregar } = useTrasactions();
  useEffect(() => {
    carregar();
  }, []);
  return (
    <>
      <List>
        {tarefa.length ? (
          tarefa.map((tarefa) => (
            <ItemLista key={tarefa.id}>
              <input
                type={"checkbox"}
                onChange={(p) => {
                  console.log(p.currentTarget.checked);
                  modificar(tarefa.id, p.currentTarget.checked);
                }}
                checked={tarefa.realizada}
              />
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
