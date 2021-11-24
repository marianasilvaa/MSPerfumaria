import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avon',
  templateUrl: './avon.component.html',
  styleUrls: ['./avon.component.css']
})
export class AvonComponent implements OnInit {

  produtos:any = [
    {
      nome:"Petit Attitude Libellule Desodorante Colônia - 50ml",
      preco:"R$ 31,99",
      descricao:"Petit Libellule é uma fragrância floral adocicada, feita para meninas delicadas e determinadas, que espalham alegria pelo mundo. Uma combinação da suculência da Framboesa Fresh Delight, com o Caramelo Amanteigado e a singularidade do aroma do Algodão-Doce. Com Petit, os sonhos de menina vivem para sempre.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/172521-470-470/Petit_Libellule_Deo_Colnia_50m_597.jpg?v=637643057867570000"
    },  {
      nome:"Pur Blanca My Essence Desodorante Colônia - 75ml",
      preco:"R$ 45,99",
      descricao:"Mais que uma fragrância, um convite. Com uma combinação radiante da gardênia-amarela com a exuberância da peônia-rosa e a suavidade da madeira, Pur Blanca My Essence te convida a entrar em contato com a sua essência e revelar a sua beleza interior.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/167769-470-470/Deo_Colnia_Pur_Blanca_My_Essen_512.jpg?v=637420973858930000"
    },  {
      nome:"Far Away Original Deo Parfum - 50ml",
      preco:"R$ 69,90",
      descricao:"Até onde o luxo pode te levar? Far Away Original apresenta uma combinação requintada da Flor de Maracujá, Âmbar e Baunilha de Madagascar, ingrediante que marca a linha.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/163988-470-470/Deo_Parfurm_Far_Away__50ml_588.jpg?v=637230734818070000"
    },  {
      nome:"Segno Eau de Parfum - 100 ml",
      preco:"R$ 89,90",
      descricao:"Uma fragrância que redefine o significado de poder para homens modernos, onde generosidade, empatia e influência são fundamentais.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161072-470-470/Segno_Eau_de_Parfum_100_ml_889.jpg?v=637146017039630000"
    },  {
      nome:"Surreal Utopia - 75 ml",
      preco:"R$ 54,90",
      descricao:"Utopia é um lugar imaginário onde tudo é perfeito, onde sonhos são reais e as possibilidades são ilimitadas pela sua imaginação.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/162114-470-470/Surreal_Utopia_75_ml_559.jpg?v=637157440273570000"
    },  {
      nome:"Far Away Glamour Deo Parfum - 50ml",
      preco:"R$ 59,90",
      descricao:"Embarque em uma jornada glamourosa com Far Away Glamour e revele o seu lado mais luxuoso.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/163095-470-470/Perfume_FarAway_Capa.jpg?v=637194385942400000"
    },  {
      nome:"Herstory Eau de Parfum - 50ml",
      preco:"R$ 62,90",
      descricao:"Uma fragrância poderosa e feminina pensada especialmente para heroínas contemporâneas. ",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/162996-470-470/Herstory_Eau_de_Parfum__50ml_93.jpg?v=637190933743770000"
    },  {
      nome:"Mulher & Poesia Morena Flor - 50ml",
      preco:"R$ 62,90",
      descricao:"Inspirada nos poemas de Vinícius de Moraes, uma fragrâncias que combina as notas cítricas da Laranja Amarga com a feminilidade do Jasmim e a doce sensualidade da Baunilha.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/164387/Mulher__Poesia_Morena_Flor__50_919.jpg?v=637248050269070000?v=637248050269070000"
    },  {
      nome:"Black Essential Intense Deo Colônia - 100ml",
      preco:"R$ 56,90",
      descricao:"A noite cai e é hora de aproveitar o clima de sedução. Seduza os sentidos com a combinação de Pimenta Preta, Madeiras e o exclusivo Acorde Intense.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/162420-470-470/Black_Essential_Intense__100ml_818.jpg?v=637175479944270000"
    },  {
      nome:"Pur Blanca Deo Colônia 75ml",
      preco:"R$ 33,99",
      descricao:"Viva a experiência de estar em harmonia com o mundo ao seu redor com uma combinação de freesia, peônia branca e madeira de sândalo. Aproveite as coisas simples da vida.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/172717-470-470/1457049.jpg?v=637655212185270000"
    },  {
      nome:"Aquavibe Refrescantes Baby Smell 300ml",
      preco:"R$ 18,99",
      descricao:"Um banho de frescor e perfume. Para o seu dia começar e acabar feliz! Por que ter uma só, se você pode ter todas?",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161817-470-470/Refrescantes_Aquavibe_Baby_Sme_753.jpg?v=637146051082130000"
    },  {
      nome:"Avon Homem Active - 200ml",
      preco:"R$ 18,99",
      descricao:"Avon Homem Active é uma fragrância leve e de uso diário que prolonga o frescor do pós banho e proporciona uma agradável sensação de bem-estar. ",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161880-470-470/Colonia_Desodorante_Avon_Homem_455.jpg?v=637146053060700000"
    },  {
      nome:"Luiza By Luiza Brunet Deo Parfum - 100ml",
      preco:"R$ 58,90",
      descricao:"Com ingredientes nobres selecionados, Luiza by Luiza Brunet é uma fragrância pensada para a mulher que não cabe em rótulos",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161042-470-470/Luiza_By_Luiza_Brunet_100ml_313.jpg?v=637146016358400000"
    },  {
      nome:"Cristal Toque de Amor Colônia Desodorante - 115ml",
      preco:"R$ 23,99",
      descricao:"Conheça todo o charme e encanto de um cristal refletido em uma coleção de colônias clássicas e luxuosas.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161426-470-470/Perfume_Cristal_Toque_de_Amor__192.jpg?v=637146036960200000"
    },  {
      nome:"Musk+ Marine Deo Colônia - 75ml",
      preco:"R$ 43,99",
      descricao:"Uma fragrância refrescante que evoca as sensações de energia e pureza do mar. Com notas cítricas e aromáticas de Menta e Bergamota, combinadas com nuances amadeirada da Violeta e do Âmbar, Musk+ Marine ta convida a sentir a superfície da água aliada ao poder incontrolável do oceano.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/167766-470-470/Deo_Colnia_Musk_Marine__75ml_682.jpg?v=637420973744530000"
    },  {
      nome:"Incandessence Enjoy Eau de Parfum - 50 ml",
      preco:"R$ 74,90",
      descricao:"Espalhe seu brilho e deixe sua energia irradiar. Com alegres notas florais que inspiram positividade, Incandessence Enjoy combina um gracioso acorde de Girassol e Gardênia com Mandarina Italiana e Sândalo. Ilumine e vivencie todas as experiências com pura alegria.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/166309-470-470/Eau_de_Parfum_Incandessence_En_73.jpg?v=637371616365800000"
    },  {
      nome:"300km/h Max Turbo Deo Colônia - 100ml",
      preco:"R$ 65,90",
      descricao:"Uma fragrância turbinada para o homem que vive intensamente, ultrapassando todas as barreiras e se aventurando em uma vida sem limites. ",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/171526-470-470/300kmh_Max_Turbo__100ml_562.jpg?v=637586793888100000"
    },  {
      nome:"Absolute by Exclusive - 50ml",
      preco:"R$ 64,90",
      descricao:"Absolute by Exclusive é feito para o homem que luta por mais. Descubra a pura sofisticação com uma explosão fresca de Limão Italiano, combinadas à luxuosa qualidade amadeirada dos Acordes de Ambermax e intensificada por ricas notas de Oud Wood, um dos ingredientes mais raros e exclusivos, conhecido como o ouro líquido da perfumaria.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/166247-470-470/Absolute_by_Exclusive__50ml_724.jpg?v=637369234566770000"
    },  {
      nome:"Luiza Brunet Intensa Deo Parfum - 100ml",
      preco:"R$ 59,90",
      descricao:"Intensa. Na personalidade, beleza, no estilo e na sua força feminina. Revele a sua intensidade com Luiza Brunet Intensa, uma fragrância adocicada floral que combina o frescor delicioso da Mandarina com as notas sensuais e esfumadas de Gergelim Torrado e a sofisticação amadeirada do Mousse de Saxe de Laire.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/165410-470-470/1358076.jpg?v=637311105059900000"
    }, 
    {
      nome:"Exclusive In Black - 75ml",
      preco:"R$  69,90",
      descricao:"Exclusive in Black traz o elegante e exclusivo Acorde de Vetiver Negro, combinado com a madeira e as Notas Marinhas e de Lavanda que trazem frescor e reforçam a singularidade desta fragrância. Intensifique sua sofisticação e desfrute de uma noite extraordinária.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/164344-470-470/Exclusive_In_Black__75ml_932.jpg?v=637248029543170000"
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
