export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  images: string[]; // Nuevo arreglo de imágenes para el post individual
  date: string;
  publish: string; // Nuevo campo en formato DD-MM-YYYY
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  introductionTitle: string;
  introductionContent: string[];
  contextTitle: string;
  contextContent: string[];
  videoYoutube: string[];
  videoLocal: string[];
  imagenContenido: string[];
  audioContenido: string[];
  textoSecundario: string[];
  socialLinkFace: string[];
  socialLinkInsta: string[];
  socialLinkX: string[];
  linkDocumento: string[];
  nombreBoton: string[];
  quote: string;
  quoteAuthor: string;
  conclusionTitle: string;
  conclusionContent: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'Laboratorio CompartirES PopularES',
    title: 'Laboratorio CompartirES PopularES',
    subtitle: 'Experiencia de coproducción y apropiación social del conocimiento',
    image: 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg',
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg'
    ],
    date: '17 de Marzo de 2026',
    publish: '17-03-2026',
    author: 'Grupo MASO',
    category: 'apropiación social del conocimiento, cultura, barrio',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Territorio', 'Urbanismo'],
    introductionTitle: 'Introducción',
    introductionContent: [
      'El laboratorio “Compartir-es Popular-es”, tiene como pilar los conocimientos teóricos y metodológicos generados en la investigación “Transformación en favelas de Río de Janeiro y barrios populares de Medellín por prácticas de turismo 2019-25372”, culminada en 2022, registrada en SIIU y financiada por la Universidad de Antioquia, El Banco de la República, sede Medellín, El Sistema de Bibliotecas Públicas de Medellín y diversos colectivos comunitarios de las comunas 1 (Popular), 2 (Santa Cruz), 8 (Doce de Octubre) y 13 (San Javier).'
    ],
    contextTitle: 'Descripción',
    contextContent: ['Dada la realidad de una creciente actividad turística en la ciudad y en el país, es menester que la UdeA como universidad pública continúe promoviendo y fortaleciendo espacios para el diálogo, la coproducción y la apropiación de conocimientos de utilidad social que, en este caso, enfoca en las consecuencias extractivistas del turismo en barrios populares de Medellín. En razón de lo anterior, con el laboratorio se da continuidad al principio ético de la investigación culminada, asociado con la generación de un conocimiento contextualizado, intencionado y participativo derivado del diálogo de saberes entre actores del sector académico, barrial y gubernamental.',
      'Con estos productos -videoclip, mural-postal, artículo periodístico y fanzine- se aporta al campo urbano-popular con contenidos divulgativos y de apropiación social del conocimiento. El objetivo del laboratorio “Compartir-es Popular-es” es diseñar, recrear y difundir tales productos en formatos comunicativos y artísticos para el cuidado y protección barrial como expresión de paz territorial. Su importancia radica en que contiene productos individuales que, vistos en conjunto, sirven como dispositivo cultural para que ciudadanía y visitantes ganen conciencia sobre las implicaciones de las contradicciones del turismo en el cotidiano de los barrios populares. Además de importante, es potente dado que los contenidos, los formatos, los públicos objetivo, las estrategias de socialización y los alcances intencionados en cada producto acuden a creaciones gráficas, musicales, de lectura, escritura y oralidad para comunicar, sensibilizar y promover la juntanza.'

    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ['https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg', 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/WhatsApp%20Image%202026-01-28%20at%2012.33.38%20PM.jpeg','https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg','https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/FotoMuralSantoDom.jpeg'],
    textoSecundario: ['El impacto estuvo dirigido a niños y niñas de la comuna 1 del barrio Carpinelo participantes de la biblioteca comunitaria Bibliocielo y, como hallazgo emergente, al semillero ambiental Semilla Somos del barrio Bello Oriente de la Comuna 3; habitantes del barrio Santo Domingo y usuarios del Parque Biblioteca Nororiental (Comuna 1); niños, niñas y jóvenes del barrio La Sierra; lectores del periódico comunitario Mi Comuna 2.  Los resultados obtenidos con la puesta en marcha de este fondo fueron la realización participativa de 4 productos divulgativos en formatos diversos y cercanos, el fortalecimiento de antiguos vínculos de colaboración y generación de nuevas redes que expande el impacto de la acción investigativa y de extensión de la universidad a través del grupo MASO.','Se despliegan a su vez otros resultados cualitativos en los participantes que contribuyen a la construcción y apropiación del territorio para la promoción de estrategias colectivas que promueven la paz y el buen vivir. A su vez los aprendizajes de este proceso fueron múltiples para los diferentes actores participantes: universidad, institucionalidad, a través del Sistema de Bibliotecas Públicas de Medellín y para habitantes de barrios populares de Medellín.','La ejecución de este Fondo como un proceso de divulgación co-construido para la divulgación del conocimiento apropiado y reapropiado contribuyó con la democratización del conocimiento científico.  '
     ],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ['https://popular-esmedellin.com/pages/proyecto-2022-compartires-populares.html'],
    nombreBoton: ['Conoce más'],
    quote: '',
    quoteAuthor: '',
    conclusionTitle: 'Conclusión',
    conclusionContent: []

  },
  {
    id: 2,
    slug: 'Tramas urbanas al revés',
    title: 'Tramas urbanas al revés',
    subtitle: 'Intercambios entre políticas públicas, prácticas de turismo y participación social en barrios populares de Medellín y favelas de Río de Janeiro en el siglo XXI',
    image: 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/tramas-urbanas-al-reves.webp',
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/Lanzamiento%20LibroUniversidad%20FederaldeRiodeJaneiro%202026-01-28.jpeg'

    ],
    date: '2 de Marzo de 2026',
    publish: '02-03-2026',
    author: 'Grupo MASO',
    category: 'Transformaciones urbanas, Barrios populares, Turismo comunitario, Patrimonio popular, Turistificación, Mercantilización urbana',
    readTime: '4 min',
    tags: ['Transformaciones urbanas', 'Barrios populares', 'Turismo comunitario', 'Patrimonio popular', 'Turistificación', 'Mercantilización urbana'],
    introductionTitle: 'Introducción',
    introductionContent: [
      'Este libro examina críticamente las transformaciones urbanas recientes en barrios populares de Medellín (Colombia) y favelas de Río de Janeiro (Brasil), analizando los impactos entrecruzados de políticas públicas, prácticas turísticas y participación social en estos territorios. A través de un enfoque sur-sur, la obra revela cómo discursos institucionales que promueven el derecho a la ciudad conviven con procesos de mercantilización, turistificación y desigualdad socioespacial.'
    ],
    contextTitle: '',
    contextContent: [
      'El texto es fruto de un trabajo colaborativo entre universidades públicas, colectivos comunitarios e instituciones gubernamentales de ambos países, que desde la investigación, la intervención y la docencia analizaron la apropiación del espacio urbano por parte de actores locales y las tensiones generadas por el turismo en contextos populares. Los estudios de caso incluyen comunas populares de Medellín y favelas como Cantagalo, Pavão-Pavãozinho y Santa Marta en Río de Janeiro.',
       'Organizado en cuatro partes (teórica, contextual, experiencial y propositiva), el libro ofrece una mirada interdisciplinaria que vincula estudios urbanos, turismo comunitario, patrimonio popular y apropiación social del conocimiento. Se plantea una crítica al modelo de desarrollo urbano neoliberal y se destacan alternativas comunitarias que luchan por salvaguardar memorias, fortalecer identidades barriales y promover una justicia cognitiva desde los márgenes. Tramas urbanas al revés propone así una relectura de las dinámicas urbanas contemporáneas y abre un diálogo plural entre habitantes y visitantes, academia y comunidad, memoria y presente.'
    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ['https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/tramas-urbanas-al-reves.webp','https://raw.githubusercontent.com/satelite30/-logossitio/main/imagenesprom/DSC_9326-1.png'],
    textoSecundario: ['Liliana María Sánchez Mazo, Universidad de Antioquia, Colombia Doctora en Arquitectura y Urbanismo por la Universidade de São Paulo-Brasil. Profesora Titular de la Universidad de Antioquia, adscrita al Departamento de Trabajo Social de la Facultad de Ciencias Sociales y Humanas. Investigadora del grupo Medio Ambiente y Sociedad, línea Planeación, Ciudadanía y Territorio.', 'Sergio Moraes Rego Fagerlande, Universidade Federal do Rio de Janeiro, Brazil Doctor en Urbanismo por la Universidade Federal do Rio de Janeiro (UFRJ), posdoctor en Urbanismo, UFRJ, y en Urbanismo por École d’Urbanisme de Paris. Profesor adjunto de la Faculdade de Arquitetura e Urbanismo, UFRJ, y profesor del programa de Pós-graduação em Urbanismo (PROURB) de la misma universidad. Investigador en el Laboratório de Estudos e Pesquisas em Cidades, programa de Pós-graduação em Urbanismo (PROURB/FAU-UFRJ).', 'Luiz Alexandre Lellis Mees, Universidade Federal do Estado do Rio de Janeiro, Brazil Doctor en Antropología por la Universidade Federal Fluminense. Profesor del Departamento de Turismo y Patrimonio de la Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Investigador de los grupos Turismo e Geograficidades, UNIRIO, y Laborátorio de Estudos de Memória Brasileira e Representação (LEMBRAR) de la misma universidad.'],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ['https://libros.udea.edu.co/index.php/editorial_fcsh/catalog/book/663'],
    nombreBoton: ['Conoce más'],
    quote: '',
    quoteAuthor: 'Grupo MASO',
    conclusionTitle: 'Autores',
    conclusionContent: []
  },

  {
    id: 3,
    slug: 'Laboratorio CompartirES PopularES',
    title: 'Laboratorio CompartirES PopularES',
    subtitle: 'Experiencia de coproducción y apropiación social del conocimiento',
    image: 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg',
    images: [
      'https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg'
    ],
    date: '17 de Marzo de 2026',
    publish: '17-03-2026',
    author: 'Grupo MASO',
    category: 'apropiación social del conocimiento, cultura, barrio',
    readTime: '4 min',
    tags: ['Memoria', 'Participación', 'Territorio', 'Urbanismo'],
    introductionTitle: 'Introducción',
    introductionContent: [
      'El laboratorio “Compartir-es Popular-es”, tiene como pilar los conocimientos teóricos y metodológicos generados en la investigación “Transformación en favelas de Río de Janeiro y barrios populares de Medellín por prácticas de turismo 2019-25372”, culminada en 2022, registrada en SIIU y financiada por la Universidad de Antioquia, El Banco de la República, sede Medellín, El Sistema de Bibliotecas Públicas de Medellín y diversos colectivos comunitarios de las comunas 1 (Popular), 2 (Santa Cruz), 8 (Doce de Octubre) y 13 (San Javier).'
    ],
    contextTitle: 'Descripción',
    contextContent: ['Dada la realidad de una creciente actividad turística en la ciudad y en el país, es menester que la UdeA como universidad pública continúe promoviendo y fortaleciendo espacios para el diálogo, la coproducción y la apropiación de conocimientos de utilidad social que, en este caso, enfoca en las consecuencias extractivistas del turismo en barrios populares de Medellín. En razón de lo anterior, con el laboratorio se da continuidad al principio ético de la investigación culminada, asociado con la generación de un conocimiento contextualizado, intencionado y participativo derivado del diálogo de saberes entre actores del sector académico, barrial y gubernamental.',
      'Con estos productos -videoclip, mural-postal, artículo periodístico y fanzine- se aporta al campo urbano-popular con contenidos divulgativos y de apropiación social del conocimiento. El objetivo del laboratorio “Compartir-es Popular-es” es diseñar, recrear y difundir tales productos en formatos comunicativos y artísticos para el cuidado y protección barrial como expresión de paz territorial. Su importancia radica en que contiene productos individuales que, vistos en conjunto, sirven como dispositivo cultural para que ciudadanía y visitantes ganen conciencia sobre las implicaciones de las contradicciones del turismo en el cotidiano de los barrios populares. Además de importante, es potente dado que los contenidos, los formatos, los públicos objetivo, las estrategias de socialización y los alcances intencionados en cada producto acuden a creaciones gráficas, musicales, de lectura, escritura y oralidad para comunicar, sensibilizar y promover la juntanza.'

    ],
    videoYoutube: [],
    videoLocal: [],
    imagenContenido: ['https://raw.githubusercontent.com/satelite30/blog-Popular-es/refs/heads/main/imagenesBase/mural3.jpeg', 'https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/WhatsApp%20Image%202026-01-28%20at%2012.33.38%20PM.jpeg','https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/imagenesBase/mural1.jpeg','https://raw.githubusercontent.com/satelite30/blog-Popular-es/main/FotoMuralSantoDom.jpeg'],
    textoSecundario: ['El impacto estuvo dirigido a niños y niñas de la comuna 1 del barrio Carpinelo participantes de la biblioteca comunitaria Bibliocielo y, como hallazgo emergente, al semillero ambiental Semilla Somos del barrio Bello Oriente de la Comuna 3; habitantes del barrio Santo Domingo y usuarios del Parque Biblioteca Nororiental (Comuna 1); niños, niñas y jóvenes del barrio La Sierra; lectores del periódico comunitario Mi Comuna 2.  Los resultados obtenidos con la puesta en marcha de este fondo fueron la realización participativa de 4 productos divulgativos en formatos diversos y cercanos, el fortalecimiento de antiguos vínculos de colaboración y generación de nuevas redes que expande el impacto de la acción investigativa y de extensión de la universidad a través del grupo MASO.','Se despliegan a su vez otros resultados cualitativos en los participantes que contribuyen a la construcción y apropiación del territorio para la promoción de estrategias colectivas que promueven la paz y el buen vivir. A su vez los aprendizajes de este proceso fueron múltiples para los diferentes actores participantes: universidad, institucionalidad, a través del Sistema de Bibliotecas Públicas de Medellín y para habitantes de barrios populares de Medellín.','La ejecución de este Fondo como un proceso de divulgación co-construido para la divulgación del conocimiento apropiado y reapropiado contribuyó con la democratización del conocimiento científico.  '
     ],
    audioContenido: [],
    socialLinkFace: [],
    socialLinkInsta: [],
    socialLinkX: [],
    linkDocumento: ['https://popular-esmedellin.com/pages/proyecto-2022-compartires-populares.html'],
    nombreBoton: ['Conoce más'],
    quote: '',
    quoteAuthor: '',
    conclusionTitle: 'Conclusión',
    conclusionContent: []

  }


];



export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}

export function getNextPost(currentId: number): Post {
  const totalPosts = posts.length;
  const nextId = currentId === totalPosts ? 1 : currentId + 1;
  return getPostById(nextId)!;
}

export function getPrevPost(currentId: number): Post {
  const totalPosts = posts.length;
  const prevId = currentId === 1 ? totalPosts : currentId - 1;
  return getPostById(prevId)!;
}

export function getRecommendedPosts(currentId: number): Post[] {
  return posts.filter(post => post.id !== currentId);
}

// Función para generar slug automáticamente a partir del título
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Reemplaza espacios por guiones
    .replace(/[^\w\-]+/g, '')       // Remueve caracteres no alfanuméricos excepto guiones
    .replace(/\-\-+/g, '-')         // Reemplaza múltiples guiones por uno
    .replace(/^-+/, '')             // Remueve guiones al inicio
    .replace(/-+$/, '');            // Remueve guiones al final
}
