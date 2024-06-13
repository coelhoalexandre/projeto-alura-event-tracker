import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { obterID } from "../../utils";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        "Eventos não pode ser cadastrados com data menor do que a atual."
      );
    }
    evento.id = obterID();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export default useAdicionarEvento;
