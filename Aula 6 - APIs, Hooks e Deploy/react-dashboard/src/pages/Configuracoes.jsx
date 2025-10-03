import Card from "@/components/Card";
import Section from "@/components/Section";

export default function Configuracoes() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <Section 
        titulo='Configurações Gerais'>
          {
            data.geral.map(pegaItem => (
              <Card {...pegaItem}/>
            ))
          }
      </Section>
      <Section 
        titulo='Conta'/>
      <Section
        titulo='Avançado' />
    </div>
  );
}
