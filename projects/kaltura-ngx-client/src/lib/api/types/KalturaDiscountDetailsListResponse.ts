
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDiscountDetails } from './KalturaDiscountDetails';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDiscountDetailsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDiscountDetails[];
}


export class KalturaDiscountDetailsListResponse extends KalturaListResponse {

    objects : KalturaDiscountDetails[];

    constructor(data? : KalturaDiscountDetailsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDiscountDetailsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDiscountDetails, subType : 'KalturaDiscountDetails' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDiscountDetailsListResponse'] = KalturaDiscountDetailsListResponse;