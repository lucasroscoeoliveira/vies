import { environment } from 'src/environments/environment';

export default class ImagesConstants {
    
    static readonly HOUSE_IMAGES = {
        SALA_SANTA_AMELIA_1: environment.baseUrl + '/images/House/1-SALA-SANTA-AMELIA.jpg',
        MORAR_MAIS_2: environment.baseUrl + '/images/House/2-MORAR-MAIS.jpg',
        SALAS_SAVASSI_3: environment.baseUrl + '/images/House/3-SALAS-SAVASSI.jpg',
        SALAS_BURITIS_4: environment.baseUrl + '/images/House/4-SALAS-BURITIS.jpg',
        COZINHA_SION_5: environment.baseUrl + '/images/House/5-COZINHA-SION.jpg',
        MOBILE: {
            MOB_SALA_SANTA_AMELIA_1: environment.baseUrl + '/images/House/Mobile/1-MOB-SALA-SANTA-AMELIA.jpg',
            MOB_MORAR_MAIS_2: environment.baseUrl + '/images/House/Mobile/2-MOB-MORAR-MAIS.jpg',
            MOB_SALAS_SAVASSI_3: environment.baseUrl + '/images/House/Mobile/3-MOB-SALAS-SAVASSI.jpg',
            MOB_SALA_BURITIS_4: environment.baseUrl + '/images/House/Mobile/4-MOB-SALA-BURITIS.jpg',
            MOB_COZINHA_SION_5: environment.baseUrl + '/images/House/Mobile/5-MOB-COZINHA-SION.jpg'
        },
        PROJECTS: {
            SANTO_AGOSTINHO_1: environment.baseUrl + '/images/House/Projects/01-SANTO-AGOSTINHO.jpg',
            ANCHIETA_2: environment.baseUrl + '/images/House/Projects/02-ANCHIETA.jpg',
            BURITIS_3: environment.baseUrl + '/images/House/Projects/03-BURITIS.jpg',
            HOME_OFFICE_4: environment.baseUrl + '/images/House/Projects/04-HOME-OFFICE.jpg',
            SANTA_AMELIA_5: environment.baseUrl + '/images/House/Projects/05-SANTA-AMELIA.jpg',
            FUNCIONARIOS_6: environment.baseUrl + '/images/House/Projects/06-FUNCIONARIOS.jpg',
            SUITE_CASA_7: environment.baseUrl + '/images/House/Projects/07-SUITE-CASA.jpg',
            SAVASSI_8: environment.baseUrl + '/images/House/Projects/08-SAVASSI.jpg',
            AREA_GOUMET_9: environment.baseUrl + '/images/House/Projects/09-AREA-GOURMET-SA.jpg',
            PADRE_EUSTAQUIO_10: environment.baseUrl + '/images/House/Projects/10-PADRE-EUSTAQUIO.jpg',
            BELVEDERE_11: environment.baseUrl + '/images/House/Projects/11-BELVEDERE.jpg',
            MORAR_MAIS_12: environment.baseUrl + '/images/House/Projects/12-MORAR-MAIS.jpg',
            COZINHA_SION_13: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION.jpg',
            CONTAGEM_14: environment.baseUrl + '/images/House/Projects/14-CONTAGEM.jpg',
            LAGOA_SANTA_15: environment.baseUrl + '/images/House/Projects/15-LAGOA-SANTA.jpg',
            PLANALTO_16: environment.baseUrl + '/images/House/Projects/16-PLANALTO.jpg',
            QUARTO_HOME_OFF_SION_17: environment.baseUrl + '/images/House/Projects/17-QUARTO-HOME-OFF-SION.jpg',
            QUARTO_BEBE_CAICARA_18: environment.baseUrl + '/images/House/Projects/18-QUARTO-BEBE-CAICARA.jpg',
            RESID_VARGINHA_19: environment.baseUrl + '/images/House/Projects/19-RESID-VARGINHA.jpg',
            SALA_COZINHA_101_20: environment.baseUrl + '/images/House/Projects/20-SALA-COZINHA-101-PADRE-EUSTAQUIO.jpg',
            SALA_COZINHA_402_21: environment.baseUrl + '/images/House/Projects/21-SALA-COZINHA-402-PADRE-EUSTAQUIO.jpg',
            ANDAR_CASA_SANTA_AMELIA_22: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA.jpg',
            RESID_LAGOA_SANTA_23: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA.jpg',
        },
        SPECIFICS: {
            RESIDENCIA_SANTO_AGOSTINHO: {
                SALA: environment.baseUrl + '/images/House/Projects/1-RESIDENCIA-SANTO-AGOSTINHO/1-sala-sto-ag.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/1-RESIDENCIA-SANTO-AGOSTINHO/2-cozinha-sto-ag.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/1-RESIDENCIA-SANTO-AGOSTINHO/4-cozinha-sto-ag.jpg',
                COZINHA_3: environment.baseUrl + '/images/House/Projects/1-RESIDENCIA-SANTO-AGOSTINHO/5-cozinha-sto-ag.jpg',
            },
            RESIDENCIA_ANCHIETA: {
                INFANTIL: environment.baseUrl + '/images/House/Projects/2-RESIDENCIA-ANCHIETA/1-infantil-anchieta.jpg',
                INFANTIL_2: environment.baseUrl + '/images/House/Projects/2-RESIDENCIA-ANCHIETA/2-infantil-anchieta.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/2-RESIDENCIA-ANCHIETA/3-casal-anchieta.jpg',
                BANHEIRO: environment.baseUrl + '/images/House/Projects/2-RESIDENCIA-ANCHIETA/4-banheiro-anchieta.jpg',
            },
            RESIDENCIA_BURITIS: {
                SALA: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/1-sala-buritis.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/2-sala-buritis.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/3-sala-buritis.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/4-cozinha-buritis.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/5-cozinha-buritis.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/6-casal-buritis.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/7-casal-buritis.jpg',
                SOLTEIRO: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/8-banheiro-buritis.jpg',
                SOLTEIRO_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/9-banheiro-buritis.jpg',
            },
            HOME_OFFICE_SAVASSI: {
                HOME_OFFICE: environment.baseUrl + '/images/House/Projects/4-HOME-OFFICE-SAVASSI/1-home-office-savassi.jpg',
                HOME_OFFICE_2: environment.baseUrl + '/images/House/Projects/4-HOME-OFFICE-SAVASSI/2-home-office-savassi.jpg',
            },
            RESIDENCIA_SANTA_AMELIA: {
                SALA: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/1-sala-santa-amelia.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/2-sala-santa-amelia.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/3-sala-santa-amelia.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/4-casal-santa-amelia.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/5-casal-santa-amelia.jpg',
                HOME_OFFICE: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/6-home-office-santa-amelia.jpg',
                HOME_OFFICE_2: environment.baseUrl + '/images/House/Projects/5-RESIDENCIA-SANTA-AMELIA/7-home-office-santa-amelia.jpg',
            },
            RESIDENCIA_FUNCIONARIOS: {
                SALA_FUNCIONARIOS: environment.baseUrl + '/images/House/Projects/6-RESIDENCIA-FUNCIONARIOS/1-sala-funcionarios.jpg',
                SALA_FUNCIONARIOS_2: environment.baseUrl + '/images/House/Projects/6-RESIDENCIA-FUNCIONARIOS/2-sala-funcionarios.jpg',
                QUARTO_FUNCIONARIOS: environment.baseUrl + '/images/House/Projects/6-RESIDENCIA-FUNCIONARIOS/3-quarto-funcionarios.jpg',
                LAVABO_FUNCIONARIOS: environment.baseUrl + '/images/House/Projects/6-RESIDENCIA-FUNCIONARIOS/4-lavabo-funcionarios.jpg',
            },
            SUITE_OURO_PRETO: {
                SOLTEIRA_OURO_PRETO: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/1-solteira-ouro-preto.jpg',
                SOLTEIRA_OURO_PRETO_2: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/2-solteira-ouro-preto.jpg',
                BANHEIRO_OURO_PRETO: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/3-banheiro-ouro-preto.jpg',
            },
            RESIDENCIA: {
                SALA: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/1-sala-savassi.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/2-sala-savassi.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/3-sala-savassi.jpg',
                BANEIRO: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/4-banheiro-savassi.jpg',
                INFANTIL: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/4-infantil-savassi.jpg',
                BANEIRO_2: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/5-banheiro-savassi.jpg',
                HOME_OFFICE_VERMELHO: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/5-home-office-vermelho-savassi.jpg',
                INFANTIL_2: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/6-infantil-savassi.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/7-casal-savassi.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/8-RESIDENCIA-SAVASSI/8-casal-savassi.jpg',
            },
            AREA_GOURMET_SANTA_AMELIA: {
                AREA_GOURMET: environment.baseUrl + '/images/House/Projects/9-AREA-GOURMET-SANTA-AMELIA/1-area-gourmet-santa-amelia.jpg',
                AREA_GOURMET_2: environment.baseUrl + '/images/House/Projects/9-AREA-GOURMET-SANTA-AMELIA/2-area-gourmet-santa-amelia.jpg',
                AREA_GOURMET_3: environment.baseUrl + '/images/House/Projects/9-AREA-GOURMET-SANTA-AMELIA/3-area-gourmet-santa-amelia.jpg',
            },
            RESIDENCIA_PADRE_EUSTAQUIO: {
                SALA: environment.baseUrl + '/images/House/Projects/10-RESIDENCIA-PADRE-EUSTAQUIO/1-sala-solange-padre-eustaquio.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/10-RESIDENCIA-PADRE-EUSTAQUIO/2-sala-solange-padre-eustaquio.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/10-RESIDENCIA-PADRE-EUSTAQUIO/3-cozinha-solange-padre-eustaquio.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/10-RESIDENCIA-PADRE-EUSTAQUIO/4-cozinha-solange-padre-eustaquio.jpg',
                BANHEIRO: environment.baseUrl + '/images/House/Projects/10-RESIDENCIA-PADRE-EUSTAQUIO/5-banheiro-solange-padre-eustaquio.jpg',
            },
            SALAS_CONJUGADAS_BELVEDERE: {
                SALA: environment.baseUrl + '/images/House/Projects/11-SALAS-CONJUGADAS-BELVEDERE/1-sala-belvedere.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/11-SALAS-CONJUGADAS-BELVEDERE/2-sala-belvedere.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/11-SALAS-CONJUGADAS-BELVEDERE/2-sala-belvedere.jpg',
            },
            PREMIO_MORAR_MAIS: {
                MORAR_MAIS: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/1-morar-mais.jpg',
                MORAR_MAIS_2: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/2-morar-mais.jpg',
                MORAR_MAIS_3: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/3-morar-mais.jpg',
                MORAR_MAIS_4: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/4-morar-mais.jpg',
                MORAR_MAIS_5: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/5-morar-mais.jpg',
                MORAR_MAIS_6: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/6-morar-mais.jpg',
                MORAR_MAIS_7: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/7-morar-mais.jpg',
                MORAR_MAIS_8: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/8-morar-mais.jpg',
                MORAR_MAIS_9: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/9-morar-mais.jpg',
                MORAR_MAIS_10: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/10-morar-mais.jpg',
                MORAR_MAIS_11: environment.baseUrl + '/images/House/Projects/12-PREMIO-MORAR-MAIS-2018/11-morar-mais.jpg',
            },
            COZINHA_SION: {
                COZINHA: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/1-cozinha-sion.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/2-cozinha-sion.jpg',
                COZINHA_3: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/3-cozinha-sion.jpg',
                COZINHA_4: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/4-cozinha-sion.jpg',
                COZINHA_5: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/5-cozinha-sion.jpg',
                COZINHA_6: environment.baseUrl + '/images/House/Projects/13-COZINHA-SION/6-cozinha-sion.jpg',
            },
            RESIDENCIA_CONTAGEM: {
                SALA: environment.baseUrl + '/images/House/Projects/14-RESIDENCIA-CONTAGEM/1-sala-contagem.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/14-RESIDENCIA-CONTAGEM/2-sala-contagem.jpg',
                CASAL_1: environment.baseUrl + '/images/House/Projects/14-RESIDENCIA-CONTAGEM/3-casal-contagem.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/14-RESIDENCIA-CONTAGEM/4-casal-contagem.jpg',
                CASAL_3: environment.baseUrl + '/images/House/Projects/14-RESIDENCIA-CONTAGEM/5-casal-contagem.jpg',
            },
            RESIDENCIA_LAGOA_SANTA: {
                SALA: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/1-sala-tulio-lagoa-santa.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/2-sala-tulio-lagoa-santa.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/3-sala-tulio-lagoa-santa.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/4-sala-tulio-lagoa-santa.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/5-sala-tulio-lagoa-santa.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/6-cozinha-tulio-lagoa-santa.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/7-cozinha-tulio-lagoa-santa.jpg',
                COZINHA_3: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/8-cozinha-tulio-lagoa-santa.jpg',
                CASAL_1: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/9-casal-tulio-lagoa-santa.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/10-casal-tulio-lagoa-santa.jpg',
                CASAL_3: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/11-casal-tulio-lagoa-santa.jpg',
                BANHEIRO_2: environment.baseUrl + '/images/House/Projects/15-RESIDENCIA-LAGOA-SANTA/12-banheiro-tulio-lagoa-santa.jpg',
            },
            RESIDENCIA_PLANALTO: {
                SALA: environment.baseUrl + '/images/House/Projects/16-RESIDENCIA-PLANALTO/1-sala-planalto.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/16-RESIDENCIA-PLANALTO/2-sala-planalto.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/16-RESIDENCIA-PLANALTO/3-sala-planalto.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/16-RESIDENCIA-PLANALTO/4-sala-planalto.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/16-RESIDENCIA-PLANALTO/5-sala-planalto.jpg',
            },
            QUARTO_HOME_OFFICE_SION: {
                QUARTO: environment.baseUrl + '/images/House/Projects/17-QUARTO-E-HOME-OFFICE-SION/1-quarto-sion.jpg',
                QUARTO_2: environment.baseUrl + '/images/House/Projects/17-QUARTO-E-HOME-OFFICE-SION/2-quarto-sion.jpg',
                QUARTO_3: environment.baseUrl + '/images/House/Projects/17-QUARTO-E-HOME-OFFICE-SION/3-quarto-sion.jpg',
                HOME_OFFICE: environment.baseUrl + '/images/House/Projects/17-QUARTO-E-HOME-OFFICE-SION/4-quarto-sion.jpg',
                HOME_OFFICE_2: environment.baseUrl + '/images/House/Projects/17-QUARTO-E-HOME-OFFICE-SION/5-quarto-sion.jpg',
            },
            QUARTO_BEBE_CAICARA: {
                INFANTIL_CAICARA: environment.baseUrl + '/images/House/Projects/18-QUARTO-BEBE-CAICARA/1-infantil-caicara.jpg',
                INFANTIL_CAICARA_2: environment.baseUrl + '/images/House/Projects/18-QUARTO-BEBE-CAICARA/2-infantil-caicara.jpg',
                INFANTIL_CAICARA_3: environment.baseUrl + '/images/House/Projects/18-QUARTO-BEBE-CAICARA/3-infantil-caicara.jpg',
            },
            RESIDENCIA_VARGINHA: {
                ESTAR: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/1-estar-varginha.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/2-cozinha-varginha.jpg',
                COZINHA_3: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/3-cozinha-varginha.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/4-casal-varginha.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/5-casal-varginha.jpg',
                CASAL_3: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/6-casal-varginha.jpg',
                BANHEIRO: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/7-banheiro-varginha.jpg',
                BANHEIRO_2: environment.baseUrl + '/images/House/Projects/19-RESIDENCIA-VARGINHA-MG/8-banheiro-varginha.jpg',
            },
            SALA_COZINHA_PADRE_EUSTAQUIO: {
                SALA: environment.baseUrl + '/images/House/Projects/20-SALA-E-COZINHA-101-PADRE-EUSTAQUIO/1-sala-padre-esutaquio.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/20-SALA-E-COZINHA-101-PADRE-EUSTAQUIO/2-sala-padre-esutaquio.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/20-SALA-E-COZINHA-101-PADRE-EUSTAQUIO/3-sala-padre-esutaquio.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/20-SALA-E-COZINHA-101-PADRE-EUSTAQUIO/4-cozinha-padre-esutaquio.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/20-SALA-E-COZINHA-101-PADRE-EUSTAQUIO/5-cozinha-padre-esutaquio.jpg',
            },
            SALA_COZINHA_PADRE_EUSTAQUIO_2: {
                SALA: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/1-sala-402-padre-esutaquio.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/2-sala-402-padre-esutaquio.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/3-sala-402-padre-esutaquio.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/4-sala-402-padre-esutaquio.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/5-sala-402-padre-esutaquio.jpg',
                SALA_6: environment.baseUrl + '/images/House/Projects/21-SALA-E-COZINHA-402-PADRE-EUSTAQUIO/6-sala-402-padre-esutaquio.jpg',
            },
            ANDAR_CASA_SANTA_AMELIA: {
                SALA: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/1-sala-casa-santa-amelia.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/2-sala-casa-santa-amelia.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/3-sala-casa-santa-amelia.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/4-sala-casa-santa-amelia.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/5-sala-casa-santa-amelia.jpg',
                AREA: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/6-area-gourmet-casa-santa-amelia.jpg',
                AREA_1: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/7-area-gourmet-casa-santa-amelia.jpg',
                LAYOUT: environment.baseUrl + '/images/House/Projects/22-2-ANDAR-CASA-SANTA-AMELIA/8-layout-casa-santa-amelia.jpg',
            },
            RESIDENCIA_LAGOA_SANTA_2: {
                SALA: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/1-sala-lagoa-santa.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/2-sala-lagoa-santa.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/3-sala-lagoa-santa.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/4-sala-lagoa-santa.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/5-sala-lagoa-santa.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/6-cozinha-lagoa-santa.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/7-cozinha-lagoa-santa.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/8-casal-lagoa-santa.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/9-casal-lagoa-santa.jpg',
                CASAL_3: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/10-casal-lagoa-santa.jpg',
                INFANTIL: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/11-infantil-lagoa-santa.jpg',
                INFANTIL_2: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/12-infantil-lagoa-santa.jpg',
                INFANTIL_3: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/13-infantil-lagoa-santa.jpg',
                INFANTIL_4: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/14-infantil-lagoa-santa.jpg',
                HOME_OFFICE: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/15-home-office-lagoa-santa.jpg',
                HOME_OFFICE_2: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/16-home-office-lagoa-santa.jpg',
                HOME_OFFICE_3: environment.baseUrl + '/images/House/Projects/23-RESIDENCIA-LAGOA-SANTA/17-home-office-lagoa-santa.jpg',
            },
            RESIDENCIA_GUTIERREZ: {
                SALA: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/1-sala-gutierrez.jpg',
                SALA_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/2-sala-gutierrez.jpg',
                SALA_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/3-sala-gutierrez.jpg',
                SALA_4: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/4-sala-gutierrez.jpg',
                SALA_5: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/5-sala-gutierrez.jpg',
                SALA_6: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/6-sala-gutierrez.jpg',
                SALA_7: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/7-sala-gutierrez.jpg',
                COZINHA: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/8-cozinha-gutierrez.jpg',
                COZINHA_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/9-cozinha-gutierrez.jpg',
                COZINHA_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/10-cozinha-gutierrez.jpg',
                CASAL: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/11-casal-gutierrez.jpg',
                CASAL_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/12-casal-gutierrez.jpg',
                CASAL_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/13-casal-gutierrez.jpg',
                BANHEIRO: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/14-banheiro-gutierrez.jpg',
                BANHEIRO_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/15-banheiro-gutierrez.jpg',
                BANHEIRO_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/16-banheiro-gutierrez.jpg',
                SOLTEIRO: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/17-solteiro-gutierrez.jpg',
                SOLTEIRO_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/18-solteiro-gutierrez.jpg',
                SOLTEIRO_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/19-solteiro-gutierrez.jpg',
                INFANTIL: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/20-infantil-gutierrez.jpg',
                INFANTIL_2: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/21-infantil-gutierrez.jpg',
                INFANTIL_3: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/22-infantil-gutierrez.jpg',
                INFANTIL_4: environment.baseUrl + '/images/House/Projects/24-RESIDENCIA-GUTIERREZ/23-infantil-gutierrez.jpg',
            },
        }
    }

    static readonly SHARED_IMAGES = {
        MARINA: environment.baseUrl + '/images/MARINA.jpg',
        AMANDA: environment.baseUrl + '/images/AMANDA.jpg',
    }
}