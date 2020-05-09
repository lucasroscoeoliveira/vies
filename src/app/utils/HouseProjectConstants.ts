import ImagesConstants from './ImagesConstants';

export default class HouseProjectConstants {

  static readonly FILTERS = {
    LIVING_ROOM : 'living_room',
    KITCHEN : 'kitchen',
    ROOM_COUPLE : 'room_couple',
    ROOM_SINGLE : 'room_single',
    BEFORE_AFTER : 'before_after',
    CHILD : 'child',
    HOME_OFFICE : 'home_office',
    BATHROOM : 'bathroom',
    LAYOUT: 'layout'
  }

  static readonly PROJECTS = [
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_LAGOA_SANTA_23,
      active: false,
      description: 'RESIDÊNCIA - LAGOA SANTA - MG',
      id: 1,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANDAR_CASA_SANTA_AMELIA_22,
      active: false,
      description: '2º ANDAR - SANTA AMÉLIA',
      id: 2,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SALA_COZINHA_402_21,
      active: false,
      description: 'SALA | COZINHA 402 - PADRE EUSTÁQUIO',
      id: 3,
      main: true,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SALA_COZINHA_101_20,
      active: false,
      description: 'SALA | COZINHA 101 - PADRE EUSTÁQUIO',
      id: 4,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.RESID_VARGINHA_19,
      active: false,
      description: 'RESIDÊNCIA - VARGINHA - MG',
      id: 5,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_BEBE_CAICARA_18,
      active: false,
      description: 'QUARTO BEBÊ - CAIÇARA',
      id: 6,
      main: true,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.QUARTO_HOME_OFF_SION_17,
      active: false,
      description: 'QUARTO E HOME OFFICE - SION',
      id: 7,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PLANALTO_16,
      active: false,
      description: 'RESIDÊNCIA - PLANALTO',
      id: 8,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.LAGOA_SANTA_15,
      active: false,
      description: 'RESIDÊNCIA - LAGOA SANTA',
      id: 9,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.CONTAGEM_14,
      active: false,
      description: 'RESIDÊNCIA - CONTAGEM',
      id: 10,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.COZINHA_SION_13,
      active: false,
      description: 'COZINHA - SION',
      id: 11,
      main: true,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.MORAR_MAIS_12,
      active: false,
      description: 'PRÊMIO MOSTRA DE DECORAÇÃO - MORAR MAIS 2018',
      id: 12,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BELVEDERE_11,
      active: false,
      description: 'SALAS CONJUGADAS - BELVEDERE',
      id: 13,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.PADRE_EUSTAQUIO_10,
      active: false,
      description: 'RESIDÊNCIA - PADRE EUSTÁQUIO',
      id: 14,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.AREA_GOUMET_9,
      active: false,
      description: 'ÁREA GOURMET - SANTA AMÉLIA',
      id: 15,
      main: true,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SAVASSI_8,
      active: false,
      description: 'RESIDÊNCIA - SAVASSI',
      id: 16,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SUITE_CASA_7,
      active: false,
      description: 'SUÍTE - OURO PRETO',
      id: 17,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.FUNCIONARIOS_6,
      active: false,
      description: 'RESIDÊNCIA - FUNCIONÁRIOS',
      id: 18,
      main: true,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTA_AMELIA_5,
      active: false,
      description: 'RESIDÊNCIA - STO AGOSTINHO',
      id: 19,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.HOME_OFFICE_4,
      active: false,
      description: 'HOME OFFICE - SAVASSI',
      id: 20,
      main: true,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.BURITIS_3,
      active: false,
      description: 'RESIDÊNCIA - BURITIS',
      id: 21,
      main: true,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.ANCHIETA_2,
      active: false,
      description: 'RESIDÊNCIA - ANCHIETA',
      id: 22,
      main: true,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.PROJECTS.SANTO_AGOSTINHO_1,
      active: false,
      description: 'RESIDÊNCIA - STO AGOSTINHO',
      id: 23,
      main: true,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
  ]

  static readonly PROJECTS_DETAIL = [
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.SALA,
      active: false,
      id: 1,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA,
      active: false,
      id: 1,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA_2,
      active: false,
      id: 1,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTO_AGOSTINHO.COZINHA_3,
      active: false,
      id: 1,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },







    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.INFANTIL,
      active: false,
      id: 2,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.INFANTIL_2,
      active: false,
      id: 2,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.CASAL,
      active: false,
      id: 2,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_ANCHIETA.BANHEIRO,
      active: false,
      id: 2,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },






    

    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA_2,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SALA_3,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.COZINHA,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.COZINHA_2,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.CASAL,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.CASAL_2,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SOLTEIRO,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_BURITIS.SOLTEIRO_2,
      active: false,
      id: 3,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_SAVASSI.HOME_OFFICE,
      active: false,
      id: 4,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.HOME_OFFICE_SAVASSI.HOME_OFFICE,
      active: false,
      id: 4,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA_2,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.SALA_3,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.CASAL,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.CASAL_2,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.HOME_OFFICE,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_SANTA_AMELIA.HOME_OFFICE_2,
      active: false,
      id: 5,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.SALA_FUNCIONARIOS,
      active: false,
      id: 6,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.SALA_FUNCIONARIOS_2,
      active: false,
      id: 6,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.QUARTO_FUNCIONARIOS,
      active: false,
      id: 6,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_FUNCIONARIOS.LAVABO_FUNCIONARIOS,
      active: false,
      id: 6,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.SOLTEIRA_OURO_PRETO,
      active: false,
      id: 7,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.SOLTEIRA_OURO_PRETO_2,
      active: false,
      id: 7,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SUITE_OURO_PRETO.BANHEIRO_OURO_PRETO,
      active: false,
      id: 7,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA_2,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.SALA_3,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.BANEIRO,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.INFANTIL,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.BANEIRO,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.HOME_OFFICE_VERMELHO,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.INFANTIL_2,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.CASAL,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA.CASAL,
      active: false,
      id: 8,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET,
      active: false,
      id: 9,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET_2,
      active: false,
      id: 9,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.AREA_GOURMET_SANTA_AMELIA.AREA_GOURMET_2,
      active: false,
      id: 9,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.SALA,
      active: false,
      id: 10,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.SALA_2,
      active: false,
      id: 10,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.COZINHA,
      active: false,
      id: 10,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.COZINHA_2,
      active: false,
      id: 10,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PADRE_EUSTAQUIO.BANHEIRO,
      active: false,
      id: 10,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },



    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_2,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_3,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },

    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_4,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_5,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_6,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_7,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_8,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_9,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_10,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.PREMIO_MORAR_MAIS.MORAR_MAIS_11,
      active: false,
      id: 12,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_2,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_3,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_4,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_5,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.COZINHA_SION.COZINHA_6,
      active: false,
      id: 13,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.SALA,
      active: false,
      id: 14,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.SALA_2,
      active: false,
      id: 14,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_1,
      active: false,
      id: 14,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_2,
      active: false,
      id: 14,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_CONTAGEM.CASAL_3,
      active: false,
      id: 14,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_2,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_3,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_4,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.SALA_5,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA_2,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.COZINHA_3,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_1,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_2,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA.CASAL_3,
      active: false,
      id: 15,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA,
      active: false,
      id: 16,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_2,
      active: false,
      id: 16,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_3,
      active: false,
      id: 16,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_4,
      active: false,
      id: 16,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_PLANALTO.SALA_5,
      active: false,
      id: 16,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO,
      active: false,
      id: 17,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO_2,
      active: false,
      id: 17,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.QUARTO_3,
      active: false,
      id: 17,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.HOME_OFFICE,
      active: false,
      id: 17,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_HOME_OFFICE_SION.HOME_OFFICE_2,
      active: false,
      id: 17,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },




    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA,
      active: false,
      id: 18,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA_2,
      active: false,
      id: 18,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.QUARTO_BEBE_CAICARA.INFANTIL_CAICARA_3,
      active: false,
      id: 18,
      filter: HouseProjectConstants.FILTERS.CHILD
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.ESTAR,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.COZINHA_2,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.COZINHA_3,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL_2,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.CASAL_3,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.BANHEIRO,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_VARGINHA.BANHEIRO_2,
      active: false,
      id: 19,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },






    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA,
      active: false,
      id: 20,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA_2,
      active: false,
      id: 20,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.SALA_3,
      active: false,
      id: 20,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.COZINHA,
      active: false,
      id: 20,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO.COZINHA_2,
      active: false,
      id: 20,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_2,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_3,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_4,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_5,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.SALA_COZINHA_PADRE_EUSTAQUIO_2.SALA_6,
      active: false,
      id: 21,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_2,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_3,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_4,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.SALA_5,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.AREA,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.AREA_1,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.ANDAR_CASA_SANTA_AMELIA.LAYOUT,
      active: false,
      id: 22,
      filter: HouseProjectConstants.FILTERS.LAYOUT
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.SALA,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.SALA_2,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.SALA_3,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.SALA_4,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.SALA_5,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.COZINHA,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.COZINHA_2,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.CASAL,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.CASAL_2,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.CASAL_3,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.INFANTIL,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.INFANTIL_2,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.INFANTIL_3,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.INFANTIL_4,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.HOME_OFFICE,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.HOME_OFFICE_2,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_LAGOA_SANTA_2.HOME_OFFICE_3,
      active: false,
      id: 23,
      filter: HouseProjectConstants.FILTERS.HOME_OFFICE
    },





    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_4,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_5,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_6,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SALA_7,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.LIVING_ROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.COZINHA_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.KITCHEN
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.CASAL_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_COUPLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.BANHEIRO_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.BATHROOM
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.SOLTEIRO_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.ROOM_SINGLE
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_2,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_3,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
    {
      source: ImagesConstants.HOUSE_IMAGES.SPECIFICS.RESIDENCIA_GUTIERREZ.INFANTIL_4,
      active: false,
      id: 24,
      filter: HouseProjectConstants.FILTERS.CHILD
    },
  ]
}