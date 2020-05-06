import { environment } from 'src/environments/environment';

export default class ImagesConstants {
    
    static readonly HOUSE_IMAGES = {
        SALA_SANTA_AMELIA_1: environment.baseUrl + '/images/House/1-SALA-SANTA-AMELIA.jpg',
        MORAR_MAIS_2: environment.baseUrl + '/images/House/2-MORAR-MAIS.jpg',
        SALAS_SAVASSI_3: environment.baseUrl + '/images/House/3-SALAS-SAVASSI.jpg',
        SALAS_BURITIS_4: environment.baseUrl + '/images/House/4-SALAS-BURITIS.jpg',
        COZINHA_SION_5: environment.baseUrl + '/images/House/5-COZINHA-SION.jpg',
        MOBILE: {
            MOB_SALA_SANTA_AMELIA_1: environment.baseUrl + '/images/House/Mobile/1-MOB-SALA-SANTA-AMELIA.jpg'
        }
    }
}