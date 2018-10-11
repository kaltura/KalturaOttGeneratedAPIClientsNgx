
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntitlement } from './KalturaEntitlement';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEntitlementListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEntitlement[];
}


export class KalturaEntitlementListResponse extends KalturaListResponse {

    objects : KalturaEntitlement[];

    constructor(data? : KalturaEntitlementListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEntitlement, subType : 'KalturaEntitlement' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntitlementListResponse'] = KalturaEntitlementListResponse;