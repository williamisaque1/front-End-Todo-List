import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TrasactionsProviderProps {
  children: ReactNode;
}
interface Tarefas {
  id: number;
  conteudo: string;
  realizada: boolean;
  createdAt?: string;
}
//type tarefaProps = Omit<Tarefas, "conteudo" | "realizada">;

interface parametros {
  tarefas: Tarefas[];
  carregar: () => void;
  deletar: (id: number) => void;
  adicionar: (id: string, conteudo: string, realizado: boolean) => void;
  modificar: (id: number, realizada: boolean) => void;
}
const TransactionContext = createContext<parametros>({} as parametros);
export function TransactionsProvider({ children }: TrasactionsProviderProps) {
  const [dados, Setdados] = useState<Tarefas[]>([]);

  const carregar = () => {
    axios.get("https://back-endtodolist.herokuapp.com").then((inf) => {
      Setdados(inf.data);
    });
  };
  const adicionar = (id: string, conteudo: string, realizada: boolean) => {
    console.log("dados id", id);
    axios
      .post(`https://back-endtodolist.herokuapp.com`, {
        id,
        conteudo,
        realizada,
      })
      .then((inf) => {
        carregar();
      });
  };
  const deletar = (id: number) => {
    console.log("dados id", id);
    axios.delete(`https://back-endtodolist.herokuapp.com/${id}`).then((inf) => {
      carregar();

      if (inf.data == 0) {
        alert("não foi possivel deletar a tarefa");
      }
    });
  };
  const modificar = (id: number, realizada: boolean) => {
    axios
      .patch(`https://back-endtodolist.herokuapp.com/${id}`, { realizada })
      .then((inf) => {
        console.log("dados modificados", inf.data);
        carregar();
      });
  };

  return (
    <TransactionContext.Provider
      value={{ tarefas: dados, carregar, deletar, adicionar, modificar }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
export function useTrasactions() {
  const context = useContext(TransactionContext);
  return context;
}
