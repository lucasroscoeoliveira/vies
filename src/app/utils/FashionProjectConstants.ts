import ImagesConstants from './ImagesConstants';

export default class FashionProjectConstants {

    static readonly FILTERS = {
        MAIN: 'main',
        BEFORE_AFTER: 'antes_depois',
        COMERCIAL_GENERAL: 'comercial_geral',
        SHOP_WINDOW: 'vitrine',
        STORE: 'loja',
        VISUAL_IDENTITY: 'logo'
    }

    static readonly PROJECT_IDENTIFIERS = {
        VANZI: 1,
        LAJU: 2,
        FITSU_CASUAL: 3,
        LELIV: 4,
        CLARA: 5,
        SALAO: 6,
        TRESCHIC: 7,
        CONSULTORIO: 8,
        OTICA: 9,
        LAECLA: 10,
        MARIARIBEIRO: 11,
        MOME: 12,
        LANAHAIR: 13,
        CERRA: 14,
        MADAH: 15,
        AMALINUS: 16,
        FOSTER: 17,
        CASA_ALLEGRA: 18,
        FITSU: 19,
        K9: 20,
        MODAFEMININA: 21,
        MYBABY: 22,
        COSMOPOLITAN: 23,
        MARCELA_RABELO: 24,
        CLARA_VERAO: 25,
        FERIADO_NACIONAL: 26,
        LALU: 27,
        BRINKEL: 28,
        CLAU: 29,
        MARRE: 30,
        SINTONIA: 31,
        VICENTINA: 32,
        NOUS: 33,
        KAILLA: 34,
        CLOSET: 35,
        BAMBINO: 36,
        MORAR_MAIS: 37,
        SALAO_AR: 38,
        SAPUCANET: 39,
        GRAFICA: 40,
        AUTO_ESCOLA: 41,
        RESTAURANTE: 42,
        ANA_MOREIRA: 43,
        GI: 44,
    }

    static readonly PROJECTS = [
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VANZI_1,
            active: false,
            description: 'VANZI',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.LAJU,
            active: false,
            description: "LA'JU",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAJU,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.FITSU_CASUAL_3,
            active: false,
            description: 'FITS U CASUAL',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.LELIV_4,
            active: false,
            description: 'LE LIV',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.CLARA_5,
            active: false,
            description: 'CLARA FONTENELLE',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SALAO_6,
            active: false,
            description: 'SALÃO BEAUTY & CO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.TRESCHIC_7,
            active: false,
            description: 'TRES CHIC',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.TRESCHIC,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.CONSULTORIO_8,
            active: false,
            description: 'CLÍNICA DA MULHER',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.OTICA_9,
            active: false,
            description: 'ÓTICAS CLÁSSICO OLHAR',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.LAECLA_10,
            active: false,
            description: 'LÁ E CLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MARIARIBEIRO_11,
            active: false,
            description: 'MARIA RIBEIRO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MOME_12,
            active: false,
            description: 'MÔME',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.LANAHAIR_13,
            active: false,
            description: 'LANA HAIR',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LANAHAIR,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.CERRA_14,
            active: false,
            description: "CERRA D'OURO - MINAS TREND",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MADAH_15,
            active: false,
            description: 'MADAH',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.AMALINUS_16,
            active: false,
            description: 'AMALINUS',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.FOSTER_17,
            active: false,
            description: 'FOSTER',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.CASA_ALLEGRA_18,
            active: false,
            description: 'CASA ALLEGRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.FITSU_19,
            active: false,
            description: 'FITS U',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.K9_20,
            active: false,
            description: 'K9',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MODAFEMININA_21,
            active: false,
            description: 'MODA FEMININA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MYBABY_22,
            active: false,
            description: 'MY BABY',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COSMOPOLITAN_23,
            active: false,
            description: 'COSMOPOLITAN',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.MARCELA_RABELO_24,
            active: false,
            description: 'MARCELA RABELO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            main: true,
            filter: FashionProjectConstants.FILTERS.MAIN
        },




        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_1_CONSULTORIO,
            active: false,
            description: 'CLÍNICA DA MULHER',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_2_SALAO,
            active: false,
            description: 'SALÃO BEAUTY & CO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_3_MORARMAIS,
            active: false,
            description: 'PRÊMIO QUARTO DA BLOGUEIRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_4_SALAO,
            active: false,
            description: 'ESTÚDIO ANGÉLICA REIS',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO_AR,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_5_SAPUCANET,
            active: false,
            description: 'SAPUCANET',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_6_GRAFICA,
            active: false,
            description: 'GRÁFICA RÁPIDA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_7_AUTO_ESCOLA,
            active: false,
            description: 'AUTO ESCOLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.COMERCIAL_GENERAL_8_RESTAURANTE,
            active: false,
            description: 'RESTAURANTE CABOCLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            main: false,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },



        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_1_FITSU,
            active: false,
            description: 'FITS U CASUAL',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_2_LAJU,
            active: false,
            description: "LA'JU",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAJU,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_3_VANZI,
            active: false,
            description: 'VANZI',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_4_MADAH,
            active: false,
            description: 'MADAH',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_5_TRESCHIC,
            active: false,
            description: 'TRES CHIC',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.TRESCHIC,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_6_MARIARIBEIRO,
            active: false,
            description: 'MARIA RIBEIRO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_7_CLARA,
            active: false,
            description: 'CLARA FONTENELLE',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_8_CLARAVERAO,
            active: false,
            description: 'CLARA FONTENELLE VERÃO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA_VERAO,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_9_FITSU,
            active: false,
            description: 'FITS U',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_10_FERIADONACIONAL,
            active: false,
            description: 'FERIADO NACIONAL',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_11_LALU,
            active: false,
            description: 'LALU',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_12_AMALINUS,
            active: false,
            description: 'AMALINUS',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_13_CASA_ALLEGRA,
            active: false,
            description: 'CASA ALLEGRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_14_MOME,
            active: false,
            description: 'MÔME',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_15_LAECLA,
            active: false,
            description: 'LÁ E CLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_16_OTICA,
            active: false,
            description: 'ÓTICAS CLÁSSICO OLHAR',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_17_COSMOPOLITAN,
            active: false,
            description: 'COSMOPOLITAN',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_18_K9,
            active: false,
            description: 'K9',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_19_FOSTER,
            active: false,
            description: 'FOSTER',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_20_BRINKEL,
            active: false,
            description: 'BRINKEL',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BRINKEL,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_21_CLAU,
            active: false,
            description: 'CLAU',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLAU,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.SHOP_WINDOW_22_MARRE,
            active: false,
            description: 'MARRÉ INFINITO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARRE,
            main: false,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },





        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_1_VANZI,
            active: false,
            description: 'VANZI',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_2_LAJU,
            active: false,
            description: "LA'JU",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAJU,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_3_FITSU,
            active: false,
            description: 'FITS U CASUAL',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_4_CLARA,
            active: false,
            description: 'CLARA FONTENELLE',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_5_LELIV,
            active: false,
            description: 'LE LIV',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_6_MOME,
            active: false,
            description: 'MÔME',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_7_OTICA,
            active: false,
            description: 'ÓTICAS CLÁSSICO OLHAR',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_8_LAECLA,
            active: false,
            description: 'LÁ E CLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_9_LANAHAIR,
            active: false,
            description: 'LANA HAIR',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LANAHAIR,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_10_AMALINUS,
            active: false,
            description: 'AMALINUS',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_11_CASA_ALLEGRA,
            active: false,
            description: 'CASA ALLEGRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_12_FOSTER,
            active: false,
            description: 'FOSTER',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_13_MYBABY,
            active: false,
            description: 'MY BABY',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_14_COSMOPOLITAN,
            active: false,
            description: 'COSMOPOLITAN',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_15_CERRA,
            active: false,
            description: "CERRA D'OURO - MINAS TREND",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_16_SINTONIA,
            active: false,
            description: 'SINTONIA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SINTONIA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_17_MARCELA,
            active: false,
            description: 'MARCELA RABELO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_18_VICENTINA,
            active: false,
            description: 'VICENTINA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_19_MODAFEMININA,
            active: false,
            description: 'MODA FEMININA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_20_NOUS,
            active: false,
            description: 'NOUS',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_21_KALLA,
            active: false,
            description: 'KAILLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_22_CLOSET,
            active: false,
            description: 'CLOSET 202',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.STORE_23_BAMBINO,
            active: false,
            description: 'BAMBINO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BAMBINO,
            main: false,
            filter: FashionProjectConstants.FILTERS.STORE
        },






        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_1_ANA_MOREIRA,
            active: false,
            description: 'ANA MOREIRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.ANA_MOREIRA,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_2_CASA_ALLEGRA,
            active: false,
            description: 'CASA ALLEGRA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_3_CLARA_FONTUNELLE,
            active: false,
            description: 'CLARA FONTENELLE',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_4_CLOSET01,
            active: false,
            description: 'CLOSET 202',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_5_GI_CONFEITARIA,
            active: false,
            description: 'GI CONFEITARIA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GI,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_6_KAILLA,
            active: false,
            description: 'KAILLA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_7_MARCELA_RABELO,
            active: false,
            description: 'MARCELA RABELO',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_8_VANZI,
            active: false,
            description: 'VANZI',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_9_VICENTINA,
            active: false,
            description: 'VICENTINA',
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.PROJECTS.VISUAL_IDENTITY_10_LAJU,
            active: false,
            description: "LA'JU",
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAJU,
            main: false,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },

    ]

    static readonly PROJECTS_DETAIL = [
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_7_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_7_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_8_LOJA_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_9_LOJA_ANTES6,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_10_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_11_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VANZI_1.VANZI_12_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VANZI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LALU_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_7_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_8_LOJA_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LALU_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_9_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_10_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_11_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_12_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU.LAJU_13_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAJU,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_7_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_8_LOJA_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_9_LOJA_ANTES4,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_10_LOJA_ANTES5,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_CASUAL_3.FITSU_CASUAL_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU_CASUAL,
            filter: FashionProjectConstants.FILTERS.STORE,
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LELIV_4.LELIV_LOJA_1,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LELIV_4.LELIV_LOJA_2,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LELIV_4.LELIV_LOJA_3,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LELIV_4.LELIV_LOJA_4_ANTES_2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LELIV_4.LELIV_LOJA_2,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LELIV,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_1_LOJA_VITRINE_ID_1,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_1_LOJA_VITRINE_ID_1,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_7_LOJA_VITRINE_ANTES_1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_1_LOJA_VITRINE_ID_1,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_8_LOJA_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_9_LOJA_ANTES4,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_10_LOJA_ANTES6,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_11_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_12_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_5.CLARA_13_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_6_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_7_GERAL_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_8_GERAL_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_BC_6.SALAO_BC_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.TRESCHIC_7.TRESCHIC_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.TRESCHIC,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.TRESCHIC_7.TRESCHIC_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.TRESCHIC,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_5_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_6_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_7_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_8_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_9_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_10_GERAL_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CONSULTORIO_8.CONSULTORIO_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CONSULTORIO,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_6_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_6_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_7_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_8_LOJA_VITRINE_ANTES6,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_6_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_8_LOJA_VITRINE_ANTES6,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_6_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_9_LOJA_VITRINE_ANTES7,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.OTICA_9.OTICA_7_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.OTICA,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_6_LOJA_VITRINE_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.LAECLA_10.LAECLA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LAECLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_4_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_5_VITRINE_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_6_VITRINE_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARIA_RIBEIRO_11.MARIA_RIBEIRO_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARIARIBEIRO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },





        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_4_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_4_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_5_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MOME_12.MOME_5_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MOME,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LANA_HAIR_13.LANA_HAIR_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LANAHAIR,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LANA_HAIR_13.LANA_HAIR_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LANAHAIR,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LANA_HAIR_13.LANA_HAIR_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LANAHAIR,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_6_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CERRA_DOURO_14.CERRA_DOURO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CERRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MADAH_15.MADAH_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MADAH_15.MADAH_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MADAH_15.MADAH_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MADAH_15.MADAH_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MADAH_15.MADAH_5_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MADAH,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_3_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_4_LOJA_VITRINE,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_4_LOJA_VITRINE,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_1_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_5_LOJA_VITRINE,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_2_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_6_LOJA_VITRINE,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AMALINUS_16.AMALINUS_3_LOJA_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AMALINUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FOSTER_17.FOSTER_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FOSTER_17.FOSTER_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FOSTER_17.FOSTER_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FOSTER_17.FOSTER_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FOSTER,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_6_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_6_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_1_LOJA_VITRINE_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_7_LOJA_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_8_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_9_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CASA_ALLEGRA_18.CASA_ALLEGRA_10_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CASA_ALLEGRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_5_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FITSU_19.FITSU_6_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FITSU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_5_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_6_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.K9_20.K9_7_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.K9,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },


        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_5_LOJA_ANTES_1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MODAFEMININA_21.MODAFEMININA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MODAFEMININA,
            filter: FashionProjectConstants.FILTERS.STORE
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_5_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_6_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_7_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_8_LOJA_ANTES4,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MYBABY_22.MY_BABY_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MYBABY,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_6_LOJA_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.COSMOPOLITAN_23.COSMOPOLITAN_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.COSMOPOLITAN,
            filter: FashionProjectConstants.FILTERS.STORE
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true,
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_5_LOJA_VITRINE_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW,
            removeFromMain: true
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_6_LOJA_VITRINE_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_7_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_8_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARCELA_RABELO_24.MARCELA_RABELO_9_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARCELA_RABELO,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VERAO_25.CLARA_VERAO_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA_VERAO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VERAO_25.CLARA_VERAO_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA_VERAO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VERAO_25.CLARA_VERAO_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA_VERAO,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FERIADO_NACIONAL_26.FERIADO_NACIONAL_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FERIADO_NACIONAL_26.FERIADO_NACIONAL_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FERIADO_NACIONAL_26.FERIADO_NACIONAL_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FERIADO_NACIONAL_26.FERIADO_NACIONAL_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.FERIADO_NACIONAL_26.FERIADO_NACIONAL_5_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.FERIADO_NACIONAL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU_27.LALU_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU_27.LALU_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU_27.LALU_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.LALU_27.LALU_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.LALU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.BRINKEL_28.BRINKEL_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BRINKEL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.BRINKEL_28.BRINKEL_2_GERAL_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.BRINKEL_28.BRINKEL_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BRINKEL,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLAU_29.CLAU_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLAU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLAU_29.CLAU_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLAU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLAU_29.CLAU_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLAU,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARRE_30.MARRE_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARRE,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARRE_30.MARRE_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARRE,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MARRE_30.MARRE_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MARRE,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SINTONIA_31.SINTONIA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SINTONIA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SINTONIA_31.SINTONIA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SINTONIA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SINTONIA_31.SINTONIA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SINTONIA,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_4_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_5_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_6_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.VINCENTINA_32.VINCENTINA_7_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.VICENTINA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_4_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_5_LOJA_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.NOUS_33.NOUS_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.NOUS,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_4_LOJA_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_5_LOJA_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_6_LOJA_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_7_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_7_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_8_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_8_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_9_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_9_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_10_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.KAILLA_34.KAILLA_10_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.KAILLA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_1_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_2_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_3_LOJA,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_4_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_4_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_5_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_5_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_6_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLOSET_35.CLOSET_6_LOJA_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLOSET,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.BAMBINO_36.BAMBINO_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BAMBINO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.BAMBINO_36.BAMBINO_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BAMBINO,
            filter: FashionProjectConstants.FILTERS.STORE
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.BAMBINO_36.BAMBINO_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.BAMBINO,
            filter: FashionProjectConstants.FILTERS.STORE
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_5_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_6_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_7_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_8_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_9_GERAL_ANTES_1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.MORAR_MAIS_37.MORAR_MAIS_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.MORAR_MAIS,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },



        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_AR_38.SALAO_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO_AR,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_AR_38.SALAO_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO_AR,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_AR_38.SALAO_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO_AR,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SALAO_AR_38.SALAO_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SALAO_AR,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },





        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_5_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.SAPUCANET_39.SAPUCANET_6_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.SAPUCANET,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_5_GERAL_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_6_GERAL_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.GRAFICA_40.GRAFICA_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GRAFICA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_5_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_7_GERAL_ANTES1,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_8_GERAL_ANTES2,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_9_GERAL_ANTES3,
            sourceAfter: ImagesConstants.FASHION_IMAGES.SPECIFICS.AUTO_ESCOLA_41.AUTO_ESCOLA_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.AUTO_ESCOLA,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.RESTAURANTE_42.RESTAURANTE_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.RESTAURANTE_42.RESTAURANTE_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.RESTAURANTE_42.RESTAURANTE_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.RESTAURANTE_42.RESTAURANTE_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.RESTAURANTE_42.RESTAURANTE_5_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.RESTAURANTE,
            filter: FashionProjectConstants.FILTERS.COMERCIAL_GENERAL
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.ANA_MOREIRA_43.ANA_MOREIRA_1_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.ANA_MOREIRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.ANA_MOREIRA_43.ANA_MOREIRA_2_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.ANA_MOREIRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.ANA_MOREIRA_43.ANA_MOREIRA_3_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.ANA_MOREIRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.ANA_MOREIRA_43.ANA_MOREIRA_4_GERAL,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.ANA_MOREIRA,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GI_44.GI_1_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GI_44.GI_2_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GI_44.GI_3_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.GI_44.GI_4_ID,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.GI,
            filter: FashionProjectConstants.FILTERS.VISUAL_IDENTITY
        },




        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_1_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_2_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_3_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_4_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_5_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_6_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_7_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
        {
            source: ImagesConstants.FASHION_IMAGES.SPECIFICS.CLARA_VITRINES_45.CLARA_8_VITRINE,
            active: false,
            id: FashionProjectConstants.PROJECT_IDENTIFIERS.CLARA,
            filter: FashionProjectConstants.FILTERS.SHOP_WINDOW
        },
    ]
}