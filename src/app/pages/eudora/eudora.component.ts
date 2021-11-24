import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eudora',
  templateUrl: './eudora.component.html',
  styleUrls: ['./eudora.component.css']
})
export class EudoraComponent implements OnInit {

  produtos:any = [
    {
      nome:"Kit Impression Eau de Parfum + Gel Pós Barba",
      preco:"R$ 214,89",
      descricao:"Impression Eau de Parfum é uma fragrância amadeirada com notas extremamente marcantes. Traz a sofisticação das madeiras e o fundo quente das notas balsâmicas.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/EK1417517840/4.jpg"
    },  {
      nome:"Combo Magnific: Eau de Parfum + Creme Acetinado",
      preco:"R$  169,89",
      descricao:"O Combo Magnific foi feito com Ingredientes sofisticados para garantir perfumação e hidratação intensa.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E2021101506/E2021101506.jpg"
    },  {
      nome:"Volpe Master Desodorante Colônia 100ml",
      preco:"R$  94,90",
      descricao:"Com fragrância Amadeirado Ambarado, Volpe Master leva em sua composição a madeira do Cedro da Virgínia, um ingrediente nobre da perfumaria que também é oficialmente utilizado para confeccionar as peças de xadrez. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E05545/E05545.jpg"
    },  {
      nome:"Colônia Desodorante Energy 100ml",
      preco:"R$  89,90",
      descricao:"A correria do dia a dia consome sua energia. Um impacto de frescor faz com que você sinta pronto e perfumado por mais tempo. Eudora H Energy apresenta o frescor em alta intensidade. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E93512/E93512_a.jpg"
    },  {
      nome:"Intense Eau de Parfum 75ml",
      preco:"R$  189,90",
      descricao:"La Victorie Intense Eau de Parfum é a nova fragrância de Eudora, que apresenta um novo floral amadeirado cremoso, intenso e sofisticado.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E93548/Eau-de-Parfum-La-Victorie-Intense-75ml.jpg"
    },  {
      nome:"Eau de Parfum 75ml",
      preco:"R$ 179,90",
      descricao:"Eudora Eau de Parfum é uma fragrância sofisticada e intensa, com notas repletas de personalidade.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E70716/58c31ca9-b7a5-4a04-a133-8b41d54b89d6-eudora-eau-de-parfum-75ml.png"
    },  {
      nome:"Niina Secrets Desodorante Colônia 100ml",
      preco:"R$ 139,90",
      descricao:"",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E01062/1_01062_EUDORA-NIINA-SECRETS-DESODORANTE-COL%C3%94NIA-100ml_embalagem.jpg"
    },  {
      nome:"Colônia Desodorante Divine Lace 95ml",
      preco:"R$ 89,90",
      descricao:"Divina, essa fragrância acompanha você durante o dia todo para transformar sua rotina em momentos cada vez mais especiais.      ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E73479/3a04801a-4c3f-4799-9c6c-11675c285846-divine-lace-deo-colonia-95ml.png"
    },  {
      nome:"Rummo Explorer Desodorante Colônia 100ml",
      preco:"R$ 99,90",
      descricao:"Ela conta com o contraste das madeiras quentes combinadas com frescor da água da chuva que compõem o exclusivo acorde Mineral Wood.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E93029/93029.jpg"
    },  {
      nome:"Colônia Desodorante Carbon 100ml",
      preco:"R$ 134,90",
      descricao:"Colônia Desodorante Carbon equilibra leveza e força, ideal para o homem que deseja conquistar tudo que deseja. ",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E17535/E17535.jpg"
    },  {
      nome:"In Black Eau De Parfum 100ml",
      preco:"R$ 184,90",
      descricao:"Impression foi criado para o homem talentoso, que sabe reconhecer os aprendizados da sua jornada e valoriza as pessoas que estão à sua volta. Feito para ele, que constrói sua própria história e entende que o tempo é parte determinante para o sucesso.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E91072/f44c1be5-8fec-49ee-8deb-cb1deef3648d-impression-in-black-eau-de-parfum-100ml.png"
    },  {
      nome:"Colônia Desodorante Eudora H Acqua 100ml",
      preco:"R$ 89,90",
      descricao:"Proporcione ao seu corpo a refrescância máxima que ele merece.Recupere todos os dias suas energias com o poder e a intensidade dessa fragrância extremamente revigorante.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E92215/E92215.jpg"
    },  {
      nome:"Kit Voyage Desodorante Colônia + Shampoo",
      preco:"R$ 144,89",
      descricao:"A fragrância masculina Club 6 Voyage Desodorante Colônia foi desenvolvida para homens elegantes, poderosos e que gostam de marcar presença.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E20210915/E20210915.png"
    },  {
      nome:"Kit Intention Colônia Desodorante + Desodorante Aerossol",
      preco:"R$ 114,89",
      descricao:"Uma fragrância sofisticada e inesquecível para quem reconhece o poder de um olhar.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/EK9350493031/EK9350493031-Kit-Intention.jpg"
    },  {
      nome:"Combo Divine Lace: Deo Colônia + Hidratante Corporal",
      preco:"R$ 142,89 ",
      descricao:"Essa fragrância acompanha você durante o dia todo para transformar sua rotina em momentos cada vez mais especiais.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E2021091331/E2021091331.jpg"
    },  {
      nome:"Kit Cassino Colônia Desodorante + Shower Gel",
      preco:"R$ 149,89",
      descricao:"Apresenta uma das fragrâncias de destaque da linha, traduzindo em suas notas a personalidade do homem que sabe vencer os desafios diários do jogo da vida.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/EK2669573373/aaaaaaa.png"
    },  {
      nome:"Kit Lyra Colônia Desodorante + Hidratante Desodorante",
      preco:"R$ 166,89",
      descricao:"Eudora se inspirou no mundo das joalherias para trazer em um frasco valioso uma fragrância exuberante, uma combinação única de frutas vermelhas e flores intensas com a cremosidade do musk e cedro.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/EK9171592730/EK9171592730.jpg"
    },  {
      nome:"Colônia Desodorante 95ml",
      preco:"R$  84,90",
      descricao:"Uma das fragrâncias masculinas mais vendidas de Eudora é magnética e fascinante, harmonizando perfeitamente o frescor do acorde cítrico com notas de menta e o rico complexo amadeirado. Feito com matérias-primas selecionadas criteriosamente.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/E15285/2aee872d-0b0a-455b-b048-80d8fa3111ef-club-6-deo-colonia-95ml.png"
    },  {
      nome:"Água Colônia 100ml",
      preco:"R$ 69,99",
      descricao:"A água de colônia para bebê é sinônimo de cuidado mais puro e seguro com uma fragrância única e ideal para a rotina de cuidados diários. E não precisa se preocupar, o produto possui fórmula vegana, pH ideal para a pele do bebê, é livre de corantes, parabenos e álcool!",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E93391/E93391.jpg"
    }, 
    {
      nome:"Colônia Desodorante 95ml (Nova embalagem)",
      preco:"R$  99,90",
      descricao:"Colônia Desodorante Chic contrasta o frescor da laranja, bergamota e maçã com notas florais do muguet e jasmim e cremosidade da baunilha.",
      img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/E93026/E93026_a.jpg" 
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
