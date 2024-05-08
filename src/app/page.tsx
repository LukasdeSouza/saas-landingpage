import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Trilha Dev, evolua como um Programador 10x
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Tem tido dificuldade nos estudos ou tá meio perdido no meio de tanto conteúdo?
          Não se preocupe! Isso é normal, e nós estamos aqui pra resolver este problema.
        </Typography>
        <Link
          href="https://pay.kiwify.com.br/5A84k2Z"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Quero Participar`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            O Caminho mais rápido, com menos stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Aprenda o que Importa"
              description="Economize tempo do seus estudos - você irá aprender o que é importante estudar e ignorar aquilo que não tem necessidade"
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Troca de experiências"
              description="Converse com quem trabalha na área, estagiários, juniors e outras senioridades. Entenda aquilo que o mercado procura através de pessoas que já estão no mercado de trabalho."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Se Destaque"
              description="Você vai aprender conteúdo técnico e mais do que isso, vai aprender a se posicionar, corrigir seu currículo e linkedin, criar projetos relevantes e crescer exponencialmente."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            1-on-1 para corrigir os seus pontos fracos e dar ênfase ao ponto forte
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Fale direto com um especialista, corrija as suas falhas individuais, se aprimora com um acompanhamento individualizado que é feito com cada aluno.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/relatos.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
              Quero participar!
          </Typography>
          <div>comece hoje, e evolua em 1 semana aquilo que não evoluiu em 1 mês</div>
          <Link
            href="https://pay.kiwify.com.br/5A84k2Z"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Bora! Quero começar`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
