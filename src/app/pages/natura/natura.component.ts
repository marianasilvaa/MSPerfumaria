import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natura',
  templateUrl: './natura.component.html',
  styleUrls: ['./natura.component.css']
})
export class NaturaComponent implements OnInit {

  produtos:any = [
    {
      nome:"Mamãe e Bebê Água de Colônia",
      preco:"R$ 47,90",
      descricao:"Fórmula 100% segura para ser usada desde o primeiro dia de vida, testada e aprovada por pediatras.",
      img:"https://static.natura.com/cdn/ff/n-te0s9RXLimv1WMVAVxDguz7fEG0A5gW1Tt2a2xYwU/1635686141/public/styles/medium/public/products/92786_1_3.jpg?itok=Kp2vQqGd"
    },  {
      nome:"Essencial Deo Parfum Masculino",
      preco:"R$ 119,90",
      descricao:"Uma fragrância que combina a potência das madeiras mais nobres da perfumaria com o frescor das notas verdes. Composição sofisticada e intensa, um clássico da perfumaria.",
      img:"https://static.natura.com/cdn/ff/cS1IbjbdBLo499r1AqUTnjfiyEziw56F-xk7tE4oQGM/1635563336/public/styles/medium/public/products/76420_2_19.jpg?itok=LE4YSNBN"
    },  {
      nome:"Essencial Exclusivo Deo Parfum Feminino",
      preco:"R$ 119,90",
      descricao:"Envolvente buque floral de rosa, fresia e magnólia ganha ainda mais personalidade e elegância com as notas de cassis e mandarina.",
      img:"https://static.natura.com/cdn/ff/ZgW6l5GzeK6jd5M3Kq8yPaqHW_AuE-jHS0EJcx5x23s/1620754300/public/2021-05/76423_beneficios.jpg"
    },  {
      nome:"Segno Eau de Parfum - 100 ml",
      preco:"R$ 89,90",
      descricao:"Uma fragrância que redefine o significado de poder para homens modernos, onde generosidade, empatia e influência são fundamentais.",
      img:"https://avongroup.vteximg.com.br/arquivos/ids/161072-470-470/Segno_Eau_de_Parfum_100_ml_889.jpg?v=637146017039630000"
    },  {
      nome:"Presente Natura Luna",
      preco:"R$ 129,90",
      descricao:"Presente encantador numa das fragrâncias favoritas da Natura. Ideal para um momento de cuidado e hidratação na mesma fragrância da colônia.",
      img:"https://static.natura.com/cdn/ff/0QLQ2Yhos6NThaLGxefuukHfMXB-z07H02uOBeK6CP8/1635686142/public/styles/medium/public/products/107565_1_8.jpg?itok=dS83A0Fu"
    },  {
      nome:"Presente Natura Kaiak",
      preco:"R$ 144,90",
      descricao:"Através da fragrância aromática moderada e hiperaquática de Kaiak, este presente transporta para o banho e para a vida a sensação de liberdade e frescor de uma onda do mar.",
      img:"https://static.natura.com/cdn/ff/fYGE6y1md2C42WIAQY56ErFZAJONetgOc5-DsEoTEDE/1635686025/public/styles/medium/public/products/107710_1_2.jpg?itok=Jy6MuO0_"
    },  {
      nome:"Natura Homem Cor.agio Deo Parfum",
      preco:"R$ 143,90",
      descricao:"É o arrepio na pele das notas metálicas de especiarias frias e o calor da madeira de Copaíba e do Cumaru, ingredientes da biodiversidade brasileira. ",
      img:"https://static.natura.com/cdn/ff/DlgJ_jGrqHAdDsOBXq-J-Jn9W9l4_w3NDvSuUKUz31M/1635686147/public/styles/medium/public/products/89834_1_3.jpg?itok=t4IBbDl9"
    },  {
      nome:"Tododia Tâmara e Canela Body Splash Desodorante Colônia Feminino",
      preco:"R$ 54,90",
      descricao:"Desperte seus sentidos com o Creme para o Corpo Tododia. Tâmara e Canela, fragrância amadeirada, atraente e marcante.",
      img:"https://fimgs.net/mdimg/perfume/375x500.61178.jpg"
    },  {
      nome:"Sintonia Impacto Desodorante Colônia",
      preco:"R$ 134,90",
      descricao:"Sintonia Impacto é para o homem que sai em busca de sua melhor versão e causa impacto em todos no caminho.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/71773_1_11.jpg?itok=2ueY4QX0"
    },  {
      nome:"Água de Colônia Relaxante Mamãe e Bebê MAMÃE E BEBÊ",
      preco:"R$ 74,90",
      descricao:"A Água de Colônia Relaxante Mamãe e Bebê tem cheirinho de amor, carinho e cuidado. ",
      img:"https://static.natura.com/cdn/ff/J6xYU3661kdtleQIls40XtCKu19PMEetjFZ0XPobAcs/1635606025/public/styles/medium/public/products/92788_2_14.jpg?itok=G6R_30Qg"
    },  {
      nome:"Humor On-line Desodorante Colônia Feminino",
      preco:"R$ 109,90",
      descricao:"Uma fragrância inovadora que combina notas frutais e cítricas para celebrar a vida e extravasar o humor.",
      img:"https://static.natura.com/cdn/ff/oBsgk6hirAxwHJJYL4VRkpAl5cIBaF0OS5uYNwbngws/1635690426/public/styles/medium/public/products/100148_1_14.jpg?itok=NRrfzFKn"
    },  {
      nome:"Natura Homem Dom Deo Parfum",
      preco:"R$ 109,90",
      descricao:"Um blend de ingredientes contrastantes que se complementam perfeitamente: potência e suavidade com fortaleza e doçura.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/71770_1_2.jpg?itok=NDIzDS0T"
    },  {
      nome:"Biografia Assinatura Desodorante Colônia Feminino",
      preco:"R$ 89,90",
      descricao:"Biografia nasceu para celebrar a história mais importante que existe: a sua. Uma história que contém mil histórias,que combina passado, presente e futuro.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/71602_2_9.jpg?itok=KHkuemhr"
    },  {
      nome:"Ekos Frescor Maracujá Desodorante Colônia Feminino",
      preco:"R$ 59,90",
      descricao:"De uma Amazônia fresca e inesperada, criamos nossos Ekos Frescores. Frutal leve traz o azedinho doce do maracujácom o conforto do musk. Enriquecido com extrato aromático 100% natural das sementes do maracujá.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/73564_2_3.jpg?itok=7F1qcdRo"
    },  {
      nome:"Águas Lírio Desodorante Colônia",
      preco:"R$ 69,90",
      descricao:"Natura Águas é um convite para viver de um jeito espontâneo, fluido, de bem com o mundo.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/95646_1_2.jpg?itok=iIEWL2p_"
    },  {
      nome:"Biografia Assinatura Desodorante Colônia Masculino",
      preco:"R$ 89,90",
      descricao:"Biografia nasceu para celebrar a história mais importante que existe: a sua. Uma história que contém mil histórias, que combina passado, presente e futuro.",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/71603_2_13.jpg?itok=tetkgPVx"
    },  {
      nome:"https://static.natura.com/sites/default/files/styles/medium/public/products/76424_2_13.jpg?itok=DFc6w2uh",
      preco:"R$ 196,00",
      descricao:"A imponência do oud, madeira mais nobre do mundo, com a sensualidade da copaíba, uma madeira da biodiversidade brasileira, realçadas com um toque exótico de especiarias. Instiga ao mesmo tempo que conquista. ",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/76424_2_13.jpg?itok=DFc6w2uh"
    },  {
      nome:"Kriska Delírio Desodorante Colônia Feminino",
      preco:"R$ 79,90",
      descricao:"Encantadora e inesquecível. O inesperado contraste da pipoca caramelizada se une a uma deliciosa combinação de creme de baunilha, envolvidos por um toque único da calda de cumaru, ingrediente da biodiversidade amazônica. Kriska Delírio, uma fragrância irresistível.",
      img:"https://static.natura.com/cdn/ff/MP73u4gO3h4ziJeRRz9Vpr7GC7XdwdFB1ZpVeNAZlIY/1635562765/public/styles/medium/public/products/713_2_12.jpg?itok=Uyx2Ye1Y"
    },  {
      nome:"Ilía Ser Deo Parfum",
      preco:"R$ 99,90",
      descricao:"Uma fragrância que une um elegante buquê floral branco, envolvido por notas ambaradas, a uma poderosa combinação da vanilla clássica da perfumaria mundial e a exclusiva vanilla bahiana, ingrediente da biodiversidade brasileira.",
      img:"https://static.natura.com/cdn/ff/ZZW2Us2MeByq3kmQfXJ2M08SOpiMZk4eMblnOBd8-fE/1635563242/public/styles/medium/public/products/102419_1_8.jpg?itok=S4mQUaDA"
    }, 
    {
      nome:"Combo Beijo de Humor Feminino + Elixir",
      preco:"R$ 99,90",
      descricao:"Testada e comprovada pela Neurociência*, a fragrância Beijo de Humor Feminino desperta a atração e convida a viver momentos cheios de amor e humor. E para dar aquela ajuda a ficar juntinho do seu crush, a linha traz também o exclusivo Elixir Humor + Beijo",
      img:"https://static.natura.com/sites/default/files/styles/medium/public/products/19127_1_3.jpg?itok=-dUJ5vZT"
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
