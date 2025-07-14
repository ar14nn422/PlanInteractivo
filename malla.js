const malla = [
  [
    { numero: 1, codigo: 'EIF200', nombre: 'Fundamentos de Informática', creditos: 3 },
    { numero: 2, codigo: 'MAT030', nombre: 'Matemática para Informática', creditos: 4 },
    { numero: 3, codigo: 'LIX410', nombre: 'Inglés Integrado I', creditos: 4 },
    { numero:4, codigo:'EG', nombre:'Estudios Generales', creditos:3},
    { numero:5, codigo:'EG', nombre:'Estudios Generales', creditos:3}
  ],
  [
    { numero: 6, codigo: 'EIF201', nombre: 'Programación I', creditos: 4, requisitos: ['EIF200','MAT030'] },
    { numero: 7, codigo: 'MAT002', nombre: 'Calculo I', creditos: 4, requisitos: ['MAT030'] },
    { numero: 8, codigo: 'LIX411', nombre: 'Inglés Integrado II', creditos: 4,requisitos:['LIX410'] },
    { numero:9, codigo:'EG', nombre:'Estudios Generales', creditos:3},
    { numero:10, codigo:'EG', nombre:'Estudios Generales', creditos:3}
  ],
  [
    { numero: 11, codigo: 'EIF204', nombre: 'Programación II', creditos: 4, requisitos: ['EIF201'] },
    { numero: 12, codigo: 'EIF203', nombre: 'Estructuras Discretas', creditos: 3,requisitos:['EIF200','MAT030'] },
    { numero: 13, codigo: 'EIF202', nombre: 'Soporte Técnico', creditos: 3, requisitos: ['EIF200'] },
    { numero: 14, codigo: 'MAT005', nombre: 'Álgebra Lineal', creditos: 4, requisitos: ['MAT002'] },
    { numero: 15, codigo: 'LIX412', nombre: 'Inglés Integrado III', creditos: 4, requisitos: ['LIX411'] },
  ],
  [
    { numero: 16, codigo: 'EIF206', nombre: 'Programación III', creditos: 4, requisitos: ['EIF204','MAT002'] },
    { numero: 17, codigo: 'EIF207', nombre: 'Estructuras de Datos', creditos: 4,requisitos:['EIF203','EIF204'] },
    { numero: 18, codigo: 'EIF205', nombre: 'Arquitectura de Computadoras', creditos: 3, requisitos: ['EIF201','EIF202'] },
    { numero: 19, codigo: 'EIF404', nombre: 'La Organización y su Entorno', creditos: 3, requisitos: ['EIF201'] },
    { numero: 20, codigo: 'MAT006', nombre: 'Probabilidad y Estadística para Informática', creditos: 3, requisitos: ['MAT002','EIF203'] },
    
  ],
    [
    { numero: 21, codigo: 'EIF209', nombre: 'Programación IV', creditos: 4, requisitos: ['EIF206'] },
    { numero: 22, codigo: 'EIF211', nombre: 'Diseño e Implementación de Bases de Datos', creditos: 4,requisitos:['EIF206','EIF207'] },
    { numero: 23, codigo: 'EIF210', nombre: 'Ingeniería en Sistemas I', creditos: 4, requisitos: ['EIF206'] },
    { numero: 24, codigo: 'EIF212', nombre: 'Sistemas Operativos', creditos: 3, requisitos: ['EIF204','EIF205'] },
    { numero: 25, codigo: 'EIF208', nombre: 'Comunicaciones y Redes de Computadores', creditos: 3, requisitos: ['EIF205'] },
    
  ],  
  [
    { numero: 26, codigo: 'EIF400', nombre: 'Paradigmas de Programación', creditos: 4, requisitos: ['EIF206'] },
    { numero: 27, codigo: 'EIF401', nombre: 'Ingeniería en Sistemas II', creditos: 4,requisitos:['EIF210'] },
    { numero: 28, codigo: 'EIF402', nombre: 'Administración de Bases de Datos', creditos: 4, requisitos: ['EIF212','EIF211'] },
    { numero: 29, codigo: 'EIF407', nombre: 'Liderazgo y Organización', creditos: 3, requisitos: ['EIF404'] },
    { numero: 30, codigo: 'EIF412', nombre: 'Investigación de Operaciones y sus Aplicaciones', creditos: 3, requisitos: ['EIF206','MAT005','MAT006'] },
    
  ],
  [
    { numero: 31, codigo: 'EIF406', nombre: 'Ingeniería en Sistemas III', creditos: 4, requisitos: ['EIF401'] },
    { numero: 32, codigo: 'EIF411', nombre: 'Diseño y Programación de PLataformas Móviles', creditos: 4,requisitos:['EIF209'] },
    { numero: 33, codigo: 'EIF413', nombre: 'Métodos de Investigación Científica en Informática', creditos: 3, requisitos: ['MAT006'] },
    { numero: 34, codigo: 'EIF', nombre: 'Optativa', creditos: 3 },
    { numero: 35, codigo: 'EIF', nombre: 'Optativa', creditos: 3},
    
  ],
  [
    { numero: 36, codigo: 'EIF408', nombre: 'Proyectos y su Aplicación en la Organización', creditos: 5, requisitos: ['EIF209','EIF401','EIF402'] },
    { numero: 37, codigo: 'EIF409', nombre: 'Aplicaciones Informáticas Globales', creditos: 4,requisitos:['EIF209','EIF401','EIF402'] },
    { numero: 38, codigo: 'EIF410', nombre: 'Informática y Sociedad', creditos: 2, requisitos: ['EIF401'] },
    { numero: 39, codigo: 'EIF', nombre: 'Optativa', creditos: 3 },
    { numero: 40, codigo: 'EIF', nombre: 'Optativa', creditos: 3},
    
  ],
];



