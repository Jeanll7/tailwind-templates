import { ToBack } from "../../components/ToBack";
import { Container } from "../../components/Container";

export function FormPage() {
  return (
    <>
      <ToBack />
      <Container>
        <h1 className="w-full bg-white mt-8 flex items-center justify-center gap-2 font-medium text-2xl">
          Formulário
        </h1>

        <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
          <form className="w-full">
            <div className="mb-3">
              <p className="mb-2 font-medium">Nome do produto</p>
              <input
                className="w-full border-2 rounded-md h-11 px-2 outline-none"
                type="text"
                placeholder="Ex: Nome produto..."
              />
            </div>

            <div className="mb-3">
              <p className="mb-2 font-medium">Modelo do produto</p>
              <input
                className="w-full border-2 rounded-md h-11 px-2 outline-none"
                type="text"
                placeholder="Ex: Modelo produto..."
              />
            </div>

            <div className="flex w-full mb-3 flex-col sm:flex-row items-center gap-4">
              <div className="w-full">
                <p className="mb-2 font-medium">Ano</p>
                <input
                  className="w-full border-2 rounded-md h-11 px-2 outline-none"
                  type="text"
                  placeholder="Ex: 2021/2022"
                />
              </div>

              <div className="w-full">
                <p className="mb-2 font-medium">Data</p>
                <input
                  className="w-full border-2 rounded-md h-11 px-2 outline-none"
                  type="text"
                  placeholder="Ex: Data atual..."
                />
              </div>
            </div>

            <div className="flex w-full mb-3 flex-col sm:flex-row items-center gap-4">
              <div className="w-full">
                <p className="mb-2 font-medium">Telefone / Whatsapp</p>
                <input
                  className="w-full border-2 rounded-md h-11 px-2 outline-none"
                  type="text"
                  placeholder="Ex: (48) 99999-9999..."
                />
              </div>

              <div className="w-full">
                <p className="mb-2 font-medium">Cidade</p>
                <input
                  className="w-full border-2 rounded-md h-11 px-2 outline-none"
                  type="text"
                  placeholder="Ex: Cidade..."
                />
              </div>
            </div>

            <div className="mb-3">
              <p className="mb-2 font-medium">Preço</p>
              <input
                className="w-full border-2 rounded-md h-11 px-2 outline-none"
                type="text"
                placeholder="Ex: 32.000..."
              />
            </div>

            <div className="mb-3">
              <p className="mb-2 font-medium">Descrição</p>
              <textarea 
                className="border-2 w-full rounded-md h-24 px-2 outline-none resize-none"
                placeholder="Digite a descrição"
              />
            </div>

            <button type="submit" className="w-full rounded-md bg-zinc-900 text-white font-medium h-10">
              Cadastrar
            </button>

          </form>
        </div>
      </Container>
    </>
  );
}
