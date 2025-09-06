
const Table = () => {
  const benefits = [
    {
      name: 'Certificado Digital',
      included: true,
      marketPrice: 'R$ 200/ano',
    },
    {
      name: 'Abertura de empresa, 100% digital',
      included: true,
      marketPrice: 'R$ 700/ano',
    },
    {
      name: 'Contabilidade Consultiva',
      included: true,
      marketPrice: 'R$ 5.880,00/mês',
    },
    {
      name: 'Conta PJ gratuita, digital e integrada à sua contabilidade',
      included: true,
      marketPrice: 'R$ 756,00/ano',
    },
    {
      name: 'Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada',
      included: true,
      marketPrice: 'R$ 1.920/ano',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  font-sans z-10 ">
      <table className="w-[986px]">
        <thead >
          <tr className='border-b border-primary'>
            <th className="pb-2 pt-10 text-[22px] w-[547px] text-primary text-left font-medium">Benefícios inclusos no seu pacote</th>
            <th className="pb-2 pt-10 px-6  text-[22px] flex justify-center items-center relative">
              <img src="/logo.svg" alt="" className='z-10'/> 
              <div className='w-full rounded-xl h-[455px] absolute bg-[#f5f5f5] z-[-1] top-0'/></th>
            <th className="pb-2 pt-10 px-6 text-[22px] font-normal">Média de Mercado</th>
          </tr>
        </thead>
        <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-gray-200">
          {benefits.map((benefit) => (
            <tr key={benefit.name} >
              <td className="font-medium text-[18px]   border-gray-200 w-[547px]">{benefit.name}</td>
              <td className="font-bold text-[18px] text-center text-primary py-5  border-gray-200 w-[208px]">{benefit.included ? 'incluso' : 'Não'}</td>
              <td className="font-medium text-[18px] text-center  border-gray-200">{benefit.marketPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center mt-8'>
          <img src="/dolar.svg" alt="" className='px-4' />
        <p className='text-[30px] font-medium text-primary '>
          Uma economia média de <span className='font-bold'>R$ 9.456/ano</span>
        </p>
      </div>
      <button className="mt-8 px-8 py-3 h-[60px] w-[280px] bg-[#2B7ADF] text-white font-medium rounded-4xl shadow-md hover:bg-[#2b79dfe0] transition-colors cursor-pointer">
        Abrir empresa grátis
      </button>
    </div>
  );
};

export default Table;