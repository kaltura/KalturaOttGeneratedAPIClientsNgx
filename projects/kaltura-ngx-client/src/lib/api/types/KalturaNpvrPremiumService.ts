
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPremiumService, KalturaPremiumServiceArgs } from './KalturaPremiumService';

export interface KalturaNpvrPremiumServiceArgs  extends KalturaPremiumServiceArgs {
    
}


export class KalturaNpvrPremiumService extends KalturaPremiumService {

    readonly quotaInMinutes : number;

    constructor(data? : KalturaNpvrPremiumServiceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNpvrPremiumService' },
				quotaInMinutes : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaNpvrPremiumService'] = KalturaNpvrPremiumService;