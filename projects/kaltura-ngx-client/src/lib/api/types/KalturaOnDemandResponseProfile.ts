
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDetachedResponseProfile, KalturaDetachedResponseProfileArgs } from './KalturaDetachedResponseProfile';

export interface KalturaOnDemandResponseProfileArgs  extends KalturaDetachedResponseProfileArgs {
    retrievedProperties? : string;
}


export class KalturaOnDemandResponseProfile extends KalturaDetachedResponseProfile {

    retrievedProperties : string;

    constructor(data? : KalturaOnDemandResponseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOnDemandResponseProfile' },
				retrievedProperties : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOnDemandResponseProfile'] = KalturaOnDemandResponseProfile;