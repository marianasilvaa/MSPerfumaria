import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boticario',
  templateUrl: './boticario.component.html',
  styleUrls: ['./boticario.component.css']
})
export class BoticarioComponent implements OnInit {

  produtos:any = [
    {
      nome:"Boticollection Zíngara Desodorante Colônia 100ml",
      preco:"R$ 129,90",
      descricao:"Para reviver aqueles momentos que marcaram a sua vida, apresentamos a edição limitada da fragrância feminina do Boticário que está de volta: Boticollection Zíngara Desodorante Colônia.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B84265/84265-01.png"
    },  {
      nome:"Celebre Sua Força Desodorante Colônia Feminino 100ml",
      preco:"R$  69,90",
      descricao:"Celebrar é o que dá sentido à vida, por isso, Celebre Sua Força Desodorante Colônia Feminino, traz uma fragrância fresca, potente e perfeita para nos lembrar de quanto é importante celebrar as pequenas conquistas do dia a dia.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B83060/2000x2000_CARD_PDP_83060_1.jpg"
    },  {
      nome:"Malbec Desodorante Colônia 100ml",
      preco:"R$ 159,90",
      descricao:"Malbec é uma fragrância masculina da família das Amadeiradas. É única e desenvolvida através de um processo de fabricação exclusivo no mundo. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B73607/2dcdaf41-e906-4816-9786-36feb27304f5-malbec-desodorante-colonia-100-ml.png"
    },  {
      nome:"Floratta Red Desodorante Colônia 75ml",
      preco:"R$ 114,90",
      descricao:"A fragrância feminina do Floratta Red Desodorante Colônia é inspirada na flor da Maçã de Vermont.A fragrância traz a delicadeza da flor da maçã e a doçura do fruto. Além de notas de saída de Frutas Vermelhas e Laranja. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B75792/B75792.jpg"
    },  {
      nome:"Nativa SPA Queen Vanilla Desodorante Colônia 75ml",
      preco:"R$  51,90",
      descricao:"Seu acorde traz uma faceta mais encorpada da baunilha, que é obtida através de um primoroso processo de cultivo e maturação. O desodorante colônia expressa uma fragrância feminina viciante e envolvente.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B73074/ad516956-a9c1-4cf5-b56a-50c3b61ddea1-nativa-spa-queen-vanilla-desodorante-colonia-75ml.png"
    },  {
      nome:"Coffee Woman Seduction Desodorante Colônia 100ml",
      preco:"R$ 123,90",
      descricao:"Coffee Woman Seduction Desodorante Colônia é irresistível. Carrega em sua fórmula o equilíbrio entre Madeira e Musk, a intensidade do óleo essencial dos grãos de Café Arábica e a sensualidade das notas frutais com delicado toque floral. Tudo isso agregado a notas delicadas e quentes de Chocolate Branco.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B74032/784d5efa-9a42-4897-b1c4-c9224acc741f-coffee-woman-seduction-desodorante-colonia-100-ml.png"
    },  {
      nome:"Celebre Sua Força Desodorante Colônia Masculino 100ml",
      preco:"R$  69,90",
      descricao:"Celebrar é o que dá sentido à vida, por isso, Celebre Sua Força Desodorante Colônia Masculino, traz uma fragrância fresca, potente e perfeita para nos lembrar de quanto é importante celebrar as pequenas conquistas do dia a dia.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/162996-470-470/Herstory_Eau_de_Parfum__50ml_93.jpg?v=637190933743770000"
    },  {
      nome:"Insensatez Desodorante Colônia 100ml",
      preco:"R$ 109,90",
      descricao:"No fundo, no fundo, sentir-se bem consigo mesmo não tem relação só com momentos passados com outras pessoas, mas também com aqueles divididos com seu próprio eu. Insensatez Desodorante Colônia é a fragrância de quem não tem medo de ser quem é. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B71403/a08c6fb4-21e4-4b4c-be3a-773a7f90cac5-insensatez-desodorante-colonia-100ml.png"
    },  {
      nome:"Floratta Blue Desodorante Colônia 75ml",
      preco:"R$ 109,90",
      descricao:"O Floratta Blue Desodorante Colônia é um clássico da perfumaria feminina do Boticário. A combinação de notas florais, que são a alma da fragrância, com a base de Musk tornam esse desodorante colônia super confortável.  ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B25458/e38de7ca-10db-43ab-be2d-2111d3e5c6c5-floratta-blue-desodorante-colonia-75ml.png"
    },  {
      nome:"Zaad Go Eau de Parfum 95ml",
      preco:"R$ 249,90",
      descricao:"Zaad Go Eau de Parfum é uma fragrância Amadeirada Floral traz a sofisticação com a intensidade da madeira e do Âmbar. E o segredinho é uma fruta vermelha chamada Evodia. Essa fruta milenar é nativa da região norte de China e utilizada para o tratamento medicinal.       ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B74465/984cfdc4-9fe7-4fb8-800a-6d096ed9b4ee-zaad-go-eau-de-parfum-95ml.png"
    },  {
      nome:"Lily Eau de Parfum 75ml",
      preco:"R$ 239,90",
      descricao:"Com essa inspiração em sua essência, traz uma fragrância feminina que soma a delicadeza de facetas únicas florais com a força marcante das madeiras, que a tornam sofisticada e uma rica experiência olfativa. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B74719/a8bcc35e-09d9-4460-bc31-47ab83978a99-lily-eau-de-parfum-valvula-75ml.png"
    },  {
      nome:"Kit Malbec Desodorante Colônia 50ml + Desodorante Antitranspirante Aerossol 31g + Sabonete Líquido Corporal 75ml",
      preco:"R$  123,90",
      descricao:"O Malbec Desodorante Colônia 50ml é produzido com álcool vínico em um processo exclusivo através da fermentação da uva. É uma fragrância masculina amadeirada e com notas frescas.  ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B77117/kit-malbec.jpg"
    },  {
      nome:"Luiza By Luiza Brunet Deo Parfum - 100ml",
      preco:"R$ 58,90",
      descricao:"Com ingredientes nobres selecionados, Luiza by Luiza Brunet é uma fragrância pensada para a mulher que não cabe em rótulos",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161042-470-470/Luiza_By_Luiza_Brunet_100ml_313.jpg?v=637146016358400000"
    },  {
      nome:"Egeo Dolce Desodorante Colônia 90ml",
      preco:"R$ 119,90",
      descricao:"A fragrância Egeo Dolce Desodorante Colônia é tão irresistível quanto um doce! Com uma combinação de cheiros adocicados, ela é perfeita para mulheres que querem seduzir com um toque de diversão.  ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B24453/be619514-6335-45e9-b139-a6740fffd578-egeo-dolce-desodorante-colonia-90ml.png"
    },  {
      nome:"Kit Presente Desodorante Colônia: Arbo 100ml + Arbo Reserva 100ml",
      preco:"R$ 189,90",
      descricao:"O Arbo Desodorante Colônia possui notas exclusivas captadas no ar da montanha, para quem busca se desconectar da rotina. Por ser afastada do ambiente urbano, a montanha representa a busca pelo bem-estar físico e mental, a partir da vivência de momentos únicos com a natureza.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B83496/83496-01.png"
    },  {
      nome:"Kit Presente Elysée: Eau de Parfum 50ml + Creme para Mãos 50g + Frasqueira Nude",
      preco:"R$ 239,90",
      descricao:"O Elysée Eau de Parfum possui uma embalagem extremamente sofisticada que remete a uma joia. A sua fragrância feminina contém matérias-primas de alta qualidade e riqueza como a Mandarina Orpur da família olfativa Chypre.Ela é modernizada por notas ambaradas, uma grande tendência da perfumaria feminina internacional, perfeito para quem se interessa por fragrâncias marcantes.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B84051/84051-01.png"
    },  {
      nome:"Capricho Hello Stars Desodorante Colônia 50ml",
      preco:"R$ 51,90",
      descricao:"Ideal para as meninas a partir dos 12 anos, Capricho Hello Stars entende a descoberta da personalidade e a vontade de ser única, por isso, acredita que a astrologia é uma ótima ferramenta de autoconhecimento que ajuda a entender melhor qual nosso papel nesse mundo.   ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B83081/83081-01.png"
    },  {
      nome:"Combo Perfumada e Protegida com Nuvens",
      preco:"R$ 67,04",
      descricao:"O Cuide-se Bem Body Splash Nuvem é super leve e traz a deliciosa e confortável fragrância da Linha Nuvem. Refrescante, o body splash pode ser aplicado por todo o corpo sempre que desejar intensificar a perfumação do seu corpo e sentir a deliciosa sensação de ter saído do banho. Complemente o cuidado com o Cuide-se Bem Desodorante Antitranspirante Aerosol Nuvem.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B2017030508/d7300368-172a-470c-b4a2-66da95f6b6c7-combo-perfumada-e-protegida-com-nuvens-cuide-se-bem.png"
    },  {
      nome:"MEN Desodorante Colônia 100ml",
      preco:"R$ 79,90",
      descricao:"Men de O Boticário é para você que vive na correria e precisa de soluções certeiras. É para você que não gosta de perder tempo e ama estar sempre preparado para o que vier.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B76664/76664.jpg"
    }, 
    {
      nome:"Acquagel Hidratante Desodorante Corporal Nativa SPA Ameixa 250 g",
      preco:"R$  48,90",
      descricao:"A alta tecnologia do Ácido hialurônico que você já usa no rosto, aliado a uma revolucionária fórmula em gel, agora em versão inovadora e abundante para o corpo todo: Acquagel Hidratante Desodorante Corporal Nativa SPA Ameixa!",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B83453/2000x2000_CARD_PDP_83453_1.jpg" 
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

