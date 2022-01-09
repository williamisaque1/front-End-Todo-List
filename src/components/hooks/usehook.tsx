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
  createdAt: string;
}
//type tarefaProps = Omit<Tarefas, "conteudo" | "realizada">;

interface parametros {
  tarefa: Tarefas[];
  carregar: () => void;
  deletar: (id: number) => void;
  adicionar: (id: string, conteudo: string, realizado: boolean) => void;
  modificar: (id: number, realizada: boolean) => void;
}
const TransactionContext = createContext<parametros>({} as parametros);
export function TransactionsProvider({ children }: TrasactionsProviderProps) {
  const [dados, Setdados] = useState<Tarefas[]>([]);
  useEffect(() => {
    carregar();
  }, []);
  const carregar = () => {
    axios.get("http://192.168.0.17:3333").then((inf) => {
      console.log("dados carregados", inf.data);
      Setdados(inf.data);
    });
  };
  const adicionar = (id: string, conteudo: string, realizada: boolean) => {
    console.log("dados id", id);
    axios
      .post(`http://192.168.0.17:3333`, {
        id,
        conteudo,
        realizada,
      })
      .then((inf) => {
        console.log("tarefa adicionada", inf.data);
        carregar();
      });
  };
  const deletar = (id: number) => {
    console.log("dados id", id);
    axios.delete(`http://192.168.0.17:3333/${id}`).then((inf) => {
      console.log("dados excluidos", inf.data);
      carregar();
      inf.data == 1
        ? alert("tarefa deletada com sucesso")
        : alert("não foi possivel deletar a tarefa");
    });
  };
  const modificar = (id: number, realizada: boolean) => {
    console.log("dados id" + id + "|" + realizada);
    axios.patch(`http://192.168.0.17:3333/${id}`, { realizada }).then((inf) => {
      console.log("dados modificados", inf.data);
      carregar();
    });
  };

  return (
    <TransactionContext.Provider
      value={{ tarefa: dados, carregar, deletar, adicionar, modificar }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
export function useTrasactions() {
  const context = useContext(TransactionContext);
  return context;
}
