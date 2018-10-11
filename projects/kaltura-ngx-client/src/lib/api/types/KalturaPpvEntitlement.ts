
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaPpvEntitlementArgs  extends KalturaEntitlementArgs {
    
}


export class KalturaPpvEntitlement extends KalturaEntitlement {

    readonly mediaFileId : number;
	readonly mediaId : number;

    constructor(data? : KalturaPpvEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPpvEntitlement' },
				mediaFileId : { type : 'n', readOnly : true },
				mediaId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPpvEntitlement'] = KalturaPpvEntitlement;