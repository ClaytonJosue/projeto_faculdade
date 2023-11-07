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
        <h2 className="my-5 text-lg font-bold text-zinc-800">
          Mas qual área eu devo escolher?
        </h2>
        <section className="bg-zinc-700 mx-[-8px] text-white p-2">
          <h3 className="my-3">
            Aqui vão algumas das áreas que mais vem crescendo no mercado atual:
          </h3>
          <ul className="flex flex-wrap gap-2 text-center items-center justify-center my-5">
            <li className="rounded-md bg-emerald-700 py-1 px-1">Programação</li>
            <li className="rounded-md bg-emerald-700 py-1 px-1">
              Análise de BI
            </li>
            <li className="rounded-md bg-emerald-700 py-1 px-1">
              Administração de Banco de Dados
            </li>
            <li className="rounded-md bg-emerald-700 py-1 px-1">UX</li>
            <li className="rounded-md bg-emerald-700 py-1 px-1">
              Segurança da Informação
            </li>
            <li className="rounded-md bg-emerald-700 py-1 px-1">QA</li>
          </ul>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">Programação</h3>
          <p className="leading-7 mt-5">
            Como existem vários tipos de linguagem de programação, os
            profissionais que optam pela área da Programação podem atuar em
            diferentes setores dentro do mesmo nicho, por exemplo, podem seguir
            na área de Front-end, onde criarão a parte visual de um site,
            criando interações.
            <br />
            <br />
            Podem seguir também na área de Back-end, que ao contrário do
            Front-end, é onde se lida com os bastidores das funcionalidades das
            aplicações web. Existem milhares de áreas ligadas a programação,
            basta escolher a que mais se encaixe com você!
          </p>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">
            Análise de BI
          </h3>
          <p className="leading-7 mt-5">
            Uma das carreiras em tecnologia mais promissoras é a Análise de BI.
            Nesse caso, você será responsável por <strong>compartilhar</strong>,{" "}
            <strong>analisar</strong> e <strong>coletar</strong> os dados com
            seus parceiros e clientes. Um papel essencial do analista de BI é se
            basear nos dados para preparar relatórios analíticos e tomar
            decisões.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">
            Administração de Banco de Dados
          </h3>
          <p className="leading-7 mt-5">
            Os profissionais de Administração de Banco de Dados devem fazer a
            gestão correta dos bancos de dados, garantindo a disponibilidade das
            informações e cuidando da sua proteção. Sua principal função é
            administrar, configurar e instalar os data centers.
            <br />
            <br />
            Eles também são responsáveis pelo desenvolvimento de sistemas de
            banco de dados, emissão de relatórios quantitativos de eficiência,
            realização de backup e zelo pela segurança das informações.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">
            Interface do Usuário (UX)
          </h3>
          <p className="leading-7 mt-5">
            UX é uma disciplina que estuda a experiência do usuário de um
            produto ou serviço, com o objetivo de estimular melhorias nos
            mesmos. A própria sigla já entrega esse significado, pois vem do
            inglês user experience, que significa justamente “experiência do
            usuário”.
            <br />
            <br />O canal de comunicação com a clientela deve ser o mais preciso
            e certeiro possível, e os profissionais de TI são um destaque por
            pensar em toda a jornada de uso de uma aplicação, e como é possível
            melhorá-la cada vez mais.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">
            Segurança da Informação
          </h3>
          <p className="leading-7 mt-5">
            Outra área de TI em alta é a de Segurança da Informação, em que os
            profissionais são responsáveis por cuidar da segurança das
            informações em diversos aspectos. São eles quem protegem os dados,
            equipamentos e sistemas de servidores contra possíveis ameaças, bem
            como tentativas de invasões de hackers.
            <br />
            <br />
            Logo, é fundamental que eles tenham conhecimentos em sistemas de
            monitoramento. Afinal, é importante dificultar ao máximo os ataques
            e saber o que fazer para solucionar o problema o quanto antes.
          </p>
        </section>
        <section className="mt-5">
          <h3 className="font-semibold text-2xl text-zinc-800">
            Garantia da Qualidade (QA)
          </h3>
          <p className="leading-7 mt-5">
            O Analista de QA tem o papel de analisar todo o ciclo de
            desenvolvimento de um produto digital. Esse profissional é capaz de
            garantir o funcionamento correto dos programas e revisar os
            pré-requisitos dos softwares, reportando falhas ao time de
            desenvolvimento. Sem um time de testes, é provável que o usuário
            final não fique satisfeito com o uso do programa.
            <br />
            <br />
            Para se tornar um bom tester é essencial conhecer algumas linguagens
            de programação, como <strong>Ruby</strong> e <strong>Java</strong>,
            ferramentas de automação e ter uma pós-graduação na área.
          </p>
        </section>
        <section>
          <h2 className="my-5 text-lg font-bold text-zinc-800">
            Onde encontrar cursos gratuitos?
          </h2>
          <p className="leading-7">
            Irei mostrar alguns sites que disponibilizam cursos gratuitos e
            outros pagos.
          </p>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              DIO
            </h3>
            <p className="leading-7">
              Um dos sites que possuem cursos e bootcamps de programação até
              análise de dados totalmente gratuitos é a
              <a
                href="https://www.dio.me"
                target="_blank"
                className="text-blue-500 underline"
              >
                {" "}
                DIO
              </a>
              , onde só é necessário criar uma conta. A DIO também possui
              conteúdos pagos, caso queira se aprofundar mais.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              Curso em Vídeo
            </h3>
            <p className="leading-7">
              Outro site com cursos gratuitos é o{" "}
              <a
                href="https://www.cursoemvideo.com/cursos/"
                target="_blank"
                className="text-blue-500 underline"
              >
                Curso em Vídeo
              </a>
              . Lá existem cursos de programação, Inglês, Segurança da
              Informação, entre mais diversos tipos de cursos, totalmente
              gratuito. O curso em vídeo também possui um canal no{" "}
              <a
                href="https://www.youtube.com/@CursoemVideo"
                target="_blank"
                className="text-blue-500 underline"
              >
                Youtube
              </a>{" "}
              que disponibiliza várias dicas e alguns cursos estão disponiveis
              lá também.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              Hashtag Programação
            </h3>
            <p className="leading-7">
              E pra quem curte mexer com análise de dados, bots e muito mais,
              temos o canal no Youtube da{" "}
              <a
                href="https://www.youtube.com/@HashtagProgramacao/featured"
                target="_blank"
                className="text-blue-500 underline"
              >
                Hashtag Programação
              </a>
              , onde encontrarão dicas sobre programação, cursos de Python e
              análise de dados, entre outros.
            </p>
          </div>
          <p className="leading-7 mt-7">
            E pra quem tem uma condição melhor e quer se especializar ainda
            mais, aqui vai alguns sites pagos com ótimos conteúdos.
          </p>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              Rocketseat
            </h3>
            <p className="leading-7">
              O site da{" "}
              <a
                href="https://www.rocketseat.com.br"
                target="_blank"
                className="text-blue-500 underline"
              >
                Rocketseat
              </a>{" "}
              possui diversos cursos sobre programação e principalmente sobre
              Front-end e desenvolvimento Mobile.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              Udemy
            </h3>
            <p className="leading-7">
              Na{" "}
              <a
                href="https://www.udemy.com/?ranMID=39197&ranEAID=%2F68Yt01SgtI&ranSiteID=_68Yt01SgtI-veCmPe6ejOXhezcihzvVjQ&LSNPUBID=%2F68Yt01SgtI&utm_source=aff-campaign&utm_medium=udemyads"
                target="_blank"
                className="text-blue-500 underline"
              >
                Udemy
              </a>{" "}
              você tem cursos de diversas áreas e com diversas promoções.
              Recomendo dar uma olhada!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-zinc-800 mt-5 mb-3">
              Alura
            </h3>
            <p className="leading-7">
              E por último temos a{" "}
              <a
                href="https://www.alura.com.br"
                target="_blank"
                className="text-blue-500 underline"
              >
                Alura
              </a>
              , que segue a mesma lógica da Udemy, com diversos cursos sobre
              Programação, Data Science, Inteligência Artificial entre outras. A
              Alura algumas vezes fazem imersões com algumas tecnologias e que
              são totalmente de graças, então fiquem de olho no site e na rede
              socias deles.
            </p>
          </div>
        </section>
        <p className="leading-7 my-8">
          E por aqui eu me despeço. Espero que vocês tenham gostado do conteúdo
          e que possam decidir pra qual caminho seguir!
        </p>
      </main>
    </>
  );
}
