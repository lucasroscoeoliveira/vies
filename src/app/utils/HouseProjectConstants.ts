import ImagesConstants from './ImagesConstants';

export default class HouseProjectConstants {

  static readonly FILTERS = {
    MAIN: 'main',
    LIVING_ROOM: 'sala_estar',
    KITCHEN: 'cozinha',
    ROOM: 'quarto',
    BEFORE_AFTER: 'antes_depois',
    CHILD: 'infantil',
    HOME_OFFICE: 'home_office',
    BATHROOM: 'banheiro',
    LAYOUT: 'layout'
  }

  static readonly PROJECT_IDENTIFIERS = {
    RESIDENCIA_LAGOA_SANTA: 1,
    SEGUNDO_ANDAR_SANTA_AMELIA: 2,
    SALA_COZINHA_PADRE_EUSTAQUIO_101: 3,
    SALA_COZINHA_PADRE_EUSTAQUIO: 4,
    RESIDENCIA_SANTA_AMELIA: 5,
    QUARTO_BEBE_CAICARA: 6,
    QUARTO_HOME_OFFICE_SION: 7,
    RESIDENCIA_PLANALTO: 8,
    RESIDENCIA_LAGOA_SANTA_2_GABI: 9,
    RESIDENCIA_CONTAGEM: 10,
    COZINHA_SION: 11,
    MORAR_MAIS: 12,
    SALAS_CONJUGADAS_BELVEDERE: 13,
    RESIDENCIA_PADRE_EUSTAQUIO: 14,
    AREA_GOURMET_SANTA_AMELIA: 15,
    RESIDENCIA_SAVASSI: 16,
    SUITE_OURO_PRETO: 17,
    RESIDENCIA_FUNCIONARIOS: 18,
    RESIDENCIA_VARGINHA: 19,
    HOME_OFFICE_SAVASSI: 20,
    RESIDENCIA_BURITIS: 21,
    RESIDENCIA_ANCHIETA: 22,
    RESIDENCIA_SANTO_AGOSTINHO: 23,
    RESIDENCIA_GUTIERREZ: 24,
    INFANTIL_ARTUR: 25,
    INFANTIL_GABRIEL: 26,
    INFANTIL_LAIS: 27,
    INFANTIL_THEO: 28,
    HOME_OFFICE_KATIA: 29,
    COZINHA_CICA: 30,
    COZINHA_HELOISA: 31,
    COZINHA_JOICE: 32,
    COZINHA_PAULO: 33,
    COZINHA_REGIANE: 34,
    SALA_JOICE: 35,
    SALA_MONICA: 36,
    SALA_PAULO: 37,
    QUARTO_REGIANE: 38,
    QUARTO_PAULO: 39,
    HOME_OFFICE_MORAR_MAIS: 40
  }

  static readonly PROJECTS = [
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_GUTIERREZ_24,
      active: false,
      description: 'RESIDÊNCIA - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_LAGOA_SANTA_23,
      active: false,
      description: 'RESIDÊNCIA - LAGOA SANTA - MG',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANDAR_CASA_SANTA_AMELIA_22,
      active: false,
      description: '2º ANDAR - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SALA_COZINHA_402_21,
      active: false,
      description: 'SALA | COZINHA 402 - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SALA_COZINHA_101_20,
      active: false,
      description: 'SALA | COZINHA 101 - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_VARGINHA_19,
      active: false,
      description: 'RESIDÊNCIA - VARGINHA - MG',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_BEBE_CAICARA_18,
      active: false,
      description: 'QUARTO BEBÊ - CAIÇARA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_BEBE_CAICARA,
      main: true,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_HOME_OFF_SION_17,
      active: false,
      description: 'QUARTO E HOME OFFICE - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PLANALTO_16,
      active: false,
      description: 'RESIDÊNCIA - PLANALTO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.LAGOA_SANTA_15,
      active: false,
      description: 'RESIDÊNCIA - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CONTAGEM_14,
      active: false,
      description: 'RESIDÊNCIA - CONTAGEM',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
      active: false,
      description: 'COZINHA - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      main: true,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.MORAR_MAIS_12,
      active: false,
      description: 'PRÊMIO MOSTRA DE DECORAÇÃO - MORAR MAIS 2018',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BELVEDERE_11,
      active: false,
      description: 'SALAS CONJUGADAS - BELVEDERE',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALAS_CONJUGADAS_BELVEDERE,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PADRE_EUSTAQUIO_10,
      active: false,
      description: 'RESIDÊNCIA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
      active: false,
      description: 'ÁREA GOURMET - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.AREA_GOURMET_SANTA_AMELIA,
      main: true,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SAVASSI_8,
      active: false,
      description: 'RESIDÊNCIA - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SUITE_CASA_7,
      active: false,
      description: 'SUÍTE - OURO PRETO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.FUNCIONARIOS_6,
      active: false,
      description: 'RESIDÊNCIA - FUNCIONÁRIOS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      main: true,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTA_AMELIA_5,
      active: false,
      description: 'RESIDÊNCIA - STO AGOSTINHO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_4,
      active: false,
      description: 'HOME OFFICE - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_SAVASSI,
      main: true,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BURITIS_3,
      active: false,
      description: 'RESIDÊNCIA - BURITIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANCHIETA_2,
      active: false,
      description: 'RESIDÊNCIA - ANCHIETA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      main: true,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTO_AGOSTINHO_1,
      active: false,
      description: 'RESIDÊNCIA - STO AGOSTINHO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_1,
      active: false,
      description: 'BANHEIRO - OURO PRETO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_2,
      active: false,
      description: 'BANHEIRO - ANCHIETA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_3,
      active: false,
      description: 'BANHEIRO - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_4,
      active: false,
      description: 'LAVABO - FUNCIONÁRIOS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_5,
      active: false,
      description: 'BANHEIRO - VARGINHA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_6,
      active: false,
      description: 'BANHEIRO - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BATHROOM_7,
      active: false,
      description: 'BANHEIRO - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },


    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_1,
      active: false,
      description: 'QUARTO INFANTIL - ANCHIETA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_2,
      active: false,
      description: 'QUARTO INFANTIL - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_ARTUR,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_3,
      active: false,
      description: 'QUARTO INFANTIL - CAIÇARA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_BEBE_CAICARA,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_4,
      active: false,
      description: 'QUARTO INFANTIL - CASTELO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_GABRIEL,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_5,
      active: false,
      description: 'QUARTO INFANTIL - FUNCIONÁRIOS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_6,
      active: false,
      description: 'QUARTO INFANTIL - CASTELO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_THEO,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_7,
      active: false,
      description: 'QUARTO INFANTIL - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_8,
      active: false,
      description: 'QUARTO INFANTIL - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_9,
      active: false,
      description: 'QUARTO INFANTIL - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_10,
      active: false,
      description: 'QUARTO INFANTIL - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CHILD_11,
      active: false,
      description: 'QUARTO INFANTIL - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.CHILD
    },


    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_1,
      active: false,
      description: 'HOME OFFICE - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_3,
      active: false,
      description: 'HOME OFFICE - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_5,
      active: false,
      description: 'HOME OFFICE - VERMELHO - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_6,
      active: false,
      description: 'HOME OFFICE - MORAR MAIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_2,
      active: false,
      description: 'HOME OFFICE - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_7,
      active: false,
      description: 'HOME OFFICE - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_8,
      active: false,
      description: 'HOME OFFICE - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_9,
      active: false,
      description: 'HOME OFFICE - CASTELO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_KATIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_10,
      active: false,
      description: 'HOME OFFICE - SANTO ANTÔNIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_1,
      active: false,
      description: 'ÁREA GOURMET - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.AREA_GOURMET_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_2,
      active: false,
      description: 'COZINHA - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_3,
      active: false,
      description: 'COZINHA - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_4,
      active: false,
      description: 'COZINHA - VARGINHA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_5,
      active: false,
      description: 'COZINHA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_6,
      active: false,
      description: 'COZINHA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_7,
      active: false,
      description: 'COZINHA - BURITIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_8,
      active: false,
      description: 'COZINHA - SANTO AGOSTINHO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_9,
      active: false,
      description: 'COZINHA - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_10,
      active: false,
      description: 'COZINHA - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_11,
      active: false,
      description: 'COZINHA - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_12,
      active: false,
      description: 'COZINHA EXTERNA - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_CICA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_13,
      active: false,
      description: 'COZINHA - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_14,
      active: false,
      description: 'COZINHA - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_15,
      active: false,
      description: 'ÁREA GOURMET - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_16,
      active: false,
      description: 'COZINHA - SANTA BRANCA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_PAULO,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.KITCHEN_17,
      active: false,
      description: 'COZINHA - SANTA MARIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      main: false,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_1,
      active: false,
      description: 'SALA - BELVEDERE',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALAS_CONJUGADAS_BELVEDERE,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_2,
      active: false,
      description: 'SALA - BURITIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_3,
      active: false,
      description: 'SALA - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_4,
      active: false,
      description: 'SALA - CONTAGEM',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_5,
      active: false,
      description: 'SALA - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_6,
      active: false,
      description: 'SALA - PLANALTO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_7,
      active: false,
      description: 'SALA - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_8,
      active: false,
      description: 'SALA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_9,
      active: false,
      description: 'SALA - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_10,
      active: false,
      description: 'SALA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_11,
      active: false,
      description: 'SALA - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_12,
      active: false,
      description: 'SALA - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_13,
      active: false,
      description: 'SALA - PADRE EUSTÁQUIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_14,
      active: false,
      description: 'SALA - SANTO ANÔNIO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_MONICA,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ROOM_15,
      active: false,
      description: 'SALA - SANTA BRANCA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      main: false,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_1,
      active: false,
      description: 'QUARTO SOLTEIRO - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_2,
      active: false,
      description: 'QUARTO SOLTEIRO - SION',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_3,
      active: false,
      description: 'QUARTO CASAL - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_4,
      active: false,
      description: 'QUARTO BLOGUEIRA - MORAR MAIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_5,
      active: false,
      description: 'QUARTO CASAL - BURITIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_6,
      active: false,
      description: 'QUARTO CASAL - CONTAGEM',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_7,
      active: false,
      description: 'QUARTO CASAL - GUTIERREZ',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_8,
      active: false,
      description: 'QUARTO SOLTEIRO - BURITIS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_9,
      active: false,
      description: 'QUARTO SOLTEIRO - SANTA MARIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_REGIANE,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_10,
      active: false,
      description: 'QUARTO CASAL - LAGOA SANTA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_11,
      active: false,
      description: 'QUARTO CASAL - SANTA AMÉLIA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_12,
      active: false,
      description: 'QUARTO CASAL - SAVASSI',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_13,
      active: false,
      description: 'QUARTO SOLTEIRO - FUNCIONÁRIOS',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_14,
      active: false,
      description: 'QUARTO SOLTEIRO - OURO PRETO',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_15,
      active: false,
      description: 'QUARTO CASAL - VARGINHA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BEDROOM_16,
      active: false,
      description: 'QUARTO HÓSPEDES - SANTA BRANCA',
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_PAULO,
      main: false,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
  ]

  static readonly PROJECTS_DETAIL = [
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTO_AGOSTINHO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },







    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.INFANTIL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.BANHEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_ANCHIETA,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },








    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SOLTEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SOLTEIRO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_BURITIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_SAVASSI.HOME_OFFICE,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_SAVASSI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_SAVASSI.HOME_OFFICE,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_SAVASSI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.HOME_OFFICE,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.HOME_OFFICE_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.SALA_FUNCIONARIOS,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.SALA_FUNCIONARIOS_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.QUARTO_FUNCIONARIOS,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.LAVABO_FUNCIONARIOS,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_FUNCIONARIOS,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.SOLTEIRA_OURO_PRETO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.SOLTEIRA_OURO_PRETO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.BANHEIRO_OURO_PRETO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SUITE_OURO_PRETO,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.BANEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.INFANTIL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.BANEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.HOME_OFFICE_VERMELHO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_SAVASSI,
      filter: HouseProjectConstants.FILTERS.ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.AREA_GOURMET_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.AREA_GOURMET_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.AREA_GOURMET_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.BANHEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALAS_CONJUGADAS_BELVEDERE.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALAS_CONJUGADAS_BELVEDERE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALAS_CONJUGADAS_BELVEDERE.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALAS_CONJUGADAS_BELVEDERE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALAS_CONJUGADAS_BELVEDERE.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALAS_CONJUGADAS_BELVEDERE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },

    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_6,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_7,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_8,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_9,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_10,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_11,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.ROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_SION,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_CONTAGEM,
      filter: HouseProjectConstants.FILTERS.ROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.BANHEIRO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_PLANALTO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.HOME_OFFICE,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.HOME_OFFICE_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_HOME_OFFICE_SION,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_BEBE_CAICARA,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_BEBE_CAICARA,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_BEBE_CAICARA,
      filter: HouseProjectConstants.FILTERS.CHILD
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.ESTAR,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.BANHEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.BANHEIRO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_VARGINHA,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },






    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO_101,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_6,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_COZINHA_PADRE_EUSTAQUIO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.AREA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.AREA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.LAYOUT,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SEGUNDO_ANDAR_SANTA_AMELIA,
      filter: HouseProjectConstants.FILTERS.LAYOUT
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.CASAL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.INFANTIL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.INFANTIL_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.HOME_OFFICE,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.HOME_OFFICE_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2_GABI.HOME_OFFICE_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_LAGOA_SANTA_2_GABI,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_5,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_6,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_7,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.RESIDENCIA_GUTIERREZ,
      filter: HouseProjectConstants.FILTERS.CHILD
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_ARTUR.INFANTIL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_ARTUR,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_ARTUR.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_ARTUR,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_ARTUR.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_ARTUR,
      filter: HouseProjectConstants.FILTERS.CHILD
    },


    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_GABRIEL.INFANTIL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_GABRIEL,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_GABRIEL.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_GABRIEL,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_GABRIEL.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_GABRIEL,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_GABRIEL.INFANTIL_4_BEFORE_2,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_GABRIEL.INFANTIL_2,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_GABRIEL,
      filter: HouseProjectConstants.FILTERS.CHILD
    },


    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_LAIS.INFANTIL_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_LAIS,
      filter: HouseProjectConstants.FILTERS.CHILD
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_THEO.INFANTIL_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_THEO,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_THEO.INFANTIL_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_THEO,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_THEO.INFANTIL_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_THEO,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_THEO.INFANTIL_4_BEFORE_2,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.INFANTIL_THEO.INFANTIL_2,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.INFANTIL_THEO,
      filter: HouseProjectConstants.FILTERS.CHILD
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_KATIA.HOME_OFFICE_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_KATIA,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_KATIA.HOME_OFFICE_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_KATIA,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_CICA.COZINHA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_CICA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_CICA.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_CICA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_CICA.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_CICA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_CICA.COZINHA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_CICA.COZINHA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_CICA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_HELOISA.COZINHA_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_HELOISA,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_JOICE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_JOICE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_JOICE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_JOICE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_JOICE.COZINHA_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_JOICE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_PAULO.COZINHA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_PAULO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_PAULO.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_PAULO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_PAULO.COZINHA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_PAULO.COZINHA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_PAULO,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_REGIANE.COZINHA_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.COZINHA_REGIANE,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_5_BEFORE_2,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_2,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_JOICE.SALA_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_JOICE,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_4,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_4_BEFORE_2,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_2,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_5_BEFORE_3,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_3,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_6_BEFORE_4,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_PAULO.SALA_4,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.SALA_PAULO,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_REGIANE.QUARTO_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_REGIANE,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_REGIANE.QUARTO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_REGIANE,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_REGIANE.QUARTO_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_REGIANE,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_REGIANE.QUARTO_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_REGIANE.QUARTO_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_REGIANE,
      filter: HouseProjectConstants.FILTERS.ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_PAULO.QUARTO_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_PAULO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_PAULO.QUARTO_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_PAULO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_PAULO.QUARTO_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_PAULO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_PAULO.QUARTO_4_BEFORE_1,
      sourceBefore: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_PAULO.QUARTO_1,
      active: false,
      beforeAfter: true,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.QUARTO_PAULO,
      filter: HouseProjectConstants.FILTERS.ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_MORAR_MAIS.HOME_OFFICE_1,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_MORAR_MAIS.HOME_OFFICE_2,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_MORAR_MAIS.HOME_OFFICE_3,
      active: false,
      id: HouseProjectConstants.PROJECT_IDENTIFIERS.HOME_OFFICE_MORAR_MAIS,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
  ]
}