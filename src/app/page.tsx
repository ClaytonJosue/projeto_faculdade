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
      </main>
    </>
  );
}
