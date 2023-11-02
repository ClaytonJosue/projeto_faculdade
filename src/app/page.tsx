import HeaderPage from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <main className="p-2">
        <h2 className="text-center text-2xl mb-5">
          Déficit de Profissionais na área de TI no Brasil
        </h2>
        {/* Introdução */}
        <section>
          <p className="leading-7">
            Sabemos que o mercado na área de TI é enorme e está crescendo cada
            vez mais, porém, de acordo com o Google, o mercado de tecnologia da
            informação (TI) no Brasil terá um{" "}
            <strong>déficit de 530 mil profissionais</strong>.
          </p>
          <Image
            src="/ti_image.jpg"
            alt="Imagem de um notebook"
            className="w-full mt-4 rounded-sm"
            width={200}
            height={200}
          />
          <p className="text-center text-sm text-gray-800">
            (Imagem meramente ilustrativa)
          </p>
        </section>

        {/* Áreas de TI*/}
        <section>
          <p className="leading-7 mt-5">
            O Brasil deve gerar quase 420 mil vagas na área de TI até 2025,
            porém ainda é difícil encontrar profissionais capacitados da área
            para ocupar essas vagas.
            <br />
            <br />
            Em uma empresa de Fortaleza, por exemplo, das 60 vagas de emprego
            abertas, 50 delas são para área de tecnologia. Para algumas, nem
            precisa ter experiência.
            <br />
            <br />
            Essa dificuldade de encontrar mão de obra para o mercado tem feito
            muitas empresas investirem na formação de profissionais para
            trabalhar na área de tecnologia.
            <br />
            <br />
            Por isso que aqui nesse site eu irei mostrar ótimos sites{" "}
            <strong>gratuitos</strong> e alguns <strong>pagos</strong> para você
            se especializar nas áreas de TI que mais vem crescendo no mercado.
          </p>
        </section>
      </main>
    </>
  );
}
