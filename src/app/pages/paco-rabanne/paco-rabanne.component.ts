import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paco-rabanne',
  templateUrl: './paco-rabanne.component.html',
  styleUrls: ['./paco-rabanne.component.css']
})
export class PacoRabanneComponent implements OnInit {

  produtos:any = [
    {
      nome:"Lady Milion Empire Collector - EAU DE PARFUM",
      preco:"R$ 487,75",
      descricao:"Este perfume floral de ciclame contrasta um buquê multifacetado com os aromas intoxicantes de frutas, conhaque e madeira. Contém pétalas de magnólia que dão frescor e flor de laranja carnal com notas de pêssego",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1200,quality=90/medias/sys_master/images/images/hf7/h38/9242267549726/9242267549726.jpg"
    },  {
      nome:"Lady Million - EAU DE PARFUM",
      preco:"R$ 287,10",
      descricao:"Néctar floral sem inibições. Flores brancas opulentas e frescas. Glamour. Mel e patchouli sexy. Viciante ao limite da obsessão.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hdd/h43/9251323936798/9251323936798.jpg"
    },  {
      nome:"Lady Million Empire - EUA DE PARFUM",
      preco:"R$ 270,00",
      descricao:"Como se constrói um império? Enfrente o que vier. Sempre. Deseje seu destino já. Perfume feminino Lady Million Empire.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h09/h5a/9251366666270/9251366666270.jpg"
    },  {
      nome:"Lady Million Lucky - EAU DE PARFUM",
      preco:"R$ 319,00",
      descricao:"Rosa que ousa. Um aroma de sensação plena. Sem limites. Explosão de framboesa. Um deleite. Poder do sândalo. Aveludado. Um vício estonteante. A vida é um jogo!",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hcf/h2d/9242370244638/9242370244638.jpg"
    },  {
      nome:"Lady Million Privé - EAU DE PARFUM",
      preco:"R$ 249,41",
      descricao:"Assim como a marca, o perfume Lady Million Privé, da Paco Rabanne, abusa da atitude, elegância e sedução. Desde seu frasco glamuroso, o perfume, tem uma fragrância esplêndida com toque floral amadeirado, notas cítricas de mel, traz o tom refrescante e único ao perfume, homenageando a beleza única da mulher, sem deixá-la passar despercebida.",
      img:"http://epocacosmeticos.vteximg.com.br/arquivos/ids/213392/lady-million-prive-eau-de-parfum-perfume-feminino-80ml.jpg?v=636214531621500000"
    },  {
      nome:"Lady Million - LOÇÃO CORPORAL",
      preco:"R$ 188,90",
      descricao:"Uma loção hidratante para deixar a pele macia e delicadamente perfumada, como a sensação de uma carícia. Uma loção corporal para deslumbrar. Para trazer sorte. Dia após dia.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h73/hfd/9242290290718/9242290290718.jpg"
    },  {
      nome:"Lady Million Fabulous - EAU DE PARFUM",
      preco:"R$ 557,10",
      descricao:" Lady Million Fabulous, uma nova fragrância floral ORIENTAL da Paco Rabanne, na qual floreais brancos luminosos se encontram com uma base profundamente sedutora. ",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hb5/hd3/9242334625822/9242334625822.jpg"
    },  {
      nome:"Olympea - EAU DE PARFUM",
      preco:" R$ 244,80",
      descricao:"Baunilha salgada cativante. Água de jasmim e flor de gengibre envoltas em madeira de Caxemira. Efeito carnal poderoso.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/haa/hc6/9251806871582/9251806871582.jpg"
    },  {
      nome:"Olympea Aqua - EAU DE PARFUM",
      preco:"R$ 270,90",
      descricao:"Olympéa Aqua Eau de Parfum de Paco Rabanne é uma fragrância viciante de uma deusa iluminada, com notas refrescantes, baunilha salgada, água de jasmim e cítricos",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/he7/h9e/9242372669470/9242372669470.jpg"
    },  {
      nome:"Olympéa Blossom - EAU DE PARFUM",
      preco:"R$ 472,50",
      descricao:"A nova criação de Paco Rabanne, Olympéa Blossom Eau de parfum feminino. Um perfume floral frutado, símbolo de feminilidade inesperada.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h51/h86/9242424999966/9242424999966.jpg"
    },  {
      nome:"Olympea Intense - EAU DE PARFUM",
      preco:"R$ 266,90",
      descricao:"Olympéa no ápice, carnal ao extremo. Uma fragrância de baunilha salgada mesclada com âmbar.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h16/h1c/9242369785886/9242369785886.jpg"
    },  {
      nome:"Olympea Legend - EAU DE PARFUM",
      preco:"R$ 271,00",
      descricao:"Olympéa Legend. Deusa absoluta. Rainha em seu zênite. Aroma oriental com uma combinação harmoniosa de ameixa salgada e baunilha, absolutamente divino! O duelo acontece entre a intensidade floral e o vício. Flor do deserto amena, com areia âmbar. Exuberância fresca, com um toque de sol. ",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hb2/h1f/9251811098654/9251811098654.jpg"
    },  {
      nome:"OLYMPÉA ONYX COLLECTOR - EAU DE PARFUM",
      preco:"R$ 423,70",
      descricao:"Uma pedra que faz parte da lenda. Poder irradiante de Onyx, energia divina, perfume intenso. ",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h55/hab/9242195558430/9242195558430.png"
    },  {
      nome:"Olympéa - LOÇÃO CORPORAL",
      preco:"R$ 127,90",
      descricao:"A loção corporal Olympéa combina delicadeza e um aroma sutil para purificar a sua pele. Esse creme corporal hidrata a pele com um perfume Oriental e notas de baunilha salgada e âmbar gris afrodisíaco para entregar um perfume duradouro e divino.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/he8/h9a/9242071334942/9242071334942.jpg"
    },  {
      nome:"Olympéa -GEL DE BANHO",
      preco:"R$ 60,00",
      descricao:"O gel de banho Olympéa envolve o corpo em uma fragrância oriental muito refrescante. Um gel de banho perfumado com um aroma duradouro e afrodisíaco, que deixa a pele macia e deliciosamente perfumada.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hc6/hb5/9242075430942/9242075430942.jpg"
    },  {
      nome:"Invictus Legend - EAU DE PARFUM",
      preco:"R$ 431,00",
      descricao:"Deserto ardente, comboio selvagem, o desafio final. Um duelo ao sol entre a adrenalina fresca e um tornado de madeira quente. Um cheiro perfumado de vitória. Invictus Legend.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/he0/hb1/9252024614942/9252024614942.jpg"
    },  {
      nome:"Invictus Victory - EAU DE PARFUM",
      preco:"R$ 381,65",
      descricao:"Nesse duelo intenso, duas forças se enfrentam: refrescância e sensualidade. O perfume masculino Paco Rabanne sublima duas associações exclusivas, garantindo uma fragrância de longa duração.",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h29/h19/9242427555870/9242427555870.jpg"
    },  {
      nome:"Invictus - EAU DE TOILETTE",
      preco:"R$ 377,10",
      descricao:"Invictus, Eau de Toilette masculino de Paco Rabanne. O perfume da vitória com frescor selvagem e sensualidade animal. Experimente essa refrescância heróica e amadeirada",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/hc7/h17/9252020256798/9252020256798.jpg"
    },  {
      nome:"Invictus Aqua - EAU DE TOILETTE",
      preco:"R$ 479,22",
      descricao:"A coroação de um herói diante do poder da água. O perfume Invictus Aqua é uma fragrância com frescor colossal e inafundável. Um mergulho no abismo do surfe em madeiras sensuais.",
      img:"https://www.giraofertas.com.br/wp-content/uploads/2018/06/Perfume_Invictus_Aqua_Paco_Rabanne_02-510x510.jpg"
    }, 
    {
      nome:"Dandy me - EAU DE PARFUM",
      preco:"R$ 180,33",
      descricao:"Distinta e excêntrica, a fragrância é uma mistura unissex de rosa e gerânio que emana um buquê poderoso e multifacetado. As notas de saída de toranja criam uma opulência ensolarada, que a majestosa rosa centifolia reforça com sofisticação e elegância. ",
      img:"https://www.pacorabanne.com/cdn-cgi/image/fit=contain,width=1400,quality=90/medias/sys_master/images/images/h32/h49/9251860643870/9251860643870.jpg"
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
