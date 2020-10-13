const nombreCliente = 'Ducati';

export const Constantes = {
    periodos: [48, 60, 72, 84],
    minimo: 20000000,
    precioMinimo: 40000000,
    valorMinIngreso: 1200000,
    tasa: 0.0115,
    constanteSeguro: 1220 / 1000000,
     /* Regex */
     patternLetter: "^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$",
     patternNumber: "[0-9]+$",
     patternCel: "^3+[0-9]{0,10}$",
     patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",

     ocupaciones: [
        {value: null, name: 'Tipo de ocupación'},
        {value: 1, name: 'Pensionado'}, /* 15 */
        {value: 11, name: 'Empleado'}, /* 16 */
        {value: 2, name: 'Independiente'} /* 3 */
    ],

    tipoDocumento: [
        {value: null, name: 'Tipo de identificación'},
        {value: 1, name: 'Cédula de Ciudadanía'},
        {value: 2, name: 'Cédula de Extranjería'},
        {value: 3, name: 'NIT'}
    ],

    username: "Ducati",
    password: "Duc@t1*",

    tyc: {
        titulo: `TERMINOS Y CONDICIONES PORTAL ${nombreCliente}`,
        contenido:[
                   `Es requisito indispensable que el solicitante, entendido este como cualquier persona natural o jurídica que acceda al presente Portal (${nombreCliente}) y desee iniciar una solicitud para estudio de viabilidad de financiación de vehículo automotor con Santander Consumer Finance S.A.S (En adelante “Santander Consumer”), entienda y acepte de manera expresa, voluntaria e irrevocable los términos y condiciones que a continuación se indican:`,
                   "El presente Portal es solo un canal para recopilar información personal del solicitante, con la finalidad de poder realizar el estudio crediticio del mismo para la determinación de la aprobación o no del crédito.",
                   "El otorgamiento de los planes de financiación anunciados así como las tasas ofrecidas, están sujetas al cumplimiento de las políticas de crédito de las entidades financieras aliadas de Santander Consumer y al perfil crediticio del solicitante.",
                   "Si el solicitante no está de acuerdo con estos Términos y Condiciones, o si el usuario es menor de 18 años no deberá hacer uso de este portal.",
                   "El titular (solicitante) de la información entregada a través del Portal, autoriza a Santander Consumer a consultar, reportar y compartir información para: a) Realizar consultas, solicitudes y reportes de toda la información de comportamiento crediticio ante cualquiera de los operadores de información financiera. Así mismo, Santander Consumer queda autorizado para obtener información sobre relaciones comerciales del titular con otras entidades y consultar sus reportes ante las centrales de información; para ello se autoriza de manera expresa, previa e irrevocable a Santander Consumer a realizar ante cualquier operador de centrales de información, entre ellos Cifín o Datacrédito, cualquier operación o tratamiento efectuado sobre la información y los datos entregados, tanto de la empresa, como de sus representantes o directivos, incluyendo la consulta, solicitud, suministro, reporte, procesamiento y divulgación de toda la información relacionada con el comportamiento crediticio del titular, el origen de las obligaciones a su cargo, cualquier novedad, modificación, extinción, cumplimiento o incumplimiento de obligaciones.",
                   "En su condición de responsable o encargado del tratamiento del manejo de datos personales que puede llegar a tener Santander Consumer, el titular autoriza para efectos de la Ley Estatutaria de Protección de Datos Personales (Ley 1581 de 2012) o de la norma que la reemplace o sustituya, en concordancia con la Ley Estatutaria 1266 de 2008, por la cual se dictaron disposiciones generales del hábeas data y se reguló el manejo de información contenida en bases de datos personales, en especial la información financiera, crediticia y comercial, de servicios y la proveniente de terceros países, a: (i) Recolectar, obtener, compilar, ofrecer, vender, intercambiar, enviar, divulgar, modificar, emplear, almacenar, procesar, transferir a cualquier título, y, en general, administrar información proveniente del titular de los datos o sus legítimos representantes; de las fuentes de información con las que Santander Consumer celebre convenios o contratos para el efecto; de los registros, documentos o publicaciones a los cuales haya tenido acceso Santander Consumer; de otros bancos de datos o archivos de información cuyo objeto sea o no similar al de Santander Consumer; de autoridades públicas, nacionales o internacionales, que administren o lleven registros del cumplimiento e incumplimiento de obligaciones fiscales, parafiscales, relacionadas con la prevención del lavado de activos o de la financiación del terrorismo y cualquier otra información de carácter público; de bases de información pública y, en general, de cualquier otra permitida por la normatividad aplicable; (ii) Santander Consumer, debidamente autorizado por el titular, podrá suministrar la información que reposa en sus bases de datos a las siguientes personas: a los titulares, a las personas debidamente autorizadas por éstos y a sus causahabientes; a las entidades financieras aliadas de Santander Consumer; a los usuarios de la información, dentro de los parámetros de la ley, de los contratos o convenios suscritos por Santander Consumer; a cualquier autoridad judicial, del poder ejecutivo o administrativa u órganos de control; a operadores de datos, de acuerdo con la normatividad vigente, y, en general a las demás personas autorizadas por la ley; (iii) Para efectos de soportes operativos, de procesamiento de información o tecnológicos, Santander Consumer queda expresamente autorizado, para compartir la información con empresas dedicadas a labores de “outsourcing” o prestación de servicios soportes para entidades financieras, dentro o fuera de Colombia, autorizando el Titular la divulgación, suministro y cesión de la información, para cuyo efectos Santander Consumer podrá recolectar, obtener, compilar, ofrecer, vender, intercambiar, enviar, divulgar, modificar, emplear, almacenar, procesar, transferir a cualquier título y, en general, hacer todo lo que implica la administración de información para terceros, dentro o fuera de Colombia. Cuando se haga entrega o cesión de información a otros países, se realizará con observancia de la legislación colombiana y las instrucciones de las autoridades correspondientes en la materia.",
                   "Entiendo y acepto que Santander Consumer tenga publicadas sus políticas de recolección, uso, y administración de la información personal en la página www.santanderconsumer.co"
                  ]
       },
    
    /* Imagenes */
    aprobado: './assets/img/aprobado.png',
    negado: './assets/img/negado.png',
    fondo: './assets/img/fondo.png',
    cliente: './assets/img/ducati.svg',
    santander: './assets/img/consumerFinance.png',
    santanderGris: './assets/img/consumerFinanceGris.png',
    santanderBlanco: './assets/img/consumerFinanceBlanco.png'
}