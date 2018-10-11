
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocial, KalturaSocialArgs } from './KalturaSocial';

export interface KalturaFacebookSocialArgs  extends KalturaSocialArgs {
    
}


export class KalturaFacebookSocial extends KalturaSocial {

    

    constructor(data? : KalturaFacebookSocialArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookSocial' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFacebookSocial'] = KalturaFacebookSocial;